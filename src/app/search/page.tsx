import { Suspense } from "react";
import type { Metadata } from "next";
import { Search as SearchIcon } from "lucide-react";
import {
  searchCertifications,
  getProviders,
  getProviderById,
  getAllLevels,
} from "@/lib/data";
import SearchInput from "@/components/ui/SearchInput";
import FilterPills from "@/components/ui/FilterPills";
import CertificationCard from "@/components/certifications/CertificationCard";

export const metadata: Metadata = {
  title: "Search Certifications - CertifyApp",
  description: "Browse and search IT certifications across all providers.",
};

interface PageProps {
  searchParams: Promise<{ q?: string; level?: string; provider?: string }>;
}

export default async function SearchPage({ searchParams }: PageProps) {
  const { q, level, provider } = await searchParams;
  const providers = getProviders();
  const levels = getAllLevels();
  const results = searchCertifications(q, {
    level,
    providerId: provider,
  });

  const hasFilters = q || level || provider;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Page header */}
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
          {hasFilters ? "Search Results" : "Browse Certifications"}
        </h1>
        <p className="text-slate-500">
          {hasFilters
            ? `Found ${results.length} certification${results.length !== 1 ? "s" : ""}`
            : `Explore all ${results.length} certifications across ${providers.length} providers.`}
        </p>
      </div>

      {/* Search + Filters */}
      <div className="space-y-5 mb-8">
        <Suspense
          fallback={
            <div className="w-full h-12 bg-slate-100 rounded-xl animate-pulse" />
          }
        >
          <SearchInput />
        </Suspense>
        <Suspense
          fallback={
            <div className="w-full h-20 bg-slate-100 rounded-xl animate-pulse" />
          }
        >
          <FilterPills levels={levels} providers={providers} />
        </Suspense>
      </div>

      {/* Results */}
      {results.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {results.map((cert) => {
            const certProvider = getProviderById(cert.providerId);
            return (
              <CertificationCard
                key={cert.id}
                certification={cert}
                providerColor={certProvider?.color ?? "#64748b"}
                providerName={certProvider?.shortName ?? cert.providerId}
              />
            );
          })}
        </div>
      ) : (
        <div className="text-center py-20">
          <SearchIcon className="w-12 h-12 text-slate-300 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-slate-700 mb-2">
            No certifications found
          </h3>
          <p className="text-slate-500 max-w-sm mx-auto">
            Try adjusting your search query or filters to find what you&apos;re looking for.
          </p>
        </div>
      )}
    </div>
  );
}
