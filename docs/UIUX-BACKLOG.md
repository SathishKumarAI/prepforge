# PrepForge — UI/UX Craft Backlog (100+)

A UI/UX-engineer pass focused on **craft**: hierarchy, motion, states, accessibility, feedback,
responsiveness, consistency. Complements the feature/bug audit in `AUDIT-BACKLOG.md`. Kanban-ready,
checkbox tickets, no priority labels. Checked items are done this session.

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
- [ ] Undo toast after deleting a note/sticky.
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
