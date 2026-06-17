import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { projects } from "../data/content";

const colorClasses = {
  coral: { bg: "bg-coral", text: "text-coral", hoverBorder: "hover:border-coral/40" },
  mint: { bg: "bg-mint", text: "text-mint", hoverBorder: "hover:border-mint/40" },
  yolk: { bg: "bg-yolk", text: "text-yolk", hoverBorder: "hover:border-yolk/40" },
};

function ProjectCard({ project, index }) {
  const c = colorClasses[project.color];
  const offset = index % 2 === 1 ? "md:translate-y-8" : "";

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, rotate: index % 2 === 0 ? -2 : 2 }}
      whileInView={{ opacity: 1, y: 0, rotate: 0 }}
      whileHover={{ rotate: index % 2 === 0 ? -1.5 : 1.5, y: -6 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className={`group relative bg-ink-soft border border-white/10 rounded-2xl p-7 transition-colors ${offset} ${c.hoverBorder}`}
    >
    <a href={project.link} target="_blank">
      <div
        className={`absolute top-7 right-7 w-10 h-10 rounded-full ${c.bg} flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity`}
      >
        <ArrowUpRight size={18} className="text-ink" />
      </div>
    </a>
      <span className={`font-mono text-xs ${c.text} tracking-wide`}>
        PROJECT {String(index + 1).padStart(2, "0")}
      </span>

      <h3 className="font-display font-bold text-2xl mt-3 mb-3 pr-10">
        {project.title}
      </h3>

      <p className="text-paper/65 text-sm leading-relaxed mb-5">
        {project.description}
      </p>

      <div className="flex items-center justify-between">
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-[11px] bg-white/5 text-paper/60 px-2.5 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <a
          href={project.repo}
          target="_blank"
          rel="noreferrer"
          className="text-paper/40 hover:text-paper shrink-0 ml-3"
          aria-label="View repository"
        >
          <Github size={18} />
        </a>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="work" className="relative py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 max-w-xl"
        >
          <span className="font-mono text-sm text-coral">selected work</span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl mt-3">
            Things I've built
          </h2>
          <p className="text-paper/60 mt-4">
            A handful of projects that shipped to real users — from
            internal tools to full products.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
