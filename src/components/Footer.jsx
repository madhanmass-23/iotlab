import { Link } from "react-router-dom";
import { Github, Linkedin, Mail } from "lucide-react";
import { Image } from "@/components/ui/image";

const LOGO_URL = "https://media.base44.com/images/public/6a68107f358084bdb749725c/eebb6edfd_IMG-20260725-WA0003.jpg";

const footerNav = [
  {
    title: "Curriculum",
    links: [
      { label: "Unit 1 — Introduction to IoT", to: "/units/1" },
      { label: "Unit 2 — Prototyping IoT Objects", to: "/units/2" },
      { label: "Unit 3 — IoT Architecture & Protocols", to: "/units/3" },
      { label: "Unit 4 — Device Discovery & Cloud", to: "/units/4" },
      { label: "Unit 5 — UAV IoT", to: "/units/5" },
    ],
  },
  {
    title: "Hardware Lab",
    links: [
      { label: "Sensors", to: "/sensors" },
      { label: "Actuators", to: "/actuators" },
      { label: "Projects Terminal", to: "/projects" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Home", to: "/" },
      { label: "About the Course", to: "/" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-16">
        <div className="grid gap-10 md:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="h-10 w-10 rounded-xl overflow-hidden bg-black border border-white/10 flex-shrink-0">
                <Image src={LOGO_URL} alt="Lafluence" fittingType="fill" className="h-full w-full object-contain" />
              </div>
              <div>
                <p className="font-display text-sm font-bold tracking-wide text-white">LAFLUENCE</p>
                <p className="font-mono text-[10px] tracking-[0.2em] text-purple-400"> Learn · IoT</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-gray-400 max-w-sm">
              A premium IoT knowledge platform bridging the physical and digital worlds through sensors, protocols, and connected systems.
            </p>
            <p className="mt-4 text-sm text-gray-500">
              Designed by <span className="text-white font-medium">Team Lafluence</span><br />
              Under <span className="text-purple-400">Dr.G.N.Kodanda Ramaiah</span>
            </p>
            <div className="mt-6 flex gap-3">
              {[Github, Linkedin, Mail].map((Icon, i) => (
                <a key={i} href="#" className="h-9 w-9 rounded-xl border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-purple-500 transition-colors" aria-label="Social">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {footerNav.map((col) => (
            <div key={col.title}>
              <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-purple-400">{col.title}</h4>
              <ul className="space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link to={l.to} className="text-sm text-gray-400 hover:text-white transition-colors">{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-white/10 pt-6">
          <p className="text-xs text-gray-600">© {new Date().getFullYear()} IoT Lab Knowledge Engine. All rights reserved.</p>
          <p className="text-xs text-gray-600">Collaborate · Execute · Elevate</p>
        </div>
      </div>
    </footer>
  );
}
