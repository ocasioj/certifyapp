import Link from "next/link";
import { ChevronRight, Calendar } from "lucide-react";
import type { Certification, Provider } from "@/types";
import Badge from "@/components/ui/Badge";
import { getLevelColor } from "@/lib/utils";

interface CertificationHeaderProps {
  certification: Certification;
  provider: Provider;
}

export default function CertificationHeader({
  certification,
  provider,
}: CertificationHeaderProps) {
  return (
    <div>
      {/* Breadcrumb */}
      <nav className="flex items-center gap-1.5 text-sm text-slate-500 mb-6 flex-wrap">
        <Link href="/" className="hover:text-slate-900 transition-colors">
          Home
        </Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <Link
          href={`/providers/${provider.id}`}
          className="hover:text-slate-900 transition-colors"
        >
          {provider.shortName}
        </Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <span className="text-slate-900 font-medium">{certification.shortName}</span>
      </nav>

      {/* Header card */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden mb-8">
        <div className="h-2" style={{ backgroundColor: provider.color }} />
        <div className="p-6 sm:p-8">
          {/* Provider + Level */}
          <div className="flex items-center gap-3 mb-3">
            <Link
              href={`/providers/${provider.id}`}
              className="text-sm font-semibold uppercase tracking-wide hover:underline"
              style={{ color: provider.color }}
            >
              {provider.shortName}
            </Link>
            <Badge className={getLevelColor(certification.level)}>
              {certification.level}
            </Badge>
          </div>

          {/* Title */}
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
            {certification.name}
          </h1>

          {/* Description */}
          <p className="text-slate-600 leading-relaxed mb-5 max-w-3xl">
            {certification.description}
          </p>

          {/* Badges */}
          <div className="flex flex-wrap gap-2 mb-4">
            {certification.badges.map((badge) =>
              badge.startsWith("http") ? (
                <img
                  key={badge}
                  src={badge}
                  alt="Certification badge"
                  className="h-8 w-8 rounded"
                />
              ) : (
                <Badge key={badge} variant="outline">
                  {badge}
                </Badge>
              )
            )}
          </div>

          {/* Last updated */}
          <div className="flex items-center gap-1.5 text-xs text-slate-400">
            <Calendar className="w-3.5 h-3.5" />
            <span>Last updated: {certification.lastUpdated}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
