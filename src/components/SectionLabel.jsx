import { cn } from "@/lib/utils";

// Reusable mono section label with a node tick.
export default function SectionLabel({ children, className, accent = "emerald" }) {
  const color = accent === "cobalt" ? "text-blue-400" : "text-emerald-400";
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <span className={cn("h-1.5 w-1.5 rotate-45", accent === "cobalt" ? "bg-blue-400" : "bg-emerald-400")} />
      <span className={cn("font-mono text-xs uppercase tracking-[0.3em]", color)}>{children}</span>
      <span className="h-px w-12 bg-gradient-to-r from-current to-transparent opacity-40" />
    </div>
  );
}