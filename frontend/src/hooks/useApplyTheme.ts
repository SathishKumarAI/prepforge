import { useEffect } from "react";
import { applyTextSize, applyTheme } from "../lib/theme";
import { useSettings } from "./useSettings";

// Applies the saved theme + text size to <html>, and follows the OS theme when
// "system" is selected. Call once, high in the tree.
export function useApplyTheme() {
  const { settings } = useSettings();

  useEffect(() => {
    applyTheme(settings.theme);
  }, [settings.theme]);

  useEffect(() => {
    applyTextSize(settings.textSize);
  }, [settings.textSize]);

  useEffect(() => {
    if (settings.theme !== "system") return;
    const mq = window.matchMedia("(prefers-color-scheme: light)");
    const onChange = () => applyTheme("system");
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, [settings.theme]);
}
