import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import CodeCard from "./CodeCard";
import { profile } from "../data/content";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center pt-32 pb-20 px-6 overflow-hidden"
    >
      {/* ambient blobs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-coral/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -right-32 w-96 h-96 bg-mint/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-16 items-center">
        {/* left: headline */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-mono text-mint text-sm mb-5 flex items-center gap-2"
          >
            <span className="w-2 h-2 rounded-full bg-mint animate-pulse" />
            {profile.location}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-bold text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.02] -rotate-1 origin-left"
          >
            I turn{" "}
            <span className="text-coral">coffee</span>
            <br />
            into{" "}
            <span className="relative inline-block">
              <span className="relative z-10">code</span>
              <span className="absolute left-0 bottom-1 h-3 w-full bg-yolk/70 -z-0 -rotate-1" />
            </span>
            .
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-6 text-paper/70 text-lg max-w-md"
          >
            {profile.tagline} I'm {profile.name.split(" ")[0]}, a{" "}
            {profile.role.toLowerCase()} who likes shipping things that
            actually work.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-9 flex items-center gap-4 flex-wrap"
          >
            <a
              href="#work"
              className="bg-coral text-ink font-mono text-sm font-medium px-6 py-3 rounded-full hover:bg-yolk transition-colors inline-flex items-center gap-2"
            >
              see my work
              <ArrowDown size={16} />
            </a>
            <div className="flex items-center gap-3">
              {[
                { Icon: Github, href: profile.socials.github },
                { Icon: Linkedin, href: profile.socials.linkedin },
                { Icon: Mail, href: `mailto:${profile.email}` },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="w-11 h-11 flex items-center justify-center rounded-full border border-white/15 text-paper/70 hover:text-ink hover:bg-mint hover:border-mint transition-colors"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* right: code card */}
        <CodeCard />
      </div>
    </section>
  );
}
