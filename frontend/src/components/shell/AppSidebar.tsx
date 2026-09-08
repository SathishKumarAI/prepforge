import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useMemo } from "react";
import { Keyboard, Search as SearchIcon, Settings as SettingsIcon } from "lucide-react";
import { prefetchRoute } from "../../lib/routeChunks";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  useSidebar,
} from "../ui/sidebar";
import { useProgress } from "../../hooks/useProgress";
import { useNotes } from "../../hooks/useNotes";
import { isDue } from "../../lib/srs";
import { APP_NAME, APP_TAGLINE } from "../../lib/brand";
import { NAV_GROUPS, isActivePath } from "./nav";

/**
 * The navigation: brand block, the Search item (the Ctrl+K palette), the
 * grouped routes with their badges, and the Shortcuts / Settings footer. Collapses to an icon rail on desktop and becomes
 * a sheet on a phone — the Sidebar primitive owns that; this owns only what
 * goes in it and what the badges count.
 *
 * Does NOT own: open/closed state (Layout, via SidebarProvider), focus mode
 * (Layout passes it, because the collapsible mode changes with it).
 */
export function AppSidebar({
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
            <SidebarMenuButton size="lg" asChild tooltip={APP_NAME}>
              <Link to="/">
                <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-mauve text-small font-bold text-on-accent">
                  {APP_NAME[0]}
                </span>
                <span className="flex min-w-0 flex-col leading-tight">
                  <span className="truncate font-semibold text-text">{APP_NAME}</span>
                  <span className="truncate text-micro text-overlay1">{APP_TAGLINE}</span>
                </span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          {/* Looks like a field, is a button: the field itself lives in the
              palette. Expanded it reads "Search… Ctrl K"; as an icon rail it is
              the magnifier with a tooltip. */}
          <SidebarMenuItem>
            <SidebarMenuButton onClick={onSearch} tooltip="Search  (Ctrl+K)">
              <SearchIcon />
              <span className="text-overlay1">Search…</span>
              <kbd className="ml-auto rounded border border-surface1 bg-crust px-1.5 py-0.5 font-mono text-micro text-overlay0 group-data-[collapsible=icon]:hidden">
                Ctrl K
              </kbd>
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
