"use client";

import { CheckCircle, Star } from "lucide-react";

import React from "react";

import Image from "next/image";

import { cn } from "@/lib/utils";

interface ExperienceCardProps {
  company: string;
  title: string;
  timeframe: string;
  description?: string;
  image?: string;
  location?: string;
  type?: string;
  isLastItem: boolean;
}

const ExperienceCard = ({
  company,
  title,
  timeframe,
  description,
  image,
  location,
  type,
  isLastItem,
}: ExperienceCardProps) => {
  return (
    <div
      className={cn(
        "relative flex items-start h-[150px]", // Use flex to align icon/line and content
        // Indent for nested, base padding for top-level
      )}
    >
      <div
        className={cn(
          "relative z-10 flex items-center justify-center rounded-full border dark:bg-slate-600",
        )}
      >
        {image && (
          <Image
            src={image}
            height={30}
            width={30}
            alt={`${company} logo`}
            className="object-cover"
          />
        )}
      </div>

      <div
        className={cn(
          "absolute h-[10px] w-5 border-l border-b z-0 top-8 left-[14px] rounded-bl-lg  p-[6px]",
        )}
      ></div>
      <div
        className={cn(
          "absolute h-[150px] w-5 border-l z-0 top-8 left-[14px] block",
          isLastItem && "hidden",
        )}
      ></div>

      {/* --- Card Content --- */}
      <div className={cn("relative flex-1 z-10")}>
        <div className={cn("relative overflow-hidden px-2")}>
          <div className="flex flex-col ">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50">
              {company}
            </h3>

            <div className="flex items-center space-x-2">
              <p className="text-sm text-slate-900 dark:text-slate-50">
                {title}
              </p>
            </div>
            <p className="mt-1 text-xs text-slate-500 dark:text-slate-500">
              {timeframe} {location && `• ${location}`} {type && `• ${type}`}
            </p>
          </div>

          <p className="mt-4 text-sm text-slate-600 dark:text-slate-400">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
