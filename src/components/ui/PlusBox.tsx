import { cn } from "@/lib/utils";
import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface PlusBoxProps {
  children: React.ReactNode;
  className?: string;
  svgFill?: string;
  href?: string;
  isExternal?: boolean;
}

const PlusSVG = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width="5" height="5" viewBox="0 0 5 5" {...props}>
    <path d="M2 0h1v2h2v1h-2v2h-1v-2h-2v-1h2z" />
  </svg>
);

const PlusBox = ({
  children,
  className,
  svgFill = "",
  href,
  isExternal = false,
}: PlusBoxProps) => {
  const content = (
    <>
      <span className="base-border-color absolute inset-0 border border-dashed bg-gray-400/10 transition-all duration-300 group-hover:border-sky-400/30 group-hover:bg-sky-400/15 dark:border-sky-300/30"></span>
      <span className="relative flex items-center justify-center gap-1">
        {children}
        {href && isExternal && (
          <ArrowUpRight
            size={12}
            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        )}
        <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-current transition-all duration-300 group-hover:w-full" />
      </span>
      <PlusSVG
        className={`absolute top-[-2px] left-[-2px] ${svgFill} transition-transform duration-300 group-hover:scale-110 group-hover:rotate-90`}
      />
      <PlusSVG
        className={`absolute top-[-2px] right-[-2px] ${svgFill} transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-90`}
      />
      <PlusSVG
        className={`absolute bottom-[-2px] left-[-2px] ${svgFill} transition-transform duration-300 group-hover:scale-110 group-hover:rotate-90`}
      />
      <PlusSVG
        className={`absolute right-[-2px] bottom-[-2px] ${svgFill} transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-90`}
      />
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className={cn(
          "group relative inline-block w-auto px-1.5 text-center text-sm/6 font-semibold transition-all duration-300 hover:text-gray-600",
          className,
        )}
      >
        {content}
      </Link>
    );
  }

  return (
    <div
      className={cn(
        "group relative inline-block w-auto px-1.5 text-center text-sm/6 font-semibold",
        className,
      )}
    >
      {content}
    </div>
  );
};

export default PlusBox;
