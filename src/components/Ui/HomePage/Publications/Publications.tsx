"use client";

import {
  Microscope,
  BookOpen,
  FileText,
  Users,
  Award,
  Calendar,
  ExternalLink,
  Quote,
  Star,
  Library,
  Globe,
  MapPin,
  GraduationCap,
  Heart,
  Activity,
  Beaker,
  AlertCircle,
  ChevronDown,
  ChevronUp,
  Filter,
} from "lucide-react";
import { useState } from "react";

export default function Publications() {
  const [showAllPublications, setShowAllPublications] = useState(false);
  const [selectedYear, setSelectedYear] = useState("all");

  const researchStats = {
    publications: 39,
    reads: 8179,
    citations: 96,
    hIndex: 5,
  };

  const skills = [
    "Agricultural Microbiology",
    "Clinical Epidemiology",
    "Molecular Biology",
    "Environment",
    "Veterinary Public Health",
    "One Health",
    "Antimicrobial Resistance",
    "Vaccine Development",
    "Zoonotic Diseases",
  ];

  const publicationAreas = [
    { name: "One Health", count: 8, icon: <Heart className="w-4 h-4" /> },
    {
      name: "Zoonotic Diseases",
      count: 7,
      icon: <AlertCircle className="w-4 h-4" />,
    },
    {
      name: "Veterinary Science",
      count: 6,
      icon: <Activity className="w-4 h-4" />,
    },
    { name: "Food Safety", count: 5, icon: <Beaker className="w-4 h-4" /> },
  ];

  // All publications from your profile
  const allPublications = [
    {
      title:
        "Optimizing Growth Performance in New Zealand White Rabbits: The Effects of Varying Energy and Protein Levels",
      journal: "Punjab University Journal of Zoology",
      date: "May 2026",
      authors: [
        "Muhammad Boni Amin",
        "Muhammad Ruhul Amin",
        "Kazi Abdus Sobur",
        "A.A. Jabir",
      ],
      type: "Article",
      fullText: true,
    },
    {
      title:
        "Relational governance, farmer satisfaction and contract continuity in broiler supply chains in Northern Bangladesh",
      journal: "Contract Farming Journal",
      date: "May 2026",
      authors: [
        "Md. Asib Abdullah Al Razi",
        "Farzana Yeasmin",
        "Kazi Abdus Sobur",
      ],
      type: "Article",
      fullText: true,
    },
    {
      title:
        "Determinants of Health‐Seeking Behavior and Quality of Life in Patients With Noncommunicable Diseases in Bangladesh",
      journal: "Public Health Challenges",
      date: "Apr 2026",
      authors: [
        "Kazi Abdus Sobur",
        "Md. Faisal Ahmed",
        "Gazi Mahjabin Islam",
        "Saiyada Hossain Saima",
      ],
      type: "Article",
      fullText: true,
    },
    {
      title:
        "Fertilizing the future without polluting it: Rethinking chemical inputs and advancing sustainable nutrient management",
      journal: "Journal of Bioscience and Environment Research",
      date: "Jan 2026",
      authors: ["Palash Bose", "Kazi Abdus Sobur"],
      type: "Article",
      fullText: true,
    },
    {
      title:
        "Harnessing CRISPR Genome Editing for Sustainable Agriculture, Livestock and Food Security",
      journal: "Archives of Current Research International",
      date: "Oct 2025",
      authors: [
        "Shyam Shaha",
        "Md. Mosharraf Hossen",
        "Anwar Hossain Rana",
        "Partha Pratim Ghosh",
      ],
      type: "Article",
      fullText: true,
    },
    {
      title:
        "Forest fire detection: Advanced technologies for protect global ecosystems",
      journal: "Environmental Science Journal",
      date: "Sep 2025",
      authors: ["Kazi Abdus Sobur", "Partha Pratim Ghosh"],
      type: "Article",
      fullText: true,
    },
    {
      title:
        "Environmental Impact of Poultry Waste Management Practices in Jhenaidah, Bangladesh",
      journal: "American Journal of Environment and Climate",
      date: "Aug 2025",
      authors: [
        "Bristi Devnath",
        "Anwar Hossain Rana",
        "A.S.M. Mohiuddin",
        "Biplob Kumar Sarker",
      ],
      type: "Article",
      fullText: true,
    },
    {
      title:
        "Nutritional value, probiotic potential and health benefits of traditional fermented dairy foods, Dahi and Yogurt: A comprehensive review",
      journal: "Journal of Bioscience and Environment Research",
      date: "Aug 2025",
      authors: [
        "Debasree Saha",
        "Kazi Abdus Sobur",
        "Md. Al-Amin Sarker",
        "Rayhan Ahmmed Pranto",
      ],
      type: "Review",
      fullText: true,
    },
    {
      title:
        "Ice Cream in Bangladesh: Nutritional, Industry and Health Implications",
      journal: "European Journal of Nutrition & Food Safety",
      date: "Jul 2025",
      authors: [
        "Rayhan Ahmmed Pranto",
        "Md. Al-Amin Sarker",
        "Debasree Saha",
        "Kazi Abdus Sobur",
      ],
      type: "Article",
      fullText: true,
    },
    {
      title:
        "Sero-prevalence and Risk Factors of Brucellosis in Goats in Bangladesh",
      journal: "Pakistan Veterinary Journal",
      date: "Jun 2025",
      authors: [
        "Kazi Abdus Sobur",
        "Palash Bose",
        "Md Zaminur Rahman",
        "Md. Ariful Islam",
      ],
      type: "Article",
      fullText: true,
    },
    {
      title:
        "Hydroponic fodder: A sustainable solution for enhancing livestock nutrition and productivity",
      journal: "Journal of Aquatic Research and Sustainability",
      date: "Jun 2025",
      authors: [
        "Kazi Abdus Sobur",
        "Partha Pratim Ghosh",
        "Md. Emdadul Haq",
        "Md Zaminur Rahman",
      ],
      type: "Article",
      fullText: true,
    },
    {
      title:
        "Evaluating Farmer Practices and Perspectives in Rearing Red Chittagong Cattle in Chittagong, Bangladesh",
      journal: "Journal of Veterinary Medicine and Animal Health",
      date: "Apr 2025",
      authors: [
        "Md Nahidul Islam",
        "Kazi Abdus Sobur",
        "Md Salman Mostafa",
        "Shafiqul Islam",
      ],
      type: "Article",
      fullText: true,
    },
    {
      title:
        "Characterization of enterotoxin, antibiotic resistance genes, and antimicrobial susceptibility profiling of Staphylococcus aureus isolated from table eggs",
      journal: "Open Veterinary Journal",
      date: "Mar 2025",
      authors: [
        "Palash Bose",
        "Kazi Abdus Sobur",
        "Md. Bakhtiar Lijon",
        "Md. Ariful Islam",
      ],
      type: "Article",
      fullText: true,
    },
    {
      title:
        "In-Silico Identification of Potential NS2B-NS3 Protease Inhibitors against Zika Virus",
      journal: "Hosts and Viruses",
      date: "Feb 2025",
      authors: [
        "Nusrat Jahan Lily",
        "Kazi Abdus Sobur",
        "Minhaz Zabin Saif Mim",
        "Palash Bose",
      ],
      type: "Article",
      fullText: true,
    },
    {
      title:
        "Exploring the Management Practices of Black Bengal Goat Husbandry in Jhenaidah District of Bangladesh",
      journal: "Veterinary Sciences Research and Reviews",
      date: "Feb 2025",
      authors: [
        "Kazi Abdus Sobur",
        "Shabuj Kumar Pal",
        "Md. Abdur Rahim",
        "Palash Bose",
      ],
      type: "Article",
      fullText: true,
    },
    {
      title:
        "Prevalence and risk factors of Feline Infectious Peritonitis of cat in Dhaka, Bangladesh: A cross-sectional study",
      journal: "Veterinary Journal",
      date: "Jan 2025",
      authors: [
        "Deepanjana Sarker",
        "A S M Mohiuddin",
        "Bristi Devnath",
        "Kazi Abdus Sobur",
      ],
      type: "Article",
      fullText: true,
    },
    {
      title:
        "Embracing the One Health Paradigm for Public Health Transformation",
      journal: "Public Health Journal",
      date: "Jan 2025",
      authors: ["Kazi Abdus Sobur"],
      type: "Article",
      fullText: true,
    },
    {
      title:
        "Strengthening global health preparedness amid Mpox spread in Africa",
      journal: "Discover Public Health",
      date: "Jan 2025",
      authors: [
        "Abdulrakib Abdulrahim",
        "Bashar Haruna Gulumbe",
        "Ibrahim Idris",
        "Aminu Shehu",
      ],
      type: "Article",
      fullText: true,
    },
    {
      title:
        "A REVIEW ON THE DEVELOPMENT OF MPOXVACCINE; PRESENT, FUTURE AND CHALLENGES",
      journal: "Vaccine Research",
      date: "Jan 2025",
      authors: ["Kazi Abdus Sobur", "Anika Thasin Bithi"],
      type: "Review",
      fullText: true,
    },
    {
      title:
        "Exploring bovine brucellosis in Bangladesh: Current scenario and future outlook",
      journal: "Journal of Advanced Veterinary and Animal Research",
      date: "Jan 2025",
      authors: [
        "Md Zaminur Rahman",
        "Palash Bose",
        "Tanvir Ahamed",
        "Md. Ariful Islam",
      ],
      type: "Review",
      fullText: true,
    },
    {
      title:
        "Legends in Veterinary Medicine: Honoring Pioneers Who Shaped the Profession",
      journal: "Veterinary History Journal",
      date: "Dec 2024",
      authors: ["Kazi Abdus Sobur"],
      type: "Article",
      fullText: true,
    },
    {
      title:
        "Mpox Threats in Bangladesh: An Emerging Health Challenge and Call for Action",
      journal: "Asian Journal of Research in Infectious Diseases",
      date: "Dec 2024",
      authors: [
        "Partha Pratim Ghosh",
        "Palash Bose",
        "Anika Thasin Bithi",
        "Kazi Abdus Sobur",
      ],
      type: "Article",
      fullText: true,
    },
    {
      title: "Mpox: An Emerging Zoonotic Threat in the Era of COVID-19",
      journal: "Book Chapter",
      date: "Dec 2024",
      authors: [
        "Kazi Abdus Sobur",
        "Sakib Mowdood",
        "Md. Ashiquen Nobi",
        "Palash Bose",
      ],
      type: "Chapter",
      fullText: false,
    },
    {
      title:
        "Poultry farm waste management practices: Environmental challenges, health concerns, and farmers' perspectives in Chattogram, Bangladesh",
      journal: "Environmental Science Journal",
      date: "Nov 2024",
      authors: [
        "Kazi Shams Al Arefin",
        "Dibakar Chowdhury",
        "Fahad Bin Islam",
        "Kazi Abdus Sobur",
      ],
      type: "Article",
      fullText: true,
    },
    {
      title:
        "Synergistic antimicrobial potential of garlic, black cumin, and honey against zoonotic bacteria and fungus",
      journal: "Ethiopian Journal of Health Sciences",
      date: "Oct 2024",
      authors: ["Hafiz Esmael", "Abdu Mohamed", "Rahman", "Kazi Abdus Sobur"],
      type: "Article",
      fullText: true,
    },
    {
      title: "Monkey Pox an Emerging Zoonotic Threat in the Modern Era",
      journal: "Book",
      date: "Sep 2024",
      authors: ["Kazi Abdus Sobur"],
      type: "Book",
      fullText: false,
    },
    {
      title:
        "Molecular detection and antibiogram profiles of Escherichia coli and Vibrio cholerae isolated from raw vegetables in Bangladesh",
      journal: "Food Microbiology Journal",
      date: "Aug 2024",
      authors: [
        "Anwar Hossain Rana",
        "Palash Bose",
        "Kazi Abdus Sobur",
        "Md. Aoulad Hosen",
      ],
      type: "Article",
      fullText: true,
    },
    {
      title:
        "Prevalence and Seasonal Patterns of Foot Affection in Cattle in Khulna District of Bangladesh",
      journal: "Journal of Research in Veterinary Sciences",
      date: "Aug 2024",
      authors: ["Md. Abdur Rahim", "Kazi Abdus Sobur"],
      type: "Article",
      fullText: true,
    },
    {
      title:
        "Diseases and diseases conditions of treated animals at Upazila Veterinary Hospital, Kaliganj, Jhenaidah, Bangladesh",
      journal: "Veterinary Epidemiology Journal",
      date: "Aug 2024",
      authors: [
        "Kazi Abdus Sobur",
        "Palash Bose",
        "Md Zaminur Rahman",
        "Md. Ashiquen Nobi",
      ],
      type: "Article",
      fullText: true,
    },
    {
      title:
        "Antibiotic Resistance Genes Detection in Escherichia coli Isolated from Raw Meat in Rajshahi Division of Bangladesh",
      journal: "American Journal of Microbiological Research",
      date: "Aug 2024",
      authors: [
        "Md. Saroat Hossain",
        "Md. Ahsan Hasan Jony",
        "Nishe Saha",
        "Kazi Abdus Sobur",
      ],
      type: "Article",
      fullText: true,
    },
    {
      title:
        "Epidemiological investigation of lumpy skin disease in Jhenaidah district of Bangladesh",
      journal: "Veterinary Epidemiology Journal",
      date: "Jul 2024",
      authors: [
        "Shabuj Kumar Pal",
        "Kazi Abdus Sobur",
        "Palash Bose",
        "Sakib Mowdood",
      ],
      type: "Article",
      fullText: true,
    },
    {
      title:
        "Immune response of inactivated oil adjuvanted B. abortus vaccine in Cattle under field condition",
      journal: "Conference Paper",
      date: "Feb 2023",
      authors: [
        "Md Zaminur Rahman",
        "Kazi Abdus Sobur",
        "Mst. Minara Khatun",
        "Md. Ariful Islam",
      ],
      type: "Conference Paper",
      fullText: false,
    },
    {
      title:
        "Immune response of inactivated oil adjuvant Brucella abortus vaccine in cattle under field condition",
      journal: "Poster Presentation",
      date: "Feb 2023",
      authors: [
        "Md Zaminur Rahman",
        "Kazi Abdus Sobur",
        "Mst. Minara Khatun",
        "Ariful Islam",
      ],
      type: "Poster",
      fullText: false,
    },
    {
      title:
        "Seroprevalence and risk factors associated with brucellosis in goat at some selected districts of Bangladesh",
      journal: "Poster Presentation",
      date: "Feb 2023",
      authors: ["Kazi Abdus Sobur", "Md Zaminur Rahman"],
      type: "Poster",
      fullText: false,
    },
  ];

  const displayedPublications = showAllPublications
    ? allPublications
    : allPublications.slice(0, 6);

  const years = [
    "all",
    ...new Set(allPublications.map((p) => p.date.split(" ")[1])),
  ];
  const filteredPublications =
    selectedYear === "all"
      ? displayedPublications
      : displayedPublications.filter((p) => p.date.includes(selectedYear));

  return (
    <section
      id="publications"
      className="py-16 md:py-24 bg-gradient-to-br from-white via-gray-50 to-indigo-50/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-12">
          <div className="p-3 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl shadow-lg shadow-indigo-200">
            <Microscope className="w-8 h-8 text-white" />
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Research & Publications
            </h2>
            <p className="text-gray-500 mt-1">
              Contributing to global scientific knowledge
            </p>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          <div className="bg-white rounded-2xl p-5 text-center shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
            <div className="text-3xl font-bold text-indigo-600 group-hover:scale-105 transition-transform">
              {researchStats.publications}
            </div>
            <div className="text-xs text-gray-500 uppercase tracking-wider mt-1 flex items-center justify-center gap-1">
              <FileText className="w-3 h-3" /> Publications
            </div>
          </div>
          <div className="bg-white rounded-2xl p-5 text-center shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
            <div className="text-3xl font-bold text-indigo-600 group-hover:scale-105 transition-transform">
              {researchStats.reads.toLocaleString()}
            </div>
            <div className="text-xs text-gray-500 uppercase tracking-wider mt-1 flex items-center justify-center gap-1">
              <Users className="w-3 h-3" /> Reads
            </div>
          </div>
          <div className="bg-white rounded-2xl p-5 text-center shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
            <div className="text-3xl font-bold text-indigo-600 group-hover:scale-105 transition-transform">
              {researchStats.citations}
            </div>
            <div className="text-xs text-gray-500 uppercase tracking-wider mt-1 flex items-center justify-center gap-1">
              <Quote className="w-3 h-3" /> Citations
            </div>
          </div>
          <div className="bg-white rounded-2xl p-5 text-center shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
            <div className="text-3xl font-bold text-indigo-600 group-hover:scale-105 transition-transform">
              h-index 5
            </div>
            <div className="text-xs text-gray-500 uppercase tracking-wider mt-1 flex items-center justify-center gap-1">
              <Award className="w-3 h-3" /> h-index
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Introduction */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-indigo-100 rounded-lg">
                  <BookOpen className="w-5 h-5 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  Introduction
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Veterinarian, microbiologist, and researcher working at the
                intersection of epidemiology, zoonotic diseases, antimicrobial
                resistance, vaccine development, and One Health. Author of
                peer-reviewed publications with interests in translating
                research into policy and practice. Beyond research, I actively
                support scientific writing, publication strategy, and
                multidisciplinary collaboration, while working to bridge
                technical expertise with practical solutions for animal and
                public health challenges.
              </p>
            </div>

            {/* Skills */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <Star className="w-5 h-5 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  Skills & Expertise
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-700 text-sm font-medium rounded-full border border-indigo-100 hover:shadow-md transition-shadow"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Publication Areas */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-emerald-100 rounded-lg">
                  <Library className="w-5 h-5 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  Publication Areas
                </h3>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {publicationAreas.map((area, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-4 text-center border border-indigo-100 hover:shadow-md transition-shadow"
                  >
                    <div className="text-2xl mb-1">{area.icon}</div>
                    <div className="text-lg font-bold text-indigo-600">
                      {area.count}
                    </div>
                    <div className="text-xs text-gray-600 font-medium">
                      {area.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Publications List */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-4 flex-wrap gap-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-indigo-100 rounded-lg">
                    <FileText className="w-5 h-5 text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Publications
                  </h3>
                </div>
                <div className="flex items-center gap-2">
                  <Filter className="w-4 h-4 text-gray-400" />
                  <select
                    value={selectedYear}
                    onChange={(e) => setSelectedYear(e.target.value)}
                    className="text-sm border border-gray-200 rounded-lg px-3 py-1.5 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    <option value="all">All Years</option>
                    <option value="2026">2026</option>
                    <option value="2025">2025</option>
                    <option value="2024">2024</option>
                    <option value="2023">2023</option>
                  </select>
                </div>
              </div>

              <div className="space-y-4">
                {filteredPublications.map((pub, index) => (
                  <div
                    key={index}
                    className="border-b border-gray-100 pb-4 last:border-0 last:pb-0 hover:bg-gray-50/50 p-3 rounded-xl transition-colors"
                  >
                    <h4 className="text-sm font-semibold text-gray-800">
                      {pub.title}
                    </h4>
                    <div className="flex flex-wrap items-center gap-2 mt-1 text-xs">
                      <span className="text-indigo-600 font-medium">
                        {pub.journal}
                      </span>
                      <span className="text-gray-300">•</span>
                      <span className="text-gray-500">{pub.date}</span>
                      <span className="text-gray-300">•</span>
                      <span
                        className={`px-2 py-0.5 rounded-full text-[10px] font-medium ${
                          pub.type === "Review"
                            ? "bg-purple-100 text-purple-700"
                            : pub.type === "Chapter"
                              ? "bg-amber-100 text-amber-700"
                              : pub.type === "Book"
                                ? "bg-emerald-100 text-emerald-700"
                                : pub.type === "Conference Paper"
                                  ? "bg-blue-100 text-blue-700"
                                  : pub.type === "Poster"
                                    ? "bg-rose-100 text-rose-700"
                                    : "bg-indigo-100 text-indigo-700"
                        }`}
                      >
                        {pub.type}
                      </span>
                      {pub.fullText && (
                        <span className="text-emerald-600 text-[10px] font-medium">
                          ✓ Full Text
                        </span>
                      )}
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      {pub.authors.join(", ")}
                    </div>
                  </div>
                ))}
              </div>

              {allPublications.length > 6 && (
                <button
                  onClick={() => setShowAllPublications(!showAllPublications)}
                  className="mt-4 w-full py-2.5 bg-indigo-50 text-indigo-700 text-sm font-medium rounded-xl hover:bg-indigo-100 transition-colors flex items-center justify-center gap-2"
                >
                  {showAllPublications ? (
                    <>
                      Show Less <ChevronUp className="w-4 h-4" />
                    </>
                  ) : (
                    <>
                      View All {allPublications.length} Publications{" "}
                      <ChevronDown className="w-4 h-4" />
                    </>
                  )}
                </button>
              )}
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6">
            {/* Affiliation */}
            <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl p-6 text-white shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-white/20 rounded-lg">
                  <GraduationCap className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-bold">Affiliation</h3>
              </div>
              <div className="space-y-3">
                <div>
                  <p className="font-semibold">
                    Bangladesh Agricultural University
                  </p>
                  <p className="text-indigo-200 text-sm">
                    Department of Microbiology and Hygiene
                  </p>
                </div>
                <div className="flex items-center gap-2 text-sm text-indigo-200">
                  <MapPin className="w-4 h-4" />
                  <span>Mymensingh, Bangladesh</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-indigo-200">
                  <Calendar className="w-4 h-4" />
                  <span>October 2021 - Present</span>
                </div>
                <div className="bg-white/10 rounded-xl p-3 text-center">
                  <span className="text-sm font-medium">Master's Student</span>
                </div>
              </div>
            </div>

            {/* ResearchGate Stats */}
            <div className="bg-gradient-to-br from-emerald-600 to-teal-600 rounded-2xl p-6 text-white shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-white/20 rounded-lg">
                  <Globe className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-bold">ResearchGate</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 rounded-xl p-3 text-center">
                  <div className="text-2xl font-bold">18K+</div>
                  <div className="text-xs text-indigo-200">Followers</div>
                </div>
                <div className="bg-white/10 rounded-xl p-3 text-center">
                  <div className="text-2xl font-bold">8.2K+</div>
                  <div className="text-xs text-indigo-200">Reads</div>
                </div>
              </div>
              <button className="mt-4 w-full py-2 bg-white text-emerald-700 font-semibold rounded-xl hover:bg-indigo-50 transition-colors flex items-center justify-center gap-2">
                <Globe className="w-4 h-4" />
                Visit Profile
                <ExternalLink className="w-3 h-3" />
              </button>
            </div>

            {/* Quick Stats */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-sm font-bold text-gray-700 uppercase tracking-wider mb-4">
                Quick Stats
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">
                    Total Publications
                  </span>
                  <span className="text-sm font-bold text-indigo-600">39</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">
                    Journal Articles
                  </span>
                  <span className="text-sm font-bold text-indigo-600">30+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">
                    Conference Papers
                  </span>
                  <span className="text-sm font-bold text-indigo-600">1</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Books/Chapters</span>
                  <span className="text-sm font-bold text-indigo-600">2</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Reviews</span>
                  <span className="text-sm font-bold text-indigo-600">3</span>
                </div>
              </div>
            </div>

            {/* Prospective PhD */}
            <div className="bg-gradient-to-br from-amber-600 to-orange-600 rounded-2xl p-6 text-white shadow-xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-white/20 rounded-lg">
                  <Award className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-bold">Prospective PhD Candidate</h3>
              </div>
              <p className="text-amber-100 text-sm">
                Always Open to New Ideas & Collaborations
              </p>
              <button className="mt-3 w-full py-2 bg-white text-amber-700 font-semibold rounded-xl hover:bg-amber-50 transition-colors">
                Let's Connect
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
