import type { Metadata } from "next";
import { getAllCertifications, getProviders, getAllLevels } from "@/lib/data";
import SearchPageContent from "@/components/search/SearchPageContent";

export const metadata: Metadata = {
  title: "Search Certifications - JoCerts",
  description: "Browse and search IT certifications across all providers.",
};

export default function SearchPage() {
  const allCertifications = getAllCertifications();
  const providers = getProviders();
  const levels = getAllLevels();

  return (
    <SearchPageContent
      allCertifications={allCertifications}
      providers={providers}
      levels={levels}
    />
  );
}
