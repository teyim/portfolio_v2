import { cn } from "@/lib/utils";
import React from "react";

function OpenToWork() {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border border-slate-500 px-3 py-1 text-sm",
      )}
    >
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
        <span className="absolute inline-flex h-full w-full animate-pulse rounded-full bg-green-400 opacity-50"></span>
        <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
      </span>
      <span className="font-medium text-slate-800">Open to work</span>
    </div>
  );
}

export default OpenToWork;
