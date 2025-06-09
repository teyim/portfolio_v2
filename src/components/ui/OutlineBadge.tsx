import React from "react";

import { cn } from "@/lib/utils";

interface OutlineBadgeProps {
  children: React.ReactNode;
  className?: string;
}

const OutlineBadge = ({ children, className }: OutlineBadgeProps) => (
  <span
    className={cn(
      "base-border-color mx-1 inline-block rounded border px-2 py-0.5 text-xs font-medium text-gray-700",
      className,
    )}
  >
    {children}
  </span>
);

export default OutlineBadge;
