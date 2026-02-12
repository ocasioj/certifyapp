import Link from "next/link";
import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
}

export default function Card({ children, className, href }: CardProps) {
  const classes = cn(
    "bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-200",
    href && "cursor-pointer hover:-translate-y-0.5",
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return <div className={classes}>{children}</div>;
}
