import { cn } from "@/lib/utils";

// Full-bleed circuit-grid background with optional radial glow.
export default function CircuitGrid({ className, glow = "emerald", opacity = "opacity-25" }) {
  const glowColor =
    glow === "cobalt" ? "rgba(59,130,246,0.18)" : "rgba(16,185,129,0.18)";
  return (
    <div className={cn("pointer-events-none absolute inset-0 circuit-grid", opacity, className)}
      style={{
        maskImage: "radial-gradient(ellipse at center, black 30%, transparent 80%)",
        WebkitMaskImage: "radial-gradient(ellipse at center, black 30%, transparent 80%)",
      }}
    >
      <div
        className="absolute inset-0"
        style={{ background: `radial-gradient(circle at 50% 40%, ${glowColor}, transparent 60%)` }}
      />
    </div>
  );
}