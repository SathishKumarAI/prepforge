import { useEffect, useRef } from "react";

type Handler = (e: KeyboardEvent) => void;

/**
 * Enter and Space are the browser's own activation keys for these, so a page
 * shortcut bound to either must not fire while one has focus — the keypress is
 * already spoken for.
 *
 * This is not hypothetical. Study binds Enter to "start a session", so pressing
 * Enter on its focused mode tab called preventDefault(), swallowed the click the
 * browser was about to dispatch, and started a session instead of switching
 * mode. Measured: url stayed ?mode=recall while the tab row vanished behind a
 * running session.
 */
const ACTIVATES_ITSELF = "button, a[href], summary, select, [role='button'], [role='tab']";
const OWNED_KEYS = new Set(["Enter", " "]);

// Single-key page shortcuts, matched against KeyboardEvent.key (" " is Space).
// Presses inside a text field, on a control that already answers the key,
// modifier chords, and presses while any dialog is open are ignored — so page
// keys never hijack typing, steal a button's own activation, or fight a modal.
export function useHotkeys(map: Record<string, Handler>, enabled = true) {
  const mapRef = useRef(map);
  mapRef.current = map;

  useEffect(() => {
    if (!enabled) return;
    function onKey(e: KeyboardEvent) {
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      const el = e.target as HTMLElement | null;
      if (el && (el.tagName === "INPUT" || el.tagName === "TEXTAREA" || el.isContentEditable)) return;
      if (OWNED_KEYS.has(e.key) && el?.closest?.(ACTIVATES_ITSELF)) return;
      if (document.querySelector("[role='dialog']")) return;
      const handler = mapRef.current[e.key];
      if (!handler) return;
      e.preventDefault();
      handler(e);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [enabled]);
}
