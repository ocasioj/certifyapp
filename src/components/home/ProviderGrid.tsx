import type { Provider } from "@/types";
import ProviderCard from "@/components/providers/ProviderCard";

interface ProviderGridProps {
  providers: Provider[];
}

export default function ProviderGrid({ providers }: ProviderGridProps) {
  return (
    <section id="providers" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
          Explore by Provider
        </h2>
        <p className="mt-3 text-slate-500 max-w-lg mx-auto">
          Browse certifications from the world&apos;s leading technology companies and organizations.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {providers.map((provider) => (
          <ProviderCard key={provider.id} provider={provider} />
        ))}
      </div>
    </section>
  );
}
