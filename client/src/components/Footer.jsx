import { profile } from "../data/content";

export default function Footer() {
  return (
    <footer className="px-6 py-8 border-t border-white/10">
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-3">
        <span className="font-mono text-xs text-paper/40">
          © {new Date().getFullYear()} {profile.name}. Built with React,
          Vite & Tailwind.
        </span>
        <span className="font-mono text-xs text-paper/40">
          Designed &amp; coded with too much coffee.
        </span>
      </div>
    </footer>
  );
}
