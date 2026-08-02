"use client";

import React from "react";
import {
  Lightbulb,
  Target,
  Rocket,
  DollarSign,
  ShoppingCart,
  BookOpen,
  MapPin,
  CheckCircle2,
} from "lucide-react";
import SlideUp from "@/src/components/Common/Animaation/SlideUp";

interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const features: Feature[] = [
  {
    title: "আইডিয়া খোঁজার ঝামেলা শেষ",
    description:
      "৩০০টিরও বেশি গবেষণা করা ও পরীক্ষিত লাভজনক ব্যবসার আইডিয়া থেকে আপনার পছন্দমতো ব্যবসা বেছে নিতে পারবেন।",
    icon: <Lightbulb size={26} />,
  },
  {
    title: "অল্প পুঁজি থেকে শুরু",
    description:
      "কম বাজেটেও শুরু করা যায় এমন বাস্তবসম্মত ব্যবসার উপর ফোকাস করা হয়েছে।",
    icon: <DollarSign size={26} />,
  },
  {
    title: "জিরো-টু-বিজনেস রোডম্যাপ",
    description:
      "একটি আইডিয়াকে ধাপে ধাপে লাভজনক ব্যবসায় রূপান্তর করার সম্পূর্ণ ফ্রেমওয়ার্ক।",
    icon: <Target size={26} />,
  },
  {
    title: "অনলাইন বিক্রির সম্পূর্ণ গাইড",
    description:
      "Facebook, Instagram, TikTok ও Daraz এ পণ্য বিক্রির কার্যকর কৌশল বিস্তারিত শেখানো হয়েছে।",
    icon: <ShoppingCart size={26} />,
  },
  {
    title: "লাভজনক মূল্য নির্ধারণ",
    description:
      "পণ্যের দাম, মার্কেটিং খরচ ও ব্যয় হিসাব করে সঠিক প্রাইসিং করার পদ্ধতি।",
    icon: <CheckCircle2 size={26} />,
  },
  {
    title: "বোনাস সিক্রেট চ্যাপ্টার",
    description:
      "উদ্যোক্তাদের সবচেয়ে বেশি জিজ্ঞাসিত সমস্যার বাস্তব সমাধান নিয়ে বিশেষ অধ্যায়।",
    icon: <BookOpen size={26} />,
  },
  {
    title: "সরাসরি আমদানিকারকের ঠিকানা",
    description:
      "মধ্যস্বত্বভোগী বাদ দিয়ে সরাসরি আমদানিকারকের কাছ থেকে পণ্য কেনার নির্দিষ্ট লোকেশন।",
    icon: <MapPin size={26} />,
  },
  {
    title: "সময় ও অর্থ সাশ্রয়",
    description:
      "১০টি বই বা ১০০টি ইউটিউব ভিডিওর পরিবর্তে একটি বইতেই সবকিছু সাজানো।",
    icon: <Rocket size={26} />,
  },
];

const BookBenefitsSection = () => {
  return (
    <section className="py-16 sm:py-20 px-4 bg-[#070312] relative overflow-hidden">
      {/* background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-indigo-700/20 blur-[160px] rounded-full" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* heading */}
        <SlideUp>
          <div className="text-center mb-14">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              বইটি আপনার বিজনেসকে সহজ করবে যেভাবে
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              আপনার স্বপ্ন আর পরিকল্পনার মাঝখানের দূরত্ব কমাতেই এই বই।
              শুধু ব্যবসা শুরু নয় — শুরু থেকেই লাভজনকভাবে পরিচালনার রোডম্যাপ।
            </p>
          </div>
        </SlideUp>

        {/* grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item, index) => (
            <SlideUp
              key={index}
              delay={Math.min(index + 1, 6)}
              className="group p-6 rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/0 backdrop-blur-xl hover:border-indigo-500/40 hover:-translate-y-1 transition-all duration-300"
            >
              {/* icon */}
              <div className="w-12 h-12 rounded-xl bg-indigo-600/20 text-indigo-400 flex items-center justify-center mb-4 group-hover:scale-110 transition">
                {item.icon}
              </div>

              {/* title */}
              <h3 className="text-lg font-semibold text-white mb-2">
                {item.title}
              </h3>

              {/* desc */}
              <p className="text-gray-400 text-sm leading-relaxed">
                {item.description}
              </p>
            </SlideUp>
          ))}
        </div>

        {/* bottom CTA */}
        <SlideUp>
          <div className="text-center mt-16">
            <a
              href="#checkout-section"
              className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-indigo-500 to-indigo-700 text-white font-semibold shadow-lg hover:scale-105 transition"
            >
              এখনই বইটি অর্ডার করুন
            </a>
          </div>
        </SlideUp>
      </div>
    </section>
  );
};

export default BookBenefitsSection;
