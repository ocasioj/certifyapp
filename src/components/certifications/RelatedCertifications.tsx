import Link from "next/link";
import { ArrowRight, Link2 } from "lucide-react";
import { getCertificationById, getProviderById } from "@/lib/data";
import Badge from "@/components/ui/Badge";
import { getLevelColor } from "@/lib/utils";

interface RelatedCertificationsProps {
  certificationIds: string[];
  providerColor: string;
}

export default function RelatedCertifications({
  certificationIds,
  providerColor,
}: RelatedCertificationsProps) {
  const relatedCerts = certificationIds
    .map((id) => getCertificationById(id))
    .filter((c) => c !== undefined);

  if (relatedCerts.length === 0) return null;

  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 sm:p-8 mb-8">
      <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
        <Link2 className="w-5 h-5" style={{ color: providerColor }} />
        Related Certifications
      </h2>

      <div className="space-y-3">
        {relatedCerts.map((cert) => {
          const provider = getProviderById(cert.providerId);
          return (
            <Link
              key={cert.id}
              href={`/certifications/${cert.id}`}
              className="group flex items-center justify-between p-4 rounded-lg border border-slate-100 hover:border-slate-200 hover:bg-slate-50 transition-all"
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-2 h-8 rounded-full"
                  style={{ backgroundColor: provider?.color ?? "#64748b" }}
                />
                <div>
                  <h3 className="font-medium text-slate-900 group-hover:text-blue-600 transition-colors text-sm">
                    {cert.name}
                  </h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs text-slate-500">
                      {provider?.shortName ?? cert.providerId}
                    </span>
                    <Badge className={`${getLevelColor(cert.level)} text-[10px] px-1.5 py-0`}>
                      {cert.level}
                    </Badge>
                  </div>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-500 group-hover:translate-x-0.5 transition-all shrink-0" />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
