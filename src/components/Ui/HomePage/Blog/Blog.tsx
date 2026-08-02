"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { BookOpen, Calendar, Clock, Tag, X } from "lucide-react";
import { blogPosts, type BlogPost } from "@/src/utils/blogs";
import SlideUp from "@/src/components/Common/Animaation/SlideUp";

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const categories = useMemo(
    () => ["All", ...Array.from(new Set(blogPosts.map((post) => post.category)))],
    []
  );

  const filteredPosts = useMemo(
    () =>
      activeCategory === "All"
        ? blogPosts
        : blogPosts.filter((post) => post.category === activeCategory),
    [activeCategory]
  );

  useEffect(() => {
    if (!selectedPost) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedPost(null);
    };

    document.addEventListener("keydown", handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [selectedPost]);

  return (
    <section id="blog" className="py-16 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SlideUp>
          <div className="flex items-center gap-3 mb-6">
            <BookOpen className="w-7 h-7 sm:w-8 sm:h-8 text-indigo-600" />
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Blog / Articles
            </h2>
          </div>

          <div
            className="flex gap-2 overflow-x-auto pb-2 mb-8 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap scrollbar-none"
            role="tablist"
            aria-label="Filter blog posts by category"
          >
            {categories.map((category) => (
              <button
                key={category}
                role="tab"
                aria-selected={activeCategory === category}
                onClick={() => setActiveCategory(category)}
                className={`shrink-0 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors duration-200 border ${
                  activeCategory === category
                    ? "bg-indigo-700 text-white border-indigo-700"
                    : "bg-white text-gray-600 border-gray-200 hover:border-indigo-300 hover:text-indigo-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </SlideUp>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredPosts.map((post, index) => (
            <SlideUp key={post.id} delay={Math.min(index + 1, 6)}>
              <button
                onClick={() => setSelectedPost(post)}
                className="group w-full h-full text-left bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:border-indigo-200 transition-all duration-300 overflow-hidden flex flex-col"
              >
                <div className="relative w-full aspect-video bg-indigo-50 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-indigo-700 text-white text-xs font-semibold">
                    {post.category}
                  </span>
                </div>
                <div className="p-4 flex flex-col flex-1">
                  <h4 className="font-semibold text-gray-800 group-hover:text-indigo-700 transition-colors">
                    {post.title}
                  </h4>
                  <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-3 text-xs text-gray-400 mt-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </span>
                  </div>
                  <span className="text-sm text-indigo-700 font-medium mt-3">
                    Read more →
                  </span>
                </div>
              </button>
            </SlideUp>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <p className="text-center text-gray-500 mt-10">
            No articles in this category yet.
          </p>
        )}
      </div>

      <AnimatePresence>
        {selectedPost && (
          <motion.div
            className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div
              className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm"
              onClick={() => setSelectedPost(null)}
              aria-hidden="true"
            />

            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="blog-modal-title"
              className="relative bg-white w-full sm:max-w-2xl max-h-[90vh] sm:rounded-2xl rounded-t-2xl overflow-y-auto shadow-2xl"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <button
                onClick={() => setSelectedPost(null)}
                aria-label="Close article"
                className="absolute top-3 right-3 z-10 p-2 rounded-full bg-white/90 text-gray-600 hover:text-indigo-700 hover:bg-white shadow-md transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative w-full aspect-video bg-indigo-50">
                <Image
                  src={selectedPost.image}
                  alt={selectedPost.title}
                  fill
                  sizes="(max-width: 640px) 100vw, 672px"
                  className="object-cover"
                />
              </div>

              <div className="p-5 sm:p-8">
                <span className="inline-block px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-xs font-semibold mb-3">
                  {selectedPost.category}
                </span>
                <h3
                  id="blog-modal-title"
                  className="text-xl sm:text-2xl font-bold text-gray-900"
                >
                  {selectedPost.title}
                </h3>

                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mt-4 pb-4 border-b border-gray-100">
                  <div className="flex items-center gap-2">
                    <Image
                      src={selectedPost.author.avatar}
                      alt={selectedPost.author.name}
                      width={28}
                      height={28}
                      className="rounded-full object-cover"
                    />
                    <span className="font-medium text-gray-700">
                      {selectedPost.author.name}
                    </span>
                  </div>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {selectedPost.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {selectedPost.readTime}
                  </span>
                </div>

                <div className="mt-5 space-y-4">
                  {selectedPost.content.map((paragraph, i) => (
                    <p key={i} className="text-gray-600 leading-relaxed text-sm sm:text-base">
                      {paragraph}
                    </p>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-2 mt-6 pt-4 border-t border-gray-100">
                  <Tag className="w-4 h-4 text-indigo-400" />
                  {selectedPost.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
