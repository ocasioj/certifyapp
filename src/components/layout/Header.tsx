import Link from "next/link";
import { Award, Search, Menu } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center group-hover:from-blue-500 group-hover:to-indigo-500 transition-all">
              <Award className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-slate-900">
              Jo<span className="text-blue-600">Certs</span>
            </span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/search"
              className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
            >
              Certifications
            </Link>
            <Link
              href="/search?view=providers"
              className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
            >
              Providers
            </Link>
          </nav>

          {/* Search + Mobile */}
          <div className="flex items-center gap-3">
            <Link
              href="/search"
              className="w-9 h-9 flex items-center justify-center rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-all"
            >
              <Search className="w-5 h-5" />
            </Link>
            {/* Mobile nav links */}
            <div className="md:hidden flex items-center gap-2">
              <Link
                href="/search"
                className="text-xs font-medium text-slate-600 hover:text-slate-900 px-2 py-1 rounded-md hover:bg-slate-100 transition-all"
              >
                Browse
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
