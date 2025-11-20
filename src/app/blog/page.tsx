import React from "react";

import BlogCard from "@/components/BlogCard";
import { blogPosts } from "@/constants";

export default function BlogPage() {
  const publishedPosts = blogPosts.filter((post) => post.published);

  return (
    <main className="relative min-h-screen w-full -mt-3">
      {/* Header Section */}
      <section className="relative grid h-auto min-h-[200px] grid-cols-1 container-padding pt-20">
        <div className="border-x p-6 sm:p-8">
          <div className="max-w-3xl">
            <h1 className="font-geist-sans mb-4">Blog</h1>
            <p className="text-base sm:text-lg">
              Thoughts, tutorials, and insights on web development, React, TypeScript, and modern frontend technologies.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full border-b"></div>
      </section>

      {/* Blog Posts Grid */}
      <section className="relative container-padding py-8">
        <div className="border-x p-6 sm:p-8">
          <div className="mb-6">
            <p className="text-sm">
              {publishedPosts.length} {publishedPosts.length === 1 ? "post" : "posts"}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {publishedPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>

          {publishedPosts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-lg">No blog posts yet. Check back soon!</p>
            </div>
          )}
        </div>
        <div className="absolute bottom-0 left-0 w-full border-b"></div>
      </section>
    </main>
  );
}
