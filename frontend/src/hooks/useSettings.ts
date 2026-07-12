import { useCallback, useEffect, useState } from "react";
import { EMPTY_SETTINGS, loadSettings, saveSettings, type Settings } from "../lib/settings";

let shared: Settings = loadSettings();
const listeners = new Set<(s: Settings) => void>();

function set(next: Settings) {
  shared = next;
  saveSettings(next);
  listeners.forEach((l) => l(next));
}

export function useSettings() {
  const [settings, setLocal] = useState<Settings>(shared);

  useEffect(() => {
    const l = (s: Settings) => setLocal(s);
    listeners.add(l);
    return () => {
      listeners.delete(l);
    };
  }, []);

  const update = useCallback((patch: Partial<Settings>) => set({ ...shared, ...patch }), []);
  const reset = useCallback(() => set({ ...EMPTY_SETTINGS }), []);

  return { settings, update, reset };
}
