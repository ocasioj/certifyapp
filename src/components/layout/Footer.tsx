import Link from "next/link";
import { Award } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center">
                <Award className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-bold text-white">
                Certify<span className="text-blue-400">App</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed">
              Your comprehensive guide to IT certifications. Compare exams,
              explore training resources, and plan your certification journey.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/search" className="text-sm hover:text-white transition-colors">
                  All Certifications
                </Link>
              </li>
              <li>
                <Link href="/search?view=providers" className="text-sm hover:text-white transition-colors">
                  Providers
                </Link>
              </li>
            </ul>
          </div>

          {/* Popular Providers */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Popular Providers
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/providers/aws" className="text-sm hover:text-white transition-colors">
                  AWS
                </Link>
              </li>
              <li>
                <Link href="/providers/azure" className="text-sm hover:text-white transition-colors">
                  Microsoft Azure
                </Link>
              </li>
              <li>
                <Link href="/providers/gcp" className="text-sm hover:text-white transition-colors">
                  Google Cloud
                </Link>
              </li>
              <li>
                <Link href="/providers/comptia" className="text-sm hover:text-white transition-colors">
                  CompTIA
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800 mt-10 pt-6 text-center">
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} CertifyApp. Built for IT professionals.
          </p>
        </div>
      </div>
    </footer>
  );
}
