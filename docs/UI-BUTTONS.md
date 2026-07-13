# PrepForge — Button & Icon Standard

House rule for **every** button/link/control. Goal: nothing reads as "AI slop"
(emoji/text arrows, ad-hoc styling). Reuse the shared components below — do **not**
hand-roll a new button style per page.

## Components (single source of truth)

| Need | Use | Import |
|---|---|---|
| Primary / secondary / ghost / outline / destructive action | `<Button variant=… size=…>` | `@/components/ui/button` |
| Directional nav (Prev / Next) | `<NavButton dir="prev|next" label tone="default|primary">` | `components/NavButton` |
| Quiet "back / exit" link | `<BackButton label>` | `components/NavButton` |
| Raw chevron inside a custom CTA | `<ChevronLeft/>` / `<ChevronRight/>` | `components/NavButton` |

## Hard rules

1. **No glyph arrows in labels.** Never `← Prev`, `Next →`, `Start quiz →`, `✓`, `✗` as the control's affordance.
   Use a real SVG chevron (`ChevronLeft/Right`) in a token-tinted disc that shifts on hover.
2. **Icons are stroke SVGs**, `viewBox="0 0 24 24"`, `stroke="currentColor"`, `strokeWidth` 1.8–2.2,
   round caps/joins. 15px inside buttons, 18px in nav. Never emoji as an icon.
3. **Every interactive control** has: a hover state, `focus-visible` ring (global), and — for
   directional/CTA buttons — a subtle `group-hover:translate-x-0.5` on the icon.
4. **Color via tokens only** (`mauve`, `subtext1`, `surface0`, semantic `success/warning/info/destructive`).
   No raw hex, no new gradients beyond the `from-mauve to-blue` primary.
5. **Disabled** = the global `opacity .55 + not-allowed` (index.css); don't restyle per button.
6. Primary CTA pattern when not using `<Button>`: `group flex items-center gap-2 … ` + label +
   `<span className="transition-transform duration-300 group-hover:translate-x-0.5"><ChevronRight/></span>`.

## Applied so far
Flashcards (Prev/Next), Quiz (Start/Next/Results), Learn (Begin/exit/recall/back), Browse
(Start review), 404 (Back to study). Emoji ✓/✗ inside quiz choices are content feedback, acceptable.

## TODO (adopt incrementally)
Resources / Reader / Notes / Graph action buttons still use ad-hoc `pill`/gradient styles — migrate
to `<Button>` + `NavButton` when touched. Unify `pill` + `Badge` into shared components (see UI-REDESIGN-BACKLOG).
