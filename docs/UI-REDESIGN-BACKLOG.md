# PrepForge — UI Redesign Backlog (50)

Goal: a **professional, production-ready** interface that **uses the screen well**, is **easy on the
eyes for long study sessions**, and **reads comfortably for hours**. The current app is a narrow
`max-w-5xl` centered column — it wastes horizontal space and isn't tuned for long reading. Checkbox
tickets, Kanban-ready. Checked = done.

## Layout & space utilization
- [x] Widen the main container (`max-w-5xl` → `max-w-6xl`) so content uses the screen.
- [x] Two-pane reading layout: content column at a comfortable measure + a right rail (metadata, related, sources) using the extra width.
- [ ] Left-align content to the sidebar instead of centering with big dead margins.
- [ ] Collapsible sidebar (icon-rail) to reclaim reading width on demand.
- [ ] Content-aware widths: dense lists/tables go wide; prose answers stay at a readable measure.
- [ ] Sticky page header + filters so controls stay reachable while scrolling long lists.
- [ ] A max-width reading container for answers (~68ch) inside a wider page — space without long lines.
- [ ] Responsive gutters that scale with viewport (not fixed px) — fills ultrawide cleanly.

## Typography & readability
- [ ] Bump base body size to ~16.5–17px with `line-height: 1.7` for prose.
- [x] Increase answer prose line-height + paragraph spacing for readability.
- [x] Cap line length (`max-width: 68ch`) on all long-form text (answers, reader, sources).
- [ ] A real type scale (display / h1 / h2 / body / small / mono) as tokens; apply consistently.
- [x] `text-wrap: balance` on headings, `pretty` on paragraphs.
- [ ] Distinct, comfortable serif or humanist body for long reading (test Fraunces vs a body serif).
- [x] `tabular-nums` for all counts/metrics; consistent number formatting.
- [ ] Larger, calmer "reading mode" typography in the Reader and expanded answers.

## Eye strain & long-session comfort
- [ ] Soften max contrast — avoid pure text on pure background; use the subtext tokens for body.
- [ ] Warm, low-glare dark default (Catppuccin already helps) + verify Databricks dark isn't harsh.
- [ ] Generous whitespace + vertical rhythm (8px baseline grid) to reduce density fatigue.
- [ ] Dim/secondary text for non-critical metadata so the eye rests on content.
- [ ] Optional sepia / reduced-blue-light reading theme for night study.
- [ ] Comfortable focus mode: hide chrome (nav/sidebar), center the current question.
- [ ] Respect reduced-motion everywhere (done globally; audit per-component).

## Reading experience
- [ ] Table-of-contents / section jumps for long source docs in the Reader.
- [ ] Collapse long answers with "show more"; expand-in-place.
- [ ] Persist scroll position when reopening a source/answer.
- [~] Code blocks styled + copy button (syntax highlighting still TODO).
- [x] Related-questions rail (from the new memory index) beside each question.
- [ ] Progress indicator / reading time on long content.

## Visual hierarchy & rhythm
- [ ] One clear primary action per view; demote secondary buttons to ghost/outline.
- [ ] Consistent card elevation scale (reduce near-identical glass variants).
- [ ] Section dividers with labels on dense pages.
- [ ] Align tabs, metadata, and legends to a shared baseline grid.
- [ ] Consistent spacing tokens (gap/padding) — no ad-hoc values.
- [ ] Clear empty/loading/error states with a designed surface + CTA.

## Information density & scanning
- [ ] Comfortable vs compact density toggle per user preference.
- [ ] Skimmable question cards: topic, difficulty, source, and a one-line preview.
- [ ] Group nav into sections (Study / Content / Insights) to reduce the 11-item list.
- [ ] Result counts + active-filter chips that are dismissible.
- [ ] Virtualized long lists (Browse with 1700+ questions) for smooth scroll.

## Color & contrast
- [ ] Semantic palette (primary/success/warn/danger/info) instead of accent sprawl.
- [ ] One accent per topic used consistently (badges, graph, charts match).
- [ ] Verify WCAG AA contrast for all body/secondary text in every theme.
- [ ] Theme-aware chart colors (dashboard currently hardcoded dark hex).
- [ ] Stronger disabled-state contrast (opacity-40 is too faint).

## Component & polish
- [ ] Finish shadcn migration (ArticleReader/SourceDoc → Dialog, Tooltip, Command, Skeleton, Sheet).
- [ ] Unify Pill / Badge / Button / Tab into single components.
- [ ] Global toast system already in (Sonner) — route all feedback through it.
- [ ] Keyboard shortcuts + a `?` cheatsheet overlay.
- [ ] Code-split the >1MB bundle (dynamic import Recharts/graph/reader).

---

Build order: **layout & readability first** (biggest felt improvement), then hierarchy/rhythm, then
component unification + shadcn depth, then density/perf.
