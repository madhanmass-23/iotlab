import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowLeft, Play, Cpu } from "lucide-react";
import { motion } from "framer-motion";
import { Image } from "@/components/ui/image";

export default function HardwareDetail({ getItem, backTo, accent = "emerald", kindLabel = "Sensor" }) {
  const { slug } = useParams();
  const item = getItem(slug);
  if (!item) return <Navigate to={backTo} replace />;

  const isPurple = accent !== "cobalt";
  const accentClass = isPurple ? "text-purple-600" : "text-indigo-600";
  const badgeBg = isPurple ? "bg-purple-50 text-purple-700" : "bg-indigo-50 text-indigo-700";
  const gradFrom = isPurple ? "from-violet-600 to-purple-700" : "from-indigo-600 to-violet-700";

  const sections = [
    { id: "overview", n: "01", title: "What is it?", body: item.overview },
    { id: "how", n: "02", title: "How does it work?", body: item.howItWorks },
    { id: "apps", n: "03", title: "Applications", list: item.applications },
    { id: "projects", n: "04", title: "Mini-Projects", list: item.miniProjects },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className={`bg-gradient-to-br ${gradFrom} pt-16 pb-20`}>
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <Link to={backTo} className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm font-medium transition-colors mb-8">
            <ArrowLeft className="h-4 w-4" /> All {kindLabel}s
          </Link>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-semibold text-white mb-4">{item.category}</span>
              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="font-display text-4xl md:text-5xl font-bold text-white tracking-tight"
              >
                {item.name}
              </motion.h1>
              <p className="mt-4 text-white/70 text-lg leading-relaxed">{item.short}</p>
            </div>
            {/* Image in hero */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative h-52 w-52 rounded-3xl bg-white/10 backdrop-blur-sm flex items-center justify-center p-6 shadow-2xl">
                {item.image ? (
                  <Image src={item.image} alt={item.name} fittingType="fit" className="max-h-full max-w-full object-contain" />
                ) : (
                  <Cpu className="h-20 w-20 text-white/40" />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-[1100px] px-6 lg:px-10 py-16">
        <div className="space-y-14">
          {sections.map((s) => (
            <section key={s.id}>
              <div className="flex items-baseline gap-3 mb-5">
                <span className={`font-mono text-sm font-bold ${accentClass}`}>{s.n}</span>
                <h2 className="font-display text-xl font-bold text-gray-900">{s.title}</h2>
                <span className="h-px flex-1 bg-gray-100" />
              </div>
              {s.body && <p className="text-gray-600 leading-[1.85] text-lg pl-8">{s.body}</p>}
              {s.list && (
                <ul className="mt-3 space-y-2.5 pl-8">
                  {s.list.map((li, i) => (
                    <li key={i} className="flex gap-3 text-gray-600">
                      <span className={`font-bold ${accentClass} flex-shrink-0`}>→</span>
                      <span>{li}</span>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>

        {/* Videos */}
        {item.videos && item.videos.length > 0 && (
          <section className="mt-16">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-purple-500 mb-3">Video Resources</p>
            <h2 className="font-display text-2xl font-bold text-gray-900 mb-6">Watch & Learn</h2>
            <div className="grid gap-5 md:grid-cols-2">
              {item.videos.map((v, i) => (
                <VideoRow key={i} url={v} label={`${item.name} — Resource ${i + 1}`} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}

function VideoRow({ url, label }) {
  const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w-]{11})/);
  const id = match ? match[1] : null;
  return (
    <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
      <div className="aspect-video bg-gray-900">
        {id ? (
          <iframe className="h-full w-full" src={`https://www.youtube.com/embed/${id}`} title={label}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
        ) : (
          <div className="flex h-full items-center justify-center font-mono text-xs text-gray-500">[YouTube Placeholder]</div>
        )}
      </div>
      <div className="flex items-center gap-2 px-4 py-3 bg-white border-t border-gray-100">
        <Play className="h-3.5 w-3.5 text-purple-500" />
        <span className="text-sm text-gray-500">{label}</span>
      </div>
    </div>
  );
}