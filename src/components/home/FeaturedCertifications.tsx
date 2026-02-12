import type { Certification } from "@/types";
import { getProviderById } from "@/lib/data";
import CertificationCard from "@/components/certifications/CertificationCard";

interface FeaturedCertificationsProps {
  certifications: Certification[];
}

export default function FeaturedCertifications({ certifications }: FeaturedCertificationsProps) {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
          Popular Certifications
        </h2>
        <p className="mt-3 text-slate-500 max-w-lg mx-auto">
          The most sought-after IT certifications to advance your career.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {certifications.map((cert) => {
          const provider = getProviderById(cert.providerId);
          return (
            <CertificationCard
              key={cert.id}
              certification={cert}
              providerColor={provider?.color ?? "#64748b"}
              providerName={provider?.shortName ?? cert.providerId}
            />
          );
        })}
      </div>
    </section>
  );
}
