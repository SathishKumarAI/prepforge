import { NavLink, useLocation } from "react-router-dom";
import { prefetchRoute } from "../lib/routeChunks";
import {
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
  type ComponentType,
  type ReactNode,
} from "react";
import {
  BarChart3,
  GraduationCap,
  Keyboard,
  Library,
  PanelLeft,
  Search as SearchIcon,
  Settings as SettingsIcon,
  StickyNote,
  Sun,
} from "lucide-react";
import { CommandPalette } from "./CommandPalette";
import { SettingsPanel } from "./SettingsPanel";
import { ShortcutHelp } from "./ShortcutHelp";
import { Button } from "./ui/button";
import { useProgress } from "../hooks/useProgress";
import { useNotes } from "../hooks/useNotes";
import { useScrollDirection } from "../hooks/useScrollDirection";
import { isDue } from "../lib/srs";
import { lockBodyScroll } from "../lib/scroll";

/**
 * The app shell: a collapsible left nav, a slim app bar that survives the nav
 * being closed, and the routed page.
 *
 * The app bar exists so that hiding the nav does not hide navigation itself —
 * it always carries the toggle and the current page name. It publishes its own
 * MEASURED height as --app-bar-h so sticky page chrome can park against it
 * without anyone hardcoding a constant that goes stale the first time the bar
 * gains a line.
 */

interface NavItem {
  to: string;
  label: string;
  /** Any 24px stroke icon from lucide. */
  icon: ComponentType<{ className?: string; "aria-hidden"?: boolean | "true" | "false" }>;
}

const NAV: NavItem[] = [
  { to: "/", label: "Today", icon: Sun },
  { to: "/study", label: "Study", icon: GraduationCap },
  { to: "/library", label: "Library", icon: Library },
  { to: "/notes", label: "Notes", icon: StickyNote },
  { to: "/progress", label: "Progress", icon: BarChart3 },
];

const SIDEBAR_KEY = "pf-sidebar-open";

export function Layout({ children }: { children: ReactNode }) {
  const loc = useLocation();
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [helpOpen, setHelpOpen] = useState(false);
  const [paletteOpen, setPaletteOpen] = useState(false);
  // Default open on a wide screen — a nav you have to discover is a nav you do
  // not use — but never on a phone, where 240px is most of the viewport.
  const [navOpen, setNavOpen] = useState(() => {
    const saved = localStorage.getItem(SIDEBAR_KEY);
    if (saved !== null) return saved === "1" && window.matchMedia("(min-width: 768px)").matches;
    return window.matchMedia("(min-width: 768px)").matches;
  });
  const [focus, setFocus] = useState(false);
  const { progress } = useProgress();
  const { notes } = useNotes();
  const barRef = useRef<HTMLElement>(null);
  const { hidden: barHidden } = useScrollDirection();

  useEffect(() => {
    localStorage.setItem(SIDEBAR_KEY, navOpen ? "1" : "0");
  }, [navOpen]);

  // On a phone the nav covers the page, so following a link must close it —
  // otherwise you tap through and land on a page you cannot see.
  useEffect(() => {
    if (!window.matchMedia("(min-width: 768px)").matches) setNavOpen(false);
  }, [loc.pathname]);

  // ...and while it covers the page, the page must not scroll under it. Only
  // below md, where the nav is an overlay; above it the nav is a real column
  // and locking the body would freeze the whole app.
  useEffect(() => {
    if (!navOpen || focus) return;
    if (window.matchMedia("(min-width: 768px)").matches) return;
    return lockBodyScroll();
  }, [navOpen, focus]);

  // Publish the app bar's real height for sticky page chrome. Measured, not
  // assumed — the bar wraps at narrow widths and grows by a line.
  useLayoutEffect(() => {
    const el = barRef.current;
    if (!el) return;
    const publish = () =>
      document.documentElement.style.setProperty("--app-bar-h", `${el.offsetHeight}px`);
    publish();
    const ro = new ResizeObserver(publish);
    ro.observe(el);
    return () => ro.disconnect();
  }, [focus]);

  // Focus mode hides our chrome; the browser's chrome is chrome too, so take
  // the real screen. A failed request (iframe, permission) is not fatal — the
  // in-page focus layout still applies.
  useEffect(() => {
    if (focus) {
      document.documentElement.requestFullscreen?.().catch(() => {});
    } else if (document.fullscreenElement) {
      document.exitFullscreen?.().catch(() => {});
    }
  }, [focus]);

  // Esc leaves fullscreen inside the browser and our keydown never fires, so
  // follow the browser rather than assume our state is the truth.
  useEffect(() => {
    const sync = () => {
      if (!document.fullscreenElement) setFocus(false);
    };
    document.addEventListener("fullscreenchange", sync);
    return () => document.removeEventListener("fullscreenchange", sync);
  }, []);

  // Global keys. Ignored while typing so "f" in a search box is just an f.
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      const el = e.target as HTMLElement | null;
      const typing =
        el?.tagName === "INPUT" || el?.tagName === "TEXTAREA" || el?.isContentEditable;
      // Cmd/Ctrl+B toggles the nav even from inside a field — it is a window
      // command, not a text command, and nothing in a text field claims it.
      if ((e.metaKey || e.ctrlKey) && !e.altKey && e.key.toLowerCase() === "b") {
        e.preventDefault();
        setNavOpen((v) => !v);
        return;
      }
      // Cmd/Ctrl+K likewise: the search box you want is often the one you are
      // not typing in. Toggles, so the same keystroke closes it.
      if ((e.metaKey || e.ctrlKey) && !e.altKey && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setPaletteOpen((v) => !v);
        return;
      }
      if (e.metaKey || e.ctrlKey || e.altKey || typing) return;
      if (e.key === "?") {
        e.preventDefault();
        setHelpOpen((v) => !v);
      } else if (e.key === "f") {
        e.preventDefault();
        setFocus((v) => !v);
      } else if (e.key === "Escape") {
        setFocus(false);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Counted over the SRS cards, not over the bank. A due count is a property of
  // what you have graded, and every graded card already carries its own due
  // date — so the shell needs no questions at all, and the badge is right on the
  // first frame instead of after 17 MB of answers land.
  const dueCount = useMemo(
    () => Object.values(progress.srs).filter((c) => c.seen && isDue(c)).length,
    [progress.srs],
  );

  function navBadge(to: string): number | null {
    if (to === "/study") return dueCount || null;
    if (to === "/library") return progress.bookmarks.length || null;
    if (to === "/notes") return notes.length || null;
    return null;
  }

  const current = NAV.find((n) => (n.to === "/" ? loc.pathname === "/" : loc.pathname.startsWith(n.to)));

  return (
    // `focus-mode` is the hook the reading tier reads: components that cap
    // their own measure (StudyCard, the spine above it) release the cap when
    // this class is on an ancestor. One class, no prop threaded through pages.
    <div className={`relative flex min-h-screen ${focus ? "focus-mode" : ""}`}>
      <SettingsPanel open={settingsOpen} onClose={() => setSettingsOpen(false)} />
      <ShortcutHelp open={helpOpen} onClose={() => setHelpOpen(false)} />
      <CommandPalette open={paletteOpen} onClose={() => setPaletteOpen(false)} />

      {/* ---- side nav ---------------------------------------------------- */}
      {/* Below md the nav overlays the page, so it needs a scrim to dismiss.
          Above md it is a real column and the scrim must not exist. */}
      {navOpen && !focus && (
        <button
          type="button"
          aria-label="Close navigation"
          onClick={() => setNavOpen(false)}
          className="fixed inset-0 z-30 bg-crust/60 md:hidden"
        />
      )}

      <nav
        aria-label="Main"
        // Animating width (not display) is what lets the content column glide
        // into the reclaimed space instead of snapping. Collapsed is width 0 and
        // `invisible`, so nothing inside stays in the tab order.
        className={`fixed inset-y-0 left-0 z-40 h-screen shrink-0 overflow-hidden border-r border-surface0 bg-mantle transition-[width,visibility] duration-200 md:sticky md:top-0 md:z-30 ${
          focus ? "invisible w-0 border-r-0" : navOpen ? "w-60 visible" : "invisible w-0 border-r-0"
        }`}
      >
        <div className="flex h-full w-60 flex-col justify-between px-3 py-3">
          <div className="min-h-0 flex-1 overflow-y-auto">
            <div className="mb-5 flex items-center gap-2 px-2 py-1">
              <span className="grid size-7 shrink-0 place-items-center rounded-md bg-mauve text-micro font-bold text-on-accent">
                P
              </span>
              <span className="text-small font-semibold tracking-tight text-text">PrepForge</span>
            </div>

            <ul className="flex flex-col gap-0.5">
              {NAV.map((item) => {
                const badge = navBadge(item.to);
                const Icon = item.icon;
                return (
                  <li key={item.to}>
                    <NavLink
                      to={item.to}
                      end={item.to === "/"}
                      // The few hundred milliseconds between a pointer landing
                      // on a link and the click that follows is enough to have
                      // the route's chunk in memory before it renders, so the
                      // Suspense fallback never appears. `onFocus` as well as
                      // hover: tabbing to a link is the same intent, and a
                      // keyboard user should not be the one who waits.
                      onMouseEnter={() => prefetchRoute(item.to)}
                      onFocus={() => prefetchRoute(item.to)}
                      className={({ isActive }) =>
                        `flex items-center gap-2.5 rounded-lg px-2 py-1.5 text-small transition-colors duration-100 ${
                          isActive
                            ? "bg-surface0 font-medium text-text"
                            : "text-subtext0 hover:bg-surface0/60 hover:text-text"
                        }`
                      }
                    >
                      {({ isActive }) => (
                        <>
                          <Icon
                            aria-hidden="true"
                            className={`size-4 shrink-0 ${isActive ? "text-mauve" : "text-overlay1"}`}
                          />
                          <span className="truncate">{item.label}</span>
                          {badge !== null && (
                            <span className="ml-auto tabular-nums text-micro text-overlay0">
                              {badge}
                            </span>
                          )}
                        </>
                      )}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="shrink-0 border-t border-surface0 pt-2">
            <Button
              variant="ghost"
              size="sm"
              className="w-full justify-start"
              onClick={() => setSettingsOpen(true)}
            >
              <SettingsIcon aria-hidden="true" />
              Settings
            </Button>
            <p className="mt-2 px-2 text-micro leading-relaxed text-overlay0">
              Local-first. Progress stays in this browser.
            </p>
          </div>
        </div>
      </nav>

      {/* ---- main -------------------------------------------------------- */}
      <div className="flex min-w-0 flex-1 flex-col">
        <header
          ref={barRef}
          style={{ transitionProperty: "transform, visibility" }}
          className={`sticky top-0 z-30 flex items-center gap-2 border-b border-surface0 bg-base/95 px-3 py-2 backdrop-blur-sm duration-200 ${
            focus ? "hidden" : ""
          } ${barHidden ? "invisible -translate-y-full" : "visible translate-y-0"}`}
        >
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setNavOpen((v) => !v)}
            aria-expanded={navOpen}
            aria-label={navOpen ? "Hide navigation" : "Show navigation"}
            title={`${navOpen ? "Hide" : "Show"} navigation  (Ctrl+B)`}
          >
            <PanelLeft aria-hidden="true" />
          </Button>
          {/* Only when the nav is closed. With it open the active nav item
              already says where you are, and printing the page name twice on
              one screen reads as a bug. */}
          {!navOpen && (
            <span className="truncate text-small font-medium text-subtext1">
              {current?.label ?? "PrepForge"}
            </span>
          )}
          <div className="ml-auto flex items-center gap-1">
            {/* A keystroke nobody can see is a keystroke nobody presses. On a
                phone this IS the search entry point, so it is a real control,
                not a hint. */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setPaletteOpen(true)}
              aria-label="Search questions and jump to a page"
              title="Search  (Ctrl+K)"
            >
              <SearchIcon aria-hidden="true" />
              <span className="hidden sm:inline text-overlay1">Search</span>
              <kbd className="ml-1 hidden rounded border border-surface1 bg-crust px-1.5 py-0.5 font-mono text-micro text-overlay0 sm:inline">
                Ctrl K
              </kbd>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setHelpOpen(true)}
              aria-label="Keyboard shortcuts"
              title="Keyboard shortcuts  (?)"
            >
              <Keyboard aria-hidden="true" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setSettingsOpen(true)}
              aria-label="Settings"
              title="Settings"
            >
              <SettingsIcon aria-hidden="true" />
            </Button>
          </div>
        </header>

        {focus && (
          <Button
            variant="outline"
            size="sm"
            onClick={() => setFocus(false)}
            // Bottom, not top: the top-right corner belongs to the page's own
            // actions ("End session"), and a fixed chip there sits on them.
            className="fixed bottom-4 right-4 z-40"
          >
            Exit focus · Esc
          </Button>
        )}

        <main
          className={`w-full flex-1 px-4 py-6 sm:px-6 lg:px-10 ${
            focus ? "" : "max-w-[84rem]"
          }`}
        >
          {children}
        </main>
      </div>
    </div>
  );
}
