import { useEffect, useState, type ReactNode } from "react";
import { CommandPalette } from "./CommandPalette";
import { SettingsPanel } from "./SettingsPanel";
import { CardFromSelection } from "./CardFromSelection";
import { ShortcutHelp } from "./ShortcutHelp";
import { AppBar } from "./shell/AppBar";
import { AppSidebar } from "./shell/AppSidebar";
import { SIDEBAR_KEY } from "./shell/nav";
import { Button } from "./ui/button";
import { SidebarInset, SidebarProvider } from "./ui/sidebar";
import { cn } from "../lib/utils";
import { trackGlassCursor } from "../lib/glass";

/**
 * The app shell, on shadcn's Sidebar: a nav that collapses to an icon rail on
 * desktop and becomes a sheet on a phone, an app bar with a breadcrumb that
 * says where you are, and the routed page.
 *
 * The Sidebar primitive owns open/closed state, Ctrl+B, the mobile sheet and
 * its scrim, and the rail you can drag to toggle. This file owns only the
 * composition and what spans the whole shell: focus mode, the global keys,
 * the dialogs the bar and nav open, and whether the nav was left open.
 *
 * Change → file: a route or its label → shell/nav.ts; the nav's contents or
 * badges → shell/AppSidebar.tsx; the breadcrumb, search button, gear menu or
 * --app-bar-h → shell/AppBar.tsx; a global key or focus mode → here.
 */

export function Layout({ children }: { children: ReactNode }) {
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [helpOpen, setHelpOpen] = useState(false);
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [focus, setFocus] = useState(false);
  // Remembered across visits. The primitive hides itself on a phone, so the
  // only choice stored is "did you close it on desktop".
  const [navOpen, setNavOpen] = useState(() => localStorage.getItem(SIDEBAR_KEY) !== "0");
  useEffect(() => {
    localStorage.setItem(SIDEBAR_KEY, navOpen ? "1" : "0");
  }, [navOpen]);

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

  // The cursor-tracked highlight on every glass surface, one listener for the
  // whole app (see lib/glass.ts).
  useEffect(trackGlassCursor, []);

  // Global keys. Ignored while typing so "f" in a search box is just an f.
  // Ctrl+B is not here: SidebarProvider binds it.
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      const el = e.target as HTMLElement | null;
      const typing =
        el?.tagName === "INPUT" || el?.tagName === "TEXTAREA" || el?.isContentEditable;
      // Cmd/Ctrl+K even from inside a field: the search box you want is often
      // the one you are not typing in. Toggles, so the same keystroke closes it.
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

  return (
    // `focus-mode` is the hook the reading tier reads: components that cap
    // their own measure (StudyCard, the spine above it) release the cap when
    // this class is on an ancestor. One class, no prop threaded through pages.
    <SidebarProvider
      open={navOpen && !focus}
      onOpenChange={setNavOpen}
      className={cn(focus && "focus-mode")}
    >
      <SettingsPanel open={settingsOpen} onClose={() => setSettingsOpen(false)} />
      {/* Once, for the whole app: a copy per reading surface would be four
          selection watchers to keep in step. */}
      <CardFromSelection />
      <ShortcutHelp open={helpOpen} onClose={() => setHelpOpen(false)} />
      <CommandPalette open={paletteOpen} onClose={() => setPaletteOpen(false)} />

      <AppSidebar
        focus={focus}
        onSettings={() => setSettingsOpen(true)}
        onHelp={() => setHelpOpen(true)}
      />

      <SidebarInset>
        <AppBar
          focus={focus}
          onSearch={() => setPaletteOpen(true)}
          onSettings={() => setSettingsOpen(true)}
          onHelp={() => setHelpOpen(true)}
        />

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

        {/* `.reading-wide .app-page` in index.css lifts the measure when an
            answer is the only thing on screen. */}
        <div
          className={cn(
            "app-page w-full flex-1 px-4 py-6 sm:px-6 lg:px-10",
            !focus && "max-w-[84rem]",
          )}
        >
          {children}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
