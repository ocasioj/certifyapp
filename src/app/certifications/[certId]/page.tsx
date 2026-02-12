import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  getAllCertifications,
  getCertificationById,
  getProviderById,
} from "@/lib/data";
import CertificationHeader from "@/components/certifications/CertificationHeader";
import ExamOverview from "@/components/certifications/ExamOverview";
import ExamDomains from "@/components/certifications/ExamDomains";
import PrerequisitesList from "@/components/certifications/PrerequisitesList";
import TrainingResources from "@/components/certifications/TrainingResources";
import JobRoles from "@/components/certifications/JobRoles";
import RelatedCertifications from "@/components/certifications/RelatedCertifications";

interface PageProps {
  params: Promise<{ certId: string }>;
}

export async function generateStaticParams() {
  const certs = getAllCertifications();
  return certs.map((c) => ({ certId: c.id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { certId } = await params;
  const cert = getCertificationById(certId);
  if (!cert) return { title: "Certification Not Found" };
  const provider = getProviderById(cert.providerId);
  return {
    title: `${cert.name} - CertifyApp`,
    description: `${cert.description.slice(0, 160)}...`,
    keywords: [
      cert.name,
      cert.shortName,
      provider?.name ?? "",
      cert.level,
      ...cert.badges,
    ].filter(Boolean),
  };
}

export default async function CertificationPage({ params }: PageProps) {
  const { certId } = await params;
  const certification = getCertificationById(certId);

  if (!certification) {
    notFound();
  }

  const provider = getProviderById(certification.providerId);

  if (!provider) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <CertificationHeader certification={certification} provider={provider} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main content */}
        <div className="lg:col-span-2">
          <ExamOverview exam={certification.exam} providerColor={provider.color} />
          <ExamDomains
            domains={certification.examDomains}
            providerColor={provider.color}
          />
          <TrainingResources
            resources={certification.recommendedTraining}
            providerColor={provider.color}
          />
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <PrerequisitesList
            prerequisites={certification.prerequisites}
            providerColor={provider.color}
          />
          <JobRoles roles={certification.jobRoles} providerColor={provider.color} />
          <RelatedCertifications
            certificationIds={certification.relatedCertifications}
            providerColor={provider.color}
          />
        </div>
      </div>
    </div>
  );
}
