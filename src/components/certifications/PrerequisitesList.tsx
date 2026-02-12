import { CheckCircle, AlertCircle } from "lucide-react";

interface PrerequisitesListProps {
  prerequisites: string[];
  providerColor: string;
}

export default function PrerequisitesList({
  prerequisites,
  providerColor,
}: PrerequisitesListProps) {
  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 sm:p-8 mb-8">
      <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
        <CheckCircle className="w-5 h-5" style={{ color: providerColor }} />
        Prerequisites
      </h2>

      {prerequisites.length > 0 ? (
        <ul className="space-y-3">
          {prerequisites.map((prereq) => (
            <li key={prereq} className="flex items-start gap-3">
              <div
                className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                style={{ backgroundColor: `${providerColor}15`, color: providerColor }}
              >
                <CheckCircle className="w-3.5 h-3.5" />
              </div>
              <span className="text-sm text-slate-700">{prereq}</span>
            </li>
          ))}
        </ul>
      ) : (
        <div className="flex items-center gap-3 p-4 rounded-lg bg-emerald-50 border border-emerald-100">
          <AlertCircle className="w-5 h-5 text-emerald-600 shrink-0" />
          <span className="text-sm text-emerald-800 font-medium">
            No formal prerequisites required. This certification is open to all candidates.
          </span>
        </div>
      )}
    </div>
  );
}
