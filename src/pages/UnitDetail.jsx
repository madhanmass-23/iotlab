import { Link, useParams, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, BookOpen } from "lucide-react";
import { getUnit } from "@/data/units";
import { Image } from "@/components/ui/image";

const unitGradients = [
  "from-violet-500 to-purple-600",
  "from-purple-500 to-fuchsia-600",
  "from-fuchsia-500 to-pink-600",
  "from-indigo-500 to-violet-600",
  "from-purple-700 to-indigo-700",
];

export default function UnitDetail() {
  const { unitId } = useParams();
  const unit = getUnit(unitId);
  if (!unit) return <Navigate to="/units" replace />;
  const gradient = unitGradients[unit.id - 1] || unitGradients[0];

  return (
    <div className="min-h-screen bg-white">
      {/* Unit Hero */}
      <div className={`bg-gradient-to-br ${gradient} pt-16 pb-20`}>
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <Link to="/units" className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm font-medium transition-colors mb-8">
            <ArrowLeft className="h-4 w-4" /> All Units
          </Link>
          <div className="flex items-start gap-6">
            <div className="h-16 w-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
              <span className="font-display text-2xl font-bold text-white">0{unit.id}</span>
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-white/60 mb-2">{unit.code}</p>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-white tracking-tight">{unit.title}</h1>
              <p className="mt-3 max-w-2xl text-white/70 text-lg">{unit.abstract}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Topics */}
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-16">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-purple-500 mb-2">Topics in this Unit</p>
        <h2 className="font-display text-2xl font-bold text-gray-900 mb-10">{unit.topics.length} Modules to Explore</h2>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {unit.topics.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <Link
                to={`/units/${unit.id}/${t.id}`}
                className="group flex h-full flex-col rounded-2xl border border-gray-100 bg-white shadow-sm overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-purple-50 hover:border-purple-100"
              >
                {/* Topic image */}
                {t.image && (
                  <div className="aspect-[16/7] overflow-hidden bg-gray-100">
                    <Image
                      src={t.image}
                      alt={t.title}
                      fittingType="fill"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                )}
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-xs text-purple-400">Topic {String(i + 1).padStart(2, "0")}</span>
                    <BookOpen className="h-4 w-4 text-gray-300 group-hover:text-purple-400 transition-colors" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-gray-900 leading-snug">{t.title}</h3>
                  <p className="mt-2 flex-1 text-sm text-gray-400 leading-relaxed">{t.excerpt}</p>
                  <div className="mt-5 flex items-center gap-1.5 text-purple-600 text-sm font-semibold">
                    Open topic <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}