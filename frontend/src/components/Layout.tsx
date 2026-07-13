import { motion } from "framer-motion";
import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useMemo, useState, type ReactNode } from "react";
import { SettingsPanel } from "./SettingsPanel";
import { ShortcutHelp } from "./ShortcutHelp";
import { useProgress } from "../hooks/useProgress";
import { useQuestions } from "../hooks/useQuestions";
import { useNotes } from "../hooks/useNotes";
import { isDue } from "../lib/srs";

interface NavItem {
  to: string;
  label: string;
  icon: ReactNode;
  group: "Study" | "Content" | "Insights";
}

const NAV: NavItem[] = [
  { to: "/learn", label: "Learn", icon: <IconSpark />, group: "Study" },
  { to: "/", label: "Browse", icon: <IconGrid />, group: "Study" },
  { to: "/flashcards", label: "Flashcards", icon: <IconCards />, group: "Study" },
  { to: "/quiz", label: "Quiz", icon: <IconTarget />, group: "Study" },
  { to: "/resources", label: "Resources", icon: <IconFeed />, group: "Content" },
  { to: "/reader", label: "Reader", icon: <IconBook />, group: "Content" },
  { to: "/notes", label: "Notes", icon: <IconNote />, group: "Content" },
  { to: "/graph", label: "Graph", icon: <IconGraph />, group: "Content" },
  { to: "/dashboard", label: "Dashboard", icon: <IconChart />, group: "Insights" },
  { to: "/bookmarks", label: "Bookmarks", icon: <IconBookmark />, group: "Insights" },
];

const NAV_GROUPS: NavItem["group"][] = ["Study", "Content", "Insights"];

export function Layout({ children }: { children: ReactNode }) {
  const loc = useLocation();
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [helpOpen, setHelpOpen] = useState(false);
  const { questions } = useQuestions();
  const { progress } = useProgress();
  const { notes } = useNotes();

  // global "?" opens the shortcut cheatsheet (ignored while typing in a field)
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key !== "?" || e.metaKey || e.ctrlKey || e.altKey) return;
      const el = e.target as HTMLElement | null;
      const tag = el?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA" || el?.isContentEditable) return;
      e.preventDefault();
      setHelpOpen((v) => !v);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // cards due today for spaced repetition — surfaced as a nav badge
  const dueCount = useMemo(
    () => questions.filter((q) => { const c = progress.srs[q.id]; return c && c.seen && isDue(c); }).length,
    [questions, progress.srs]
  );

  function navBadge(to: string): number | null {
    if (to === "/learn") return dueCount || null;
    if (to === "/bookmarks") return progress.bookmarks.length || null;
    if (to === "/notes") return notes.length || null;
    return null;
  }
  return (
    <div className="relative z-10 flex min-h-screen">
      <SettingsPanel open={settingsOpen} onClose={() => setSettingsOpen(false)} />
      <ShortcutHelp open={helpOpen} onClose={() => setHelpOpen(false)} />
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

          <nav className="flex flex-col gap-4">
            {NAV_GROUPS.map((group) => (
              <div key={group}>
                <div className="mb-1 px-3 font-mono text-[9px] uppercase tracking-[0.2em] text-overlay0">{group}</div>
                <div className="flex flex-col gap-0.5">
                  {NAV.filter((item) => item.group === group).map((item) => (
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
                    {navBadge(item.to) !== null && (
                      <span className="relative z-10 ml-auto rounded-full bg-mauve/20 px-2 py-0.5 font-mono text-[10px] font-semibold text-mauve">
                        {navBadge(item.to)}
                      </span>
                    )}
                        </div>
                      )}
                    </NavLink>
                  ))}
                </div>
              </div>
            ))}
          </nav>
        </div>

        <div>
          <button
            onClick={() => setSettingsOpen(true)}
            className="mb-3 flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-subtext0 transition-colors hover:bg-surface0/60 hover:text-text"
          >
            <IconGear />
            <span className="font-medium">Settings</span>
          </button>
          <div className="px-2 font-mono text-[10px] leading-relaxed text-overlay0">
            <div className="mb-1 h-px w-full bg-white/[0.05]" />
            local-first · no login
            <br />
            progress saved in browser
          </div>
        </div>
      </aside>

      {/* main */}
      <div className="flex min-w-0 flex-1 flex-col">
        {/* mobile top nav */}
        <div className="no-scrollbar sticky top-0 z-20 flex items-center gap-1 overflow-x-auto border-b border-white/[0.05] bg-base/80 px-2 py-1.5 backdrop-blur-xl md:hidden">
          {NAV.map((item) => {
            const badge = navBadge(item.to);
            return (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  `relative flex shrink-0 flex-col items-center gap-0.5 whitespace-nowrap rounded-lg px-3 py-1.5 text-[10px] font-medium ${
                    isActive ? "bg-surface0 text-text" : "text-subtext0"
                  }`
                }
              >
                <span className="[&_svg]:h-[18px] [&_svg]:w-[18px]">{item.icon}</span>
                {item.label}
                {badge !== null && (
                  <span className="absolute right-1 top-0.5 rounded-full bg-mauve/30 px-1 font-mono text-[8px] font-bold text-mauve">
                    {badge}
                  </span>
                )}
              </NavLink>
            );
          })}
        </div>

        <motion.main
          key={loc.pathname}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-[92rem] flex-1 px-5 py-8 sm:px-8 sm:py-10 lg:px-12"
        >
          {children}
          <footer className="mt-12 flex flex-wrap items-center justify-between gap-3 border-t border-white/[0.05] pt-5 font-mono text-[11px] text-overlay0">
            <span>PrepForge · local-first · your answers stay on your machine</span>
            <span className="flex items-center gap-3">
              <NavLink to="/learn" className="hover:text-subtext1">Review due</NavLink>
              <NavLink to="/graph" className="hover:text-subtext1">Memory graph</NavLink>
              <button onClick={() => setHelpOpen(true)} className="hover:text-subtext1">Shortcuts (?)</button>
              <button onClick={() => setSettingsOpen(true)} className="hover:text-subtext1">Settings</button>
            </span>
          </footer>
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
function IconNote() { return base({ children: (<><path d="M4 4h16v12l-4 4H4z" /><path d="M16 20v-4h4" /></>) }); }
function IconGraph() { return base({ children: (<><circle cx="6" cy="6" r="2.5" /><circle cx="18" cy="8" r="2.5" /><circle cx="9" cy="18" r="2.5" /><path d="M8 7l8 1M8 8l1 8" /></>) }); }
function IconGear() { return base({ children: (<><circle cx="12" cy="12" r="3" /><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M19.1 4.9L17 7M7 17l-2.1 2.1" /></>) }); }
function IconBook() { return base({ children: (<><path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z" /><path d="M4 19a2 2 0 0 0 2 2h13" /></>) }); }
