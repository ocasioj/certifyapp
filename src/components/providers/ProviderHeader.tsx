import Link from "next/link";
import { ExternalLink, ChevronRight } from "lucide-react";
import type { Provider } from "@/types";
import Badge from "@/components/ui/Badge";

interface ProviderHeaderProps {
  provider: Provider;
  certCount: number;
}

export default function ProviderHeader({ provider, certCount }: ProviderHeaderProps) {
  return (
    <div>
      {/* Breadcrumb */}
      <nav className="flex items-center gap-1.5 text-sm text-slate-500 mb-6">
        <Link href="/" className="hover:text-slate-900 transition-colors">
          Home
        </Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <Link href="/search?view=providers" className="hover:text-slate-900 transition-colors">
          Providers
        </Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <span className="text-slate-900 font-medium">{provider.shortName}</span>
      </nav>

      {/* Header */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden mb-8">
        <div className="h-2" style={{ backgroundColor: provider.color }} />
        <div className="p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-lg"
                  style={{ backgroundColor: provider.color }}
                >
                  {provider.shortName.slice(0, 2)}
                </div>
                <div>
                  <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">
                    {provider.name}
                  </h1>
                </div>
              </div>
              <p className="text-slate-600 max-w-2xl mb-4">{provider.description}</p>
              <div className="flex flex-wrap gap-2">
                {provider.categories.map((cat) => (
                  <Badge key={cat} variant="outline">
                    {cat}
                  </Badge>
                ))}
              </div>
            </div>
            <div className="flex flex-col items-start sm:items-end gap-2">
              <span className="text-sm text-slate-500">
                <span className="text-2xl font-bold text-slate-900">{certCount}</span>{" "}
                certifications
              </span>
              <a
                href={provider.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium hover:underline transition-colors"
                style={{ color: provider.color }}
              >
                Official Website
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
