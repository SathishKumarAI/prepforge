import { Link, useLocation, useSearchParams } from "react-router-dom";
import { useLayoutEffect, useRef } from "react";
import { Keyboard, Search as SearchIcon, Settings as SettingsIcon } from "lucide-react";
import { Button } from "../ui/button";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../ui/breadcrumb";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Separator } from "../ui/separator";
import { SidebarTrigger } from "../ui/sidebar";
import { useScrollDirection } from "../../hooks/useScrollDirection";
import { useSettings } from "../../hooks/useSettings";
import { MODES, toStudyMode } from "../../lib/studyModes";
import { THEME_OPTIONS, type ThemeMode } from "../../lib/theme";
import { cn } from "../../lib/utils";
import { APP_NAME } from "../../lib/brand";
import { NAV, VIEW_LABELS, isActivePath } from "./nav";

/**
 * The app bar: the nav toggle, a breadcrumb that says where you are, the
 * search button and the gear menu. Slides away on a downward scroll.
 *
 * Owns the MEASURED app-bar height that every sticky thing parks against
 * (--app-bar-h). Measured, not assumed — while the bar is slid away or focus
 * mode hides it, its height is 0, and publishing 61px then is what once put a
 * band of nothing at the top of the viewport with the answer scrolling
 * through it.
 *
 * Does NOT own: what the search, help and settings buttons open (Layout holds
 * those dialogs and passes the openers).
 */
export function AppBar({
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
      // Glass: content scrolls UNDER a sticky bar and is blurred to a wash
      // rather than occluded. The bar is chrome, and chrome is where the glass
      // treatment lives (see .glass in index.css) — never the page itself.
      className={cn(
        "glass sticky top-0 z-30 flex h-12 shrink-0 items-center gap-2 border-b px-3 transition-[transform,visibility] duration-200",
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
              <Link to="/">{APP_NAME}</Link>
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

        {/* A gear, beside the other session-level control. It governs how the
            whole app looks and behaves for you — filters scope to "what I am
            looking at", this scopes to "how the app behaves for me" — so any
            new preference (a default timer length, say) belongs in here, not
            scattered across pages. Deeper profile settings stay in the dialog. */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" aria-label="Settings" title="Settings">
              <SettingsIcon />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-52">
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
            <DropdownMenuCheckboxItem
              checked={settings.reduceMotion}
              onCheckedChange={(v) => update({ reduceMotion: Boolean(v) })}
            >
              Reduce motion
            </DropdownMenuCheckboxItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onSelect={onHelp}>
              <Keyboard />
              Keyboard shortcuts
              <kbd className="ml-auto font-mono text-micro text-overlay0">?</kbd>
            </DropdownMenuItem>
            <DropdownMenuItem onSelect={onSettings}>
              <SettingsIcon />
              All settings
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
