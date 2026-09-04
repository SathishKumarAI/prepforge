import { Link, NavLink, useLocation, useSearchParams } from "react-router-dom";
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
  BookOpen,
  GraduationCap,
  Keyboard,
  Library,
  Search as SearchIcon,
  Settings as SettingsIcon,
  StickyNote,
  Sun,
  SunMoon,
} from "lucide-react";
import { prefetchRoute } from "../lib/routeChunks";
import { CommandPalette } from "./CommandPalette";
import { SettingsPanel } from "./SettingsPanel";
import { CardFromSelection } from "./CardFromSelection";
import { ShortcutHelp } from "./ShortcutHelp";
import { Button } from "./ui/button";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "./ui/breadcrumb";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Separator } from "./ui/separator";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarRail,
  SidebarTrigger,
  useSidebar,
} from "./ui/sidebar";
import { useProgress } from "../hooks/useProgress";
import { useNotes } from "../hooks/useNotes";
import { useScrollDirection } from "../hooks/useScrollDirection";
import { useSettings } from "../hooks/useSettings";
import { isDue } from "../lib/srs";
import { MODES, toStudyMode } from "../lib/studyModes";
import { THEME_OPTIONS, type ThemeMode } from "../lib/theme";
import { cn } from "../lib/utils";

/**
 * The app shell, on shadcn's Sidebar: a nav that collapses to an icon rail on
 * desktop and becomes a sheet on a phone, an app bar with a breadcrumb that
 * says where you are, and the routed page.
 *
 * The Sidebar primitive owns open/closed state, Ctrl+B, the mobile sheet and
 * its scrim, and the rail you can drag to toggle. This file owns only what the
 * primitive cannot know: which routes exist, what the badges count, focus mode,
 * and the MEASURED app-bar height that sticky page chrome parks against
 * (--app-bar-h). Measured, not assumed — the bar slides out of the way on a
 * downward scroll, and while it is gone its height is 0.
 */

interface NavItem {
  to: string;
  label: string;
  /** Any 24px stroke icon from lucide. */
  icon: ComponentType<{ className?: string }>;
}

const NAV_GROUPS: { label: string; items: NavItem[] }[] = [
  {
    label: "Practice",
    items: [
      { to: "/", label: "Today", icon: Sun },
      { to: "/study", label: "Study", icon: GraduationCap },
      { to: "/progress", label: "Progress", icon: BarChart3 },
    ],
  },
  {
    label: "Material",
    items: [
      { to: "/library", label: "Library", icon: Library },
      { to: "/reader", label: "Reader", icon: BookOpen },
      { to: "/notes", label: "Notes", icon: StickyNote },
    ],
  },
];
const NAV = NAV_GROUPS.flatMap((g) => g.items);

/** The second crumb: a view the URL carries, named the way the page's own tabs name it. */
const VIEW_LABELS: Record<string, Record<string, string>> = {
  "/library": { questions: "Questions", saved: "Saved", collections: "Collections", feed: "Feed" },
  "/notes": { graph: "Graph" },
};

const SIDEBAR_KEY = "pf-sidebar-open";

function isActivePath(item: NavItem, pathname: string): boolean {
  return item.to === "/" ? pathname === "/" : pathname.startsWith(item.to);
}

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

function AppSidebar({
  focus,
  onSettings,
  onHelp,
}: {
  focus: boolean;
  onSettings: () => void;
  onHelp: () => void;
}) {
  const loc = useLocation();
  const { setOpenMobile } = useSidebar();
  const { progress } = useProgress();
  const { notes } = useNotes();

  // On a phone the nav is a sheet over the page, so following a link must
  // close it — otherwise you tap through and land on a page you cannot see.
  useEffect(() => {
    setOpenMobile(false);
  }, [loc.pathname, setOpenMobile]);

  // Counted over the SRS cards, not over the bank. A due count is a property of
  // what you have graded, and every graded card already carries its own due
  // date — so the shell needs no questions at all, and the badge is right on the
  // first frame instead of after 17 MB of answers land.
  const dueCount = useMemo(
    () => Object.values(progress.srs).filter((c) => c.seen && isDue(c)).length,
    [progress.srs],
  );

  function badge(to: string): number | null {
    if (to === "/study") return dueCount || null;
    if (to === "/library") return progress.bookmarks.length || null;
    if (to === "/notes") return notes.length || null;
    return null;
  }

  return (
    // Focus mode wants NO chrome, and an icon rail is chrome: switch to
    // offcanvas so the closed state is fully off screen.
    <Sidebar collapsible={focus ? "offcanvas" : "icon"}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild tooltip="PrepForge">
              <Link to="/">
                <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-mauve text-small font-bold text-on-accent">
                  P
                </span>
                <span className="flex min-w-0 flex-col leading-tight">
                  <span className="truncate font-semibold text-text">PrepForge</span>
                  <span className="truncate text-micro text-overlay1">AI/ML interview prep</span>
                </span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        {NAV_GROUPS.map((group) => (
          <SidebarGroup key={group.label}>
            <SidebarGroupLabel>{group.label}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {group.items.map((item) => {
                  const Icon = item.icon;
                  const count = badge(item.to);
                  return (
                    <SidebarMenuItem key={item.to}>
                      <SidebarMenuButton
                        asChild
                        isActive={isActivePath(item, loc.pathname)}
                        tooltip={item.label}
                      >
                        <NavLink
                          to={item.to}
                          end={item.to === "/"}
                          // The few hundred milliseconds between a pointer
                          // landing on a link and the click that follows is
                          // enough to have the route's chunk in memory before
                          // it renders. `onFocus` as well: tabbing to a link is
                          // the same intent.
                          onMouseEnter={() => prefetchRoute(item.to)}
                          onFocus={() => prefetchRoute(item.to)}
                        >
                          <Icon />
                          <span>{item.label}</span>
                        </NavLink>
                      </SidebarMenuButton>
                      {count !== null && <SidebarMenuBadge>{count}</SidebarMenuBadge>}
                    </SidebarMenuItem>
                  );
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton onClick={onHelp} tooltip="Keyboard shortcuts">
              <Keyboard />
              <span>Shortcuts</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton onClick={onSettings} tooltip="Settings">
              <SettingsIcon />
              <span>Settings</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
        <p className="px-2 pb-1 text-micro leading-relaxed text-overlay0 group-data-[collapsible=icon]:hidden">
          Local-first. Progress stays in this browser.
        </p>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}

function AppBar({
  focus,
  onSearch,
  onSettings,
  onHelp,
}: {
  focus: boolean;
  onSearch: () => void;
  onSettings: () => void;
  onHelp: () => void;
}) {
  const loc = useLocation();
  const [params] = useSearchParams();
  const { settings, update } = useSettings();
  const barRef = useRef<HTMLElement>(null);
  const { hidden: barHidden } = useScrollDirection();

  /**
   * Publish the app bar's EFFECTIVE height for sticky page chrome. Every
   * sticky offset in the app is derived from this one value: publishing 61px
   * while the bar was slid away is what once put a band of nothing at the top
   * of the viewport with the answer scrolling through it.
   */
  useLayoutEffect(() => {
    const el = barRef.current;
    if (!el) return;
    const publish = () =>
      document.documentElement.style.setProperty(
        "--app-bar-h",
        barHidden || focus ? "0px" : `${el.offsetHeight}px`,
      );
    publish();
    const ro = new ResizeObserver(publish);
    ro.observe(el);
    return () => ro.disconnect();
  }, [focus, barHidden]);

  const current = NAV.find((n) => isActivePath(n, loc.pathname));
  const view =
    current?.to === "/study"
      ? MODES[toStudyMode(params.get("mode"))].label
      : VIEW_LABELS[current?.to ?? ""]?.[params.get("view") ?? ""];

  return (
    <header
      ref={barRef}
      // Opaque, not bg-base/95: content scrolls UNDER a sticky bar, so the bar
      // has to occlude it.
      className={cn(
        "sticky top-0 z-30 flex h-12 shrink-0 items-center gap-2 border-b bg-background px-3 transition-[transform,visibility] duration-200",
        focus && "hidden",
        barHidden ? "invisible -translate-y-full" : "visible translate-y-0",
      )}
    >
      <SidebarTrigger className="-ml-1" title="Toggle navigation  (Ctrl+B)" />
      <Separator orientation="vertical" className="mr-1 h-4" />
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem className="hidden sm:inline-flex">
            <BreadcrumbLink asChild>
              <Link to="/">PrepForge</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator className="hidden sm:block" />
          {current && view ? (
            <>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to={current.to}>{current.label}</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{view}</BreadcrumbPage>
              </BreadcrumbItem>
            </>
          ) : (
            <BreadcrumbItem>
              <BreadcrumbPage>{current?.label ?? "Not found"}</BreadcrumbPage>
            </BreadcrumbItem>
          )}
        </BreadcrumbList>
      </Breadcrumb>

      <div className="ml-auto flex items-center gap-1">
        {/* Looks like a search field, is a button: the field itself lives in
            the palette, and on a phone this IS the search entry point. */}
        <Button
          variant="outline"
          size="sm"
          onClick={onSearch}
          aria-label="Search questions and jump to a page"
          title="Search  (Ctrl+K)"
          className="w-8 px-0 font-normal text-overlay1 sm:w-56 sm:justify-start sm:px-2.5"
        >
          <SearchIcon />
          <span className="hidden sm:inline">Search…</span>
          <kbd className="ml-auto hidden rounded border border-surface1 bg-crust px-1.5 py-0.5 font-mono text-micro text-overlay0 sm:inline">
            Ctrl K
          </kbd>
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" aria-label="Appearance and settings" title="Appearance">
              <SunMoon />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48">
            <DropdownMenuLabel>Theme</DropdownMenuLabel>
            <DropdownMenuRadioGroup
              value={settings.theme}
              onValueChange={(v) => update({ theme: v as ThemeMode })}
            >
              {THEME_OPTIONS.map((t) => (
                <DropdownMenuRadioItem key={t.value} value={t.value}>
                  {t.label}
                </DropdownMenuRadioItem>
              ))}
            </DropdownMenuRadioGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem onSelect={onHelp}>
              <Keyboard />
              Keyboard shortcuts
              <kbd className="ml-auto font-mono text-micro text-overlay0">?</kbd>
            </DropdownMenuItem>
            <DropdownMenuItem onSelect={onSettings}>
              <SettingsIcon />
              Settings
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
