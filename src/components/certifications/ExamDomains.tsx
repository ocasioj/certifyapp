import { BookOpen } from "lucide-react";
import type { ExamDomain } from "@/types";
import ProgressBar from "@/components/ui/ProgressBar";

interface ExamDomainsProps {
  domains: ExamDomain[];
  providerColor: string;
}

export default function ExamDomains({ domains, providerColor }: ExamDomainsProps) {
  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 sm:p-8 mb-8">
      <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
        <BookOpen className="w-5 h-5" style={{ color: providerColor }} />
        Exam Domains
      </h2>

      <div className="space-y-4">
        {domains.map((domain) => (
          <ProgressBar
            key={domain.name}
            label={domain.name}
            percentage={domain.percentage}
            color={providerColor}
          />
        ))}
      </div>
    </div>
  );
}
