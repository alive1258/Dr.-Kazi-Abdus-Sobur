"use client";

import {
  User,
  Sparkles,
  Heart,
  Briefcase,
  BookOpen,
  Target,
  Eye,
  Award,
  Zap,
  MessageCircle,
  TrendingUp,
  Users,
  PenTool,
  FileText,
  Megaphone,
  Handshake,
} from "lucide-react";
import SlideDown from "@/src/components/Common/Animaation/SlideDown";
import SlideUp from "@/src/components/Common/Animaation/SlideUp";
import SlideLeft from "@/src/components/Common/Animaation/SlideLeft";
import SlideRight from "@/src/components/Common/Animaation/SlideRight";
import ZoomIn from "@/src/components/Common/Animaation/ZoomIn";

export default function About() {
  const skills = [
    { name: "Research", icon: <BookOpen className="w-4 h-4" /> },
    { name: "Content Management", icon: <FileText className="w-4 h-4" /> },
    { name: "Research Management", icon: <Target className="w-4 h-4" /> },
    { name: "Consulting", icon: <Handshake className="w-4 h-4" /> },
    { name: "Management Consulting", icon: <TrendingUp className="w-4 h-4" /> },
  ];

  const services = [
    {
      name: "Marketing Consulting",
      icon: <Megaphone className="w-5 h-5" />,
      color: "from-indigo-400 to-indigo-500",
    },
    {
      name: "Resume Writing",
      icon: <FileText className="w-5 h-5" />,
      color: "from-indigo-500 to-indigo-600",
    },
    {
      name: "Business Consulting",
      icon: <Briefcase className="w-5 h-5" />,
      color: "from-indigo-600 to-indigo-700",
    },
    {
      name: "Training",
      icon: <Users className="w-5 h-5" />,
      color: "from-indigo-700 to-indigo-800",
    },
    {
      name: "Resume Review",
      icon: <Eye className="w-5 h-5" />,
      color: "from-indigo-400 to-indigo-700",
    },
    {
      name: "Writing",
      icon: <PenTool className="w-5 h-5" />,
      color: "from-indigo-500 to-indigo-800",
    },
    {
      name: "Technical Writing",
      icon: <FileText className="w-5 h-5" />,
      color: "from-indigo-600 to-indigo-900",
    },
  ];

  const passions = [
    "World Politics",
    "Economics",
    "Stock Market",
    "Public Health",
    "Leadership",
    "Future of Science",
    "Harry Potter",
    "House of the Dragon",
  ];

  return (
    <section
      id="about"
      className="py-16 md:py-24 bg-gradient-to-br from-white via-indigo-50/30 to-indigo-100/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <SlideDown className="flex items-center gap-4 mb-10 md:mb-12">
          <div className="p-3 bg-gradient-to-br from-indigo-500 to-indigo-700 rounded-2xl shadow-lg shadow-indigo-200">
            <User className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
          </div>
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
              About Me
            </h2>
            <p className="text-gray-500 mt-1">The story behind the work</p>
          </div>
        </SlideDown>

        {/* Quote Card */}
        <SlideUp className="bg-gradient-to-r from-indigo-600 to-indigo-800 rounded-2xl p-6 md:p-8 mb-12 text-white shadow-xl">
          <div className="max-w-3xl">
            <Sparkles className="w-8 h-8 text-indigo-200 mb-4" />
            <p className="text-xl md:text-2xl font-medium leading-relaxed italic">
              &ldquo;My profile tells you where I&apos;ve worked. It doesn&apos;t tell you why
              I&apos;ve never stopped learning. So instead of repeating what&apos;s
              already on my profile, let me tell you the story behind it.&rdquo;
            </p>
            <div className="mt-4 flex items-center gap-2 text-indigo-200">
              <span className="w-12 h-0.5 bg-indigo-300 rounded-full" />
              <span className="text-sm font-medium">
                Curiosity never sleeps
              </span>
            </div>
          </div>
        </SlideUp>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Story */}
          <SlideLeft className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-indigo-100 rounded-lg">
                  <Heart className="w-5 h-5 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">The Story</h3>
              </div>
              <div className="prose prose-lg max-w-none text-gray-600 space-y-4">
                <p className="text-base leading-relaxed">
                  I&apos;ve never been comfortable staying inside a single box. I&apos;ve
                  acted on stage, hosted events, recited poetry, and directed
                  performances. I love being on stage, but I&apos;m just as happy
                  behind the curtain—directing, organizing, solving problems,
                  and making sure everything comes together.
                </p>
                <p className="text-base leading-relaxed">
                  I enjoy understanding how things work, why they work, and how
                  they can be made better. Whether I&apos;m learning a new skill,
                  exploring a different field, or tackling a difficult problem,
                  my first instinct is rarely to say,{" "}
                  <span className="text-indigo-600 font-medium">&ldquo;I can&apos;t&rdquo;</span>
                  but{" "}
                  <span className="text-indigo-600 font-medium">
                    &ldquo;Let&apos;s figure it out.&rdquo;
                  </span>
                </p>
                <p className="text-base leading-relaxed">
                  Professionally, I work across research, laboratory leadership,
                  teaching, publishing, marketing, consultancy, and livestock
                  development. Different roles, same mindset: learn
                  continuously, think critically, and leave every project better
                  than I found it.
                </p>
              </div>
            </div>

            {/* Ownership Section */}
            <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-2xl p-6 md:p-8 border border-indigo-100">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-indigo-600 rounded-xl shadow-lg shadow-indigo-200">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    What matters most to me is{" "}
                    <span className="text-indigo-600">OWNERSHIP!</span>
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    If I become part of a project, I treat it as my own. I enjoy
                    understanding the finer details, finding practical
                    alternatives when resources are limited, and building
                    solutions that are both realistic and impactful.
                  </p>
                  <p className="text-gray-600 leading-relaxed mt-3">
                    I enjoy generating ideas, doing new things, connecting
                    people, and turning conversations into action. I believe
                    good research shouldn&apos;t end as a publication—it should
                    improve decisions, influence policy, and create real impact.
                  </p>
                </div>
              </div>
            </div>

            {/* Honesty Section */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-indigo-500 rounded-xl shadow-lg shadow-indigo-200">
                  <Handshake className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    I value <span className="text-indigo-500">honesty</span>{" "}
                    more than promises
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    If I believe an idea, research project, business plan, or
                    publication strategy has strong potential, I&apos;ll tell you. If
                    I think it needs more work—or isn&apos;t likely to achieve the
                    outcome you&apos;re hoping for—I&apos;ll tell you that too. Honest
                    advice may not always be the easiest to hear, but it&apos;s the
                    only kind I&apos;m comfortable giving.
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-sm text-gray-500">
                    <span className="w-8 h-0.5 bg-indigo-300 rounded-full" />
                    <span>Always open to collaborations</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Closing */}
            <div className="bg-gradient-to-r from-indigo-50 to-indigo-100 rounded-2xl p-6 border border-indigo-100">
              <p className="text-gray-700 text-base leading-relaxed">
                I don&apos;t claim to know everything—but I&apos;ve rarely walked away
                from a challenge without learning something valuable.
              </p>
              <p className="text-gray-700 text-base leading-relaxed mt-3 font-medium">
                If you&apos;ve read this far, we already have one thing in common:{" "}
                <span className="text-indigo-600">we&apos;re both curious.</span>
              </p>
              <p className="text-gray-600 text-base leading-relaxed mt-2">
                So, feel free to send me a message. I&apos;d love to hear your story
                too.
              </p>
            </div>
          </SlideLeft>

          {/* Right Column - Sidebar */}
          <SlideRight className="space-y-6">
            {/* Mission & Vision */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-indigo-100 rounded-lg">
                    <Target className="w-4 h-4 text-indigo-600" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">
                      Mission
                    </span>
                    <p className="text-sm text-gray-600 mt-1">
                      To advance scientific research and public health through
                      innovative solutions and knowledge dissemination.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-indigo-200/60 rounded-lg">
                    <Eye className="w-4 h-4 text-indigo-800" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-indigo-800 uppercase tracking-wider">
                      Vision
                    </span>
                    <p className="text-sm text-gray-600 mt-1">
                      A world where research translates into tangible impact on
                      health, policy, and society.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Top Skills */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-sm font-bold text-gray-700 uppercase tracking-wider mb-4 flex items-center gap-2">
                <Award className="w-4 h-4 text-indigo-600" />
                Top Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <ZoomIn key={index}>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-indigo-50 text-indigo-700 text-xs font-medium rounded-full border border-indigo-100">
                      {skill.icon}
                      {skill.name}
                    </span>
                  </ZoomIn>
                ))}
              </div>
            </div>

            {/* Services */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-sm font-bold text-gray-700 uppercase tracking-wider mb-4 flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-indigo-600" />
                Services
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {services.map((service, index) => (
                  <SlideUp key={index} delay={Math.min(index + 1, 6)}>
                    <div
                      className={`flex items-center gap-2 px-3 py-2 rounded-xl bg-gradient-to-r ${service.color} text-white text-xs font-medium shadow-sm hover:shadow-md transition-shadow`}
                    >
                      {service.icon}
                      <span className="truncate">{service.name}</span>
                    </div>
                  </SlideUp>
                ))}
              </div>
            </div>

            {/* Passions */}
            <div className="bg-gradient-to-br from-indigo-100/50 to-indigo-200/50 rounded-2xl p-6 border border-indigo-100">
              <h3 className="text-sm font-bold text-gray-700 uppercase tracking-wider mb-3 flex items-center gap-2">
                <Heart className="w-4 h-4 text-indigo-500" />
                What I&apos;m Passionate About
              </h3>
              <div className="flex flex-wrap gap-2">
                {passions.map((passion, index) => (
                  <ZoomIn key={index}>
                    <span className="px-3 py-1.5 bg-white text-gray-700 text-xs font-medium rounded-full border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                      {passion}
                    </span>
                  </ZoomIn>
                ))}
              </div>
            </div>

            {/* Connect */}
            <div className="bg-gradient-to-r from-indigo-600 to-indigo-800 rounded-2xl p-6 text-white shadow-xl">
              <MessageCircle className="w-8 h-8 mb-3 text-indigo-200" />
              <h3 className="text-lg font-bold">Let&apos;s Connect</h3>
              <p className="text-indigo-100 text-sm mt-1">
                I&apos;m always open to research collaborations, consultancy,
                publication support, CV writing, and projects.
              </p>
              <button className="mt-4 px-6 py-2.5 bg-white text-indigo-700 font-semibold rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2">
                <MessageCircle className="w-4 h-4" />
                Send a Message
              </button>
            </div>
          </SlideRight>
        </div>
      </div>
    </section>
  );
}
