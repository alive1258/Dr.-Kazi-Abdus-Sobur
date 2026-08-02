"use client";

import { stats } from "@/src/utils/data";
import SlideUp from "@/src/components/Common/Animaation/SlideUp";

export default function Statistics() {
  return (
    <section className="py-10 sm:py-12 bg-indigo-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 sm:gap-6 text-center">
          {stats?.map((stat, index) => (
            <SlideUp key={stat.id} delay={Math.min(index + 1, 6)}>
              <div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-indigo-200">
                  {stat.label}
                </div>
              </div>
            </SlideUp>
          ))}
        </div>
      </div>
    </section>
  );
}
