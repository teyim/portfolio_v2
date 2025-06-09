import { Github } from "lucide-react";

import React from "react";

import Link from "next/link";

import { cn } from "@/lib/utils";

interface NavbarProps {
  className?: string;
}

const Navbar = ({ className }: NavbarProps) => {
  return (
    <nav
      className={cn(
        "base-border-color fixed top-0 z-50 mb-8 w-full",
        className,
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <div className="flex items-center space-x-8">
          <div className="hidden space-x-6 md:flex">
            <Link
              href="/blog"
              className="text-sm text-slate-600 transition-colors hover:text-slate-900"
            >
              Blog
            </Link>
            <Link
              href="/cv"
              className="text-sm text-slate-600 transition-colors hover:text-slate-900"
            >
              CV
            </Link>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <a
            href="https://github.com/teyim/portfolio_v2"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full p-2 transition-all duration-300 hover:scale-110 hover:bg-slate-50 hover:text-slate-600 hover:shadow-sm"
          >
            <Github size={20} strokeWidth={1.5} />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
