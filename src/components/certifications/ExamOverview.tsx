import {
  FileText,
  HelpCircle,
  Clock,
  Target,
  DollarSign,
  Monitor,
  Globe,
  RotateCcw,
  Calendar,
} from "lucide-react";
import type { ExamInfo } from "@/types";
import { formatCurrency, formatDuration } from "@/lib/utils";

interface ExamOverviewProps {
  exam: ExamInfo;
  providerColor: string;
}

export default function ExamOverview({ exam, providerColor }: ExamOverviewProps) {
  const items = [
    {
      icon: FileText,
      label: "Exam Code",
      value: exam.code,
    },
    {
      icon: HelpCircle,
      label: "Questions",
      value: `${exam.numberOfQuestions} questions`,
    },
    {
      icon: Clock,
      label: "Duration",
      value: formatDuration(exam.duration),
    },
    {
      icon: Target,
      label: "Passing Score",
      value: `${exam.passingScore}/${exam.maxScore}`,
    },
    {
      icon: DollarSign,
      label: "Cost",
      value: formatCurrency(exam.cost, exam.currency),
    },
    {
      icon: Monitor,
      label: "Delivery",
      value: exam.deliveryMethod,
    },
    {
      icon: Globe,
      label: "Languages",
      value: `${exam.languages.length} languages`,
    },
    {
      icon: RotateCcw,
      label: "Retake Policy",
      value: exam.retakePolicy,
    },
    {
      icon: Calendar,
      label: "Validity",
      value: exam.validityPeriod,
    },
  ];

  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 sm:p-8 mb-8">
      <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
        <FileText className="w-5 h-5" style={{ color: providerColor }} />
        Exam Details
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {items.map((item) => (
          <div
            key={item.label}
            className="flex items-start gap-3 p-3 rounded-lg bg-slate-50"
          >
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
              style={{ backgroundColor: `${providerColor}15`, color: providerColor }}
            >
              <item.icon className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs font-medium text-slate-500 uppercase tracking-wide">
                {item.label}
              </span>
              <p className="text-sm font-semibold text-slate-900 mt-0.5">
                {item.value}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Question types */}
      <div className="mt-5 pt-5 border-t border-slate-100">
        <span className="text-xs font-medium text-slate-500 uppercase tracking-wide">
          Question Types
        </span>
        <p className="text-sm font-medium text-slate-700 mt-1">
          {exam.questionTypes.join(", ")}
        </p>
      </div>

      {/* Languages expandable */}
      <div className="mt-4 pt-4 border-t border-slate-100">
        <span className="text-xs font-medium text-slate-500 uppercase tracking-wide">
          Available Languages
        </span>
        <div className="flex flex-wrap gap-1.5 mt-2">
          {exam.languages.map((lang) => (
            <span
              key={lang}
              className="inline-flex items-center px-2 py-0.5 rounded text-xs bg-slate-100 text-slate-600"
            >
              {lang}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
