"use client";

import { useRouter, useSearchParams } from "next/navigation";
import type { Provider } from "@/types";
import { cn } from "@/lib/utils";

interface FilterPillsProps {
  levels: string[];
  providers: Provider[];
}

export default function FilterPills({ levels, providers }: FilterPillsProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const activeLevel = searchParams.get("level") ?? "";
  const activeProvider = searchParams.get("provider") ?? "";

  function updateFilter(key: string, value: string) {
    const params = new URLSearchParams(searchParams.toString());
    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    router.push(`/search?${params.toString()}`);
  }

  return (
    <div className="space-y-4">
      {/* Level filters */}
      <div>
        <span className="text-xs font-medium text-slate-500 uppercase tracking-wide mb-2 block">
          Level
        </span>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => updateFilter("level", "")}
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
              onClick={() => updateFilter("level", activeLevel === level ? "" : level)}
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
            onClick={() => updateFilter("provider", "")}
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
                updateFilter("provider", activeProvider === provider.id ? "" : provider.id)
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
  );
}
