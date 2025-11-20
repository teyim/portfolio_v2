import { Calendar, Clock, ArrowLeft } from "lucide-react";

import React from "react";

import Link from "next/link";
import { notFound } from "next/navigation";

import { blogPosts } from "@/constants";

import OutlineBadge from "@/components/ui/OutlineBadge";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post || !post.published) {
    notFound();
  }

  return (
    <main className="relative min-h-screen w-full -mt-3">
      {/* Header Section */}
      <section className="relative grid h-auto min-h-[120px] grid-cols-1 container-padding pt-20">
        <div className="border-x p-6 sm:p-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm hover:text-sky-500 transition-colors mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>
        </div>
        <div className="absolute bottom-0 left-0 w-full border-b"></div>
      </section>

      {/* Blog Post Content */}
      <section className="relative container-padding py-8">
        <div className="border-x">
          <article className="max-w-3xl mx-auto p-6 sm:p-8">
            {/* Post Header */}
            <header className="mb-8 space-y-4">
              <h1 className="font-geist-sans">{post.title}</h1>

              <div className="flex flex-wrap items-center gap-4 text-sm">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>
                    {new Date(post.date).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>{post.readTime}</span>
                </div>
                <span>by {post.author}</span>
              </div>

              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, index) => (
                  <OutlineBadge key={index}>{tag}</OutlineBadge>
                ))}
              </div>
            </header>

            {/* Post Content */}
            <div className="prose prose-slate dark:prose-invert max-w-none">
              <div className="space-y-6">
                <p className="text-lg leading-relaxed">{post.excerpt}</p>

                <div className="border-l-4 border-sky-500 pl-4 py-2 bg-sky-50 dark:bg-sky-950/20">
                  <p className="text-sm italic">
                    This is a placeholder blog post. In a real application, you would fetch the full content from a CMS or markdown files.
                  </p>
                </div>

                <h2 className="text-2xl font-bold mt-8 mb-4">Introduction</h2>
                <p className="leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">Key Concepts</h2>
                <p className="leading-relaxed">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>

                <ul className="list-disc list-inside space-y-2 my-4">
                  <li>First important point to consider</li>
                  <li>Second key takeaway from this section</li>
                  <li>Third crucial concept to understand</li>
                </ul>

                <h2 className="text-2xl font-bold mt-8 mb-4">Best Practices</h2>
                <p className="leading-relaxed">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">Conclusion</h2>
                <p className="leading-relaxed">
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.
                </p>
              </div>
            </div>
          </article>

          <div className="absolute bottom-0 left-0 w-full border-b"></div>
        </div>
      </section>

      {/* Related Posts Section */}
      <section className="relative container-padding py-8">
        <div className="border-x p-6 sm:p-8">
          <h2 className="text-2xl font-bold mb-6">More Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {blogPosts
              .filter((p) => p.slug !== post.slug && p.published)
              .slice(0, 3)
              .map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  href={`/blog/${relatedPost.slug}`}
                  className="group p-4 border rounded-lg hover:border-sky-500 transition-colors"
                >
                  <h3 className="text-sm font-semibold mb-2 group-hover:text-sky-500 transition-colors line-clamp-2">
                    {relatedPost.title}
                  </h3>
                  <p className="text-xs text-muted-foreground line-clamp-2">
                    {relatedPost.excerpt}
                  </p>
                  <div className="flex items-center gap-2 mt-3 text-xs">
                    <Calendar className="h-3 w-3" />
                    <span>
                      {new Date(relatedPost.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                </Link>
              ))}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full border-b"></div>
      </section>
    </main>
  );
}
