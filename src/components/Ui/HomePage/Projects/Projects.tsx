"use client";

import {
  TestTube,
  Calendar,
  Award,
  Users,
  FileText,
  ExternalLink,
  Microscope,
  Beaker,
  Dna,
  FlaskConical,
  Building2,
  CheckCircle,
  ArrowRight,
  Clock,
} from "lucide-react";
import { useState } from "react";

export default function Projects() {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const projectsData = [
    {
      id: 1,
      title:
        "Sero-prevalence and molecular detection of Brucella spp. in Bangladesh",
      period: "Dec 2021 – Dec 2023",
      organization: "Bangladesh Agricultural University",
      description:
        "The project is funded by Bangladesh Agricultural University Research Information System (BAURES). We collect sero sample from 4 districts of Bangladesh and screening by ELISA. Positive samples were grown in the media and confirmed by PCR.",
      funding:
        "BAURES (Bangladesh Agricultural University Research Information System)",
      role: "Research Assistant",
      technologies: [
        "Bacterial Culture",
        "Molecular Microbiology",
        "ELISA",
        "PCR",
        "Serology",
        "Sample Collection",
        "Data Analysis",
        "Laboratory Management",
      ],
      outcome:
        "Successfully screened samples from 4 districts and identified Brucella spp. prevalence through ELISA and PCR confirmation.",
      color: "from-blue-500 to-indigo-500",
      bgColor: "bg-blue-50",
      icon: <Microscope className="w-5 h-5" />,
    },
    {
      id: 2,
      title:
        "Detection and molecular characterization of antimicrobial resistant bacteria in food and animal origin",
      period: "Jan 2022 – Jun 2022",
      organization: "Bangladesh Agricultural University",
      description:
        "This project was aided by the Ministry of Education (MoE). I assisted the AMR Staphylococcus aureus bacteria, isolated from table egg in Mymensingh district.",
      funding: "Ministry of Education (MoE), Bangladesh",
      role: "Research Assistant",
      technologies: [
        "Bacterial Culture",
        "Molecular Microbiology",
        "Antimicrobial Resistance (AMR)",
        "Staphylococcus aureus",
        "Isolation",
        "Characterization",
        "Food Safety",
        "Microbiology",
      ],
      outcome:
        "Successfully isolated and characterized AMR Staphylococcus aureus from table eggs in Mymensingh district.",
      color: "from-emerald-500 to-teal-500",
      bgColor: "bg-emerald-50",
      icon: <Beaker className="w-5 h-5" />,
    },
  ];

  const toggleProject = (id: number) => {
    setExpandedProject(expandedProject === id ? null : id);
  };

  return (
    <section
      id="projects"
      className="py-16 md:py-24 bg-gradient-to-br from-gray-50 via-white to-indigo-50/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-12">
          <div className="p-3 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl shadow-lg shadow-indigo-200">
            <TestTube className="w-8 h-8 text-white" />
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Research Projects
            </h2>
            <p className="text-gray-500 mt-1">
              Contributing to scientific advancement
            </p>
          </div>
        </div>

        {/* Stats Summary */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          <div className="bg-white rounded-2xl p-5 text-center shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="text-3xl font-bold text-indigo-600">2</div>
            <div className="text-xs text-gray-500 uppercase tracking-wider mt-1">
              Active Projects
            </div>
          </div>
          <div className="bg-white rounded-2xl p-5 text-center shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="text-3xl font-bold text-indigo-600">3+</div>
            <div className="text-xs text-gray-500 uppercase tracking-wider mt-1">
              Years Research
            </div>
          </div>
          <div className="bg-white rounded-2xl p-5 text-center shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="text-3xl font-bold text-indigo-600">10+</div>
            <div className="text-xs text-gray-500 uppercase tracking-wider mt-1">
              Skills Applied
            </div>
          </div>
          <div className="bg-white rounded-2xl p-5 text-center shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="text-3xl font-bold text-indigo-600">2</div>
            <div className="text-xs text-gray-500 uppercase tracking-wider mt-1">
              Funding Agencies
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className={`bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden ${
                expandedProject === project.id
                  ? "ring-2 ring-indigo-300 shadow-xl"
                  : ""
              }`}
            >
              {/* Card Header with Gradient */}
              <div
                className={`bg-gradient-to-r ${project.color} p-4 text-white`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-white/20 rounded-xl">
                      {project.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold">{project.title}</h3>
                      <div className="flex items-center gap-2 text-sm text-white/80 mt-0.5">
                        <Building2 className="w-3 h-3" />
                        <span>{project.organization}</span>
                      </div>
                    </div>
                  </div>
                  <span className="bg-white/20 px-2 py-1 rounded-lg text-xs font-medium">
                    {project.role}
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-5">
                {/* Duration & Funding */}
                <div className="flex flex-wrap items-center gap-3 mb-3 text-sm">
                  <div className="flex items-center gap-1.5 text-gray-500">
                    <Calendar className="w-4 h-4 text-indigo-500" />
                    <span>{project.period}</span>
                  </div>
                  <span className="text-gray-300">|</span>
                  <div className="flex items-center gap-1.5 text-gray-500">
                    <Award className="w-4 h-4 text-indigo-500" />
                    <span className="truncate max-w-[200px]">
                      {project.funding}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-600 leading-relaxed line-clamp-2">
                  {project.description}
                </p>

                {/* Skills/Technologies Preview */}
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {project.technologies.slice(0, 4).map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-0.5 bg-indigo-50 text-indigo-700 text-xs font-medium rounded-full border border-indigo-100"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2.5 py-0.5 text-gray-400 text-xs font-medium">
                      +{project.technologies.length - 4} more
                    </span>
                  )}
                </div>

                {/* Expand Button */}
                <button
                  onClick={() => toggleProject(project.id)}
                  className="mt-4 w-full py-2 bg-gray-50 hover:bg-indigo-50 text-gray-600 hover:text-indigo-700 text-sm font-medium rounded-xl transition-colors flex items-center justify-center gap-2"
                >
                  {expandedProject === project.id
                    ? "Show Less"
                    : "View Details"}
                  <ArrowRight
                    className={`w-4 h-4 transition-transform ${expandedProject === project.id ? "rotate-90" : ""}`}
                  />
                </button>

                {/* Expanded Content */}
                {expandedProject === project.id && (
                  <div className="mt-4 pt-4 border-t border-gray-100 space-y-4 animate-fade-in">
                    {/* Full Description */}
                    <div>
                      <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider flex items-center gap-2">
                        <FileText className="w-3 h-3" />
                        Description
                      </h4>
                      <p className="text-sm text-gray-700 mt-1 leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* All Skills */}
                    <div>
                      <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider flex items-center gap-2">
                        <Beaker className="w-3 h-3" />
                        Skills & Technologies
                      </h4>
                      <div className="flex flex-wrap gap-1.5 mt-1.5">
                        {project.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-2.5 py-1 bg-indigo-50 text-indigo-700 text-xs font-medium rounded-full border border-indigo-100"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Outcome */}
                    <div>
                      <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider flex items-center gap-2">
                        <CheckCircle className="w-3 h-3" />
                        Outcome
                      </h4>
                      <p className="text-sm text-gray-700 mt-1 leading-relaxed">
                        {project.outcome}
                      </p>
                    </div>

                    {/* View Details Link */}
                    <div className="pt-2">
                      <button className="text-indigo-600 text-sm font-medium hover:text-indigo-700 transition-colors flex items-center gap-1">
                        View Full Project
                        <ExternalLink className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white shadow-xl">
            <h3 className="text-2xl font-bold mb-2">
              Interested in Collaboration?
            </h3>
            <p className="text-indigo-100 max-w-2xl mx-auto">
              I'm always open to new research collaborations and projects. Let's
              work together to advance scientific knowledge.
            </p>
            <button className="mt-4 px-6 py-3 bg-white text-indigo-700 font-semibold rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2 mx-auto">
              <Users className="w-4 h-4" />
              Let's Connect
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
