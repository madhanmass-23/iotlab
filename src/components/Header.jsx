import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import { units } from "@/data/units";
import { cn } from "@/lib/utils";
// We import standard React Image component to use the direct local file path
import { Image } from "@/components/ui/image"; 

// --- UPDATED IMAGE CONFIGURATION ---

// We are now referencing the file directly from your project's /public folder
// Note: Ensure your image is named 'iot-image.jpg' inside the /public folder
const LOGO_URL = "/iot-image.jpg"; 

// Update these labels to customize your main title and subtitle
const LOGO_TITLE = "IoT Hub"; 
const LOGO_SUBTITLE = "Kuppam Engineering College"; // or e.g. "LEARN·IoT.SMART"

// --- END UPDATED CONFIGURATION ---

const navLinks = [
  { label: "Sensors", to: "/sensors" },
  { label: "Actuators", to: "/actuators" },
  { label: "Projects", to: "/projects" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [unitsOpen, setUnitsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setUnitsOpen(false);
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300 border-b",
        scrolled
          ? "bg-white/90 backdrop-blur-xl border-gray-200 shadow-sm shadow-gray-100"
          : "bg-white border-transparent"
      )}
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="flex h-16 items-center justify-between">
          {/* Logo Section - Modified */}
          <Link to="/" className="flex items-center gap-3">
            {/* The small container for your logo image */}
            <div className="h-9 w-9 rounded-lg overflow-hidden flex-shrink-0">
              <Image 
                src={LOGO_URL} 
                alt={`${LOGO_TITLE} Logo`} 
                fittingType="fill" 
                className="h-full w-full object-contain" 
              />
            </div>
            
            {/* The text right next to your logo image */}
            <div className="leading-none">
              <span className="font-display text-sm font-bold tracking-wide text-gray-900">
                {LOGO_TITLE}
              </span>
              <span className="block font-mono text-[10px] tracking-[0.2em] text-purple-500 uppercase">
                {LOGO_SUBTITLE}
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 lg:flex">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                cn("px-4 py-2 text-sm font-medium transition-colors rounded-lg",
                  isActive ? "text-purple-700 bg-purple-50" : "text-gray-500 hover:text-gray-900 hover:bg-gray-50"
                )
              }
            >
              Home
            </NavLink>

            {/* Units dropdown */}
            <div className="relative" onMouseEnter={() => setUnitsOpen(true)} onMouseLeave={() => setUnitsOpen(false)}>
              <button
                className={cn(
                  "flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors rounded-lg",
                  location.pathname.startsWith("/units")
                    ? "text-purple-700 bg-purple-50"
                    : "text-gray-500 hover:text-gray-900 hover:bg-gray-50"
                )}
              >
                Units 1–5
                <ChevronDown className={cn("h-3.5 w-3.5 transition-transform", unitsOpen && "rotate-180")} />
              </button>
              <div
                className={cn(
                  "absolute left-1/2 top-full w-72 -translate-x-1/2 pt-2 transition-all duration-200",
                  unitsOpen ? "visible opacity-100 translate-y-0" : "invisible opacity-0 -translate-y-1"
                )}
              >
                <div className="rounded-2xl border border-gray-100 bg-white p-2 shadow-xl shadow-gray-100">
                  {units.map((u) => (
                    <Link
                      key={u.id}
                      to={`/units/${u.id}`}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-purple-50 transition-colors"
                    >
                      <span className="h-7 w-7 rounded-lg bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center text-white font-bold text-xs flex-shrink-0">
                        {u.id}
                      </span>
                      <span className="text-sm font-medium text-gray-700">{u.title}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {navLinks.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) =>
                  cn("px-4 py-2 text-sm font-medium transition-colors rounded-lg",
                    isActive ? "text-purple-700 bg-purple-50" : "text-gray-500 hover:text-gray-900 hover:bg-gray-50"
                  )
                }
              >
                {l.label}
              </NavLink>
            ))}

            <Link
              to="/units/1"
              className="ml-2 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 px-5 py-2 text-sm font-semibold text-white shadow-md shadow-purple-200 hover:shadow-purple-300 transition-all"
            >
              Start Learning
            </Link>
          </nav>

          {/* Mobile toggle */}
          <button
            className="lg:hidden text-gray-500 hover:text-gray-900"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white shadow-lg">
          <nav className="mx-auto max-w-[1400px] px-6 py-4 flex flex-col gap-1">
            <Link to="/" className="px-3 py-2.5 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-50">Home</Link>
            <div className="px-3 py-1.5 text-xs font-semibold uppercase tracking-widest text-purple-500">Units</div>
            {units.map((u) => (
              <Link key={u.id} to={`/units/${u.id}`} className="px-6 py-2 text-sm text-gray-600 rounded-lg hover:bg-purple-50">
                <span className="font-mono text-purple-400 mr-2">0{u.id}</span>{u.title}
              </Link>
            ))}
            {navLinks.map((l) => (
              <Link key={l.to} to={l.to} className="px-3 py-2.5 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-50">
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}