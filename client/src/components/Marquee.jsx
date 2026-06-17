import { skills } from "../data/content";

export default function Marquee() {
  const doubled = [...skills, ...skills];

  return (
    <div className="relative -rotate-1 my-2">
      <div className="bg-coral py-4 overflow-hidden">
        <div className="flex gap-8 animate-marquee whitespace-nowrap">
          {doubled.map((skill, i) => (
            <span
              key={i}
              className="font-mono text-ink font-medium text-base flex items-center gap-8"
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
