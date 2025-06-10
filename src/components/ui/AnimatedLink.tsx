"use client";

import { motion } from "motion/react";

import React from "react";

import Link from "next/link";

import { cn } from "@/lib/utils";

interface AnimatedLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  isExternal?: boolean;
}

const AnimatedLink = ({
  href,
  children,
  className,
  isExternal = false,
}: AnimatedLinkProps) => {
  const pathVariants = {
    hidden: {
      pathLength: 0,
      opacity: 0,
    },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <Link
      href={href}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={cn(
        "group relative inline-flex items-center transition-col duration-300 hover:text-sky-500",
        className,
      )}
    >
      <motion.span className="relative" initial="hidden" whileHover="visible">
        {children}
        <motion.svg
          className="absolute -bottom-1 left-0 w-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          height="4"
          viewBox="0 0 100 4"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M0,2 Q25,0 50,2 T100,2"
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
            variants={{
              ...pathVariants,
              visible: {
                ...pathVariants.visible,
                transition: { duration: 0.3, ease: "easeInOut" },
              },
            }}
          />
        </motion.svg>
      </motion.span>
    </Link>
  );
};

export default AnimatedLink;
