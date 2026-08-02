"use client";

import { awards } from "@/src/utils/data";
import { Trophy } from "lucide-react";
import SlideUp from "@/src/components/Common/Animaation/SlideUp";

export default function Awards() {
  return (
    <section id="awards" className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SlideUp>
          <div className="flex items-center gap-3 mb-8">
            <Trophy className="w-7 h-7 sm:w-8 sm:h-8 text-indigo-600" />
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Awards & Honors
            </h2>
          </div>
        </SlideUp>
        <div className="space-y-4">
          {awards.map((award, idx) => (
            <SlideUp
              key={idx}
              delay={Math.min(idx + 1, 6)}
              className="border-l-4 border-indigo-400 pl-4"
            >
              <h3 className="text-lg font-semibold text-gray-800">
                {award.title}
              </h3>
              <p className="text-sm text-gray-600">
                {award.issuer} · {award.year}
              </p>
              {award.description && (
                <p className="text-sm text-gray-500 mt-1">
                  {award.description}
                </p>
              )}
            </SlideUp>
          ))}
        </div>
      </div>
    </section>
  );
}
