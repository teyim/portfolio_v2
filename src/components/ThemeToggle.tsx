"use client";

import * as React from "react";
import { Moon, Sun, Laptop } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("system");
    } else if (theme === "system") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  if (!mounted) {
    return null;
  }

  const getIcon = () => {
    switch (theme) {
      case "light":
        return <Sun className="h-4 w-4 transition-transform duration-200 rotate-0 hover:rotate-180" />;
      case "system":
        return <Laptop className="h-4 w-4 transition-transform duration-200 scale-100 hover:scale-110" />;
      case "dark":
        return <Moon className="h-4 w-4 transition-transform duration-200 rotate-0 hover:-rotate-180" />;
      default:
        return <Sun className="h-4 w-4 transition-transform duration-200 rotate-0 hover:rotate-180" />;
    }
  };

  const getNextThemeLabel = () => {
    if (theme === "light") return "system";
    if (theme === "system") return "dark";
    return "light";
  };

  return (
    <button
      onClick={toggleTheme}
      className="rounded-full p-2 transition-all hover:bg-accent hover:text-accent-foreground border bg-background shadow-sm"
      aria-label={`Switch to ${getNextThemeLabel()} mode`}
    >
      {getIcon()}
    </button>
  );
}
