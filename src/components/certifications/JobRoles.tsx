import { Briefcase, TrendingUp } from "lucide-react";
import type { JobRole } from "@/types";
import Badge from "@/components/ui/Badge";
import { getDemandColor } from "@/lib/utils";

interface JobRolesProps {
  roles: JobRole[];
  providerColor: string;
}

export default function JobRoles({ roles, providerColor }: JobRolesProps) {
  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 sm:p-8 mb-8">
      <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
        <Briefcase className="w-5 h-5" style={{ color: providerColor }} />
        Related Job Roles
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {roles.map((role) => (
          <div
            key={role.title}
            className="p-4 rounded-lg border border-slate-100 bg-slate-50"
          >
            <h3 className="font-semibold text-slate-900 text-sm mb-2">
              {role.title}
            </h3>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600 font-medium">
                {role.averageSalary}
              </span>
              <Badge className={getDemandColor(role.demandLevel)}>
                <TrendingUp className="w-3 h-3 mr-1" />
                {role.demandLevel}
              </Badge>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
