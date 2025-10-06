import MainLayout from "./layouts/MainLayout";

export default function App() {
  return (
    <MainLayout>
      <section className="text-center py-16">
        <h2 className="text-4xl font-bold text-cyan-400 mb-4">
          Welcome to My Portfolio 🚀
        </h2>
        <p className="text-gray-400 text-lg max-w-xl mx-auto">
          I’m a passionate Web Developer skilled in React, TypeScript, and MERN Stack — currently
          exploring the world of Cybersecurity.
        </p>
      </section>
    </MainLayout>
  );
}
