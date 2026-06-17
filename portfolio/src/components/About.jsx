import { motion } from "framer-motion";
import { about, profile } from "../data/content";

export default function About() {
  return (
    <section id="about" className="relative py-28 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-[0.85fr_1.15fr] gap-16 items-center">
        {/* blob avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, rotate: -6 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto md:mx-0 w-64 h-64 sm:w-80 sm:h-80"
        >
          <div
            className="absolute inset-0 bg-yolk"
            style={{
              borderRadius: "42% 58% 65% 35% / 45% 40% 60% 55%",
            }}
          />
          <div
            className="absolute inset-3 bg-ink-soft border border-white/15 flex items-center justify-center overflow-hidden"
            style={{
              borderRadius: "42% 58% 65% 35% / 45% 40% 60% 55%",
            }}
          >
            <span className="font-display font-bold text-7xl text-paper/30">
              {profile.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </span>
          </div>
          <div className="absolute -bottom-3 -right-3 w-16 h-16 rounded-full bg-coral flex items-center justify-center font-mono text-[10px] text-ink font-medium text-center leading-tight rotate-[-8deg] shadow-lg shadow-black/30">
            say hi
            <br />
            👋
          </div>
        </motion.div>

        {/* bio */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="font-mono text-sm text-mint">about me</span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl mt-3 mb-6">
            Hey, I'm {profile.name.split(" ")[0]}.
          </h2>
          <p className="text-paper/70 leading-relaxed text-lg mb-8">
            {about.bio}
          </p>

          <div className="flex gap-8 flex-wrap">
            {about.stats.map((stat) => (
              <div key={stat.label}>
                <div className="font-display font-bold text-3xl text-coral">
                  {stat.value}
                </div>
                <div className="font-mono text-xs text-paper/50 mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
