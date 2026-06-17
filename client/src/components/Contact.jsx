import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "../data/content";

export default function Contact() {
  return (
    <section id="contact" className="relative py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-coral rounded-3xl px-8 sm:px-14 py-16 text-center overflow-hidden"
        >
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-yolk/40 rounded-full blur-2xl" />
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-ink/20 rounded-full blur-2xl" />

          <span className="font-mono text-ink/70 text-sm">
            got a project in mind?
          </span>
          <h2 className="font-display font-bold text-ink text-4xl sm:text-6xl mt-4 mb-8 leading-tight">
            Let's build something
            <br /> people actually use.
          </h2>

          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 bg-ink text-paper font-mono font-medium px-7 py-4 rounded-full hover:bg-ink-soft transition-colors text-lg"
          >
            {"Email now"}
            <ArrowUpRight size={20} />
          </a>

          <div className="flex items-center justify-center gap-4 mt-10">
            {[
              { Icon: Github, href: profile.socials.github, label: "GitHub" },
              { Icon: Linkedin, href: profile.socials.linkedin, label: "LinkedIn" },
              { Icon: Mail, href: `mailto:${profile.email}`, label: "Email" },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="w-11 h-11 flex items-center justify-center rounded-full bg-ink/10 text-ink hover:bg-ink hover:text-coral transition-colors"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
