"use client";

import { useState, useMemo } from "react";
import { Search as SearchIcon } from "lucide-react";
import { X } from "lucide-react";
import type { Certification, Provider } from "@/types";
import CertificationCard from "@/components/certifications/CertificationCard";
import { cn } from "@/lib/utils";

interface SearchPageContentProps {
  allCertifications: Certification[];
  providers: Provider[];
  levels: string[];
}

export default function SearchPageContent({
  allCertifications,
  providers,
  levels,
}: SearchPageContentProps) {
  const [query, setQuery] = useState("");
  const [activeLevel, setActiveLevel] = useState("");
  const [activeProvider, setActiveProvider] = useState("");

  const results = useMemo(() => {
    let filtered = allCertifications;

    if (activeLevel) {
      filtered = filtered.filter(
        (c) => c.level.toLowerCase() === activeLevel.toLowerCase()
      );
    }

    if (activeProvider) {
      filtered = filtered.filter((c) => c.providerId === activeProvider);
    }

    if (query.trim()) {
      const q = query.toLowerCase().trim();
      filtered = filtered.filter(
        (c) =>
          c.name.toLowerCase().includes(q) ||
          c.shortName.toLowerCase().includes(q) ||
          c.description.toLowerCase().includes(q) ||
          c.level.toLowerCase().includes(q) ||
          c.badges.some((b) => b.toLowerCase().includes(q)) ||
          providers.find((p) => p.id === c.providerId)?.name.toLowerCase().includes(q) ||
          providers.find((p) => p.id === c.providerId)?.shortName.toLowerCase().includes(q)
      );
    }

    return filtered;
  }, [allCertifications, query, activeLevel, activeProvider, providers]);

  const hasFilters = query || activeLevel || activeProvider;

  function getProviderById(id: string) {
    return providers.find((p) => p.id === id);
  }

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
            : `Explore all ${allCertifications.length} certifications across ${providers.length} providers.`}
        </p>
      </div>

      {/* Search input */}
      <div className="space-y-5 mb-8">
        <div className="relative">
          <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search certifications..."
            className="w-full pl-12 pr-10 py-3.5 bg-white border border-slate-200 rounded-xl text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Filters */}
        <div className="space-y-4">
          {/* Level filters */}
          <div>
            <span className="text-xs font-medium text-slate-500 uppercase tracking-wide mb-2 block">
              Level
            </span>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setActiveLevel("")}
                className={cn(
                  "px-3 py-1.5 rounded-lg text-xs font-medium transition-all",
                  !activeLevel
                    ? "bg-slate-900 text-white"
                    : "bg-white text-slate-600 border border-slate-200 hover:border-slate-300"
                )}
              >
                All Levels
              </button>
              {levels.map((level) => (
                <button
                  key={level}
                  onClick={() => setActiveLevel(activeLevel === level ? "" : level)}
                  className={cn(
                    "px-3 py-1.5 rounded-lg text-xs font-medium transition-all",
                    activeLevel === level
                      ? "bg-slate-900 text-white"
                      : "bg-white text-slate-600 border border-slate-200 hover:border-slate-300"
                  )}
                >
                  {level}
                </button>
              ))}
            </div>
          </div>

          {/* Provider filters */}
          <div>
            <span className="text-xs font-medium text-slate-500 uppercase tracking-wide mb-2 block">
              Provider
            </span>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setActiveProvider("")}
                className={cn(
                  "px-3 py-1.5 rounded-lg text-xs font-medium transition-all",
                  !activeProvider
                    ? "bg-slate-900 text-white"
                    : "bg-white text-slate-600 border border-slate-200 hover:border-slate-300"
                )}
              >
                All Providers
              </button>
              {providers.map((provider) => (
                <button
                  key={provider.id}
                  onClick={() =>
                    setActiveProvider(activeProvider === provider.id ? "" : provider.id)
                  }
                  className={cn(
                    "px-3 py-1.5 rounded-lg text-xs font-medium transition-all border",
                    activeProvider === provider.id
                      ? "text-white border-transparent"
                      : "bg-white text-slate-600 border-slate-200 hover:border-slate-300"
                  )}
                  style={
                    activeProvider === provider.id
                      ? { backgroundColor: provider.color }
                      : undefined
                  }
                >
                  {provider.shortName}
                </button>
              ))}
            </div>
          </div>
        </div>
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
