"use client";

import { Calendar, Clock } from "lucide-react";

import React from "react";

import Link from "next/link";

import { BlogPost } from "@/types";

import OutlineBadge from "./ui/OutlineBadge";

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <div className="group h-full space-y-3 rounded-xl border bg-background p-5 shadow-sm ring-1 ring-border transition-all duration-300 hover:shadow-md hover:ring-gray-950/20 dark:hover:ring-gray-50/20">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold leading-tight transition-colors group-hover:text-sky-500">
            {post.title}
          </h3>
          <p className="text-sm line-clamp-2">{post.excerpt}</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {post.tags.slice(0, 3).map((tag, index) => (
            <OutlineBadge key={index}>{tag}</OutlineBadge>
          ))}
        </div>

        <div className="flex items-center justify-between text-xs pt-2 border-t">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              <span>{new Date(post.date).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric"
              })}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
