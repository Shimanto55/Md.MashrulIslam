import { useState } from "react";
import styles from "./Contact.module.css";

// Your Formspree endpoint
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xeorzpvr";

// Optional: limit file size to ~8 MB for reliability with free hosts
const MAX_FILE_SIZE = 8 * 1024 * 1024;

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "submitting" | "ok" | "err">("idle");
  const [message, setMessage] = useState<string>("");

  async function uploadFileAndGetUrl(file: File): Promise<string> {
    // Upload to file.io (auto-deletes after default period; supports CORS)
    const data = new FormData();
    data.append("file", file);

    const res = await fetch("https://file.io/?expires=1w", {
      method: "POST",
      body: data,
    });

    if (!res.ok) throw new Error("Upload failed");
    const json = await res.json();
    if (!json.success || !json.link) throw new Error("Upload response invalid");
    return json.link as string; // e.g., https://file.io/xxxxx
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setMessage("");

    const form = e.currentTarget;
    const fd = new FormData(form);

    // Basic honeypot spam trap
    if ((fd.get("website") as string)?.length) {
      setStatus("ok");
      setMessage("Thanks!"); // silently ignore bots
      form.reset();
      return;
    }

    try {
      // Handle optional file upload
      const fileInput = form.querySelector<HTMLInputElement>('input[name="attachment"]');
      const file = fileInput?.files?.[0];

      if (file) {
        if (file.size > MAX_FILE_SIZE) {
          throw new Error("File is too large. Please keep it under 8 MB.");
        }
        // 1) Upload to temp host and get a link
        const link = await uploadFileAndGetUrl(file);
        // 2) Put the link into the payload we send to Formspree
        fd.append("file_link", link);
      }

      // You can customize the subject that arrives in your inbox
      fd.append("_subject", "New message from portfolio contact form");
      // Ask Formspree to return JSON
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: fd,
        headers: { Accept: "application/json" },
      });

      if (!res.ok) throw new Error("Form submit failed");

      setStatus("ok");
      setMessage("Thanks! Your message has been sent successfully.");
      form.reset();
    } catch (err: any) {
      setStatus("err");
      setMessage(err?.message || "Sorry, something went wrong. Please try again.");
    }
  }

  return (
    <section className={styles.wrap}>
      <h2 className={styles.h2}>Contact Me</h2>

      <form onSubmit={handleSubmit} method="POST" noValidate>
        {/* Honeypot field (hidden) */}
        <input className={styles.hiddenHoney} type="text" name="website" tabIndex={-1} autoComplete="off" />

        <div className="space-y-4">
          <input className={styles.input} name="name" placeholder="Your Name" required />
          <input className={styles.input} name="email" type="email" placeholder="Your Email" required />
          <input className={styles.input} name="subject" placeholder="Subject (optional)" />
          <textarea className={styles.textarea} name="message" placeholder="Your Message" required />

          {/* File field (optional) */}
          <input
            className={styles.input}
            name="attachment"
            type="file"
            accept=".pdf,.doc,.docx,.png,.jpg,.jpeg,.zip,.txt"
          />
          <p className={styles.note}>
            You can attach one file (max ~8&nbsp;MB).
          </p>
        </div>

        <button
          className={styles.btn}
          type="submit"
          disabled={status === "submitting"}
        >
          {status === "submitting" ? "Sending..." : "Send"}
        </button>

        {status === "ok" && <div className={styles.alertOk}>{message}</div>}
        {status === "err" && <div className={styles.alertErr}>{message}</div>}
      </form>
    </section>
  );
}
