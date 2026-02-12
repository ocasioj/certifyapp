import Link from "next/link";
import { Clock, DollarSign, FileQuestion, ChevronRight } from "lucide-react";
import type { Certification } from "@/types";
import Badge from "@/components/ui/Badge";
import { getLevelColor, formatCurrency, formatDuration } from "@/lib/utils";

interface CertificationCardProps {
  certification: Certification;
  providerColor: string;
  providerName: string;
}

export default function CertificationCard({
  certification,
  providerColor,
  providerName,
}: CertificationCardProps) {
  return (
    <Link
      href={`/certifications/${certification.id}`}
      className="group bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 overflow-hidden flex flex-col"
    >
      {/* Provider accent */}
      <div className="h-1" style={{ backgroundColor: providerColor }} />

      <div className="p-5 flex flex-col flex-1">
        {/* Top: Provider + Level */}
        <div className="flex items-center justify-between mb-3">
          <span
            className="text-xs font-semibold uppercase tracking-wide"
            style={{ color: providerColor }}
          >
            {providerName}
          </span>
          <Badge className={getLevelColor(certification.level)}>
            {certification.level}
          </Badge>
        </div>

        {/* Title */}
        <h3 className="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors mb-2 line-clamp-2">
          {certification.name}
        </h3>

        {/* Description */}
        <p className="text-sm text-slate-500 mb-4 line-clamp-2 flex-1">
          {certification.description}
        </p>

        {/* Stats row */}
        <div className="flex items-center gap-4 text-xs text-slate-500 pt-3 border-t border-slate-100">
          <div className="flex items-center gap-1">
            <DollarSign className="w-3.5 h-3.5" />
            <span>{formatCurrency(certification.exam.cost, certification.exam.currency)}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            <span>{formatDuration(certification.exam.duration)}</span>
          </div>
          <div className="flex items-center gap-1">
            <FileQuestion className="w-3.5 h-3.5" />
            <span>{certification.exam.numberOfQuestions} Q&apos;s</span>
          </div>
          <ChevronRight className="w-3.5 h-3.5 ml-auto text-slate-400 group-hover:text-blue-500 group-hover:translate-x-0.5 transition-all" />
        </div>
      </div>
    </Link>
  );
}
