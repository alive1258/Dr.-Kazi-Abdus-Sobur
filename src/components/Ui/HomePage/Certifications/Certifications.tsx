"use client";

import {
  Award,
  Trophy,
  Users,
  ExternalLink,
  Calendar,
  Building2,
  Sparkles,
  GraduationCap,
  Briefcase,
  Mic,
  Microscope,
  Beaker,
  FileText,
} from "lucide-react";
import { useState, type ReactNode } from "react";
import SlideDown from "@/src/components/Common/Animaation/SlideDown";
import SlideUp from "@/src/components/Common/Animaation/SlideUp";
import SlideLeft from "@/src/components/Common/Animaation/SlideLeft";
import SlideRight from "@/src/components/Common/Animaation/SlideRight";

interface AwardItem {
  id: number;
  title: string;
  issuer: string;
  date: string;
  organization: string;
  description: string;
  icon: ReactNode;
  color: string;
  bgColor: string;
  type: string;
}

interface EndorsementItem {
  id: number;
  category: string;
  count: number;
  context: string;
  icon: ReactNode;
}

export default function Certifications() {
  const [activeTab, setActiveTab] = useState("awards");

  const awardsData: AwardItem[] = [
    {
      id: 1,
      title: "National Science & Technology Fellowship",
      issuer: "Ministry of Science & Technology",
      date: "Jul 2022",
      organization: "Bangladesh Agricultural University",
      description:
        "The Ministry of Science and Technology awards National Science and Technology (NST) Fellowships to MS / MPhil, PhD and Post-Doctoral level researchers in science and technology related subjects at various universities for the development of science and technology.",
      icon: <Award className="w-5 h-5" />,
      color: "from-indigo-500 to-indigo-700",
      bgColor: "bg-indigo-50",
      type: "Fellowship",
    },
    {
      id: 2,
      title: "Solve a Thon - Champion",
      issuer: "a2i",
      date: "Apr 2017",
      organization: "Sher-e-Bangla Agricultural University",
      description:
        "Champion of Solve a Thon launched by a2i. My idea is called 'Sohoj Abash', which means Easy Home.",
      icon: <Trophy className="w-5 h-5" />,
      color: "from-indigo-600 to-indigo-800",
      bgColor: "bg-indigo-50",
      type: "Award",
    },
  ];

  const endorsements: EndorsementItem[] = [
    {
      id: 1,
      category: "Higher Education Teaching",
      count: 2,
      context: "Research Consultant at researchmate.net",
      icon: <GraduationCap className="w-4 h-4" />,
    },
    {
      id: 2,
      category: "Scholarly Research",
      count: 2,
      context: "Research Consultant at researchmate.net",
      icon: <Microscope className="w-4 h-4" />,
    },
    {
      id: 3,
      category: "Guest Lecturing",
      count: 1,
      context: "Research Consultant at researchmate.net",
      icon: <Mic className="w-4 h-4" />,
    },
    {
      id: 4,
      category: "Consulting",
      count: 4,
      context: "Research Consultant at researchmate.net",
      icon: <Briefcase className="w-4 h-4" />,
    },
    {
      id: 5,
      category: "Management Consulting",
      count: 4,
      context: "Research Consultant at researchmate.net",
      icon: <Briefcase className="w-4 h-4" />,
    },
    {
      id: 6,
      category: "LinkedIn",
      count: 7,
      context: "LinkedIn Learning Session",
      icon: <Briefcase className="w-4 h-4" />,
    },
    {
      id: 7,
      category: "Farms",
      count: 6,
      context:
        "2 educational experiences at Bangladesh Agricultural University and 1 other school",
      icon: <Briefcase className="w-4 h-4" />,
    },
    {
      id: 8,
      category: "Sales and Marketing",
      count: 5,
      context: "Marketing Manager at Genesis Publishing Consortium Limited",
      icon: <Briefcase className="w-4 h-4" />,
    },
    {
      id: 9,
      category: "Marketing Analytics",
      count: 4,
      context: "Marketing Manager at Genesis Publishing Consortium Limited",
      icon: <Briefcase className="w-4 h-4" />,
    },
    {
      id: 10,
      category: "Pharmaceuticals",
      count: 3,
      context: "Microbiologist at FnF Pharmaceuticals Ltd.",
      icon: <Beaker className="w-4 h-4" />,
    },
    {
      id: 11,
      category: "Customer Satisfaction",
      count: 4,
      context: "Marketing Manager at Genesis Publishing Consortium Limited",
      icon: <Briefcase className="w-4 h-4" />,
    },
    {
      id: 12,
      category: "Sales",
      count: 2,
      context: "Marketing Manager at Genesis Publishing Consortium Limited",
      icon: <Briefcase className="w-4 h-4" />,
    },
    {
      id: 13,
      category: "Territory Management",
      count: 2,
      context: "Territory Sales Management",
      icon: <Briefcase className="w-4 h-4" />,
    },
    {
      id: 14,
      category: "Sales Management",
      count: 2,
      context: "Territory Sales Management",
      icon: <Briefcase className="w-4 h-4" />,
    },
    {
      id: 15,
      category: "Inventory Management",
      count: 2,
      context: "Inventory Management",
      icon: <Briefcase className="w-4 h-4" />,
    },
    {
      id: 16,
      category: "Data Collection",
      count: 2,
      context: "Mastering Data Collection with Kobo Toolbox & Google Forms",
      icon: <FileText className="w-4 h-4" />,
    },
    {
      id: 17,
      category: "Training",
      count: 2,
      context: "Training of Trainers",
      icon: <GraduationCap className="w-4 h-4" />,
    },
    {
      id: 18,
      category: "Marketing",
      count: 2,
      context: "Marketing Manager at Genesis Publishing Consortium Limited",
      icon: <Briefcase className="w-4 h-4" />,
    },
    {
      id: 19,
      category: "Cybersecurity",
      count: 2,
      context: "Introduction to Cyber Security",
      icon: <Briefcase className="w-4 h-4" />,
    },
    {
      id: 20,
      category: "Research Management",
      count: 3,
      context:
        "3 experiences at Bangladesh Institute of Innovative Health Research-BIIHR and 2 other companies",
      icon: <Microscope className="w-4 h-4" />,
    },
  ];

  const topEndorsements = endorsements.slice(0, 8);

  return (
    <section
      id="awards"
      className="py-16 md:py-24 bg-gradient-to-br from-gray-50 via-white to-indigo-50/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <SlideDown>
          <div className="flex items-center gap-3 sm:gap-4 mb-12">
            <div className="p-2.5 sm:p-3 bg-gradient-to-br from-indigo-600 to-indigo-800 rounded-2xl shadow-lg shadow-indigo-200 flex-shrink-0">
              <Award className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
                Honors & Awards
              </h2>
              <p className="text-gray-500 mt-1 text-sm sm:text-base">
                Recognitions and professional endorsements
              </p>
            </div>
          </div>
        </SlideDown>

        {/* Stats Summary */}
        <SlideUp>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            <div className="bg-white rounded-2xl p-5 text-center shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="text-3xl font-bold text-indigo-600">2</div>
              <div className="text-xs text-gray-500 uppercase tracking-wider mt-1">
                Awards & Fellowships
              </div>
            </div>
            <div className="bg-white rounded-2xl p-5 text-center shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="text-3xl font-bold text-indigo-600">20+</div>
              <div className="text-xs text-gray-500 uppercase tracking-wider mt-1">
                Endorsements
              </div>
            </div>
            <div className="bg-white rounded-2xl p-5 text-center shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="text-3xl font-bold text-indigo-600">50+</div>
              <div className="text-xs text-gray-500 uppercase tracking-wider mt-1">
                Total Endorsements
              </div>
            </div>
            <div className="bg-white rounded-2xl p-5 text-center shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="text-3xl font-bold text-indigo-600">15+</div>
              <div className="text-xs text-gray-500 uppercase tracking-wider mt-1">
                Companies Recognized
              </div>
            </div>
          </div>
        </SlideUp>

        {/* Tabs */}
        <div className="flex flex-wrap gap-3 mb-8">
          <button
            onClick={() => setActiveTab("awards")}
            className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
              activeTab === "awards"
                ? "bg-indigo-600 text-white shadow-lg shadow-indigo-200"
                : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-200"
            }`}
          >
            <Trophy className="w-4 h-4 inline mr-2" />
            Awards & Fellowships
          </button>
          <button
            onClick={() => setActiveTab("endorsements")}
            className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
              activeTab === "endorsements"
                ? "bg-indigo-600 text-white shadow-lg shadow-indigo-200"
                : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-200"
            }`}
          >
            <Users className="w-4 h-4 inline mr-2" />
            Endorsements
          </button>
        </div>

        {/* Awards Content */}
        {activeTab === "awards" && (
          <div className="grid md:grid-cols-2 gap-6">
            {awardsData.map((award, index) => {
              const AnimWrapper = index % 2 === 0 ? SlideLeft : SlideRight;
              const staggerDelay = Math.min(index + 1, 6);

              return (
                <AnimWrapper key={award.id} delay={staggerDelay}>
                  <div className="h-full bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                    <div
                      className={`bg-gradient-to-r ${award.color} p-5 text-white`}
                    >
                      <div className="flex flex-wrap items-start justify-between gap-2">
                        <div className="flex items-center gap-3 min-w-0">
                          <div className="p-2 bg-white/20 rounded-xl flex-shrink-0">
                            {award.icon}
                          </div>
                          <div className="min-w-0">
                            <h3 className="text-lg font-bold break-words">
                              {award.title}
                            </h3>
                            <div className="flex items-center gap-2 text-sm text-white/80 mt-0.5">
                              <Building2 className="w-3 h-3 flex-shrink-0" />
                              <span>{award.organization}</span>
                            </div>
                          </div>
                        </div>
                        <span className="bg-white/20 px-3 py-1 rounded-lg text-xs font-medium flex-shrink-0">
                          {award.type}
                        </span>
                      </div>
                    </div>

                    <div className="p-5">
                      <div className="flex flex-wrap items-center gap-2 text-sm text-gray-500 mb-3">
                        <Calendar className="w-4 h-4 text-indigo-500" />
                        <span>{award.date}</span>
                        <span className="text-gray-300">•</span>
                        <span className="text-indigo-600 font-medium">
                          {award.issuer}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {award.description}
                      </p>
                      <button className="mt-4 text-indigo-600 text-sm font-medium hover:text-indigo-700 transition-colors flex items-center gap-1">
                        View Details
                        <ExternalLink className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </AnimWrapper>
              );
            })}
          </div>
        )}

        {/* Endorsements Content */}
        {activeTab === "endorsements" && (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {topEndorsements.map((item, index) => (
                <SlideUp key={item.id} delay={Math.min(index + 1, 6)}>
                  <div className="h-full bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="p-2 bg-indigo-50 rounded-xl text-indigo-600 flex-shrink-0">
                          {item.icon}
                        </div>
                        <div className="min-w-0">
                          <h3 className="font-semibold text-gray-800 text-sm">
                            {item.category}
                          </h3>
                          <p className="text-xs text-gray-500 truncate max-w-[140px] sm:max-w-[180px]">
                            {item.context}
                          </p>
                        </div>
                      </div>
                      <div className="bg-indigo-100 text-indigo-700 text-xs font-bold px-2.5 py-1 rounded-full flex-shrink-0">
                        {item.count}
                      </div>
                    </div>
                    <div className="mt-3 flex items-center gap-2 text-xs text-gray-400">
                      <Users className="w-3 h-3" />
                      <span>
                        {item.count}{" "}
                        {item.count === 1 ? "endorsement" : "endorsements"} in
                        the last 6 months
                      </span>
                    </div>
                  </div>
                </SlideUp>
              ))}
            </div>

            <div className="mt-6 text-center">
              <button className="text-indigo-600 text-sm font-medium hover:text-indigo-700 transition-colors flex items-center gap-1 mx-auto">
                View All {endorsements.length} Endorsements
                <ExternalLink className="w-3 h-3" />
              </button>
            </div>
          </div>
        )}

        {/* Skills Summary */}
        <SlideUp className="mt-10">
          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <Sparkles className="w-5 h-5 text-indigo-600" />
              <h3 className="text-lg font-bold text-gray-900">
                Key Skills & Expertise
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {[
                "Research Management",
                "Higher Education Teaching",
                "Consulting",
                "Marketing Analytics",
                "Sales Management",
                "Territory Management",
                "Data Collection",
                "Training",
                "Cybersecurity",
                "Digital Marketing",
                "Research and Development",
                "Veterinary Public Health",
                "Molecular Microbiology",
                "Bacterial Culture",
                "Polymerase Chain Reaction (PCR)",
                "Academic Writing",
                "Content Development",
                "Project Management",
              ].map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1.5 bg-gradient-to-r from-indigo-50 to-indigo-100 text-indigo-700 text-sm font-medium rounded-full border border-indigo-100 hover:shadow-md transition-shadow"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </SlideUp>
      </div>
    </section>
  );
}
