"use client";

import { BookOpen, FileText, Github } from "lucide-react";

import React from "react";

import Link from "next/link";

import { navbarLinks } from "@/constants";
import { cn } from "@/lib/utils";

import AnimatedLink from "./ui/AnimatedLink";
import HighlightedText from "./ui/HighlightedText";

interface NavbarProps {
  className?: string;
}

const Navbar = ({ className }: NavbarProps) => {
  return (
    <nav
      className={cn(
        "base-border-color fixed top-0 z-50 w-full container-padding backdrop-blur-sm bg-white/70 dark:bg-slate-950/70",
        className,
      )}
    >
      <div className="mx-auto flex h-13 max-w-7xl items-center justify-between px-4 pattern-diagonal-bg ">
        <div className="flex items-center space-x-8 w-[67%] ">
          <div className="hidden md:flex w-full justify-end space-x-16 p-3">
            {navbarLinks.map((link, id) => (
              <AnimatedLink
                href={link.href}
                className="font-2xl flex items-center gap-2 dark:hover:text-white transition-colors"
                key={id}
              >
                {link.name}
              </AnimatedLink>
            ))}
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button
            onClick={() => {
              document.documentElement.classList.toggle("dark");
            }}
            className="rounded-md p-2 hover:bg-slate-100 dark:hover:bg-slate-800"
            aria-label="Toggle dark mode"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-5 w-5 dark:hidden"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="hidden h-5 w-5 dark:block"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
