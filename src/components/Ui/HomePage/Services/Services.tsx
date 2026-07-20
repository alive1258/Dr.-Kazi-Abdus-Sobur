import { services } from "@/src/utils/data";
import { PenTool } from "lucide-react";

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-8">
          <PenTool className="w-8 h-8 text-indigo-600" />
          <h2 className="text-3xl font-bold text-gray-900">
            Consultancy Services
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services?.map((service, idx) => (
            <div
              key={idx}
              className="bg-white p-4 rounded-xl border border-gray-200 hover:border-indigo-300 hover:shadow-md transition shadow-sm text-center"
            >
              <span className="font-medium text-gray-800">{service}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
