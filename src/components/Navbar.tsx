"use client";

import { Menu, X } from "lucide-react";

import React, { useState } from "react";

import { navbarLinks } from "@/constants";
import { cn } from "@/lib/utils";

import { ThemeToggle } from "./ThemeToggle";
import AnimatedLink from "./ui/AnimatedLink";

interface NavbarProps {
  className?: string;
}

const Navbar = ({ className }: NavbarProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav
      className={cn(
        "base-border-color fixed top-0 z-50 w-full container-padding backdrop-blur-sm bg-white/70 dark:bg-[#1A1A1A]/90",
        className,
      )}
    >
      <div className="mx-auto border-x flex h-13 max-w-7xl items-center justify-between px-4 pattern-diagonal-bg">
        <div className="flex items-center space-x-8 w-full md:w-[67%]">
          <div className="hidden md:flex w-full justify-end space-x-8 lg:space-x-16 p-3">
            {navbarLinks.map((link, id) => (
              <AnimatedLink
                href={link.href}
                className="font-2xl flex items-center gap-2 dark:hover:text-white transition-colors text-sm lg:text-base"
                key={id}
              >
                {link.name}
              </AnimatedLink>
            ))}
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <button
            className="md:hidden p-2 text-slate-700 dark:text-slate-300"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-x border-t mx-auto max-w-7xl bg-white dark:bg-[#1A1A1A] backdrop-blur-sm">
          <div className="flex flex-col space-y-4 px-4 py-6">
            {navbarLinks.map((link, id) => (
              <AnimatedLink
                href={link.href}
                className="font-2xl flex items-center gap-2 dark:hover:text-white transition-colors py-2 text-base"
                key={id}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </AnimatedLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;