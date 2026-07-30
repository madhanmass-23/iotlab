import { Link, useParams, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Play } from "lucide-react";
import { getTopic } from "@/data/units";
import { Image } from "@/components/ui/image";

function YouTubeEmbed({ url, label }) {
  const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w-]{11})/);
  const id = match ? match[1] : null;
  return (
    <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
      <div className="aspect-video bg-gray-900">
        {id ? (
          <iframe
            className="h-full w-full"
            src={`https://www.youtube.com/embed/${id}`}
            title={label}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
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

export default function Topic() {
  const { unitId, topicId } = useParams();
  const result = getTopic(unitId, topicId);
  if (!result) return <Navigate to="/units" replace />;
  const { unit, topic } = result;

  const paragraphs = topic.content.split("\n").filter(Boolean);

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="border-b border-gray-100 bg-gray-50">
        <div className="mx-auto max-w-[1100px] px-6 py-4 flex items-center gap-2 text-sm text-gray-400">
          <Link to={`/units/${unit.id}`} className="inline-flex items-center gap-1.5 hover:text-purple-600 transition-colors font-medium">
            <ArrowLeft className="h-4 w-4" /> Unit 0{unit.id}: {unit.title}
          </Link>
          <span className="text-gray-300">/</span>
          <span className="text-gray-600">{topic.title}</span>
        </div>
      </div>

      {/* Hero image */}
      {topic.image && (
        <div className="w-full max-h-[420px] overflow-hidden bg-gray-100">
          <Image
            src={topic.image}
            alt={topic.title}
            fittingType="fill"
            className="w-full max-h-[420px] object-cover"
          />
        </div>
      )}

      {/* Content */}
      <div className="mx-auto max-w-[1100px] px-6 lg:px-10 py-14">
        <div className="grid gap-12 lg:grid-cols-[1fr_280px]">
          {/* Main body */}
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-purple-500 mb-3">{unit.code}</p>
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="font-display text-4xl md:text-5xl font-bold tracking-tight text-gray-900"
            >
              {topic.title}
            </motion.h1>
            <p className="mt-4 text-xl text-gray-500 leading-relaxed">{topic.excerpt}</p>

            <div className="mt-10 space-y-5">
              {paragraphs.map((p, i) => {
                // Detect section headings (lines ending with : or all-caps short lines)
                const isHeading = p.endsWith(":") && p.length < 80;
                if (isHeading) {
                  return (
                    <h3 key={i} className="mt-8 font-display text-xl font-bold text-gray-900 border-l-4 border-purple-500 pl-4">
                      {p}
                    </h3>
                  );
                }
                // Bullet lines
                if (p.startsWith("•")) {
                  return (
                    <div key={i} className="flex gap-3 text-gray-600 leading-relaxed">
                      <span className="text-purple-500 font-bold flex-shrink-0 mt-0.5">•</span>
                      <span>{p.slice(1).trim()}</span>
                    </div>
                  );
                }
                return (
                  <p key={i} className="text-gray-600 leading-[1.85] text-lg">
                    {p}
                  </p>
                );
              })}
            </div>

            {/* Videos */}
            {topic.videos && topic.videos.length > 0 && (
              <section className="mt-16">
                <p className="font-mono text-xs uppercase tracking-[0.3em] text-purple-500 mb-3">Video Resources</p>
                <h2 className="font-display text-2xl font-bold text-gray-900 mb-6">Watch & Learn</h2>
                <div className="grid gap-5 md:grid-cols-2">
                  {topic.videos.map((v, i) => (
                    <YouTubeEmbed key={i} url={v} label={`${topic.title} — Resource ${i + 1}`} />
                  ))}
                </div>
              </section>
            )}

            {/* Next topic */}
            <NextTopic unit={unit} currentId={topic.id} />
          </div>

          {/* Sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 rounded-2xl border border-gray-100 bg-gray-50 p-6">
              <p className="font-mono text-xs uppercase tracking-widest text-purple-400 mb-4">In This Topic</p>
              <div className="space-y-2">
                {unit.topics.map((t) => (
                  <Link
                    key={t.id}
                    to={`/units/${unit.id}/${t.id}`}
                    className={`block rounded-xl px-3 py-2 text-sm transition-colors ${
                      t.id === topic.id
                        ? "bg-purple-600 text-white font-semibold"
                        : "text-gray-500 hover:bg-white hover:text-gray-900"
                    }`}
                  >
                    {t.title}
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

function NextTopic({ unit, currentId }) {
  const idx = unit.topics.findIndex((t) => t.id === currentId);
  const next = unit.topics[idx + 1];
  if (!next) return null;
  return (
    <Link
      to={`/units/${unit.id}/${next.id}`}
      className="group mt-14 flex items-center justify-between rounded-2xl border border-gray-100 bg-gradient-to-r from-gray-50 to-purple-50 p-7 transition-all hover:border-purple-200 hover:shadow-md"
    >
      <div>
        <p className="text-xs text-gray-400 mb-1">Next topic</p>
        <p className="font-display text-xl font-bold text-gray-900">{next.title}</p>
      </div>
      <ArrowRight className="h-6 w-6 text-purple-400 group-hover:translate-x-1 transition-transform" />
    </Link>
  );
}