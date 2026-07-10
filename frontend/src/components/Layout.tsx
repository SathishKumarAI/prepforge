import { motion } from "framer-motion";
import { NavLink, useLocation } from "react-router-dom";
import type { ReactNode } from "react";

interface NavItem {
  to: string;
  label: string;
  icon: ReactNode;
}

const NAV: NavItem[] = [
  { to: "/learn", label: "Learn", icon: <IconSpark /> },
  { to: "/", label: "Browse", icon: <IconGrid /> },
  { to: "/flashcards", label: "Flashcards", icon: <IconCards /> },
  { to: "/quiz", label: "Quiz", icon: <IconTarget /> },
  { to: "/resources", label: "Resources", icon: <IconFeed /> },
  { to: "/dashboard", label: "Dashboard", icon: <IconChart /> },
  { to: "/bookmarks", label: "Bookmarks", icon: <IconBookmark /> },
];

export function Layout({ children }: { children: ReactNode }) {
  const loc = useLocation();
  return (
    <div className="relative z-10 flex min-h-screen">
      {/* sidebar */}
      <aside className="sticky top-0 hidden h-screen w-64 shrink-0 flex-col justify-between border-r border-white/[0.05] px-5 py-7 md:flex">
        <div>
          <div className="mb-10 flex items-center gap-2.5 px-1">
            <div className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-mauve to-blue font-display text-lg font-black text-crust shadow-glow">
              P
            </div>
            <div className="leading-none">
              <div className="font-display text-xl font-semibold tracking-tight text-text">
                PrepForge
              </div>
              <div className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.2em] text-overlay0">
                interview&nbsp;forge
              </div>
            </div>
          </div>

          <nav className="flex flex-col gap-1">
            {NAV.map((item) => (
              <NavLink key={item.to} to={item.to} end={item.to === "/"}>
                {({ isActive }) => (
                  <div className="group relative flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition-colors">
                    {isActive && (
                      <motion.div
                        layoutId="nav-active"
                        className="absolute inset-0 rounded-xl border border-white/[0.06] bg-surface0/60"
                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      />
                    )}
                    <span
                      className={`relative z-10 transition-colors ${
                        isActive ? "text-mauve" : "text-overlay1 group-hover:text-subtext1"
                      }`}
                    >
                      {item.icon}
                    </span>
                    <span
                      className={`relative z-10 font-medium transition-colors ${
                        isActive ? "text-text" : "text-subtext0 group-hover:text-subtext1"
                      }`}
                    >
                      {item.label}
                    </span>
                  </div>
                )}
              </NavLink>
            ))}
          </nav>
        </div>

        <div className="px-2 font-mono text-[10px] leading-relaxed text-overlay0">
          <div className="mb-1 h-px w-full bg-white/[0.05]" />
          local-first · no login
          <br />
          progress saved in browser
        </div>
      </aside>

      {/* main */}
      <div className="flex min-w-0 flex-1 flex-col">
        {/* mobile top nav */}
        <div className="sticky top-0 z-20 flex items-center gap-1 overflow-x-auto border-b border-white/[0.05] bg-base/80 px-3 py-2 backdrop-blur-xl md:hidden">
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                `whitespace-nowrap rounded-lg px-3 py-1.5 text-xs font-medium ${
                  isActive ? "bg-surface0 text-text" : "text-subtext0"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        <motion.main
          key={loc.pathname}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto w-full max-w-5xl flex-1 px-5 py-8 sm:px-8 sm:py-12"
        >
          {children}
        </motion.main>
      </div>
    </div>
  );
}

/* ---- inline icons (stroke, 18px) ---- */
function base(props: { children: ReactNode }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      {props.children}
    </svg>
  );
}
function IconGrid() { return base({ children: (<><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /></>) }); }
function IconCards() { return base({ children: (<><rect x="3" y="5" width="14" height="16" rx="2" /><path d="M7 3h10a2 2 0 0 1 2 2v12" /></>) }); }
function IconTarget() { return base({ children: (<><circle cx="12" cy="12" r="8" /><circle cx="12" cy="12" r="3" /></>) }); }
function IconFeed() { return base({ children: (<><path d="M4 11a9 9 0 0 1 9 9" /><path d="M4 4a16 16 0 0 1 16 16" /><circle cx="5" cy="19" r="1" /></>) }); }
function IconChart() { return base({ children: (<><path d="M3 3v18h18" /><path d="M7 15l3-4 3 2 4-6" /></>) }); }
function IconBookmark() { return base({ children: (<path d="M6 3h12a1 1 0 0 1 1 1v17l-7-4-7 4V4a1 1 0 0 1 1-1z" />) }); }
function IconSpark() { return base({ children: (<path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M18.4 5.6l-2.8 2.8M8.4 15.6l-2.8 2.8" />) }); }
