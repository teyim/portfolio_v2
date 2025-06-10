"use client";

import { Github, Mail } from "lucide-react";

import React from "react";

import { cn } from "@/lib/utils";

import AnimatedLink from "./ui/AnimatedLink";

interface FooterProps {
  className?: string;
}

const Footer = ({ className }: FooterProps) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={cn(
        "base-border-color bottom-0 z-50 w-full container-padding backdrop-blur-sm bg-white/70 dark:bg-slate-950/70 mt-0",
        className,
      )}
    >
      <div className="mx-auto flex h-13 max-w-7xl items-center justify-between px-4 pattern-diagonal-bg border-x">
        <div className="flex items-center">
          <p className="text-sm text-slate-600 dark:text-slate-400">
            © {currentYear} Teyim Asobo. All rights reserved.
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <AnimatedLink
            href="https://github.com/teyim"
            className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
          >
            <Github className="h-5 w-5" />
          </AnimatedLink>
          <AnimatedLink
            href="mailto:teyimasobo@gmail.com"
            className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
          >
            <Mail className="h-5 w-5" />
          </AnimatedLink>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
