import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { codeSnippetLines } from "../data/content";

const colorMap = {
  paper: "text-paper",
  mint: "text-mint",
  yolk: "text-yolk",
  coral: "text-coral",
};

export default function CodeCard() {
  const [visibleChars, setVisibleChars] = useState(0);
  const fullText = codeSnippetLines.map((l) => l.code).join("\n");

  useEffect(() => {
    if (visibleChars >= fullText.length) return;
    const speed = fullText[visibleChars] === "\n" ? 60 : 22;
    const timeout = setTimeout(() => {
      setVisibleChars((v) => v + 1);
    }, speed);
    return () => clearTimeout(timeout);
  }, [visibleChars, fullText]);

  // Figure out, for each line, how many characters of it are currently visible
  let consumed = 0;
  const lineRanges = codeSnippetLines.map((line) => {
    const start = consumed;
    const end = start + line.code.length;
    consumed = end + 1; // +1 for the newline
    return { start, end };
  });

  const renderedLines = codeSnippetLines.map((line, i) => {
    const { start, end } = lineRanges[i];
    const charsForThisLine = Math.max(0, Math.min(line.code.length, visibleChars - start));
    const isActiveLine = visibleChars >= start && visibleChars <= end;
    return { ...line, shown: line.code.slice(0, charsForThisLine), isActiveLine };
  });

  const isComplete = visibleChars >= fullText.length;

  return (
    <motion.div
      initial={{ opacity: 0, x: 40, rotate: 3 }}
      animate={{ opacity: 1, x: 0, rotate: -2 }}
      transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
      whileHover={{ rotate: 0, scale: 1.02 }}
      className="relative w-full max-w-md mx-auto"
    >
      {/* shadow card behind */}
      <div className="absolute inset-0 bg-mint rounded-2xl rotate-3 translate-x-3 translate-y-3" />

      <div className="relative bg-ink-soft border border-white/10 rounded-2xl shadow-2xl shadow-black/40 overflow-hidden">
        {/* title bar */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-black/20">
          <span className="w-3 h-3 rounded-full bg-coral" />
          <span className="w-3 h-3 rounded-full bg-yolk" />
          <span className="w-3 h-3 rounded-full bg-mint" />
          <span className="ml-3 font-mono text-xs text-paper/40">
            developer.js
          </span>
        </div>

        {/* code body */}
        <pre className="p-5 font-mono text-[13px] sm:text-sm leading-relaxed min-h-[220px] overflow-x-auto">
          {renderedLines.map((line, i) => (
            <div key={i} className="flex min-h-[1.6em]">
              {line.indent > 0 && <span className="inline-block w-5 shrink-0" />}
              <span className={colorMap[line.color]}>
                {line.shown}
              </span>
              {!isComplete && line.isActiveLine && (
                <span className="inline-block w-[2px] h-[1.1em] bg-mint animate-pulse ml-0.5 translate-y-[2px]" />
              )}
            </div>
          ))}
        </pre>
      </div>
    </motion.div>
  );
}
