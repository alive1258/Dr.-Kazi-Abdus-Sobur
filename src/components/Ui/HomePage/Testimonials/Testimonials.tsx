"use client";

"use client";

import { useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "@/src/utils/data";
import SlideDown from "@/src/components/Common/Animaation/SlideDown";
import ZoomIn from "@/src/components/Common/Animaation/ZoomIn";

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((current + 1) % testimonials.length);
  const prev = () =>
    setCurrent((current - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="py-16 md:py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SlideDown>
          <div className="flex items-center gap-3 mb-8">
            <Star className="w-7 h-7 sm:w-8 sm:h-8 text-indigo-600" />
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Testimonials
            </h2>
          </div>
        </SlideDown>
        <ZoomIn>
          <div className="relative bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-200">
            <div className="text-center">
              <p className="text-gray-700 italic text-base sm:text-lg">
                &ldquo;{testimonials[current].text}&rdquo;
              </p>
              <p className="mt-4 font-semibold text-indigo-700">
                {testimonials[current].author}
              </p>
              <p className="text-sm text-gray-500">
                {testimonials[current].title}
              </p>
            </div>
            <div className="flex justify-center gap-4 mt-6">
              <button
                onClick={prev}
                aria-label="Previous testimonial"
                className="p-2 rounded-full bg-gray-100 hover:bg-indigo-100 transition"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={next}
                aria-label="Next testimonial"
                className="p-2 rounded-full bg-gray-100 hover:bg-indigo-100 transition"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </ZoomIn>
      </div>
    </section>
  );
}
