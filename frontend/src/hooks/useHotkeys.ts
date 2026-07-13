import { useEffect, useRef } from "react";

type Handler = (e: KeyboardEvent) => void;

// Single-key page shortcuts, matched against KeyboardEvent.key (" " is Space).
// Presses inside a text field, modifier chords, and presses while any dialog is
// open are ignored, so page keys never hijack typing or fight a modal.
export function useHotkeys(map: Record<string, Handler>, enabled = true) {
  const mapRef = useRef(map);
  mapRef.current = map;

  useEffect(() => {
    if (!enabled) return;
    function onKey(e: KeyboardEvent) {
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      const el = e.target as HTMLElement | null;
      if (el && (el.tagName === "INPUT" || el.tagName === "TEXTAREA" || el.isContentEditable)) return;
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
