/**
 * Measures every text pairing in the themes and fails if one is below its floor.
 *
 * The palette is the one part of this app you cannot review by reading: two
 * values that look fine side by side in a diff can be 3.8:1 on screen. So this
 * parses the real CSS, computes real WCAG ratios, and prints them. It owns the
 * FLOORS table and nothing else — it does not know what a component is.
 *
 *   node scripts/check-contrast.mjs        # or: npm run contrast
 */
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const CSS = join(dirname(fileURLToPath(import.meta.url)), "..", "src", "styles", "index.css");

/** [foreground, background, floor, why it has that floor] */
const FLOORS = [
  ["text", "base", 7, "body copy, held to AAA"],
  ["text", "mantle", 7, "body copy on a panel"],
  ["subtext1", "base", 4.5, "long-form answer text"],
  ["subtext0", "base", 4.5, "list rows, secondary copy"],
  ["overlay1", "base", 4.5, "labels and counts — small, still text"],
  ["overlay0", "base", 3, "placeholders and decoration only"],
  ["on-accent", "mauve", 4.5, "the primary button's own label"],
  ["mauve", "base", 3, "the accent has to be findable"],
  ["red", "base", 3, "wrong / destructive"],
  ["green", "base", 3, "correct"],
  ["yellow", "base", 3, "warning"],
  ["surface0", "base", 1.15, "the hairline that separates regions"],
];

function parseThemes(css) {
  const themes = {};
  // Each `selector { … }` block that carries --ctp- variables is a theme.
  for (const [, selector, body] of css.matchAll(/(:root(?:\[[^\]]+\])?)\s*\{([^}]*)\}/g)) {
    const vars = {};
    for (const [, name, triple] of body.matchAll(/--ctp-([\w-]+):\s*([\d\s]+);/g)) {
      vars[name] = triple.trim().split(/\s+/).map(Number);
    }
    if (Object.keys(vars).length) {
      themes[selector === ":root" ? "dark (:root)" : selector.replace(/.*"(.*)".*/, "$1")] = vars;
    }
  }
  return themes;
}

const channel = (c) => {
  const s = c / 255;
  return s <= 0.03928 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4;
};
const luminance = ([r, g, b]) => 0.2126 * channel(r) + 0.7152 * channel(g) + 0.0722 * channel(b);

function ratio(fg, bg) {
  const [a, b] = [luminance(fg), luminance(bg)].sort((x, y) => y - x);
  return (a + 0.05) / (b + 0.05);
}

const themes = parseThemes(readFileSync(CSS, "utf8"));
let failures = 0;

for (const [name, vars] of Object.entries(themes)) {
  console.log(`\n${name}`);
  for (const [fg, bg, floor, why] of FLOORS) {
    if (!vars[fg] || !vars[bg]) {
      console.log(`  ?  ${fg} on ${bg} — not defined in this theme`);
      failures++;
      continue;
    }
    const r = ratio(vars[fg], vars[bg]);
    const ok = r >= floor;
    if (!ok) failures++;
    console.log(
      `  ${ok ? "ok" : "FAIL"} ${(fg + " on " + bg).padEnd(22)} ${r.toFixed(2)}:1` +
        ` (floor ${floor}) — ${why}`,
    );
  }
}

console.log(
  failures === 0
    ? `\nAll pairs clear their floor in ${Object.keys(themes).length} themes.`
    : `\n${failures} pairing(s) below floor.`,
);
process.exit(failures === 0 ? 0 : 1);
