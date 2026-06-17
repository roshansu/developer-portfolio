import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, GitBranch, Mail, CodeIcon, FileSpreadsheet } from "lucide-react";
import CodeCard from "./CodeCard";
import { profile } from "../data/content";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center pt-24 md:pt-32 pb-16 md:pb-20 px-4 sm:px-6 overflow-hidden"
    >
      {/* ambient blobs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-coral/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -right-32 w-96 h-96 bg-mint/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative lg:max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        {/* left: headline */}
        <div className="w-full min-w-0">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-mono text-mint text-xs sm:text-sm mb-4 sm:mb-5 flex items-center gap-2"
          >
            <span className="w-2 h-2 rounded-full bg-mint animate-pulse" />
            {profile.location}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-bold text-[clamp(2rem,10vw,4.5rem)] leading-tight md:leading-[1.02] -rotate-1 origin-left break-words"
          >
            I turn <span className="text-coral">coffee</span>
            <br />
            into{" "}
            <span className="relative inline-block">
              <span className="relative z-10">code</span>
              <span className="absolute left-0 bottom-1 h-2 sm:h-3 w-full bg-yolk/70 -z-0 -rotate-1" />
            </span>
            .
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-5 sm:mt-6 text-paper/70 text-sm sm:text-base lg:text-lg leading-relaxed max-w-full sm:max-w-md"
          >
            {profile.tagline} I'm {profile.name.split(" ")[0]}, a{" "}
            {profile.role.toLowerCase()} who likes shipping things that
            actually work.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4"
          >
            <a
              href="#work"
              className="bg-coral text-ink font-mono text-sm font-medium px-6 py-3 rounded-full hover:bg-yolk transition-colors inline-flex items-center justify-center gap-2 w-fit"
            >
              see my work
              <ArrowDown size={16} />
            </a>

            <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
              {[
                { Icon: Github, href: profile.socials.github },
                { Icon: Linkedin, href: profile.socials.linkedin },
                { Icon: FileSpreadsheet, href: profile.resumeUrl },
                { Icon: CodeIcon, href: profile.codeProfile },
                { Icon: Mail, href: `mailto:${profile.email}` },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center rounded-full border border-white/15 text-paper/70 hover:text-ink hover:bg-mint hover:border-mint transition-colors"
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
