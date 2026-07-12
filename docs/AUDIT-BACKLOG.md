# PrepForge — Audit Backlog

Session-end audit of PrepForge, the local-first interview-prep app (React + Vite + TS + Tailwind / Catppuccin Mocha frontend, FastAPI backend). This backlog captures concrete UI/UX and AI-feature gaps found by reading the actual pages, components, libs, and backend modules — not aspirational features. The recurring theme: the shell looks polished but is generic ("AI-sloppy"), several settings and SRS signals are collected but never used, and a handful of real wiring bugs (proxy/port mismatch, dead persona cache key, fake quiz shuffle) undercut the depth. Each item below is a Kanban-ready ticket; pull them onto the board as-is.

## UI & Visual Design
- [ ] Replace the flat gradient "P" logo mark in `Layout.tsx` with a real forge/anvil glyph — the current gradient-square-with-a-letter reads as generic AI-app boilerplate.
- [ ] Differentiate the 10 nav icons in `Layout.tsx` — several stroke icons (Feed/Graph/Chart) are visually near-identical at 18px and hard to scan.
- [ ] Give each page a distinct header treatment instead of the repeated `font-display text-3xl` + one-line subtitle on Flashcards/Quiz/Graph/Reader/Notes — pages feel templated.
- [ ] Add depth tokens (elevation, inner shadows) to the `.glass` card so cards don't all read as the same flat translucent panel across every page.
- [ ] Tone down or make optional the fixed film-grain `body::before` noise overlay in `index.css` — at 0.035 it muddies text on lower-quality panels.
- [ ] Introduce a typographic scale and rhythm system rather than ad-hoc `text-[10px]`/`text-[11px]` mono labels scattered through every component.
- [ ] Design a real empty-deck illustration for `States.tsx` `Empty` instead of the plain title+hint text block reused everywhere.
- [ ] Add hover/active micro-states to the DeepAnswer source list rows so citations feel clickable beyond the subtle bg change.
- [ ] Unify accent usage — mauve, blue, lavender, teal, sapphire, sky are used semi-randomly across CTAs (Learn=mauve, DeepAnswer=lavender, feed=sapphire); define one accent-per-action rule.

## UX & Interaction
- [ ] Wire `settings.difficulty` and `settings.interests` into the Learn session plan — the SettingsPanel label claims they "drive the study mix" but `Learn.tsx` ignores both.
- [ ] Replace Quiz's deterministic `sort(...).reverse()` "shuffle" in `Quiz.tsx` with a real randomized draw — users currently get the same 10 questions in the same order every attempt.
- [ ] Let users choose quiz length instead of the hardcoded `Math.min(10, …)` in `Quiz.tsx`.
- [ ] Add answer-explanation after each Quiz question — right now a wrong pick only shows the correct letter, with no "why".
- [ ] Make the whole flashcard flip on Space/Enter and expose Prev/Next on arrow keys in `Flashcards.tsx` — it's currently click-only.
- [ ] Add an undo for the Learn rating buttons — a mis-tap on "Again" reschedules the card with no recovery.
- [ ] Persist an in-progress Learn session across reloads — refreshing mid-session in `Learn.tsx` silently discards the queue and position.
- [ ] Show the correct answer inline when a Learn card is rated, before advancing, so a partial recall can be corrected.
- [ ] Add a "continue where you left off" affordance so Browse-expanded questions and scroll position survive navigation.
- [ ] Give the Resources refresh a determinate/progress state — the spinner gives no sense of how many sources are being pulled.

## Accessibility
- [ ] Add `aria-current="page"` to the active `NavLink` in `Layout.tsx` — the active state is conveyed only by color/motion, invisible to screen readers.
- [ ] Add `aria-hidden="true"` (or `<title>`) to every decorative inline SVG icon in `Layout.tsx`, `Browse.tsx`, and `QuestionCard.tsx`.
- [ ] Add a focus trap and `Esc`-to-close to the `SettingsPanel` and `ArticleReader` modals — focus currently escapes to the page behind the overlay.
- [ ] Label the icon-only buttons (note delete `✕`, voice play `▶`, new-tab `↗`) with `aria-label` across `Notes.tsx`, `Resources.tsx`, and `ArticleReader.tsx`.
- [ ] Give Quiz choice buttons `role`/`aria-pressed` and announce correct/incorrect via `aria-live` rather than color-only `✓`/`✗`.
- [ ] Verify contrast of `text-overlay0`/`text-subtext0` mono labels on `bg-crust` — several fall below WCAG AA at 10–11px.
- [ ] Make the color-dot picker in `Notes.tsx` keyboard-operable and give each swatch a descriptive label (not just the color name).
- [ ] Respect `prefers-reduced-motion` — the framer-motion page transition, card flip, and staggered card entrances have no reduced-motion fallback.
- [ ] Add visible focus rings to `.pill` and `.input` — outlines are removed via `outline-none` with no replacement.

## Performance
- [ ] Memoize or web-worker the O(n²) force layout in `graph.ts` `layout()` — 260 iterations over all node pairs recomputes on every mode/notes change and will jank with a large question bank.
- [ ] Cap or virtualize the Learning graph in `Graph.tsx` — it renders every question as an SVG node with per-pair prereq edges, unusable at 100+ questions.
- [ ] Virtualize the Browse list — `Browse.tsx` maps every filtered `QuestionCard` (each with its own motion + expandable body) into the DOM at once.
- [ ] Drop the per-card staggered `delay: Math.min(index*0.04, 0.4)` entrance on long lists — it delays first meaningful paint of Browse/Resources.
- [ ] Rebuild the Fuse index only when questions change (it does) but debounce the `query` in `Browse.tsx` so every keystroke doesn't re-run search+filter+render.
- [ ] Lazy-load Recharts on the Dashboard route — the charting bundle ships even for users who never open the dashboard.
- [ ] Code-split routes in `App.tsx` with `React.lazy` — all 10 pages are eagerly imported into the initial bundle.

## AI Answer Features
- [ ] Include the persona in the DeepAnswer cache key — `generate.py` builds `cache_qid = qid + suffix` and ignores `persona`, so a personalized answer is silently served the generic cached `.md` (and never re-tailored).
- [ ] Stream the DeepAnswer response — `client.messages.create` is a blocking call; the four lenses show only a spinner for the full latency.
- [ ] Add a "Regenerate" / "regenerate with web search" control to `DeepAnswer.tsx` — once a lens is loaded there's no way to force a fresh answer.
- [ ] Add a copy-to-clipboard button on each generated answer and on the STAR script — currently the only action is reading it in place.
- [ ] Surface a running cost/token budget across the session, not just per-answer `cost_usd` — a user drilling many questions has no cumulative spend view.
- [ ] Let the user pick the model (Opus/Sonnet/Haiku) per query — `MODEL` is hardcoded to `claude-opus-4-8` in `generate.py`, the most expensive option, for every lens.
- [ ] Add a "was this answer good?" thumbs signal on generated answers to flag slop and seed a regen prompt.
- [ ] Expose `max_uses` for web search and show which claims each citation supports — the grounded lens caps at 4 searches with no per-claim attribution in the UI.
- [ ] Handle the `pause_turn` server-tool loop cap gracefully — `generate.py` breaks after 4 iterations and may return a truncated grounded answer with no user-facing warning.
- [ ] Add a compare view that shows two lenses side by side (e.g. STAR next to Grounded) rather than one-tab-at-a-time in `DeepAnswer.tsx`.

## Content/Q&A Pipeline
- [ ] Add a UI trigger for `/ingest` — `ingest.py` and the `/library` endpoint exist but nothing in the frontend lets a user drop markdown and generate cards.
- [ ] Validate and repair LLM-generated quiz JSON in `ingest.py` `_llm_card` — a malformed `correctIndex` or missing `choices` silently ships a broken quiz card.
- [ ] De-duplicate ingested cards against the curated bank, not just within the ingest run — `_card_id` hashes source+heading so the same concept from two files creates two cards.
- [ ] Add a review/edit step for generated cards before they enter `generated.json` — ingest writes straight to the pipeline with no human approval.
- [ ] Show `source_file` provenance on ingested cards in Browse/Learn so users can trace a card back to the book chapter it came from.
- [ ] Generate quizzes for the deterministic (offline) ingest path too — `_deterministic_card` ships no `quiz`, so those cards are invisible to Quiz mode.
- [ ] Add difficulty inference in `ingest.py` — every ingested card is hardcoded `"medium"`, which pollutes the difficulty filter and prereq graph.
- [ ] Version or timestamp `content/answers/*.md` so stale cached grounded answers can be detected and refreshed.

## Notes & Knowledge Graph
- [ ] Fix the collision-prone audio id in `Notes.tsx` — `clip_${notes.length}_${transcript.length}` reuses ids after deletes and can overwrite another clip in IndexedDB.
- [ ] Debounce note persistence — `NoteCard` calls `update()` on every keystroke, rewriting the whole notes array to localStorage each character.
- [ ] Add a markdown preview toggle for note bodies — `[[links]]` and `#tags` are typed as raw text with no rendered view.
- [ ] Make graph nodes clickable-to-open — selecting a note or question node in `Graph.tsx` only highlights neighbors; it should deep-link to the note/question.
- [ ] Add pan/zoom (wheel + drag) to the SVG in `Graph.tsx` — the fixed 1000×680 viewBox can't be explored when dense.
- [ ] Show orphan notes (no tags/links) distinctly in the notes graph so users can see what's disconnected.
- [ ] Add note search/filter on the `Notes.tsx` grid — there's no way to find a note once you have more than a screenful.
- [ ] Surface backlinks on each note — the graph computes `[[wikilink]]` edges but the note card never shows "linked from".
- [ ] Render the prereq direction in the learning graph — edges are drawn as plain lines with no arrowhead, so "easier → harder" ordering is invisible.

## Resources & Reader
- [ ] Add pagination/rendering for large PDFs in `Reader.tsx` — a big PDF loads into a single native `<iframe>` with no page nav or search-within.
- [ ] Let the Web Reader save the cleaned article to Bookmarks/Resources — `WebReader` renders content but only `readResource` auto-saves to library; there's no explicit "save for later" from that view.
- [ ] Show reading progress / estimated read time on articles opened in `ArticleReader.tsx`.
- [ ] Add per-source and per-topic filters to `Resources.tsx` — filtering is limited to All/Videos/Articles, with no filter by feed source or topic.
- [ ] Handle the JS-only / blocked-page case in the reader with a helpful fallback — `capture.read` returns "empty" and the UI shows a bare error with no retry-in-new-tab guidance inline.
- [ ] De-duplicate the near-identical reader logic — `Reader.tsx` `WebReader` and `ArticleReader.tsx` both call `readResource` and render markdown; extract a shared reader component.
- [ ] Add a "mark as read" / archive state to resource cards so the feed doesn't re-surface already-consumed items.
- [ ] Let users delete or hide a resource from the feed — there's no removal path once something is captured into `resources.json`.

## Learn/SRS
- [ ] Make `NEW_PER_SESSION` (hardcoded 6) and daily review caps user-configurable in Learn — power users can't scale up, casual users can't scale down.
- [ ] Add a "leech" flag for cards with high `lapses` in `srs.ts` and route them to a remediation flow instead of endless re-review.
- [ ] Show the next-due date and current EF/interval on a card in Learn so users understand the schedule, not just the "1d/6d" button preview.
- [ ] Add a due-count badge on the Learn nav item in `Layout.tsx` — surface how many cards are due without opening the page.
- [ ] Reconcile the two competing progress systems — `Flashcards` writes `progress.flash` while `Learn` writes `progress.srs`; the Dashboard only reads `flash`, so SRS mastery is invisible.
- [ ] Add a fuzz/randomization to SM-2 intervals in `srs.ts` to avoid review pile-ups on the same day.
- [ ] Let users bury or suspend a card from within the Learn session (e.g. "already know this") rather than only rating recall.
- [ ] Persist and display a per-day review-count history so the Learn overview shows momentum, not just current buckets.

## Quiz & Flashcards
- [ ] Have Flashcards feed the SRS scheduler — `Flashcards.tsx` grades to a separate `flash` bucket ("known"/"learning") that never affects `srs` due dates.
- [ ] Add a shuffle and a "review only unknown" mode to `Flashcards.tsx` — the deck is always in fixed bank order.
- [ ] Add number-key selection (1–4) and Enter-to-advance to `Quiz.tsx` for keyboard-only quizzing.
- [ ] Store per-question quiz outcomes (not just the session score in `progress.quizzes`) so missed questions can be resurfaced.
- [ ] Show a per-topic quiz breakdown at the end of a Mixed quiz — the results screen shows one aggregate percentage.
- [ ] Add a timed / exam mode option to Quiz for interview-pressure practice.
- [ ] Fill the flashcard "known / N" counter with an actual progress ring rather than a bare number in the header.
- [ ] Warn (or disable Start) when a topic has fewer than the requested quiz questions — `Quiz.tsx` silently shrinks the deck below 10.

## Personalization & Settings
- [ ] Actually consume the persona in cached answers or badge cached answers as "generic, not personalized" — today `personaHint(settings)` is sent but the cache short-circuits it (see AI Answer Features).
- [ ] Add a theme control (dark/light/system) — the app hardcodes `color-scheme: dark` in `index.css` and never honors `prefers-color-scheme`, despite the Catppuccin light "Latte" palette being trivial to add.
- [ ] Let users edit the answer persona system prompt or add "focus areas" beyond role/seniority/company free-text in `SettingsPanel.tsx`.
- [ ] Add font-size / density preferences — long markdown answers are fixed-size with no comfortable-reading option.
- [ ] Persist and apply the preferred-difficulty filter as the Browse default, not just as a settings chip that nothing reads.
- [ ] Add a per-topic goal/target-date so the Dashboard can show pace-to-goal instead of raw counts.
- [ ] Move Settings from a modal to a routed page (or both) so preferences are linkable and don't trap focus over the app.

## Data & Backup
- [ ] Add Export/Import of all progress — `storage.ts` keeps everything in `localStorage` under `prepforge:` with no backup path; clearing site data wipes all study history.
- [ ] Handle localStorage quota failures visibly — `save()` swallows quota errors silently, so progress can stop persisting with no warning.
- [ ] Version the persisted `Progress` schema and add migrations — new fields rely on the `{...EMPTY_PROGRESS, ...loaded}` spread, which won't handle shape changes to nested `srs` cards.
- [ ] Back up voice-note audio blobs — they live only in IndexedDB (`audio.ts`) and are excluded from any export, so they're unrecoverable.
- [ ] Add per-section reset (reset quizzes only, reset SRS only) instead of the single all-or-nothing `reset()` in `useProgress.ts`.
- [ ] Add a "storage usage" indicator so users know how close notes/audio are to browser quota.
- [ ] Provide a JSON export of generated answers (`content/answers/*.md`) bundled for portability, since they're the expensive-to-produce artifact.

## Mobile & Responsive
- [ ] Give the mobile top-nav in `Layout.tsx` an active-item auto-scroll — the current active pill can sit off-screen in the horizontal scroller.
- [ ] Make the DeepAnswer tab row wrap gracefully on narrow screens — four lens tabs plus labels overflow on small phones.
- [ ] Make the Quiz 4-option grid and Learn rating grid touch-friendly (min 44px targets) — current `py-3` buttons are borderline on mobile.
- [ ] Fix the Settings/ArticleReader modals on short viewports — `max-h-[70vh]`/`max-h-[68vh]` scroll regions can clip the footer buttons on small landscape phones.
- [ ] Make the Dashboard Recharts panels responsive-legible — axis ticks at fontSize 10 and the two-column grid crush on mobile.
- [ ] Provide a mobile-friendly Graph interaction — the SVG relies on hover, which doesn't exist on touch; add tap-to-focus.
- [ ] Add a bottom tab bar or FAB for the primary Learn action on mobile instead of the scrolled top-nav.

## Onboarding & Empty States
- [ ] Add a first-run onboarding that seeds Settings (role/seniority/interests) so the very first DeepAnswer is personalized.
- [ ] Turn the "No content yet" Learn empty state into an actionable one — link straight to ingest/import instead of just advising to "add questions or ingest a book".
- [ ] Add a guided tour of the four DeepAnswer lenses the first time a question is expanded.
- [ ] Seed a couple of example notes with `[[links]]`/`#tags` on first Notes visit so the Graph isn't empty and unexplained.
- [ ] Explain the SRS read→recall loop with a one-time coach mark on the first Learn session, not just body copy.
- [ ] Detect a down backend and show one clear global banner with the exact start command, instead of per-page "Backend not reachable" empties.
- [ ] Add sample-data / demo mode so a new user can explore Quiz, Graph, and Dashboard before building any history.

## Search & Navigation
- [ ] Add a global command palette (Cmd/Ctrl-K) to jump to any page, question, or note — search exists only inside Browse.
- [ ] Make Browse search deep-linkable via URL query params so a search/filter state can be shared or bookmarked.
- [ ] Add keyboard navigation to the Browse result list (arrow to move, Enter to expand) — it's mouse-only.
- [ ] Add breadcrumbs / a back affordance from Bookmarks and Graph into the originating question in Browse.
- [ ] Surface tag-based navigation — question `#tags` are displayed in `QuestionCard.tsx` but aren't clickable to filter Browse.
- [ ] Add a recent/most-reviewed quick-access section so users return to in-progress material fast.
- [ ] Show result counts per filter chip in `Browse.tsx` (e.g. "Machine Learning · 24") so users know where content is.

## Dev/Infra/Testing
- [ ] Fix the backend port mismatch — `vite.config.ts` proxies `/api` to `127.0.0.1:8787` and the extension posts to `8787`, but `dev.sh` and README start uvicorn on `8000`; the app can't reach the backend as documented.
- [ ] Add a frontend test suite — there are zero tests; start with `srs.ts` scheduling and `graph.ts` layout/edge logic (pure, high-value).
- [ ] Add backend tests for `generate.py` caching, `capture._html_to_markdown`, and `ingest._split_sections`.
- [ ] Add CI (lint + typecheck + test) — no workflow exists; wire GitHub Actions for both `frontend` and `backend`.
- [ ] Add an error boundary around routes in `App.tsx` so a render error in one page doesn't blank the whole app.
- [ ] Centralize the backend base URL/port in one config consumed by Vite proxy, extension, and docs to prevent drift.
- [ ] Add structured request logging and a `/metrics`-style counter for generation cost/tokens on the backend.
- [ ] Pin and audit dependencies (`requirements.txt` / `package.json`) and add a lockfile check to CI.

## Security & Privacy
- [ ] Rate-limit and size-cap `/generate/answer` — an exposed backend lets anyone spend the owner's Anthropic credits with unbounded questions.
- [ ] Validate and cap upload size in `/resources/upload` — `capture.upload` reads the whole file into memory with no max-bytes guard.
- [ ] Add SSRF protection to `capture.read` / `resources/read` — it fetches arbitrary user-supplied URLs server-side with no allowlist or private-IP block.
- [ ] Sanitize scraped/generated markdown before rendering in `Markdown.tsx` — captured HTML→markdown from untrusted pages flows into the renderer; confirm it can't inject.
- [ ] Scope CORS intentionally — `main.py` allows only `5173` now, but document/lock this and avoid `allow_methods=["*"]` widening if the API is ever exposed.
- [ ] Keep `ANTHROPIC_API_KEY` server-side only and confirm it's never surfaced in responses or logs from `ingest.py`/`generate.py`.
- [ ] Add a filename/path-traversal test around `_slug` and `_safe_qid` since both write files from user-influenced input.

## Integrations (Obsidian/Anki/Zotero)
- [ ] Add an Obsidian vault export — answers already persist as YAML-frontmatter markdown in `content/answers/`; add a one-click export/sync of questions+notes as a linked vault.
- [ ] Add Anki export (`.apkg` or CSV with cloze) so SRS cards can leave PrepForge for users who live in Anki.
- [ ] Add Anki import so existing decks can seed the question bank.
- [ ] Add Zotero import — pull saved papers/references into the Resources feed and library.
- [ ] Preserve `[[wikilinks]]` and `#tags` in exported notes so the graph reconstructs in Obsidian.
- [ ] Add a Markdown/PDF export of a single question's four generated lenses as a study sheet.

## Browser Extension
- [ ] Fix the extension's hardcoded backend URL — `popup.js` posts to `127.0.0.1:8787`; make it configurable and keep it in sync with the app's canonical port.
- [ ] Add a topic auto-detect / recent-topics memory to the clipper popup instead of requiring a manual `topic` pick each save.
- [ ] Show the offline queue state in the popup — `flushQueue` retries silently; surface how many clips are pending.
- [ ] Add a right-click context-menu "Save selection to PrepForge" so clipping doesn't require opening the popup.
- [ ] Add an extension icon set — `manifest.json` defines no `icons`, so it shows the default puzzle piece.
- [ ] Give feedback when a save succeeds beyond a status string (badge count / toast) and link to open the app's Resources.

## Analytics & Insights
- [ ] Add a GitHub-style study calendar heatmap driven by `progress.studyDays` — the Dashboard shows a numeric streak but not the pattern.
- [ ] Add a forgetting-curve / retention chart from `srs` lapses and EF — the app implements SM-2 but never visualizes retention.
- [ ] Fix Dashboard mastery to use SRS "mastered" stage, not just `flash === "known"` — the current bars ignore all Learn-mode progress.
- [ ] Add per-topic quiz-accuracy trends over time, not just an overall area chart of session scores.
- [ ] Surface "weakest topics" and recommend a next session based on due counts + low quiz accuracy.
- [ ] Track and show time-on-task per session so users can see study minutes, not just card counts.
- [ ] Add total AI spend and tokens consumed to the Dashboard, aggregating the `cost_usd`/token metadata already returned by `generate.py`.
</content>
</invoke>
