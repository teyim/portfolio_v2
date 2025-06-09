import React from "react";

import { cn } from "@/lib/utils";

interface HighlightedTextProps {
  children: React.ReactNode;
  className?: string;
  highlightColor?: string;
  underlineColor?: string;
  highlightHeight?: number;
}

const HighlightedText = ({
  children,
  className,
  highlightColor = "bg-sky-200/50 dark:bg-sky-400/30",
  underlineColor = "text-sky-400/50",
  highlightHeight = 14,
}: HighlightedTextProps) => {
  return (
    <span className={cn("relative inline-block", className)}>
      <span className="relative z-10 font-semibold text-slate-900">
        {children}
      </span>
      <span
        className={cn("absolute top-2 bottom-0 left-0 w-full", highlightColor)}
        style={{ height: `${highlightHeight}px` }}
      />
      <svg
        className="absolute top-5 left-0 w-full"
        height="4"
        viewBox="0 0 100 4"
        preserveAspectRatio="none"
      >
        <path
          d="M0,2 Q25,0 50,2 T100,2"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
          className={underlineColor}
        />
      </svg>
    </span>
  );
};

export default HighlightedText;
