# The two themes, and what they are tuned against

PrepForge ships **two** palettes — `dark` (the default, on `:root`) and `light`
(`[data-theme="light"]`) — plus `system`, which picks one of them from the OS.
They are not two moods. They are the two answers to *how much light is in the
room*, which is the only question a reader actually asks.

## Why two and not five

The app used to carry five: Databricks dark and light, Catppuccin Mocha and
Latte, and Sepia. A palette is not free — every one of them is a set of ~25
values that has to stay above a contrast floor, and four of the five were
maintained by eye. Cutting to two made a per-pairing check affordable, and that
check is now the thing that keeps the palette honest:

```
cd frontend && npm run contrast
```

It parses `src/styles/index.css`, computes real WCAG ratios, and exits non-zero
if any pairing falls below its floor. Change a colour, run it, paste the number.

| Pairing | Floor | Why that floor |
|---|---|---|
| `text` on `base` / `mantle` | 7:1 | body copy, held to AAA — this is a reading app |
| `subtext1` / `subtext0` on `base` | 4.5:1 | answer prose and list rows |
| `overlay1` on `base` | 4.5:1 | labels and counts are small, but they are still text |
| `overlay0` on `base` | 3:1 | placeholders and decoration only |
| `on-accent` on `mauve` | 4.5:1 | the primary button's own label |
| `mauve` on `base` | 3:1 | the accent has to be findable |
| `red` / `green` / `yellow` on `base` | 3:1 | status must survive a glance |

## What the values are chosen against

**Neither end is pure.** The light base is `#F7F7F5`, not `#FFF`, and its text
is `#1E2429`, not `#000`. Pure black on pure white is the highest-glare pairing
a screen can produce, and glare is a cost you pay per minute, not per page. The
dark base is `#111419` — a blue-grey, not black — and its text stops at
`#DDE4EB`. White on black blooms at small sizes (halation), which is most of why
"dark mode hurts my eyes" is a common complaint from people whose dark mode is
`#000`/`#FFF`.

**Nothing on a background is saturated.** Saturated colour raises arousal and
visual load; muted, low-chroma surfaces are what long-use reading interfaces
converge on. The greys carry a slight cool cast so the surface reads as calm
rather than warm-neutral.

**The accent is a desaturated blue** — `#7AB0D0` on dark, `#155E80` on light.
Two reasons. Desaturated blue is the hue most consistently read as calm across
interfaces, and cool tones are the ones associated with lower physiological
arousal in the environment-psychology work. And it leaves **green** free to mean
*correct* and **red** free to mean *wrong* — on a surface where you grade
yourself every few seconds, those two meanings must never be ambiguous, which a
red or green accent would make them.

The previous default's accent was a saturated red-orange (`#FF5A44`). It is a
fine brand colour and the wrong colour to look at for an hour while trying to
remember what a bloom filter is.

**Ambient light is a real variable, and it is the user's, not ours.** A screen
much brighter than the room makes the pupil work; that is what `system` and the
light theme are for. The app cannot see the room, so it offers the switch and
gets out of the way.

## Sources

- [Immediate Effects of Light Mode and Dark Mode Features on Visual Fatigue in Tablet Users (PMC)](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC12027292/)
- [Is Dark Mode Better for Your Eyes? — Lookaway](https://lookaway.com/blog/2025/08/14/is-dark-mode-better-for-your-eyes/)
- [Best Screen Settings for Eye Comfort & Productivity — Lumina](https://www.wellnessatwork.ai/blog/eye-health-screen-settings)
- [The Psychology of Color in UX and Digital Products — Smashing Magazine](https://www.smashingmagazine.com/2025/08/psychology-color-ux-design-digital-products/)
- [Emotion-Aware Design: Modulating Valence, Arousal, and Dominance (arXiv)](https://arxiv.org/pdf/2502.16038)
- [The Science Behind Colours That Boost Focus and Calm — YesColours](https://yescolours.com/blogs/news/science-behind-colours-for-focus-and-calm)

The evidence on dark-versus-light is genuinely mixed — light mode measures
better for sustained reading speed and comprehension in several studies, dark
measures better for comfort in dim rooms. That is exactly why both ship, and why
neither is built at the extremes of its range.

## Changing a theme

| Change | File |
|---|---|
| A colour value | `frontend/src/styles/index.css`, the `:root` or `[data-theme="light"]` block |
| Which themes exist, and the default | `frontend/src/lib/theme.ts` |
| Moving users off a theme you removed | `frontend/src/lib/settings.ts` — bump `THEME_MIGRATION`, add to `RETIRED_THEMES` |
| The contrast floors | `frontend/scripts/check-contrast.mjs`, the `FLOORS` table |

Traps, both of which have bitten:

- **The default lives on `:root` with no attribute**, so the first paint before
  React mounts is already right. `lib/theme.ts` must agree — it *removes* the
  attribute for the default and sets it for the other.
- **`text-base` sets a font size as well as a colour.** `base` is in both the
  colour scale and Tailwind's `fontSize`. Use `text-crust` on an accent fill.
