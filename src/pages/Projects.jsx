import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Filter } from "lucide-react";
import { miniProjects, majorProjects } from "@/data/projects";
import { cn } from "@/lib/utils";

const DIFFICULTY_STYLE = {
  Easy: { dot: "bg-emerald-400", label: "Easy", text: "text-emerald-600", bg: "bg-emerald-50" },
  Medium: { dot: "bg-amber-400", label: "Medium", text: "text-amber-600", bg: "bg-amber-50" },
  Major: { dot: "bg-rose-400", label: "Major", text: "text-rose-600", bg: "bg-rose-50" },
};

export default function Projects() {
  const [tab, setTab] = useState("mini");
  const [query, setQuery] = useState("");
  const [industry, setIndustry] = useState("All");

  const list = tab === "mini" ? miniProjects : majorProjects;

  const industries = useMemo(() => {
    const set = new Set(list.map((p) => p.industry));
    return ["All", ...Array.from(set).sort()];
  }, [list]);

  const filtered = useMemo(() => {
    return list.filter((p) => {
      const q = query.toLowerCase();
      const matchesQuery = p.title.toLowerCase().includes(q) || p.description.toLowerCase().includes(q) || p.components.join(" ").toLowerCase().includes(q);
      return matchesQuery && (industry === "All" || p.industry === industry);
    });
  }, [list, query, industry]);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-br from-violet-600 to-purple-700 pt-16 pb-20">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-purple-200 mb-3">Hands-On</p>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-white tracking-tight">
            Project Directory
          </h1>
          <p className="mt-4 max-w-xl text-purple-200 text-lg">
            {miniProjects.length + majorProjects.length}+ hands-on IoT builds. Filter by difficulty, industry, or component.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-12">
        {/* Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          {[
            { id: "mini", label: "Mini Projects", count: miniProjects.length },
            { id: "major", label: "Major Projects", count: majorProjects.length },
          ].map((t) => (
            <button
              key={t.id}
              onClick={() => { setTab(t.id); setIndustry("All"); }}
              className={cn(
                "rounded-xl px-6 py-2.5 text-sm font-semibold transition-all",
                tab === t.id
                  ? "bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow-lg shadow-purple-200"
                  : "border border-gray-200 text-gray-500 hover:text-gray-900"
              )}
            >
              {t.label} <span className="opacity-60 ml-1">({t.count})</span>
            </button>
          ))}
        </div>

        {/* Search + filters */}
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center mb-6">
          <div className="flex items-center gap-3 border border-gray-200 rounded-xl px-5 py-3 flex-1 max-w-md">
            <Search className="h-4 w-4 text-gray-400" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search projects, components…"
              className="w-full bg-transparent text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none"
            />
          </div>
          <div className="flex items-center gap-2 flex-wrap">
            <Filter className="h-4 w-4 text-gray-400" />
            {industries.map((ind) => (
              <button
                key={ind}
                onClick={() => setIndustry(ind)}
                className={cn(
                  "rounded-lg px-3 py-1.5 text-xs font-semibold border transition-all",
                  industry === ind
                    ? "border-purple-500 bg-purple-50 text-purple-700"
                    : "border-gray-200 text-gray-500 hover:text-gray-900 hover:border-gray-300"
                )}
              >
                {ind}
              </button>
            ))}
          </div>
        </div>

        <p className="text-sm text-gray-400 mb-6">
          <span className="text-purple-600 font-semibold">{filtered.length}</span> / {list.length} projects shown
        </p>

        {/* Grid */}
        <div className="grid gap-5" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))" }}>
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => {
              const d = DIFFICULTY_STYLE[p.difficulty] || DIFFICULTY_STYLE.Medium;
              return (
                <motion.div
                  key={p.title}
                  layout
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.3, delay: Math.min(i * 0.015, 0.15) }}
                  className="group flex flex-col rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:shadow-purple-50 hover:border-purple-100"
                >
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">{p.industry}</span>
                    <span className={cn("inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold", d.bg, d.text)}>
                      <span className={cn("h-1.5 w-1.5 rounded-full", d.dot)} />
                      {d.label}
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-bold text-gray-900 leading-snug">{p.title}</h3>
                  <p className="mt-2 flex-1 text-sm text-gray-400 leading-relaxed">{p.description}</p>
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {p.components.map((c) => (
                      <span key={c} className="rounded-lg border border-gray-100 bg-gray-50 px-2 py-0.5 text-xs text-gray-500">{c}</span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {filtered.length === 0 && (
          <div className="mt-12 rounded-2xl border border-dashed border-gray-200 p-16 text-center">
            <p className="text-gray-400">No projects match your filters.</p>
            <button onClick={() => { setQuery(""); setIndustry("All"); }} className="mt-3 text-sm font-semibold text-purple-600 hover:text-purple-800">
              Reset filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}