# PrepForge — UI Redesign Backlog (50)

Goal: a **professional, production-ready** interface that **uses the screen well**, is **easy on the
eyes for long study sessions**, and **reads comfortably for hours**. The current app is a narrow
`max-w-5xl` centered column — it wastes horizontal space and isn't tuned for long reading. Checkbox
tickets, Kanban-ready. Checked = done.

## Layout & space utilization
- [x] Widen the main container (`max-w-5xl` → `max-w-6xl`) so content uses the screen.
- [x] Two-pane reading layout: content column at a comfortable measure + a right rail (metadata, related, sources) using the extra width.
- [x] Left-aligned content (no mx-auto) — killed the sidebar↔content gap; widened to 92rem.
- [x] Collapsible sidebar (icon-rail) to reclaim reading width on demand.
- [x] Content-aware widths — cards/lists go wide (2-col), prose capped at 68ch.
- [x] Sticky search + filters bar (glass, `top-2`) so controls stay reachable while scrolling.
- [x] 68ch reading container for answers inside the wide page.
- [x] Responsive gutters (px-5 → sm:px-8 → lg:px-12) + left-aligned wide content.

## Typography & readability
- [x] Base body 16.5px + prose line-height 1.75.
- [x] Increase answer prose line-height + paragraph spacing for readability.
- [x] Cap line length (`max-width: 68ch`) on all long-form text (answers, reader, sources).
- [x] A real type scale (display/h1/h2/h3/body/small/micro) as Tailwind `fontSize` tokens; applied across every page title, question heading, stat, and panel — no ad-hoc `text-3xl/4xl` left.
- [x] `text-wrap: balance` on headings, `pretty` on paragraphs.
- [ ] Distinct, comfortable serif or humanist body for long reading (test Fraunces vs a body serif).
- [x] `tabular-nums` for all counts/metrics; consistent number formatting.
- [x] Larger, calmer "reading mode" typography in the Reader (`.reading-lg`: 1.075rem / 1.85 line-height / 72ch) via the shared `ReadingPane`.

## Eye strain & long-session comfort
- [x] Soften max contrast — no pure text on pure bg (Catppuccin text 205/214/244 on base 30/30/46); body copy uses `subtext1`, verified zero `text-white`/`#fff` body usage.
- [x] Warm, low-glare dark default (Catppuccin Mocha) + Databricks dark tuned (non-black base 15/18/23, softened text) + Sepia option.
- [x] Vertical rhythm on the 4/8px Tailwind spacing scale (gap/padding are all multiples of 4px); section bands via `SectionDivider`.
- [x] Dim/secondary metadata via `overlay0/overlay1/subtext0` tokens so the eye rests on content, not counts.
- [x] Sepia (low-blue) reading theme added to the theme switcher.
- [x] Focus mode (press `f`): hides nav/sidebar/footer, centers a narrow reading column.
- [x] Respect reduced-motion everywhere — global CSS override **plus** `<MotionConfig reducedMotion="user">` at the root, so every framer-motion animation honors the OS setting.

## Reading experience
- [x] Table-of-contents / section jumps for long source docs — `ReadingPane` builds a sticky TOC from h1–h3 (rehype-slug anchors) and smooth-scrolls on click.
- [x] Collapse long answers with "show more"; expand-in-place.
- [x] Persist scroll position when reopening a source/answer — `ReadingPane` saves/restores `scrollTop` per doc in sessionStorage (rAF-throttled).
- [x] Code blocks styled + copy button **+ syntax highlighting** — custom lightweight lowlight plugin (`rehype-highlight-lite`, curated grammars) with a theme-aware hljs palette.
- [x] Related-questions rail (from the new memory index) beside each question.
- [x] Progress indicator / reading time on long content.

## Visual hierarchy & rhythm
- [ ] One clear primary action per view; demote secondary buttons to ghost/outline.
- [x] Consistent card elevation scale — single `.glass` base + exactly two shadow levels (`shadow-card` rest, `shadow-glow` emphasis); no competing variants.
- [x] Section dividers with labels on dense pages — `SectionDivider` (eyebrow + hint + hairline); applied on Dashboard (Overview/Trends/Detail).
- [x] Align tabs, metadata, and legends to a shared baseline grid (4/8px Tailwind scale; type-scale line-heights).
- [x] Consistent spacing tokens (gap/padding) — standardized on the Tailwind 4px scale; no ad-hoc pixel values.
- [x] Skeleton loading states (Browse deck) + designed empty/error surfaces.

## Information density & scanning
- [x] Comfortable/Compact density toggle in Settings (data-density; tightens deck + cards).
- [ ] Skimmable question cards: topic, difficulty, source, and a one-line preview.
- [x] Group nav into sections (Study / Content / Insights) to reduce the 11-item list.
- [x] Result count + dismissible active-filter chips (topic/difficulty/query) + clear-all.
- [ ] Virtualized long lists (Browse with 1700+ questions) for smooth scroll.

## Color & contrast
- [~] Semantic palette tokens added (primary/success/warning/destructive/info) — adoption incremental.
- [x] One accent per topic used consistently — single `lib/topics` map (AI=mauve, ML=blue, DS=teal, DA=peach) drives badges, graph nodes, and Dashboard charts; removed the duplicate Dashboard map.
- [ ] Verify WCAG AA contrast for all body/secondary text in every theme.
- [x] Theme-aware chart colors — Dashboard reads live CSS-var palette (works in all 5 themes).
- [x] Stronger disabled-state contrast (global opacity .55 + not-allowed cursor).

## Space audit — kill empty space, deliver content (user psychology)
- [x] Enrich collapsed question cards with an answer **preview** + related/source meta — rows were empty voids; now they deliver content + spark curiosity.
- [x] Tighten oversized empty/loading states (py-24 → py-16).
- [x] Browse: responsive 2-col card grid on xl (expanded cards span full width for the two-pane).
- [x] Wider page (max-w-7xl) — reduces dead side-margins; prose still capped at 68ch.
- [x] Dashboard: 6-stat grid + 2-col progress bars — denser, less scroll.
- [~] Trimmed Browse hero (smaller heading, tighter copy) — other pages pending.
- [x] Consistent 8px vertical rhythm (Tailwind 4/8px scale); trimmed oversized paddings; section bands via `SectionDivider`.
- [x] "Next best action" banner on Browse (N cards due → Start review) — reduce decision load, guide the next step.
- [ ] Progressive disclosure — show summaries, expand on intent, so the eye isn't lost in space.

## Component & polish
- [ ] Finish shadcn migration (ArticleReader/SourceDoc → Dialog, Tooltip, Command, Skeleton, Sheet).
- [ ] Unify Pill / Badge / Button / Tab into single components.
- [ ] Global toast system already in (Sonner) — route all feedback through it.
- [x] Keyboard shortcuts + a `?` cheatsheet overlay (ShortcutHelp dialog, footer link).
- [x] Code-split — lazy-load Dashboard(recharts)/Graph/Reader/Notes; main bundle 1013kB → 595kB.

---

Build order: **layout & readability first** (biggest felt improvement), then hierarchy/rhythm, then
component unification + shadcn depth, then density/perf.
