"use client";

import { services } from "@/src/utils/data";
import { PenTool } from "lucide-react";
import SlideUp from "@/src/components/Common/Animaation/SlideUp";

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SlideUp>
          <div className="flex items-center gap-3 mb-8">
            <PenTool className="w-7 h-7 sm:w-8 sm:h-8 text-indigo-600" />
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Consultancy Services
            </h2>
          </div>
        </SlideUp>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services?.map((service, idx) => (
            <SlideUp
              key={idx}
              delay={Math.min(idx + 1, 6)}
              className="bg-white p-4 rounded-xl border border-gray-200 hover:border-indigo-300 hover:shadow-md transition shadow-sm text-center"
            >
              <span className="font-medium text-gray-800">{service}</span>
            </SlideUp>
          ))}
        </div>
      </div>
    </section>
  );
}
