import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Search } from "lucide-react";
import { useState } from "react";
import { actuators } from "@/data/actuators";
import { Image } from "@/components/ui/image";

export default function Actuators() {
  const [query, setQuery] = useState("");
  const filtered = actuators.filter(
    (s) =>
      s.name.toLowerCase().includes(query.toLowerCase()) ||
      s.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-br from-indigo-600 to-violet-700 pt-16 pb-20">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-indigo-200 mb-3">Hardware Lab</p>
          <h1 className="font-display text-5xl md:text-6xl font-bold tracking-tight text-white">
            Actuator Gallery
          </h1>
          <p className="mt-4 max-w-xl text-indigo-200 text-lg">
            The muscles of IoT. Browse the hardware that turns digital commands into physical action.
          </p>
          <div className="mt-8 flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 px-5 py-3 max-w-md rounded-xl">
            <Search className="h-4 w-4 text-white/60" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search actuators or categories…"
              className="w-full bg-transparent text-sm text-white placeholder:text-white/40 focus:outline-none"
            />
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((s, i) => (
            <motion.div
              key={s.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
            >
              <Link
                to={`/actuators/${s.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-gray-100 bg-white shadow-sm overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-indigo-100 hover:border-indigo-100"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                  {s.image ? (
                    <Image src={s.image} alt={s.name} fittingType="fill" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  ) : (
                    <div className="flex h-full items-center justify-center text-xs text-gray-400">[Image]</div>
                  )}
                  <span className="absolute left-4 top-4 rounded-full bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-semibold text-indigo-700 shadow-sm">
                    {s.category}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-xl font-bold text-gray-900">{s.name}</h3>
                  <p className="mt-2 flex-1 text-sm text-gray-400 leading-relaxed">{s.short}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-indigo-600 text-sm font-semibold">
                    View Details <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
        {filtered.length === 0 && (
          <p className="mt-12 text-gray-400 text-center">No actuators match "{query}".</p>
        )}
      </div>
    </div>
  );
}