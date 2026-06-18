import { skills } from "../data/content";

export default function Marquee() {
  const doubled = [...skills, ...skills];

  return (
<div className="relative -rotate-1 my-2 overflow-hidden">
  <div className="bg-coral py-4">
    <div className="flex w-max gap-4 md:gap-8 whitespace-nowrap animate-[marquee_15s_linear_infinite]">
      {[...skills, ...skills].map((skill, i) => (
        <span
          key={i}
          className="font-mono text-ink font-medium text-sm md:text-base flex items-center gap-4 md:gap-8"
        >
          {skill}
          <span className="text-ink/40">/</span>
        </span>
      ))}
    </div>
  </div>
</div>
  );
}
