import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { Provider } from "@/types";
import Badge from "@/components/ui/Badge";

interface ProviderCardProps {
  provider: Provider;
}

export default function ProviderCard({ provider }: ProviderCardProps) {
  return (
    <Link
      href={`/providers/${provider.id}`}
      className="group bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 overflow-hidden"
    >
      {/* Color accent bar */}
      <div className="h-1.5" style={{ backgroundColor: provider.color }} />

      <div className="p-5">
        {/* Header */}
        <div className="flex items-start justify-between mb-3">
          <div>
            <div
              className="inline-flex items-center justify-center w-10 h-10 rounded-lg text-white font-bold text-sm mb-2"
              style={{ backgroundColor: provider.color }}
            >
              {provider.shortName.slice(0, 2)}
            </div>
            <h3 className="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
              {provider.shortName}
            </h3>
          </div>
          <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-blue-500 group-hover:translate-x-0.5 transition-all mt-1" />
        </div>

        {/* Description */}
        <p className="text-sm text-slate-500 mb-4 line-clamp-2">
          {provider.description}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between">
          <div className="flex flex-wrap gap-1.5">
            {provider.categories.slice(0, 3).map((cat) => (
              <Badge key={cat} variant="outline" className="text-[10px] px-2 py-0">
                {cat}
              </Badge>
            ))}
          </div>
          <span className="text-xs font-medium text-slate-400">
            {provider.certificationCount} certs
          </span>
        </div>
      </div>
    </Link>
  );
}
