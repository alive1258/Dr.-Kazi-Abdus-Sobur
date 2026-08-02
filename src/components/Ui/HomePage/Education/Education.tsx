"use client";

import {
  GraduationCap,
  Calendar,
  Award,
  BookOpen,
  Building2,
  ExternalLink,
} from "lucide-react";
import { useState } from "react";
import SlideDown from "@/src/components/Common/Animaation/SlideDown";
import SlideUp from "@/src/components/Common/Animaation/SlideUp";

export default function Education() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const educationData = [
    {
      id: 1,
      degree: "MS in Microbiology",
      specialization: "Veterinary Microbiology and Immunobiology",
      university: "Bangladesh Agricultural University",
      universityLogo: "BAU",
      year: "Apr 2021 – Mar 2023",
      grade: "CGPA: 3.547",
      activities: "Research Assistantship at BAURES",
      skills: [
        "Polymerase Chain Reaction (PCR)",
        "Sterility Assurance",
        "Research Methodology",
        "Microbiology Techniques",
        "Immunology",
        "Laboratory Management",
        "Data Analysis",
        "Scientific Writing",
        "Veterinary Microbiology",
      ],
      type: "Master's",
      color: "from-indigo-500 to-indigo-600",
      bgColor: "bg-indigo-50",
    },
    {
      id: 2,
      degree: "Doctor of Veterinary Medicine (DVM)",
      specialization: "Veterinary Sciences/Veterinary Clinical Sciences",
      university: "Sher-e-Bangla Agricultural University",
      universityLogo: "SAU",
      year: "2013 – 2018",
      grade: "CGPA: 3.54",
      activities: "Clinical Training & Veterinary Practice",
      skills: [
        "Veterinary Pathology",
        "Analytical Skills",
        "Clinical Diagnosis",
        "Animal Health",
        "Veterinary Medicine",
        "Surgery",
        "Pharmacology",
        "Epidemiology",
        "Public Health",
        "Research",
        "Communication",
        "Team Leadership",
        "Problem Solving",
        "Time Management",
        "Critical Thinking",
        "Adaptability",
        "Veterinary Anatomy",
        "Physiology",
        "Parasitology",
        "Microbiology",
        "Immunology",
        "Toxicology",
        "Nutrition",
        "Reproduction",
        "Animal Welfare",
        "Disease Control",
        "Zoonosis",
        "Vaccination",
        "Therapeutics",
        "Clinical Skills",
      ],
      type: "Doctorate",
      color: "from-indigo-600 to-indigo-700",
      bgColor: "bg-indigo-100",
    },
    {
      id: 3,
      degree: "Higher Secondary Certificate (HSC)",
      specialization: "Science",
      university: "Jhenidah Govt. KC College",
      universityLogo: "KC College",
      year: "2010 – 2012",
      grade: "GPA: 5.00 (Equivalent to A Level)",
      activities: "Science Olympiad Participant",
      skills: ["Academic Writing", "Analytical Thinking", "Science Foundation"],
      type: "Higher Secondary",
      color: "from-indigo-400 to-indigo-500",
      bgColor: "bg-indigo-50",
    },
    {
      id: 4,
      degree: "Leadership in 21st Century Organizations",
      specialization: "Organizational Leadership",
      university: "Coursera",
      universityLogo: "Coursera",
      year: "2023",
      grade: "Certificate",
      activities: "Online Learning",
      skills: ["Leadership", "Organizational Behavior", "Strategic Thinking"],
      type: "Certificate",
      color: "from-indigo-700 to-indigo-800",
      bgColor: "bg-indigo-100",
    },
    {
      id: 5,
      degree: "Biochemistry and Molecular Biology",
      specialization: "Advanced Biochemistry",
      university: "edX",
      universityLogo: "edX",
      year: "2023",
      grade: "Certificate",
      activities: "Online Learning",
      skills: ["Biochemistry", "Molecular Biology", "Genetics"],
      type: "Certificate",
      color: "from-indigo-500 to-indigo-800",
      bgColor: "bg-indigo-50",
    },
  ];

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section
      id="education"
      className="py-16 md:py-24 bg-gradient-to-br from-gray-50 via-white to-indigo-50/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <SlideDown className="flex items-center gap-4 mb-10 md:mb-12">
          <div className="p-3 bg-gradient-to-br from-indigo-500 to-indigo-700 rounded-2xl shadow-lg shadow-indigo-200">
            <GraduationCap className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
          </div>
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
              Education
            </h2>
            <p className="text-gray-500 mt-1">
              Academic journey & continuous learning
            </p>
          </div>
        </SlideDown>

        {/* Education Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-[19px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-200 via-indigo-300 to-indigo-200 hidden md:block" />

          <div className="space-y-6">
            {educationData.map((edu, index) => (
              <SlideUp
                key={edu.id}
                delay={Math.min(index + 1, 6)}
                className="relative md:flex md:gap-6 group"
              >
                {/* Timeline Dot */}
                <div className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-indigo-700 text-white font-bold text-sm shadow-lg shadow-indigo-200 flex-shrink-0 mt-1 z-10">
                  {index + 1}
                </div>

                {/* Mobile Dot */}
                <div className="md:hidden absolute left-0 top-1 w-3 h-3 rounded-full bg-indigo-500" />

                {/* Content Card */}
                <div className="md:flex-1 ml-8 md:ml-0">
                  <div
                    className={`bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer ${
                      expandedId === edu.id
                        ? "ring-2 ring-indigo-300 shadow-xl"
                        : ""
                    }`}
                    onClick={() => toggleExpand(edu.id)}
                  >
                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 flex-wrap">
                          <span
                            className={`text-xs font-bold px-3 py-1 rounded-full bg-gradient-to-r ${edu.color} text-white uppercase tracking-wider`}
                          >
                            {edu.type}
                          </span>
                          <span className="text-xs font-medium text-gray-400 flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {edu.year}
                          </span>
                        </div>

                        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mt-2">
                          {edu.degree}
                        </h3>

                        {edu.specialization && (
                          <p className="text-sm text-gray-600 font-medium mt-0.5">
                            {edu.specialization}
                          </p>
                        )}

                        <div className="flex items-center gap-2 mt-1">
                          <Building2 className="w-4 h-4 text-indigo-500" />
                          <p className="text-indigo-700 font-medium text-sm">
                            {edu.university}
                          </p>
                        </div>
                      </div>

                      {/* Grade Badge */}
                      <div className="flex-shrink-0">
                        <div
                          className={`px-3 py-1.5 rounded-xl bg-gradient-to-r ${edu.color} text-white text-sm font-bold shadow-sm`}
                        >
                          {edu.grade}
                        </div>
                      </div>
                    </div>

                    {/* Expand Indicator */}
                    <div className="mt-3 flex items-center gap-2 text-xs text-gray-400">
                      <span className="text-indigo-400">Click to expand</span>
                      <span className="text-indigo-300 text-sm">
                        {expandedId === edu.id ? "−" : "+"}
                      </span>
                    </div>

                    {/* Expanded Content */}
                    {expandedId === edu.id && (
                      <div className="mt-4 pt-4 border-t border-gray-100 space-y-4 animate-fade-in">
                        {/* Activities */}
                        {edu.activities && (
                          <div>
                            <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider flex items-center gap-2">
                              <BookOpen className="w-3 h-3" />
                              Activities & Societies
                            </h4>
                            <p className="text-sm text-gray-700 mt-1">
                              {edu.activities}
                            </p>
                          </div>
                        )}

                        {/* Skills */}
                        {edu.skills && edu.skills.length > 0 && (
                          <div>
                            <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider flex items-center gap-2">
                              <Award className="w-3 h-3" />
                              Skills & Expertise
                            </h4>
                            <div className="flex flex-wrap gap-1.5 mt-1.5">
                              {edu.skills.map((skill, idx) => (
                                <span
                                  key={idx}
                                  className="px-2.5 py-1 bg-indigo-50 text-indigo-700 text-xs font-medium rounded-full border border-indigo-100"
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* View Details Link */}
                        <div className="pt-2">
                          <button className="text-indigo-600 text-sm font-medium hover:text-indigo-700 transition-colors flex items-center gap-1">
                            View Details
                            <ExternalLink className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </SlideUp>
            ))}
          </div>
        </div>

        {/* Education Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          <SlideUp delay={1}>
            <div className="bg-white rounded-2xl p-5 text-center shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="text-2xl sm:text-3xl font-bold text-indigo-600">
                {educationData.length}
              </div>
              <div className="text-xs text-gray-500 uppercase tracking-wider mt-1">
                Degrees & Certificates
              </div>
            </div>
          </SlideUp>
          <SlideUp delay={2}>
            <div className="bg-white rounded-2xl p-5 text-center shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="text-2xl sm:text-3xl font-bold text-indigo-600">
                3
              </div>
              <div className="text-xs text-gray-500 uppercase tracking-wider mt-1">
                Universities
              </div>
            </div>
          </SlideUp>
          <SlideUp delay={3}>
            <div className="bg-white rounded-2xl p-5 text-center shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="text-2xl sm:text-3xl font-bold text-indigo-600">
                40+
              </div>
              <div className="text-xs text-gray-500 uppercase tracking-wider mt-1">
                Skills Acquired
              </div>
            </div>
          </SlideUp>
          <SlideUp delay={4}>
            <div className="bg-white rounded-2xl p-5 text-center shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="text-2xl sm:text-3xl font-bold text-indigo-600">
                10+
              </div>
              <div className="text-xs text-gray-500 uppercase tracking-wider mt-1">
                Years of Study
              </div>
            </div>
          </SlideUp>
        </div>
      </div>
    </section>
  );
}
