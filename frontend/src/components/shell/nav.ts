import type { ComponentType } from "react";
import { BarChart3, BookOpen, GraduationCap, Library, StickyNote, Sun } from "lucide-react";

/**
 * The routes the shell knows about: which exist and how they group in the
 * nav. Data only — add a page here and the sidebar picks it up.
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

/** Whether the nav was left open on desktop. Read by Layout. */
export const SIDEBAR_KEY = "pf-sidebar-open";

export function isActivePath(item: NavItem, pathname: string): boolean {
  return item.to === "/" ? pathname === "/" : pathname.startsWith(item.to);
}
