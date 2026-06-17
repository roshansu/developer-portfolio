import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { label: "work", href: "#work" },
  { label: "about", href: "#about" },
  { label: "experience", href: "#experience" },
  { label: "contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div
          className={`flex items-center justify-between rounded-2xl px-5 transition-all duration-300 ${
            scrolled
              ? "bg-ink-soft/80 backdrop-blur-md border border-white/10 py-3 shadow-lg shadow-black/20"
              : "py-2"
          }`}
        >
          <a
            href="#top"
            className="font-display font-bold text-xl tracking-tight text-paper"
          >
            alex<span className="text-coral">.</span>dev
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-mono text-sm text-paper/70 hover:text-mint transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="hidden md:inline-flex items-center font-mono text-sm bg-coral text-ink px-4 py-2 rounded-full font-medium hover:bg-yolk transition-colors"
          >
            let's talk
          </a>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-paper"
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-2 bg-ink-soft border border-white/10 rounded-2xl p-5 flex flex-col gap-4"
          >
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-mono text-sm text-paper/80 hover:text-mint"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="font-mono text-sm bg-coral text-ink px-4 py-2 rounded-full font-medium text-center"
            >
              let's talk
            </a>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}
