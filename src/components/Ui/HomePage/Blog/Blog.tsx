import { blogPosts } from "@/src/utils/blogs";
import { BookOpen } from "lucide-react";

export default function Blog() {
  return (
    <section id="blog" className="py-16 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-8">
          <BookOpen className="w-8 h-8 text-indigo-600" />
          <h2 className="text-3xl font-bold text-gray-900">Blog / Articles</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {blogPosts.map((post) => (
            <div
              key={post.title}
              className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition"
            >
              <h4 className="font-semibold text-gray-800">{post.title}</h4>
              <p className="text-sm text-gray-500 mt-1">{post.excerpt}</p>
              <p className="text-xs text-indigo-600 mt-2">{post.date}</p>
              <a
                href="#"
                className="text-sm text-indigo-700 font-medium hover:underline mt-2 block"
              >
                Read more →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
