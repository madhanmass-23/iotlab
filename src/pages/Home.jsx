import { Link } from "react-router-dom";
import { ArrowRight, Cpu, Radio, Cloud, ShieldCheck, Wifi, Activity, ChevronRight } from "lucide-react";
import { units } from "@/data/units";
import { Image } from "@/components/ui/image";

const LOGO_URL = "https://media.base44.com/images/public/6a68107f358084bdb749725c/eebb6edfd_IMG-20260725-WA0003.jpg";

const ecosystem = [
  { icon: Cpu, title: "Sense", text: "Sensors detect the physical world.", step: "01" },
  { icon: Wifi, title: "Connect", text: "Data travels over wireless networks.", step: "02" },
  { icon: Cloud, title: "Think", text: "Cloud platforms analyse the data.", step: "03" },
  { icon: Activity, title: "Act", text: "Actuators close the loop.", step: "04" },
];

const unitColors = [
  "from-violet-600 to-purple-600",
  "from-purple-600 to-fuchsia-600",
  "from-fuchsia-600 to-pink-600",
  "from-indigo-600 to-violet-600",
  "from-purple-700 to-indigo-700",
];

export default function Home() {
  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="relative overflow-hidden bg-white pt-16 pb-20">
        {/* Dot background */}
        <div className="absolute inset-0 dot-grid opacity-60 pointer-events-none" />
        {/* Purple gradient blobs */}
        <div className="absolute -top-32 -right-32 h-[600px] w-[600px] rounded-full bg-purple-100 blur-[120px] opacity-60 pointer-events-none" />
        <div className="absolute -bottom-32 -left-32 h-[500px] w-[500px] rounded-full bg-violet-100 blur-[100px] opacity-50 pointer-events-none" />

        <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            {/* Left */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-purple-200 bg-purple-50 px-4 py-1.5 text-xs font-medium text-purple-700 mb-8">
                <span className="h-1.5 w-1.5 rounded-full bg-purple-500 animate-pulse" />
                SYNAPTIC · IoT Knowledge Engine
              </div>

              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] text-gray-900">
                Master the
                <span className="block gradient-text">Internet of Things</span>
              </h1>

              <p className="mt-6 text-xl text-gray-500 leading-relaxed max-w-xl">
                A complete university-grade IoT curriculum — from sensors and protocols to UAV drones —
                built for the next generation of connected-systems engineers.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  to="/units/1"
                  className="inline-flex items-center gap-2 rounded-none bg-gradient-to-r from-violet-600 to-purple-600 px-8 py-4 font-semibold text-white shadow-lg shadow-purple-200 hover:shadow-purple-300 transition-all duration-300 hover:-translate-y-0.5"
                >
                  Start Learning <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-2 rounded-none border-2 border-gray-200 px-8 py-4 font-semibold text-gray-700 hover:border-purple-300 hover:text-purple-700 transition-all duration-300"
                >
                  Browse Projects
                </Link>
              </div>

              {/* Stats */}
              <div className="mt-12 grid grid-cols-4 gap-6">
                {[
                  { n: "5", l: "Units" },
                  { n: "35+", l: "Topics" },
                  { n: "12+", l: "Hardware" },
                  { n: "150+", l: "Projects" },
                ].map((s) => (
                  <div key={s.l}>
                    <p className="font-display text-2xl font-bold gradient-text">{s.n}</p>
                    <p className="text-sm text-gray-400 mt-0.5">{s.l}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — logo + floating cards */}
            <div className="relative hidden lg:flex items-center justify-center">
              <div className="relative h-[500px] w-[420px]">
                {/* Glow ring */}
                <div className="absolute inset-12 rounded-full bg-gradient-to-br from-violet-200 via-purple-200 to-fuchsia-200 blur-3xl opacity-60" />
                {/* Logo */}
                <div className="relative z-10 flex h-full items-center justify-center">
                  <div className="h-72 w-72 rounded-3xl overflow-hidden shadow-2xl shadow-purple-200/60 ring-1 ring-purple-100">
                    <Image src={LOGO_URL} alt="Lafluence Logo" fittingType="fill" className="h-full w-full object-contain bg-black" />
                  </div>
                </div>
                {/* Floating badges */}
                <div className="absolute top-8 -left-6 z-20 rounded-2xl bg-white px-4 py-3 shadow-xl shadow-gray-100 border border-gray-100">
                  <p className="text-xs text-gray-400">Units completed</p>
                  <p className="font-display text-2xl font-bold text-gray-900">5 Modules</p>
                </div>
                <div className="absolute bottom-16 -right-8 z-20 rounded-2xl bg-white px-4 py-3 shadow-xl shadow-gray-100 border border-gray-100">
                  <p className="text-xs text-purple-500 font-medium">● LIVE</p>
                  <p className="text-sm font-semibold text-gray-800">IoT Platform</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IoT WORKS — 4-step strip */}
      <section className="border-y border-gray-100 bg-gray-50 py-20">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <p className="text-center font-mono text-xs uppercase tracking-[0.3em] text-purple-500 mb-4">The IoT Loop</p>
          <h2 className="text-center font-display text-3xl font-bold text-gray-900 mb-14">
            Sense → Connect → Think → Act
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {ecosystem.map((e) => (
              <div key={e.title} className="bg-white rounded-2xl border border-gray-100 px-8 py-10 shadow-sm">
                <div className="flex items-center justify-between mb-6">
                  <div className="h-12 w-12 rounded-2xl bg-purple-50 flex items-center justify-center">
                    <e.icon className="h-6 w-6 text-purple-600" />
                  </div>
                  <span className="font-display text-3xl font-bold text-gray-100">{e.step}</span>
                </div>
                <h3 className="font-display text-lg font-bold text-gray-900">{e.title}</h3>
                <p className="mt-1.5 text-sm text-gray-500">{e.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UNIT CARDS */}
      <section className="py-24">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-purple-500 mb-3">Curriculum</p>
              <h2 className="font-display text-4xl font-bold text-gray-900">Five Units. One Roadmap.</h2>
            </div>
            <Link to="/units/1" className="inline-flex items-center gap-1.5 text-sm font-semibold text-purple-600 hover:text-purple-800">
              View all units <ChevronRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {units.map((u, i) => (
              <Link
                key={u.id}
                to={`/units/${u.id}`}
                className="group flex flex-col bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:shadow-purple-100 hover:border-purple-100 transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`h-10 w-10 rounded-xl bg-gradient-to-br ${unitColors[i]} flex items-center justify-center mb-5 shadow-lg flex-shrink-0`}>
                  <span className="font-display text-sm font-bold text-white">0{u.id}</span>
                </div>
                <h3 className="font-display text-base font-bold leading-snug text-gray-900 flex-1">{u.title}</h3>
                <p className="mt-2 text-xs text-gray-400 leading-relaxed">{u.abstract}</p>
                <div className="mt-5 flex items-center gap-1 text-purple-600 text-xs font-semibold">
                  Open <ChevronRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* HARDWARE CTA */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="grid gap-5 md:grid-cols-2">
            {[
              { title: "Sensors", subtitle: "Detect the physical world", to: "/sensors", Icon: Radio },
              { title: "Actuators", subtitle: "Act on the physical world", to: "/actuators", Icon: ShieldCheck },
            ].map((b) => (
              <Link
                key={b.title}
                to={b.to}
                className="group relative overflow-hidden rounded-2xl bg-white border border-gray-100 p-8 shadow-sm hover:shadow-lg hover:shadow-purple-100 hover:border-purple-100 transition-all duration-300"
              >
                <div className="flex items-start justify-between">
                  <div className="h-12 w-12 rounded-2xl bg-purple-50 flex items-center justify-center">
                    <b.Icon className="h-6 w-6 text-purple-600" />
                  </div>
                  <ChevronRight className="h-5 w-5 text-gray-300 group-hover:text-purple-500 group-hover:translate-x-1 transition-all" />
                </div>
                <h3 className="mt-6 font-display text-2xl font-bold text-gray-900">{b.title}</h3>
                <p className="mt-1 text-gray-400">{b.subtitle}</p>
                <div className="absolute bottom-0 inset-x-0 h-1 bg-gradient-to-r from-violet-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT FOOTER STRIP */}
      <section className="py-20 bg-gradient-to-br from-violet-600 to-purple-700">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 text-center">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-purple-200 mb-4">Designed & Developed by</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white">
            Team Lafluence
          </h2>
          <p className="mt-3 text-purple-200">
            Under the guidance of <span className="text-white font-semibold">Dr. G.N. Kondaramya</span>
          </p>
          <p className="mt-2 text-purple-300 text-sm">Collaborate · Execute · Elevate</p>
        </div>
      </section>
    </div>
  );
}