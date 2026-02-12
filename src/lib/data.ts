import type { Provider, Certification } from "@/types";

import providersData from "@/data/providers.json";
import awsCerts from "@/data/certifications/aws.json";
import azureCerts from "@/data/certifications/azure.json";
import gcpCerts from "@/data/certifications/gcp.json";
import comptiaCerts from "@/data/certifications/comptia.json";
import ciscoCerts from "@/data/certifications/cisco.json";
import kubernetesCerts from "@/data/certifications/kubernetes.json";
import vmwareCerts from "@/data/certifications/vmware.json";

const providers: Provider[] = providersData as Provider[];

const allCertifications: Certification[] = [
  ...(awsCerts as Certification[]),
  ...(azureCerts as Certification[]),
  ...(gcpCerts as Certification[]),
  ...(comptiaCerts as Certification[]),
  ...(ciscoCerts as Certification[]),
  ...(kubernetesCerts as Certification[]),
  ...(vmwareCerts as Certification[]),
];

export function getProviders(): Provider[] {
  return providers;
}

export function getProviderById(id: string): Provider | undefined {
  return providers.find((p) => p.id === id);
}

export function getAllCertifications(): Certification[] {
  return allCertifications;
}

export function getCertificationsByProvider(providerId: string): Certification[] {
  return allCertifications.filter((c) => c.providerId === providerId);
}

export function getCertificationById(id: string): Certification | undefined {
  return allCertifications.find((c) => c.id === id);
}

export function getCertificationBySlug(slug: string): Certification | undefined {
  return allCertifications.find((c) => c.slug === slug);
}

export function searchCertifications(
  query?: string,
  filters?: { level?: string; providerId?: string }
): Certification[] {
  let results = allCertifications;

  if (filters?.level) {
    results = results.filter(
      (c) => c.level.toLowerCase() === filters.level!.toLowerCase()
    );
  }

  if (filters?.providerId) {
    results = results.filter((c) => c.providerId === filters.providerId);
  }

  if (query && query.trim()) {
    const q = query.toLowerCase().trim();
    results = results.filter(
      (c) =>
        c.name.toLowerCase().includes(q) ||
        c.shortName.toLowerCase().includes(q) ||
        c.description.toLowerCase().includes(q) ||
        c.level.toLowerCase().includes(q) ||
        c.badges.some((b) => b.toLowerCase().includes(q)) ||
        (getProviderById(c.providerId)?.name.toLowerCase().includes(q) ?? false) ||
        (getProviderById(c.providerId)?.shortName.toLowerCase().includes(q) ?? false)
    );
  }

  return results;
}

export function getFeaturedCertifications(): Certification[] {
  const featuredIds = [
    "aws-solutions-architect-associate",
    "azure-administrator-associate",
    "gcp-professional-cloud-architect",
    "comptia-security-plus",
    "cisco-ccna",
    "kubernetes-cka",
  ];
  return featuredIds
    .map((id) => getCertificationById(id))
    .filter((c): c is Certification => c !== undefined);
}

export function getAllLevels(): string[] {
  const levels = new Set(allCertifications.map((c) => c.level));
  return Array.from(levels).sort();
}

export function getAllCategories(): string[] {
  const categories = new Set(providers.flatMap((p) => p.categories));
  return Array.from(categories).sort();
}
