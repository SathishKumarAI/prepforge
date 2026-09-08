import type { ComponentType } from "react";
import { BarChart3, BookOpen, GraduationCap, Library, StickyNote, Sun } from "lucide-react";

/**
 * The routes the shell knows about: which exist, how they group in the nav,
 * and what the second breadcrumb calls a view. Data only — add a page here and
 * both the sidebar and the app bar pick it up.
 *
 * Does NOT own: badges (AppSidebar counts those), or which one is active for a
 * given pathname beyond `isActivePath`.
 */
export interface NavItem {
  to: string;
  label: string;
  /** Any 24px stroke icon from lucide. */
  icon: ComponentType<{ className?: string }>;
}

export const NAV_GROUPS: { label: string; items: NavItem[] }[] = [
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
export const NAV = NAV_GROUPS.flatMap((g) => g.items);

/** The second crumb: a view the URL carries, named the way the page's own tabs name it. */
export const VIEW_LABELS: Record<string, Record<string, string>> = {
  "/library": { questions: "Questions", saved: "Saved", collections: "Collections", feed: "Feed" },
  "/notes": { graph: "Graph" },
};

/** Whether the nav was left open on desktop. Read by Layout. */
export const SIDEBAR_KEY = "pf-sidebar-open";

export function isActivePath(item: NavItem, pathname: string): boolean {
  return item.to === "/" ? pathname === "/" : pathname.startsWith(item.to);
}
