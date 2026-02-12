import Link from "next/link";
import { TrendingUp, Target, Users } from "lucide-react";

export default function StatsSection() {
  return (
    <section className="bg-gradient-to-br from-slate-900 to-indigo-950 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Why Get Certified?
          </h2>
          <p className="mt-3 text-slate-300 max-w-lg mx-auto">
            IT certifications validate your skills and open doors to higher-paying roles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
            <TrendingUp className="w-8 h-8 text-emerald-400 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-white mb-1">Higher Salaries</h3>
            <p className="text-sm text-slate-400">
              Certified professionals earn up to 20% more than non-certified peers.
            </p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
            <Target className="w-8 h-8 text-blue-400 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-white mb-1">Career Growth</h3>
            <p className="text-sm text-slate-400">
              Stand out in job applications and unlock new career opportunities.
            </p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
            <Users className="w-8 h-8 text-purple-400 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-white mb-1">Industry Recognition</h3>
            <p className="text-sm text-slate-400">
              Gain credibility with vendors and employers worldwide.
            </p>
          </div>
        </div>

        <div className="text-center">
          <Link
            href="/search"
            className="inline-flex items-center justify-center px-8 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition-colors text-sm"
          >
            Start Exploring Certifications
          </Link>
        </div>
      </div>
    </section>
  );
}
