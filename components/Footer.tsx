"use client";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="section-dark py-12 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-light/50 mb-2">
          Built with{" "}
          <span className="text-accent">Claude Code</span>
        </p>
        <p className="text-light/30 text-sm">
          © {year} Gurusharan Gupta
        </p>
      </div>
    </footer>
  );
}
