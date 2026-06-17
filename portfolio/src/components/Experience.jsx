import { motion } from "framer-motion";
import { experience } from "../data/content";

export default function Experience() {
  return (
    <section id="experience" className="relative py-28 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span className="font-mono text-sm text-yolk">where I've been</span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl mt-3">
            Experience
          </h2>
        </motion.div>

        <div className="relative">
          {/* vertical line */}
          <div className="absolute left-0 top-2 bottom-2 w-px bg-white/10" />

          <div className="space-y-12">
            {experience.map((job, i) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="relative pl-10"
              >
                <span className="absolute left-0 top-1.5 -translate-x-1/2 w-3 h-3 rounded-full bg-mint ring-4 ring-ink" />

                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-2">
                  <h3 className="font-display font-bold text-xl">
                    {job.role}
                  </h3>
                  <span className="text-coral font-medium">
                    @ {job.company}
                  </span>
                </div>
                <span className="font-mono text-xs text-paper/40">
                  {job.period}
                </span>
                <p className="text-paper/65 mt-3 leading-relaxed">
                  {job.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
