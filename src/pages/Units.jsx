import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";
import { units } from "@/data/units";

const unitGradients = [
  "from-violet-500 to-purple-600",
  "from-purple-500 to-fuchsia-600",
  "from-fuchsia-500 to-pink-600",
  "from-indigo-500 to-violet-600",
  "from-purple-700 to-indigo-700",
];

export default function Units() {
  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-20">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-purple-500 mb-3">Curriculum</p>
        <h1 className="font-display text-5xl md:text-6xl font-bold tracking-tight text-gray-900">
          Five Units. <span className="gradient-text">One Roadmap.</span>
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-gray-500">
          A structured path through the Internet of Things — from fundamentals to flying drones.
        </p>

        <div className="mt-16 space-y-4">
          {units.map((u, i) => (
            <motion.div
              key={u.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
            >
              <Link
                to={`/units/${u.id}`}
                className="group flex flex-col gap-6 rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition-all duration-300 hover:shadow-lg hover:shadow-purple-50 hover:border-purple-100 md:flex-row md:items-center md:justify-between"
              >
                <div className="flex items-center gap-6">
                  <div className={`h-14 w-14 rounded-2xl bg-gradient-to-br ${unitGradients[i]} flex items-center justify-center shadow-lg flex-shrink-0`}>
                    <span className="font-display text-xl font-bold text-white">0{u.id}</span>
                  </div>
                  <div>
                    <p className="font-mono text-xs uppercase tracking-widest text-purple-400 mb-1">{u.code}</p>
                    <h2 className="font-display text-xl font-bold text-gray-900">{u.title}</h2>
                    <p className="mt-1 max-w-xl text-sm text-gray-400">{u.abstract}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 flex-shrink-0">
                  <div className="text-right hidden md:block">
                    <p className="text-xs text-gray-400">{u.topics.length} topics</p>
                  </div>
                  <div className="h-10 w-10 rounded-xl border border-gray-200 flex items-center justify-center group-hover:border-purple-300 group-hover:bg-purple-50 transition-colors">
                    <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-purple-600 group-hover:translate-x-0.5 transition-all" />
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