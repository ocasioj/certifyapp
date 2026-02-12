import {
  GraduationCap,
  BookOpen,
  Users,
  FlaskConical,
  Play,
  ClipboardCheck,
  ExternalLink,
} from "lucide-react";
import type { TrainingResource } from "@/types";
import Badge from "@/components/ui/Badge";

interface TrainingResourcesProps {
  resources: TrainingResource[];
  providerColor: string;
}

function getTypeIcon(type: string) {
  switch (type) {
    case "Self-paced":
      return BookOpen;
    case "Instructor-led":
      return Users;
    case "Hands-on lab":
      return FlaskConical;
    case "Video course":
      return Play;
    case "Practice exam":
      return ClipboardCheck;
    default:
      return BookOpen;
  }
}

export default function TrainingResources({
  resources,
  providerColor,
}: TrainingResourcesProps) {
  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 sm:p-8 mb-8">
      <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
        <GraduationCap className="w-5 h-5" style={{ color: providerColor }} />
        Recommended Training
      </h2>

      <div className="space-y-3">
        {resources.map((resource) => {
          const TypeIcon = getTypeIcon(resource.type);
          return (
            <a
              key={resource.name}
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-4 p-4 rounded-lg border border-slate-100 hover:border-slate-200 hover:bg-slate-50 transition-all"
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                style={{ backgroundColor: `${providerColor}15`, color: providerColor }}
              >
                <TypeIcon className="w-5 h-5" />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-medium text-slate-900 group-hover:text-blue-600 transition-colors text-sm line-clamp-1">
                    {resource.name}
                  </h3>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                </div>
                <div className="flex items-center gap-2 mt-1.5 flex-wrap">
                  <span className="text-xs text-slate-500">{resource.provider}</span>
                  <span className="text-slate-300">|</span>
                  <Badge variant="outline" className="text-[10px] px-1.5 py-0">
                    {resource.type}
                  </Badge>
                  <span className="text-xs text-slate-400">{resource.duration}</span>
                  {resource.free && (
                    <Badge className="bg-emerald-100 text-emerald-700 text-[10px] px-1.5 py-0">
                      Free
                    </Badge>
                  )}
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}
