"use client";

import {
  Briefcase,
  MapPin,
  Calendar,
  Award,
  ExternalLink,
  Users,
  Building2,
  Clock,
  Star,
} from "lucide-react";
import { useState } from "react";

export default function Experiences() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const experienceData = [
    {
      id: 1,
      title: "Senior Research Assistant",
      organization: "Bangladesh Institute of Innovative Health Research-BIIHR",
      period: "Apr 2026 - Present · 4 mos",
      type: "Part-time",
      location: "Remote",
      description:
        "Assisted in literature reviews, study design, data collection and analysis, research documentation, manuscript preparation, and project coordination while ensuring research quality and ethical compliance.",
      skills: ["Project Management"],
      color: "from-emerald-500 to-teal-500",
      bgColor: "bg-emerald-50",
    },
    {
      id: 2,
      title: "Instructor",
      organization: "Bangladesh Institute of Innovative Health Research-BIIHR",
      period: "Jul 2025 - Present · 1 yr 1 mo",
      type: "Contract",
      location: "Remote",
      description:
        "Deliver online training on research methodology, research ethics, informed consent, data collection, research profile development (ORCID, Google Scholar, ResearchGate), academic CV writing, and research communication. Mentor students and early-career researchers through practical, interactive sessions to strengthen research skills, academic writing, and professional development.",
      skills: [
        "Training",
        "Research Methodology",
        "Academic Writing",
        "Mentoring",
      ],
      color: "from-blue-500 to-indigo-500",
      bgColor: "bg-blue-50",
    },
    {
      id: 3,
      title: "Research Assistant",
      organization:
        "Bangladesh Institute of Innovative Health Research - BIIHR",
      period: "Oct 2024 - Mar 2026 · 1 yr 6 mos",
      type: "Part-time",
      location: "Dhaka, Bangladesh",
      description:
        "Bangladesh Institute of Innovative Health Research - BIIHR is an emerging research center in Bangladesh that was formed to cultivate a strong research culture, particularly among undergraduate students. BIIHR has started its journey on 23 November 2023. BIIHR is dedicated to arranging effective research-related training programs for undergraduate students. BIIHR also provides help with thesis writing, Research Proposal writing, Manuscript Writing, Data Collection and Data Analysis as well.",
      skills: [
        "Research and Development (R&D)",
        "Veterinary Public Health",
        "Data Analysis",
        "Thesis Writing",
      ],
      color: "from-cyan-500 to-blue-500",
      bgColor: "bg-cyan-50",
    },
    {
      id: 4,
      title: "Research Consultant",
      organization: "researchmate.net · Freelance",
      period: "Nov 2025 - Present · 9 mos",
      type: "Freelance",
      location: "Remote",
      description:
        "Contribute to strengthening the research ecosystem through active collaboration with universities, research institutions, and academic communities. The role involves conducting high-impact online and offline workshops on research methodology, scientific writing, and academic development, while promoting Researchmate.net as a comprehensive research support platform. Responsibilities also include researcher engagement, community building, real-time platform onboarding, and supporting subscriber growth, aligning with Researchmate's mission of empowering researchers and fostering nationwide academic collaboration.",
      skills: [
        "University Lecturing",
        "Higher Education Teaching",
        "Workshop Facilitation",
        "Community Building",
      ],
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50",
    },
    {
      id: 5,
      title: "Marketing Manager",
      organization: "Genesis Publishing Consortium Limited · Freelance",
      period: "Aug 2024 - Mar 2026 · 1 yr 8 mos",
      type: "Freelance",
      location: "Jessore, Khulna, Bangladesh · Hybrid",
      description:
        "As the Marketing Manager of Genesis Publishing Consortium Limited (GPCL), excels in enhancing the journal's visibility and engagement through strategic marketing initiatives. Develops and executes comprehensive campaigns, manages digital and social media presence, and builds key academic relationships to attract high-quality submissions. Committed to fostering innovation and integrating sustainable practices into the journal's outreach efforts.",
      skills: [
        "Sales and Marketing",
        "Social Media Marketing",
        "Digital Marketing",
        "Campaign Management",
        "Academic Relations",
        "Brand Management",
      ],
      color: "from-orange-500 to-amber-500",
      bgColor: "bg-orange-50",
    },
    {
      id: 6,
      title: "Value Chain Facilitator (Livestock Service Market Development)",
      organization: "WAVE Foundation · Contract",
      period: "Aug 2025 - Feb 2026 · 7 mos",
      type: "Contract",
      location: "Chuadanga, Jhenaidah, Meherpur · On-site",
      description:
        "Provide technical assistance to household level farms, organize animal vaccine and health camp at field level, provide training for staff and farmers, data management at central level, knowledge gathering in organization level regarding animal insurance. Prepare project report, case studies and document of best practice. Liaison with Upazilla and District livestock office, BLRI and different research organization.",
      skills: [
        "Project Management",
        "Vaccinations",
        "Animal Health",
        "Data Management",
        "Training",
      ],
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
    },
    {
      id: 7,
      title: "Microbiologist",
      organization: "FnF Pharmaceuticals Ltd. · Full-time",
      period: "May 2023 - Nov 2024 · 1 yr 7 mos",
      type: "Full-time",
      location: "Bangladesh · On-site",
      description:
        "Development of viral animal vaccines from local isolate; Ensure quality of prepared vaccine by following OIE manual; Development of working seed from master seed of vaccines.",
      skills: [
        "Research and Development (R&D)",
        "Sterility Assurance",
        "Vaccine Development",
        "Quality Assurance",
        "Microbiology",
        "Laboratory Management",
        "Animal Health",
        "Regulatory Compliance",
      ],
      color: "from-red-500 to-rose-500",
      bgColor: "bg-red-50",
    },
    {
      id: 8,
      title: "Student Member",
      organization: "American Society for Microbiology · Part-time",
      period: "Dec 2017 - Oct 2024 · 6 yrs 11 mos",
      type: "Part-time",
      location: "Remote",
      description:
        "Global Outreach - Contributing Member. Active participation in ASM activities and global outreach programs.",
      skills: ["Medical Microbiology", "Microbiology", "Global Outreach"],
      color: "from-indigo-500 to-purple-500",
      bgColor: "bg-indigo-50",
    },
    {
      id: 9,
      title: "Research Assistant",
      organization:
        "Bangladesh Agricultural University Research System (BAURES) · Full-time",
      period: "Sep 2021 - Jul 2023 · 1 yr 11 mos",
      type: "Full-time",
      location: "Mymensingh, Bangladesh · On-site",
      description:
        "Research assistantship at BAURES, contributing to various research projects and academic activities.",
      skills: [
        "Research and Development (R&D)",
        "Academic Writing",
        "Research Methodology",
        "Data Analysis",
      ],
      color: "from-teal-500 to-cyan-500",
      bgColor: "bg-teal-50",
    },
    {
      id: 10,
      title: "Founder",
      organization: "University Notes",
      period: "Apr 2013 - Jul 2022 · 9 yrs 4 mos",
      type: "Founder",
      location: "Remote",
      description:
        "University Notes, founded and designed, serves as a curated collection of significant notes from my journey as a DVM student. Originating in 2017 during my second year of the DVM program, it has evolved into a valuable resource encapsulating key insights and knowledge garnered throughout my academic pursuit. A curated collection of notes from Medical Science, Veterinary Science, Engineering, Basic Science, Arts & Humanities, Business Administration and all.",
      skills: [
        "Content Development",
        "Academic Writing",
        "Content Management",
        "Web Design",
      ],
      color: "from-amber-500 to-yellow-500",
      bgColor: "bg-amber-50",
    },
    {
      id: 11,
      title: "Content Moderator",
      organization: "10 Minute School · Part-time",
      period: "Sep 2021 - Feb 2022 · 6 mos",
      type: "Part-time",
      location: "Remote",
      description:
        "Moderation of posters related to BCS, questions, write explanations of questions.",
      skills: ["Content Management", "Microsoft Excel", "Question Analysis"],
      color: "from-sky-500 to-blue-500",
      bgColor: "bg-sky-50",
    },
    {
      id: 12,
      title: "Local Veterinary Public Health Officer",
      organization: "International Veterinary Students' Association",
      period: "Oct 2017 - Nov 2018 · 1 yr 2 mos",
      type: "Volunteer",
      location: "Bangladesh",
      description:
        "Standing Committee of One Health. Focused on Veterinary Public Health initiatives.",
      skills: ["Veterinary Public Health", "One Health", "Public Health"],
      color: "from-rose-500 to-pink-500",
      bgColor: "bg-rose-50",
    },
  ];

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  // Calculate total experience
  const totalExperience = experienceData.length;
  const currentRoles = experienceData.filter((e) =>
    e.period.includes("Present"),
  ).length;

  return (
    <section
      id="experience"
      className="py-16 md:py-24 bg-gradient-to-br from-white via-gray-50 to-indigo-50/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-12">
          <div className="p-3 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl shadow-lg shadow-indigo-200">
            <Briefcase className="w-8 h-8 text-white" />
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Professional Experience
            </h2>
            <p className="text-gray-500 mt-1">
              12+ years of diverse professional journey
            </p>
          </div>
        </div>

        {/* Stats Summary */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          <div className="bg-white rounded-2xl p-4 text-center shadow-sm border border-gray-100">
            <div className="text-2xl font-bold text-indigo-600">
              {totalExperience}
            </div>
            <div className="text-xs text-gray-500 uppercase tracking-wider">
              Total Roles
            </div>
          </div>
          <div className="bg-white rounded-2xl p-4 text-center shadow-sm border border-gray-100">
            <div className="text-2xl font-bold text-indigo-600">
              {currentRoles}
            </div>
            <div className="text-xs text-gray-500 uppercase tracking-wider">
              Current Roles
            </div>
          </div>
          <div className="bg-white rounded-2xl p-4 text-center shadow-sm border border-gray-100">
            <div className="text-2xl font-bold text-indigo-600">12+</div>
            <div className="text-xs text-gray-500 uppercase tracking-wider">
              Organizations
            </div>
          </div>
          <div className="bg-white rounded-2xl p-4 text-center shadow-sm border border-gray-100">
            <div className="text-2xl font-bold text-indigo-600">40+</div>
            <div className="text-xs text-gray-500 uppercase tracking-wider">
              Skills
            </div>
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-[19px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-200 via-indigo-300 to-indigo-200 hidden md:block" />

          <div className="space-y-6">
            {experienceData.map((exp, index) => (
              <div key={exp.id} className="relative md:flex md:gap-6 group">
                {/* Timeline Dot */}
                <div className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 text-white font-bold text-sm shadow-lg shadow-indigo-200 flex-shrink-0 mt-1 z-10">
                  {index + 1}
                </div>

                {/* Mobile Dot */}
                <div className="md:hidden absolute left-0 top-1 w-3 h-3 rounded-full bg-indigo-500" />

                {/* Content Card */}
                <div className="md:flex-1 ml-8 md:ml-0">
                  <div
                    className={`bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer ${
                      expandedId === exp.id
                        ? "ring-2 ring-indigo-300 shadow-xl"
                        : ""
                    }`}
                    onClick={() => toggleExpand(exp.id)}
                  >
                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span
                            className={`text-xs font-bold px-3 py-1 rounded-full bg-gradient-to-r ${exp.color} text-white uppercase tracking-wider`}
                          >
                            {exp.type}
                          </span>
                          <span className="text-xs font-medium text-gray-400 flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {exp.period}
                          </span>
                        </div>

                        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mt-2">
                          {exp.title}
                        </h3>

                        <div className="flex items-center gap-3 mt-1 flex-wrap">
                          <div className="flex items-center gap-1.5">
                            <Building2 className="w-4 h-4 text-indigo-500" />
                            <p className="text-indigo-700 font-medium text-sm">
                              {exp.organization}
                            </p>
                          </div>
                          {exp.location && (
                            <>
                              <span className="text-gray-300">|</span>
                              <div className="flex items-center gap-1.5">
                                <MapPin className="w-3.5 h-3.5 text-gray-400" />
                                <p className="text-gray-500 text-sm">
                                  {exp.location}
                                </p>
                              </div>
                            </>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 text-sm mt-3 leading-relaxed line-clamp-2">
                      {exp.description}
                    </p>

                    {/* Skills Preview */}
                    {exp.skills && exp.skills.length > 0 && (
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {exp.skills.slice(0, 3).map((skill, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-0.5 bg-indigo-50 text-indigo-700 text-xs font-medium rounded-full border border-indigo-100"
                          >
                            {skill}
                          </span>
                        ))}
                        {exp.skills.length > 3 && (
                          <span className="px-2 py-0.5 text-gray-400 text-xs font-medium">
                            +{exp.skills.length - 3} more
                          </span>
                        )}
                      </div>
                    )}

                    {/* Expand Indicator */}
                    <div className="mt-3 flex items-center gap-2 text-xs text-gray-400">
                      <span className="text-indigo-400">Click to expand</span>
                      <span className="text-indigo-300 text-sm">
                        {expandedId === exp.id ? "−" : "+"}
                      </span>
                    </div>

                    {/* Expanded Content */}
                    {expandedId === exp.id && (
                      <div className="mt-4 pt-4 border-t border-gray-100 space-y-4 animate-fade-in">
                        {/* Full Description */}
                        <div>
                          <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider flex items-center gap-2">
                            <Award className="w-3 h-3" />
                            Description
                          </h4>
                          <p className="text-sm text-gray-700 mt-1 leading-relaxed">
                            {exp.description}
                          </p>
                        </div>

                        {/* All Skills */}
                        {exp.skills && exp.skills.length > 0 && (
                          <div>
                            <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider flex items-center gap-2">
                              <Star className="w-3 h-3" />
                              Skills
                            </h4>
                            <div className="flex flex-wrap gap-1.5 mt-1.5">
                              {exp.skills.map((skill, idx) => (
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
