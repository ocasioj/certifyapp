import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getProviders, getProviderById, getCertificationsByProvider } from "@/lib/data";
import ProviderHeader from "@/components/providers/ProviderHeader";
import CertificationCard from "@/components/certifications/CertificationCard";
import { BookOpen } from "lucide-react";

interface PageProps {
  params: Promise<{ providerId: string }>;
}

export async function generateStaticParams() {
  const providers = getProviders();
  return providers.map((p) => ({ providerId: p.id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { providerId } = await params;
  const provider = getProviderById(providerId);
  if (!provider) return { title: "Provider Not Found" };
  return {
    title: `${provider.name} Certifications - JoCerts`,
    description: provider.description,
  };
}

export default async function ProviderPage({ params }: PageProps) {
  const { providerId } = await params;
  const provider = getProviderById(providerId);

  if (!provider) {
    notFound();
  }

  const certifications = getCertificationsByProvider(providerId);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <ProviderHeader provider={provider} certCount={certifications.length} />

      {certifications.length > 0 ? (
        <>
          <h2 className="text-xl font-semibold text-slate-900 mb-5">
            Available Certifications
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {certifications.map((cert) => (
              <CertificationCard
                key={cert.id}
                certification={cert}
                providerColor={provider.color}
                providerName={provider.shortName}
              />
            ))}
          </div>
        </>
      ) : (
        <div className="text-center py-16 bg-white rounded-xl border border-slate-200">
          <BookOpen className="w-12 h-12 text-slate-300 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-slate-700 mb-2">
            Coming Soon
          </h3>
          <p className="text-slate-500 max-w-sm mx-auto">
            Certifications for {provider.name} are being added. Check back soon!
          </p>
        </div>
      )}
    </div>
  );
}
