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
  Search,
  CheckCircle2,
  X,
} from "lucide-react";
import { useEffect, useMemo, useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SlideUp from "@/src/components/Common/Animaation/SlideUp";
import SlideDown from "@/src/components/Common/Animaation/SlideDown";
import ZoomIn from "@/src/components/Common/Animaation/ZoomIn";

interface PublicationArea {
  name: string;
  count: number;
  icon: ReactNode;
}

interface Publication {
  title: string;
  journal: string;
  date: string;
  authors: string[];
  type: string;
  fullText: boolean;
}

const publicationTypeStyles: Record<string, string> = {
  Review: "bg-indigo-200 text-indigo-800",
  Chapter: "bg-indigo-50 text-indigo-600",
  Book: "bg-indigo-300 text-indigo-900",
  "Conference Paper": "bg-indigo-100 text-indigo-500",
  Poster: "bg-indigo-400 text-white",
};

const defaultPublicationTypeStyle = "bg-indigo-100 text-indigo-700";

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

const publicationAreas: PublicationArea[] = [
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

// All publications from the researcher's profile
const allPublications: Publication[] = [
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
    title: "Embracing the One Health Paradigm for Public Health Transformation",
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

const publicationTypes = Array.from(
  new Set(allPublications.map((p) => p.type)),
);

export default function Publications() {
  const [showAllPublications, setShowAllPublications] = useState(false);
  const [selectedYear, setSelectedYear] = useState("all");
  const [selectedType, setSelectedType] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPublication, setSelectedPublication] =
    useState<Publication | null>(null);

  const matchedPublications = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    return allPublications.filter((pub) => {
      const matchesYear =
        selectedYear === "all" || pub.date.includes(selectedYear);
      const matchesType = selectedType === "all" || pub.type === selectedType;
      const matchesQuery =
        query.length === 0 ||
        pub.title.toLowerCase().includes(query) ||
        pub.journal.toLowerCase().includes(query) ||
        pub.authors.some((author) => author.toLowerCase().includes(query));
      return matchesYear && matchesType && matchesQuery;
    });
  }, [selectedYear, selectedType, searchQuery]);

  const filteredPublications = showAllPublications
    ? matchedPublications
    : matchedPublications.slice(0, 6);

  useEffect(() => {
    if (!selectedPublication) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedPublication(null);
    };

    document.addEventListener("keydown", handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [selectedPublication]);

  return (
    <section
      id="publications"
      className="py-16 md:py-24 bg-gradient-to-br from-white via-gray-50 to-indigo-50/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <SlideDown className="flex items-center gap-3 sm:gap-4 mb-10 md:mb-12">
          <div className="p-3 bg-gradient-to-br from-indigo-500 to-indigo-700 rounded-2xl shadow-lg shadow-indigo-200 shrink-0">
            <Microscope className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
          </div>
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
              Research & Publications
            </h2>
            <p className="text-gray-500 mt-1 text-sm sm:text-base">
              Contributing to global scientific knowledge
            </p>
          </div>
        </SlideDown>

        {/* Stats Overview */}
        <SlideUp className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-10">
          <div className="bg-white rounded-2xl p-4 sm:p-5 text-center shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
            <div className="text-2xl sm:text-3xl font-bold text-indigo-600 group-hover:scale-105 transition-transform">
              {researchStats.publications}
            </div>
            <div className="text-xs text-gray-500 uppercase tracking-wider mt-1 flex items-center justify-center gap-1">
              <FileText className="w-3 h-3" /> Publications
            </div>
          </div>
          <div className="bg-white rounded-2xl p-4 sm:p-5 text-center shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
            <div className="text-2xl sm:text-3xl font-bold text-indigo-600 group-hover:scale-105 transition-transform">
              {researchStats.reads.toLocaleString()}
            </div>
            <div className="text-xs text-gray-500 uppercase tracking-wider mt-1 flex items-center justify-center gap-1">
              <Users className="w-3 h-3" /> Reads
            </div>
          </div>
          <div className="bg-white rounded-2xl p-4 sm:p-5 text-center shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
            <div className="text-2xl sm:text-3xl font-bold text-indigo-600 group-hover:scale-105 transition-transform">
              {researchStats.citations}
            </div>
            <div className="text-xs text-gray-500 uppercase tracking-wider mt-1 flex items-center justify-center gap-1">
              <Quote className="w-3 h-3" /> Citations
            </div>
          </div>
          <div className="bg-white rounded-2xl p-4 sm:p-5 text-center shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
            <div className="text-2xl sm:text-3xl font-bold text-indigo-600 group-hover:scale-105 transition-transform">
              {researchStats.hIndex}
            </div>
            <div className="text-xs text-gray-500 uppercase tracking-wider mt-1 flex items-center justify-center gap-1">
              <Award className="w-3 h-3" /> h-index
            </div>
          </div>
        </SlideUp>

        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Introduction */}
            <SlideUp className="bg-white rounded-2xl p-5 sm:p-6 md:p-8 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-indigo-100 rounded-lg">
                  <BookOpen className="w-5 h-5 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  Introduction
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
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
            </SlideUp>

            {/* Skills */}
            <SlideUp className="bg-white rounded-2xl p-5 sm:p-6 md:p-8 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-indigo-200 rounded-lg">
                  <Star className="w-5 h-5 text-indigo-700" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  Skills & Expertise
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 bg-gradient-to-r from-indigo-50 to-indigo-100 text-indigo-700 text-xs sm:text-sm font-medium rounded-full border border-indigo-100 hover:shadow-md transition-shadow"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </SlideUp>

            {/* Publication Areas */}
            <SlideUp className="bg-white rounded-2xl p-5 sm:p-6 md:p-8 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-indigo-50 rounded-lg">
                  <Library className="w-5 h-5 text-indigo-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  Publication Areas
                </h3>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {publicationAreas.map((area) => (
                  <ZoomIn
                    key={area.name}
                    className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl p-4 text-center border border-indigo-100 hover:shadow-md transition-shadow"
                  >
                    <div className="text-2xl mb-1 flex justify-center text-indigo-600">
                      {area.icon}
                    </div>
                    <div className="text-lg font-bold text-indigo-600">
                      {area.count}
                    </div>
                    <div className="text-xs text-gray-600 font-medium">
                      {area.name}
                    </div>
                  </ZoomIn>
                ))}
              </div>
            </SlideUp>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6">
            {/* Affiliation */}
            <SlideUp className="bg-gradient-to-br from-indigo-600 to-indigo-800 rounded-2xl p-6 text-white shadow-xl">
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
                  <span className="text-sm font-medium">
                    Master&apos;s Student
                  </span>
                </div>
              </div>
            </SlideUp>

            {/* ResearchGate Stats */}
            <SlideUp
              delay={2}
              className="bg-gradient-to-br from-indigo-700 to-indigo-900 rounded-2xl p-6 text-white shadow-xl"
            >
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
              <button className="mt-4 w-full py-2 bg-white text-indigo-700 font-semibold rounded-xl hover:bg-indigo-50 transition-colors flex items-center justify-center gap-2">
                <Globe className="w-4 h-4" />
                Visit Profile
                <ExternalLink className="w-3 h-3" />
              </button>
            </SlideUp>

            {/* Quick Stats */}
            <SlideUp
              delay={3}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
            >
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
            </SlideUp>

            {/* Prospective PhD */}
          </div>
        </div>

        {/* Publications List - full width */}
        <div className="mt-6 lg:mt-8 bg-white rounded-2xl p-5 sm:p-6 md:p-8 shadow-sm border border-gray-100">
          <SlideDown className="flex items-center justify-between mb-4 flex-wrap gap-3">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-indigo-100 rounded-lg">
                <FileText className="w-5 h-5 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Publications</h3>
            </div>
            <div className="relative w-full sm:w-64">
              <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search publications..."
                aria-label="Search publications"
                className="w-full text-sm border border-gray-200 rounded-lg pl-9 pr-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </SlideDown>

          <SlideDown className="flex flex-wrap items-center gap-2 mb-5">
            {["all", ...publicationTypes].map((type) => (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                aria-pressed={selectedType === type}
                className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-colors ${
                  selectedType === type
                    ? "bg-indigo-700 text-white border-indigo-700"
                    : "bg-white text-gray-600 border-gray-200 hover:border-indigo-300 hover:text-indigo-700"
                }`}
              >
                {type === "all" ? "All Types" : type}
              </button>
            ))}
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              aria-label="Filter by year"
              className="ml-auto text-xs sm:text-sm border border-gray-200 rounded-lg px-3 py-1.5 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="all">All Years</option>
              <option value="2026">2026</option>
              <option value="2025">2025</option>
              <option value="2024">2024</option>
              <option value="2023">2023</option>
            </select>
          </SlideDown>

          {filteredPublications.length === 0 ? (
            <p className="text-sm text-gray-500 text-center py-10">
              No publications match your filters.
            </p>
          ) : (
            <div className="grid md:grid-cols-2 gap-3">
              {filteredPublications.map((pub, index) => (
                <SlideUp key={pub.title} delay={Math.min(index + 1, 6)}>
                  <button
                    onClick={() => setSelectedPublication(pub)}
                    className="w-full h-full text-left border border-gray-100 hover:border-indigo-200 hover:bg-gray-50/50 p-3 sm:p-4 rounded-xl transition-colors"
                  >
                    <h4 className="text-sm font-semibold text-gray-800">
                      {pub.title}
                    </h4>
                    <div className="flex flex-wrap items-center gap-2 mt-1.5 text-xs">
                      <span className="text-indigo-600 font-medium">
                        {pub.journal}
                      </span>
                      <span className="text-gray-300">•</span>
                      <span className="text-gray-500">{pub.date}</span>
                      <span
                        className={`px-2 py-0.5 rounded-full text-[10px] font-medium ${
                          publicationTypeStyles[pub.type] ??
                          defaultPublicationTypeStyle
                        }`}
                      >
                        {pub.type}
                      </span>
                      {pub.fullText && (
                        <span className="flex items-center gap-1 text-indigo-600 text-[10px] font-medium">
                          <CheckCircle2 className="w-3 h-3" /> Full Text
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-gray-500 mt-1.5 truncate">
                      {pub.authors.length > 3
                        ? `${pub.authors.slice(0, 3).join(", ")} +${
                            pub.authors.length - 3
                          } more`
                        : pub.authors.join(", ")}
                    </p>
                  </button>
                </SlideUp>
              ))}
            </div>
          )}

          {matchedPublications.length > 6 && (
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
                  View All {matchedPublications.length} Publications{" "}
                  <ChevronDown className="w-4 h-4" />
                </>
              )}
            </button>
          )}
        </div>
      </div>

      <AnimatePresence>
        {selectedPublication && (
          <motion.div
            className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div
              className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm"
              onClick={() => setSelectedPublication(null)}
              aria-hidden="true"
            />

            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="publication-modal-title"
              className="relative bg-white w-full sm:max-w-xl max-h-[85vh] sm:rounded-2xl rounded-t-2xl overflow-y-auto shadow-2xl p-5 sm:p-8"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <button
                onClick={() => setSelectedPublication(null)}
                aria-label="Close publication details"
                className="absolute top-3 right-3 p-2 rounded-full text-gray-500 hover:text-indigo-700 hover:bg-indigo-50 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <span
                className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 ${
                  publicationTypeStyles[selectedPublication.type] ??
                  defaultPublicationTypeStyle
                }`}
              >
                {selectedPublication.type}
              </span>

              <h3
                id="publication-modal-title"
                className="text-lg sm:text-xl font-bold text-gray-900 pr-8"
              >
                {selectedPublication.title}
              </h3>

              <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 mt-3 pb-4 border-b border-gray-100">
                <span className="text-indigo-600 font-medium">
                  {selectedPublication.journal}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {selectedPublication.date}
                </span>
                {selectedPublication.fullText && (
                  <span className="flex items-center gap-1 text-indigo-600 font-medium">
                    <CheckCircle2 className="w-4 h-4" /> Full Text Available
                  </span>
                )}
              </div>

              <div className="mt-4">
                <h4 className="text-xs font-bold text-gray-700 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5" /> Authors
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {selectedPublication.authors.join(", ")}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
