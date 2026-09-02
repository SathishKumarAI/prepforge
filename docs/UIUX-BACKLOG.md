# PrepForge — UI/UX Craft Backlog (100+)

A UI/UX-engineer pass focused on **craft**: hierarchy, motion, states, accessibility, feedback,
responsiveness, consistency. Complements the feature/bug audit in `AUDIT-BACKLOG.md`. Kanban-ready,
checkbox tickets, no priority labels. Checked items are done this session.

## Shipped 2026-09-02 — backup, leeches, forecast, highlight-to-card

Four features landed (COD-112 to COD-115). The UI/UX decisions and the fixes each one turned up,
recorded here because the reasoning is the part that does not survive in a diff.

**New surfaces**

- [x] **Settings → Your data** — download / restore, with a summary panel naming what a file holds
      before anything is written, and the destructive option (`Replace everything`) separated from
      the safe one (`Merge`) by variant, not by wording alone.
- [x] **Progress → Keeps slipping** — the cards forgotten 3+ times, worst first. Rows link into the
      Library rather than into a session: the useful move on a card you keep failing is to re-read
      or rewrite it, not to be tested a seventh time.
- [x] **Study → Focus chip** (`Keeps slipping · N`), shown only when there is something to focus on.
      A chip that always narrows to nothing is a dead control on every new install.
- [x] **Today → Coming up** — 14 days of cards falling due, as bars, in the same table-with-text
      shape as the study-days strip beside it. Past and future of one habit, read the same way.
- [x] **Highlight → "Make a card"** — a floating button on any selection inside rendered markdown,
      then a compose dialog: the passage is the answer, you write the question.
- [x] **Library → Saved → "Cards I made"** — a third scope chip beside Bookmarked and With a note,
      appearing only once you have written a card, with delete per card.

**Fixes found by looking at the running UI, not the code**

- [x] The restore summary read "1 notes, 1 quiz sessions, 1 voice clips". Four counts in a row, all
      wrong, reads as a placeholder rather than a number about your data. There is a `plural()`
      helper in `BackupControls.tsx` now.
- [x] `Merge into this browser` shipped as a second accent-filled button in a dialog whose one
      accent is `Done`. Two accents on a screen is two answers to "what do I do now" — it is a
      neutral fill now, and the same rule kept the leech button off the accent on Progress.
- [x] The "Make a card" button anchored to the selection's **bounding box**, so a selection running
      past the fold pinned it over whatever sat at the bottom of the viewport. It anchors to the
      last line of the selection that is actually on screen.
- [x] The compose dialog opened with the caret in the **answer** — the field that is already filled
      in. `onOpenAutoFocus` needs `preventDefault()`, or the dialog's own focus move lands after
      yours.
- [x] The floating button uses `onMouseDown` → `preventDefault()`: without it, pressing the button
      clears the selection it was created from before the click ever fires.
- [x] Empty states for all three new surfaces, each saying what would fill it — "Nothing has been
      forgotten 3 times", "Nothing is scheduled in the next 14 days", "Nothing here has been
      forgotten 3 times. Clear the focus to study the rest."

**What these left open**

- [x] No keyboard route to "Make a card" — **fixed 2026-09-02** (COD-118). `c` opens the composer
      while a selection is live, and the button shows the key. Bound through `useHotkeys`, which
      already refuses to fire inside a text field or while a dialog is open, and enabled only while
      there IS a selection, so `c` is not a global key that eats a keystroke on every page.
- [x] No undo after deleting a card you wrote — **fixed 2026-09-02** (COD-118). Undo restores the
      card with its ORIGINAL id, which is what makes it the same card: `progress.srs` is keyed by
      that id, so the schedule comes back with the text. A fresh id would be a lookalike that has
      never been reviewed.
- [ ] The leech list shows six and says "and N more" — there is no way to see the rest.
- [ ] Cards you made are only reachable through Library → Saved. Nothing on Today or in the command
      palette knows they exist.
- [ ] The restore panel names counts but never shows a card or note from the file, so "is this the
      right backup?" is still answered by the filename.

## Accessibility & input
- [x] Global `:focus-visible` rings on all interactive elements — keyboard users can see focus.
- [x] Respect `prefers-reduced-motion` — disable framer-motion/CSS animation for users who ask.
- [ ] `aria-label` on every icon-only button (new-tab ↗, close ✕, color dots, gear, delete).
- [ ] Trap focus inside modals (SettingsPanel, ArticleReader, SourceDoc); restore on close.
- [x] `Esc` closes every modal (SettingsPanel, ArticleReader, SourceDoc via `useEscapeKey`).
- [ ] Make card expanders real `<button aria-expanded>` with proper roles.
- [ ] Ensure all text meets WCAG AA contrast (audit overlay0 on mantle).
- [ ] Add skip-to-content link for keyboard users.
- [ ] Announce async results (toasts) via `aria-live` region.
- [ ] Give the graph SVG an accessible fallback list of nodes/links.

## Keyboard & shortcuts
- [x] `/` focuses the Browse search input.
- [ ] `j/k` move between questions in Browse; `Enter` expands.
- [ ] Flashcards: `Space` flip, `1–4` grade, `←/→` navigate.
- [ ] Quiz: `1–4` pick option, `Enter` next.
- [ ] Learn: `Space` reveal, `1–4` rate.
- [ ] `g then l/b/n/…` quick-jump between pages (Vim-style).
- [ ] `?` opens a keyboard-shortcut cheatsheet overlay.
- [ ] `Cmd/Ctrl+K` command palette (jump to page / search question).

## Feedback & notifications
- [ ] Replace scattered inline `msg` strings with a global toast system.
- [ ] Toasts for: refresh done, feed added, vault ingested, note saved, copy done.
- [ ] Optimistic UI + rollback on bookmark/note/flash actions.
- [ ] Inline "Saved ✓" affordance on note textareas (autosave indicator).
- [ ] Copy-to-clipboard buttons on answers, code blocks, sources.
- [x] Undo toast after deleting a note/sticky — **2026-09-02** (COD-118). The audio clip is read
      out of IndexedDB *before* the delete and held for the life of the toast; without that, Undo
      restores a voice note that looks whole and plays nothing. An empty sticky deleting itself on
      blur gets no toast — nothing to undo, and a toast on the one action that cannot lose anything
      is noise.
- [ ] Progress toast during long vault ingest with a spinner + elapsed time.

## Loading, empty & error states
- [ ] Skeleton loaders (not spinners) for Browse, Resources, Dashboard.
- [ ] Shimmer placeholder cards while questions load.
- [ ] Distinct empty states per page with an action CTA (Notes, Bookmarks, Graph, Resources).
- [ ] Friendly error card with retry when backend is unreachable (global).
- [ ] "0 results" search state with suggestions / clear-filters button.
- [ ] Reader: better handling for scanned/JS-only pages (explain + link out).
- [ ] Graph empty state that links to Notes to create the first node.
- [ ] Backend-down banner across the app when `/health` fails.

## Visual hierarchy & layout
- [ ] Extract a shared `PageHeader` (title + subtitle + actions) for consistent page tops.
- [ ] Sticky sub-header on long pages (filters stay visible on scroll).
- [ ] Consistent max-width + gutters across every page.
- [ ] Card elevation system — reduce the number of near-identical glass styles to a scale.
- [ ] Clear primary vs secondary vs tertiary button hierarchy (one primary per view).
- [ ] Section dividers with labels on dense pages.
- [ ] Align the 4 answer-lens tabs and metadata to a consistent baseline grid.
- [ ] Give the Dashboard a hero stat row with clearer visual weight.

## Typography
- [ ] Establish a type scale (display/title/body/mono/caption) as Tailwind tokens.
- [ ] Tighten answer line-length to ~65ch for readability.
- [ ] Consistent `prose` styling for all Markdown (answers, reader, sources).
- [ ] Balance headings with `text-wrap: balance`.
- [ ] Larger, calmer body size in the reader (reading mode).
- [ ] Fix mono/serif mixing so it feels intentional, not random.
- [ ] Number formatting (tokens, counts) with `tabular-nums`.

## Color, theme & contrast
- [x] Add a light theme (Catppuccin Latte) + Dark/Light/System toggle via CSS-var palette.
- [x] Persist theme choice in settings (localStorage, applied on load).
- [x] Global text-size control (S/M/L/XL) in Settings — scales all card/body text.
- [ ] Reduce accent-color sprawl — define a semantic palette (primary/success/warn/danger/info).
- [ ] Use one accent per topic consistently everywhere (badges, graph, charts match).
- [ ] Improve disabled-state contrast (currently opacity-40 is too faint).
- [ ] Hover/active states audited for every clickable surface.
- [ ] Focus ring color that works on all accent backgrounds.

## Motion & micro-interactions
- [ ] Standardize easing/duration tokens (one spring, one ease) instead of ad-hoc values.
- [ ] Stagger list entrances consistently (cap delay, respect reduced-motion).
- [ ] Animate tab-content crossfade uniformly (answer lenses, graph modes, reader).
- [ ] Card hover: subtle lift + border glow, consistent across cards.
- [ ] Button press micro-scale on all primary actions.
- [ ] Flashcard flip in 3D (currently crossfade) for delight.
- [ ] Nav active-indicator spring already exists — extend to mobile top-nav.
- [ ] Count-up animation on Dashboard stats.
- [ ] Graph nodes ease into place instead of static layout.

## Navigation & wayfinding
- [ ] Group the 11 nav items into sections (Study / Content / Insights).
- [ ] Show current section title in a top bar on mobile.
- [ ] Breadcrumb or back affordance inside modals/readers.
- [x] Badge counts on nav — due on Learn, saved on Bookmarks, notes on Notes.
- [ ] Persist last-visited tab per page (answer lens, graph mode, reader source).
- [ ] Active-route highlight in the mobile top-nav.
- [ ] Collapsible sidebar for more reading room.
- [ ] Deep-link a specific question (URL by id) so it's shareable/bookmarkable.

## Forms & inputs
- [ ] Consistent `.input` usage everywhere (some inputs are bespoke).
- [ ] Clear (×) button inside search + URL inputs.
- [ ] Inline validation on URL/feed inputs (show invalid before submit).
- [ ] Labels/placeholders reviewed for clarity and consistency.
- [ ] Multi-line note autosize instead of fixed height.
- [ ] Chip inputs for tags (not comma-string) in Notes.
- [ ] Loading state on every submit button (spinner + disabled).
- [ ] Preserve form state when a modal is reopened.

## Responsive & mobile
- [ ] Test every page at 360px; fix horizontal scroll.
- [ ] Answer-lens tabs scroll horizontally on narrow screens.
- [ ] Graph: pinch-zoom + pan + a list fallback on mobile.
- [ ] Modals become full-screen sheets on mobile.
- [ ] Larger tap targets (min 44px) for pills and icon buttons.
- [ ] Dashboard charts reflow to single column cleanly.
- [ ] Sticky mobile action bar for primary page action.
- [ ] Bottom-nav option on mobile instead of top scroll strip.

## Component consistency
- [ ] Single `Pill`/`Badge` component — dedupe the many inline pill styles.
- [ ] Single `Modal` primitive (SettingsPanel/ArticleReader/SourceDoc share it).
- [ ] Single `Button` component with variants (primary/ghost/danger/pill).
- [ ] Shared `Toggle`/`Tab` component (Browse, Quiz, Graph, Reader, DeepAnswer all reinvent it).
- [ ] Shared `EmptyState` and `Loader` (partly done) used everywhere.
- [ ] Consistent icon set + sizes (currently hand-rolled SVGs vary).
- [ ] Consolidate the `ACCENT_*` maps into one theme util.

## Requested — memory graph & resource tagging (next session)
- [ ] **Concept/mind-map graph** — link question↔question through shared concepts/tags (tag = hub node), so recalling one question pulls related ones. Add a "Concepts" mode beside Notes/Learning; cluster by concept for memory, not just prerequisite.
- [ ] **Resource source-tags** — tag each resource by source type (YouTube, Substack, LinkedIn, blog, upload) + topic; show as chips.
- [ ] **Resource filter + sort + search** — filter feed by source-type/topic, search within, sort by date/source; "show only this YouTube search" view.
- [ ] Author the 7 answer lenses for the 1651 vault questions (only curated 100 cached so far).

## Reading & content UX
- [ ] A real "reading mode" (max-width, larger type, quiet chrome) in the Reader.
- [ ] Table-of-contents sidebar for long source docs.
- [ ] Highlight-to-note / highlight-to-flashcard in the reader.
- [ ] Show source count + "read" state on questions from the vault.
- [ ] Render code blocks with syntax highlighting.
- [ ] Collapse long answers with "show more".
- [ ] Persist scroll position when reopening a source doc.

## Dashboard & data-viz
- [ ] Consistent chart color mapping with topic accents.
- [ ] Add axis labels, units, and empty-chart states.
- [ ] Streak calendar heatmap (GitHub-style) for study days.
- [ ] Per-topic mastery radar or bar with targets.
- [ ] Tooltip styling consistent with the app (done for some).
- [ ] "This week" summary card with deltas.

## Onboarding & delight
- [ ] First-run tour highlighting Learn → Deep answer → Graph.
- [ ] Empty-bank prompt to ingest the vault or take a quiz.
- [ ] Subtle confetti/checkmark on finishing a Learn session or quiz.
- [ ] Contextual tips ("press / to search") that dismiss permanently.
- [x] A polished 404 / unknown-route page.

## Advanced component system (shadcn/ui)
- [ ] Adopt **shadcn/ui** (Radix + Tailwind) themed to Catppuccin for richer, accessible primitives.
- [ ] Migrate Dialog/Modal, Tabs, Tooltip, Dropdown, Popover, Command palette to shadcn.
- [ ] shadcn Sonner toasts for the global notification system.
- [ ] shadcn Card/Button/Badge/Input variants → replace bespoke inline styles.
- [ ] shadcn Scroll-area, Collapsible, Accordion for readers and long content.
- [ ] shadcn Sheet for mobile modals; Resizable panels for the graph/reader split.
