export function formatCurrency(amount: number, currency: string): string {
  if (currency === "USD") return `$${amount.toLocaleString()}`;
  return `${amount.toLocaleString()} ${currency}`;
}

export function formatDuration(minutes: number): string {
  if (minutes < 60) return `${minutes}m`;
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return mins > 0 ? `${hours}h ${mins}m` : `${hours}h`;
}

export function getLevelColor(level: string): string {
  switch (level.toLowerCase()) {
    case "foundational":
    case "fundamentals":
      return "bg-green-100 text-green-800";
    case "associate":
      return "bg-blue-100 text-blue-800";
    case "intermediate":
      return "bg-yellow-100 text-yellow-800";
    case "professional":
      return "bg-purple-100 text-purple-800";
    case "expert":
      return "bg-red-100 text-red-800";
    default:
      return "bg-slate-100 text-slate-800";
  }
}

export function getDemandColor(level: string): string {
  switch (level.toLowerCase()) {
    case "high":
      return "bg-emerald-100 text-emerald-800";
    case "medium":
    case "moderate":
      return "bg-amber-100 text-amber-800";
    default:
      return "bg-slate-100 text-slate-800";
  }
}

export function cn(...classes: (string | undefined | false | null)[]): string {
  return classes.filter(Boolean).join(" ");
}
