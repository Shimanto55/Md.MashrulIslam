import type { ReactNode } from "react";

type MainLayoutProps = {
  children: ReactNode;
};

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 font-roboto">
      <header className="py-5 text-center border-b border-gray-800">
        <h1 className="text-3xl font-bold text-cyan-400">
          Md. Mashrul Islam
        </h1>
        <p className="text-gray-400 text-sm">Web Developer | Cybersecurity Enthusiast</p>
      </header>

      <main className="max-w-5xl mx-auto p-6">{children}</main>

      <footer className="text-center py-4 text-gray-500 text-sm border-t border-gray-800">
        © {new Date().getFullYear()} Md. Mashrul Islam. All rights reserved.
      </footer>
    </div>
  );
}
