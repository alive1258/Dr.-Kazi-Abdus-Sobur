import {
  ChevronRight,
  Linkedin,
  Globe,
  Mail,
  BookOpen,
  MapPin,
  Building2,
  GraduationCap,
  Users,
} from "lucide-react";
import Image from "next/image";
import SlideLeft from "@/src/components/Common/Animaation/SlideLeft";
import SlideRight from "@/src/components/Common/Animaation/SlideRight";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative bg-gradient-to-br from-indigo-50 via-white to-indigo-50/80 pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden"
    >
      {/* Decorative Blobs */}
      <div className="absolute -top-20 -right-20 w-72 h-72 bg-indigo-200/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-indigo-200/20 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-100/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Content */}
          <SlideLeft className="flex-1 text-center lg:text-left">
            {/* Name */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
              Dr. Kazi Abdus Sobur
            </h1>

            {/* Title - Full title from LinkedIn */}
            <p className="text-lg sm:text-xl font-medium text-indigo-600 mt-3 leading-relaxed">
              Veterinarian | Researcher | Scientific Author & Publication
              Consultant | Laboratory Professional | Livestock & Agribusiness
              Consultant
            </p>

            {/* Tagline */}
            <p className="text-base text-gray-600 mt-3 max-w-2xl mx-auto lg:mx-0 font-medium">
              Bridging Technical Expertise with Business Insight
            </p>

            {/* Location & Organization */}
            <div className="mt-4 flex flex-wrap justify-center lg:justify-start gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-indigo-500" />
                <span>Bangladesh</span>
              </div>
              <span className="text-indigo-300 hidden sm:block">•</span>
              <div className="flex items-center gap-1.5">
                <Building2 className="w-4 h-4 text-indigo-500" />
                <span>
                  Bangladesh Institute of Innovative Health Research-BIIHR
                </span>
              </div>
            </div>

            {/* Education */}
            <div className="mt-2 flex flex-wrap justify-center lg:justify-start gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4 text-indigo-500" />
                <span>Bangladesh Agricultural University</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="mt-6 flex flex-wrap justify-center lg:justify-start gap-3">
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-indigo-200 hover:shadow-indigo-300 hover:scale-105"
              >
                Contact
                <ChevronRight className="ml-2 w-4 h-4" />
              </a>
              <a
                href="https://www.researchgate.net/profile/Kazi-Sobur"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-white border-2 border-indigo-200 hover:border-indigo-500 text-indigo-700 font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <BookOpen className="mr-2 w-4 h-4" />
                ResearchGate Profile
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex gap-3 mt-5 justify-center lg:justify-start">
              <a
                href="https://www.linkedin.com/in/dr-kazi-abdus-sobur/"
                className="p-2.5 bg-indigo-50 rounded-full hover:bg-indigo-100 transition-all duration-300 hover:scale-110 hover:shadow-md"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-indigo-600" />
              </a>
              <a
                href="https://www.researchgate.net/profile/Kazi-Sobur"
                className="p-2.5 bg-indigo-50 rounded-full hover:bg-indigo-100 transition-all duration-300 hover:scale-110 hover:shadow-md"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="ResearchGate"
              >
                <Globe className="w-5 h-5 text-indigo-600" />
              </a>
              <a
                href="mailto:sobur@biihr.org"
                className="p-2.5 bg-indigo-50 rounded-full hover:bg-indigo-100 transition-all duration-300 hover:scale-110 hover:shadow-md"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 text-indigo-600" />
              </a>
              <a
                href="#"
                className="p-2.5 bg-indigo-50 rounded-full hover:bg-indigo-100 transition-all duration-300 hover:scale-110 hover:shadow-md"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="ORCID"
              >
                <BookOpen className="w-5 h-5 text-indigo-600" />
              </a>
            </div>

            {/* Stats - From LinkedIn */}
            <div className="mt-6 flex flex-wrap justify-center lg:justify-start gap-6">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-indigo-500" />
                <div>
                  <div className="text-xl font-bold text-indigo-600">18K+</div>
                  <div className="text-sm text-gray-500  tracking-wider">
                    LinkedIn Followers
                  </div>
                </div>
              </div>
              <div className="w-px h-10 bg-indigo-200 hidden sm:block" />
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-indigo-500" />
                <div>
                  <div className="text-xl font-bold text-indigo-600">
                    10+ Years
                  </div>
                  <div className="text-sm text-gray-500  tracking-wider">
                    Experience
                  </div>
                </div>
              </div>
            </div>
          </SlideLeft>

          {/* Right - Profile Image */}
          <SlideRight className="flex-shrink-0">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[420px] lg:h-[420px] xl:w-[456px] xl:h-[456px] mx-auto">
              {/* Glow Ring */}
              <div className="absolute -inset-4 bg-gradient-to-br from-indigo-300/30 to-indigo-400/30 rounded-2xl blur-2xl" />

              {/* Image Container */}
              <div className="relative w-full h-full rounded-2xl bg-gradient-to-br from-indigo-100 to-indigo-200/50 flex items-center justify-center shadow-2xl border-4 border-white overflow-hidden">
                <Image
                  src={"/images/kazi.png"}
                  fill
                  sizes="(max-width: 640px) 16rem, (max-width: 768px) 20rem, (max-width: 1024px) 24rem, (max-width: 1280px) 420px, 456px"
                  alt="Dr. Kazi Abdus Sobur"
                  className="rounded-2xl object-cover"
                  priority
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-3 -right-3 bg-indigo-600 text-white px-4 py-2 rounded-xl shadow-lg text-xs font-medium flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-300 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-200" />
                </span>
                Available for Consultancy
              </div>
            </div>
          </SlideRight>
        </div>
      </div>
    </section>
  );
}
