import Link from "next/link";
import { Award, BookOpen, Building2, Briefcase } from "lucide-react";

interface HeroSectionProps {
  totalCerts: number;
  totalProviders: number;
}

export default function HeroSection({ totalCerts, totalProviders }: HeroSectionProps) {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-950 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-500 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="text-center">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600/20 rounded-2xl mb-6">
            <Award className="w-8 h-8 text-blue-400" />
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            Navigate Your IT{" "}
            <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Certification
            </span>{" "}
            Journey
          </h1>

          {/* Subheading */}
          <p className="mt-6 text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Explore certifications from top providers. Compare exams, discover
            training resources, and find the right path for your career.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/search"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition-colors text-sm"
            >
              <BookOpen className="w-4 h-4 mr-2" />
              Browse Certifications
            </Link>
            <Link
              href="#providers"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl transition-colors text-sm border border-white/20"
            >
              View All Providers
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="flex flex-col items-center p-4 rounded-xl bg-white/5 border border-white/10">
              <BookOpen className="w-5 h-5 text-blue-400 mb-2" />
              <span className="text-2xl font-bold text-white">{totalCerts}</span>
              <span className="text-sm text-slate-400">Certifications</span>
            </div>
            <div className="flex flex-col items-center p-4 rounded-xl bg-white/5 border border-white/10">
              <Building2 className="w-5 h-5 text-indigo-400 mb-2" />
              <span className="text-2xl font-bold text-white">{totalProviders}</span>
              <span className="text-sm text-slate-400">Providers</span>
            </div>
            <div className="flex flex-col items-center p-4 rounded-xl bg-white/5 border border-white/10">
              <Briefcase className="w-5 h-5 text-purple-400 mb-2" />
              <span className="text-2xl font-bold text-white">90+</span>
              <span className="text-sm text-slate-400">Job Roles</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
