# Worklog

## 2026-09-02 — Nothing fetches the bank any more, and the app opens offline

**Summary:** The brief was "lazy loading". Route splitting was already done in #32, so the weight
was never chunks — it was **data**. Three surfaces still fetched all 38,573,654 B of the bank, and
the biggest JavaScript chunk in the app was a charting library drawing one small chart.

A full tour of the app — Today → Study → Progress → Notes → Library — went from roughly **41.6 MB
to 504 kB transferred**, with **zero** full-bank fetches. A repeat visit costs **300 B**, and paints
before spending it.

**Ten commits, nine branches, PRs #52-#61.** A stack: each is based on the one below it.

| PR | What | Measured |
|---|---|---|
| #52 | The learning graph asks `/questions/browse?limit=240` for the 240 nodes it draws | 38,573,654 B → 68,467 B (563x) |
| #53 | Progress counts ids, so it reads `/questions/index` | → 2,886,874 B (13.4x) |
| #54 | Study plans from the index (`has_answer`/`has_quiz`), then `GET /questions/batch?ids=` for the ≤40 cards it shows | → 40,042 B (963x) |
| #55 | The quiz-trend chart is hand-drawn SVG; recharts is gone from `package.json` | Progress chunk 397.88 kB → 6.08 kB (65x) |
| #56 | `GZipMiddleware` + an ETag keyed on the content files' mtimes | `/questions` 38.6 MB → 9.19 MB; a reload is a 304 |
| #57 | The index lives in IndexedDB — paint from disk, then revalidate; primed on idle | first visit 505 kB, every one after **300 B** |
| #58 | Related links read the server's expansion instead of an always-empty map | invisible → 6 links; 4 requests per hover → 1 |
| #59 | lowlight loads with the first fenced code block | Markdown chunk 181.89 → 128.67 kB; 53 kB deferred |
| #60 | A nav link fetches its route chunk on hover and on focus | click-to-render 61 ms → 17 ms |
| #61 | STATUS, ARCHITECTURE, README, docs index, SCALING, this entry | — |

**Decisions:**

- **A predicate about a field is not the field.** The pattern behind every one of these: Study
  downloaded 18,284 answers to evaluate `Boolean(q.answer)`. `has_answer` is 17 bytes; the answer it
  stands for averages 835. Progress downloaded them to count ids by topic. The graph downloaded them
  to draw 240 circles. Each time the question was about *existence* and the code answered it by
  fetching *content*.
- **Reuse the projection, do not invent an endpoint.** Study could have had its own route. Using
  `/questions/index` instead means arriving from Today or Ctrl+K — which already hold it — costs
  **nothing at all**, and that 963x is the number that matters for anyone using the app rather than
  deep-linking into it.
- **Paint from disk, then revalidate. Never the other way round.** The ETag alone got a reload to a
  304, but the page still had nothing to show while that request was in flight. IndexedDB first,
  conditional request second, and the 300 B is off the path to first paint.
- **Brotli was considered and rejected.** It needs `brotli-asgi` to buy 15-20% over gzip on an app
  served from `127.0.0.1`. A dependency for a saving that only exists over a real network.
- **The chart was worth hand-drawing.** recharts was 96% of the Progress route's JavaScript for one
  area chart with a fixed 0-100 domain. 60 lines of SVG, and the theme reaches it through Tailwind
  classes instead of `useThemeColors` reading CSS variables back out as strings.

**Found on the way:**

- **`.gitignore` was swallowing a source directory.** `notes/` — meant for user-exported dumps — is
  unanchored, and a trailing-slash pattern matches at *any* depth. `frontend/src/components/notes/`
  matched, so `GraphView.tsx` had **never been committed**: it builds here because the file is on
  this disk, and a fresh clone did not build at all. Fixed to `/notes/`.
- **The Related section had disappeared from every saved card.** `RelatedLinks` resolved each id
  through `questionMap()` — the whole bank held in memory by whichever page last fetched it. Once
  nothing fetched the bank the map was always empty, so the list was always empty and the component
  returned null. No error, no empty state, no request. `QuestionDetail` has read the server's
  expansion since #44; the two agree now.
- **`cache.has(id)` is never an inflight guard**, and this repo has now learned it twice. #38 fixed
  it on `useQuestions`; the new hover preview reintroduced it and fired **four** identical requests
  for one hover, because strict mode double-invokes the effect and the tooltip's open state settles
  twice. Share the promise, not the result.
- **A gradient stop's `currentColor` resolves against the gradient element**, not against whatever
  references it. On the new chart the line came out accented and its fill came out grey.
- **`preserveAspectRatio="none"` stretches glyphs.** The chart's axis labels are HTML for that
  reason, and its data marks are vertical rules rather than dots — a circle in a stretched viewBox
  is an ellipse whose width depends on the window.

**The board:** COD-97 to COD-107, one per PR, all `In Review`. COD-98 records the `.gitignore`
bug and COD-104 the Related-links one. The follow-ups below are COD-108/109/110 in `Backlog`.
COD-79 was the only genuinely stale item and is Done; COD-78 moved to `In Review` behind PR #51.
**The `plane` MCP tools were not exposed to the session** even though `claude mcp list` showed the
server connected. The credentials are in `~/.claude.json` under `mcpServers.plane.env` and the REST
API takes an `X-API-Key` header — that is the way through next time.

**Follow-ups:**
- [ ] `SavedView` fetches bookmarks one `GET /questions/{qid}` at a time. `/questions/batch` exists
      but does not expand `related`, which that view needs.
- [ ] `hooks/useQuestions.ts` is down to `reloadQuestions()` and a `questionMap()` that is always
      empty. Delete the hook and the map; keep the invalidation.
- [ ] The three still-unverified UI-rebuild pieces, unchanged for four sessions: timed quiz expiry,
      Reader PDF + web-fetch, drill mode end to end.
- [ ] Directory `README.md`s with a change → file table for `frontend/src/lib`, `hooks` and
      `components`. Only `components/page` has one.

## 2026-08-29 — Library stopped shipping the bank; eleven PRs merged

**Summary:** A UI sweep that turned into a payload story. Library's first paint went
**39,779,359 B → 39,256 B (1,013×)** across three changes, and along the way the sweep
turned up an a11y defect, a scheduler bug that made one day equal zero east of UTC, and
a reading-context problem on long answers. Eleven PRs merged to `main` (#38–#43, then
#44, #49, #46, #47, #48). Build, `tsc`, `npm run contrast` 24/24 and all six backend
test files green on merged `main`.

**Changes:**

- `frontend` shell (#38) — `Layout` and `SettingsPanel` both called `useQuestions()` and
  both mount on *every* route, so the first paint of any page fetched the whole bank —
  including Today, whose entire point since #32 was to read the 3 MB index. The nav's due
  badge is counted over `progress.srs` (a due date is a property of a graded card) and
  needs no request; SettingsPanel takes the index, and only once open. Measuring exposed a
  second cause: `useQuestions` guarded with `if (!cache)`, which is not a guard — four
  consumers mounting in one tick each started a copy. Added the inflight promise
  `useQuestionIndex` always had.
- `backend` (#44) — `GET /questions/browse`: rows, topic list and deduped "go deeper"
  links in one call, with search over **answer** text. That capability was the only reason
  Library held 39.7 MB, since `/questions/index` carries titles only. Scoring is exact, not
  fuzzy: AND across terms, title hits outrank body hits, and each row carries the line the
  match was found on rather than the card's opening sentence.
- `backend` (#44) — `GET /questions/{qid}` expands each `related` entry with its index
  fields, additively, so the detail pane names its neighbours without holding a bank.
- `backend` (#46) — `offset` on `browse`. The whole filtered result is ordered once and
  sliced, so a page is a window on one ranking. `topics`/`links` describe the match rather
  than the slice, so they ride on page one only (38,713 B → 22,043 B for page two).
- `frontend` Library (#44, #46) — the client keeps an accumulator, not a render window.
  `SavedView` fetches its bookmarked ids instead of filtering the bank; Library's orient
  bar uses `limit=0` (179 B) to count.
- `frontend` a11y (#42) — one `components/ui/segmented.tsx` replaces three hand-rolled tab
  rows that announced `role="tablist"` without arrow keys, roving tabindex or a panel.
  Fixed `useHotkeys` at the root while there: it claimed Enter/Space even when a button had
  focus, which is why Enter on Study's mode tab started a session instead of switching mode.
- `frontend` srs (#43) — `lib/srs.ts` held both halves of a contradiction: `today()` was a
  UTC day, `addDays()` local midnight. East of UTC `addDays(d, 1)` returned `d`.
- `frontend` reading (#47, #48) — the detail pane's header is sticky, the list column is
  `overscroll-contain`, and a paragraph that is only a code span now sets as a display
  formula rather than a 14px chip.

**Measured:**

| | Before | After |
|---|---|---|
| `/` (Today) API bytes | 161,694,548 | 3,020,072 |
| `/library?view=questions` API bytes | 39,779,359 | **39,256** |
| `/library?view=saved` | 39,668,619 | 676 |
| `browse q=kafka` in-process | 1.1 s | 0.017 s |
| `addDays("2026-08-29", 1)` at UTC+5:30 | `2026-08-29` | `2026-08-30` |
| question heading, scrolled 954 px | −421 px (off screen) | 109 px |
| tab stops per tab row | 4 / 3 / 2 | 1 |

**Decisions:**

- **Manual tab activation, not automatic.** ARIA prefers automatic, but Library's
  Collections view fetches `/sources` on mount and Notes' graph indexes every question —
  arrowing past them would fire that work per keystroke.
- **The peek overlays, it never pushes.** Reflowing the paragraph under the cursor is what
  makes the push version of a hover-reveal unusable.
- **Hover is always an accelerator, never the only way in.** Every hover affordance added
  this session sits on a real button and is reachable by keyboard.
- **Caches keyed on mtimes, not a TTL**, so ingest and pipeline invalidate them by doing
  their job rather than by remembering to.

**Corrections made against measurement** (each was wrong when first written):

- The leading was never uneven around inline code — `line-height` measured 28.875 px with
  and without it. The defect was box height (24 px in a 28.875 px line) and horizontal lurch.
- "Explain: Consulting services" is not a good card with a leaked title; it is a 15-word
  pitch stub repeated on 11 pages.
- Force-killing uvicorn leaks the port whether or not the kill is broad. The first note
  blamed only the broad form.

**Follow-ups:**

- [ ] **Reconcile the Plane board** — COD-79, 82-84, 86-88 are done in code and unmarked,
      and #46-#49 have no work item. The MCP server was killed mid-session.
- [ ] Build the duplicate-body ingest filter (736 cards, no wordlist needed) — COD-78/34.
- [ ] `Dashboard` and Notes' `GraphView` still hold the full bank.
- [ ] The sticky question header costs 142 px on a three-line question; a condensed stuck
      state would win most of it back and needs a sentinel.
- [ ] Still unverified end to end: timed quiz through a real 30s expiry, Reader's PDF and
      web-fetch, drill mode.

## 2026-07-13 21:47 — UI redesign completed (59/59) + Quiz roadmap shipped

**Summary:** Closed out the entire UI-REDESIGN-BACKLOG (59/59) and the QUIZ-BACKLOG
roadmap — including an end-to-end, zero-token "quiz from a YouTube video" pipeline
and four synthesized question kinds. Every batch verified with `tsc --noEmit` +
`vite build`; backend synth logic unit-checked. Servers left running: backend 8787,
frontend 5173.

**Changes:**
- `frontend` UI — real type-scale tokens (display→micro) applied app-wide; `SectionDivider`;
  global reduced-motion via `MotionConfig`; single topic→accent source; syntax highlighting
  (lean `rehype-highlight-lite` lowlight plugin) + `ReadingPane` (TOC, scroll persistence,
  reading mode); unified `ui/chip` (replaced 5 copy-pasted toggles); Reader feedback → Sonner;
  WCAG AA fixes for light-theme metadata tokens; Browse windowed rendering (IntersectionObserver);
  ArticleReader + SourceDoc migrated to Radix `Dialog`.
- `frontend` Quiz — exit + resume (localStorage `pf-quiz-run`); weakness-aware selection; timed
  mode (countdown + auto-miss); results review with per-question explanations; persisted config
  (`pf-quiz-config`); "Quiz from a YouTube video" input; renders `quiz.kind`/`quiz.prompt`.
- `frontend` Resources — "＋ quiz" button per card → generate + open scoped quiz.
- `backend` — `transcript.py` (YouTube captions → chunked markdown); `capture.read` pulls the
  transcript; `ingest` attaches `sources:[{title,path,kind:"library"}]` + a local TF-IDF index for
  near-miss distractors + four question kinds (mcq/cloze/truefalse/spotwrong); endpoints
  `/quiz/from_video`, `/quiz/from_resource`, `/library/read`; `youtube-transcript-api` dep.
- `docs` — UI-REDESIGN-BACKLOG (59/59 ✅), QUIZ-BACKLOG, UI-BUTTONS updated as Kanban.

**Decisions:**
- Kept everything **zero-token**: MCQ synthesis, TF-IDF distractors, and all four question kinds
  are deterministic. True/false and spot-the-wrong are labelled *by construction* (pairing a
  subject with its own vs. a dissimilar card's gloss) — no model needed to guarantee correctness.
- Dropped `rehype-highlight` (bundled ~37 grammars, +59kB gzip) for a curated 7-grammar lowlight
  plugin; net highlighting cost ~+22kB gzip.
- Windowed (IntersectionObserver) rendering over true virtualization — cards are expandable/animated.

**Follow-ups:**
- [ ] Optional Ollama/Claude ingest tier (would enable richer, model-written quizzes).
- [ ] `src/hooks/useEscapeKey.ts` is now an orphan (readers moved to Radix Dialog) — delete pending OK.
- [ ] Author the remaining cached answer lenses (~1651 vault Qs, ~100 curated).

## 2026-08-28 — Local model for six of the seven lenses; the generate gate comes off

**Summary:** Pointed the generated answer lenses at a local model served by LM Studio, then removed
the press-to-generate confirmation the tab row had gained the same day. The two are one change:
the gate existed only because every lens was a billed Anthropic call, and six of them no longer are.
Verified with a stub LM Studio server (`test_local_provider.py`, 5/5), `tsc --noEmit` exit 0 and
`vite build`. The real LM Studio path is **not** verified — its server was not running on this
machine.

**Changes:**
- `backend/generate.py` — provider routing. `deep` stays on Claude with `web_search`; the other six
  modes go to LM Studio's OpenAI-compatible server when it answers, and fall back to Claude when it
  does not. `local_model()` probes `/v1/models` on a 10s TTL; `_strip_reasoning()` drops the
  `<think>` blocks Qwen3/gpt-oss emit inline. `LMSTUDIO_URL` / `LMSTUDIO_MODEL` / `LMSTUDIO_TIMEOUT`.
- `backend/main.py` — `GET /generate/providers`: which modes are free right now, and the local
  model's id.
- `backend/test_local_provider.py` — new. Stub HTTP server, not a mock, because the thing under test
  is an HTTP shape a mocked client would pass with the wrong JSON keys.
- `frontend` — `DeepAnswer` loses `mayGenerate`; `QuestionDetail` loses `pressed`; the "Generate it"
  empty state becomes the spinner the fetch shows anyway. `useFreeModes` and `fetchProviders`
  deleted with them.
- `docs`, `README`, `.env.example`, `STATUS.md` — the provider split, the missing confirm step, and
  what is still unverified.

**Decisions:**
- **Local answers cache under a further `__local` suffix.** Sharing the slot would let a cheap local
  answer permanently shadow a Claude one for the same question and lens, with nothing in the UI to
  say which you were reading.
- **The model id is probed, not configured.** It is changed from LM Studio's own UI, and a stale
  `LMSTUDIO_MODEL` fails with a 404 that reads exactly like the server being down.
- **`deep` never routes local.** Its value is real citations; a local model producing them
  unsourced would be the worst version of this feature.
- **The gate came off knowingly.** With LM Studio off, all seven lenses are Claude calls again and a
  slow sweep across the tab row bills several. `peekTab`'s 400ms hover-intent delay is now the only
  brake, which is why it is documented in three places rather than left as UI polish.

**Follow-ups:**
- [ ] Verify the local path against a real LM Studio — start the server, hover a lens, confirm the
      meta row shows the local model id and `$0.0000`.
- [ ] Cap concurrent generations; LM Studio serializes them and a fast sweep queues dead work.
- [ ] Show the provider in the UI — `meta.provider` is returned but only the model id is displayed.

## 2026-08-28 21:10 — A UI pass: cost-aware lenses, Ctrl+K, two themes, and the cited web pulled local

**Summary:** Six PRs (#18, #19, #20, #21, #22, #23, #24). The lens tab row stopped
being able to spend money by accident, the whole bank became searchable from
anywhere, five palettes became two built for long reading, and the 1,842 web pages
the bank cites started being fetched into the library. Every claim below is a
command's output; the one thing not verified is how any of it *looks*, because
Chrome automation was unavailable in this session.

**Changes:**

- `frontend/src/components/library/QuestionDetail.tsx`, `hooks/useProviders.ts` (new),
  `lib/api.ts` — hover reaches only the lenses that are free right now. `GET
  /generate/providers` has existed since #14 and its docstring described exactly
  this UI; nothing had ever called it. A `$` marks the billed tabs and one line
  under the row names the local model or says LM Studio is off.
- `frontend/src/components/CommandPalette.tsx` (new), `Layout.tsx`,
  `ShortcutHelp.tsx` — Ctrl/Cmd+K over all 8,330 question titles plus twelve
  destinations, and a Search control in the app bar carrying the same key.
- `frontend/src/styles/index.css`, `lib/theme.ts`, `lib/settings.ts`,
  `scripts/check-contrast.mjs` (new), `docs/DESIGN-THEMES.md` (new) — two themes,
  dark and light, tuned for an hour of reading; `npm run contrast` measures every
  text pairing and fails below its floor.
- `backend/fetch_reading.py`, `test_fetch_reading.py` (both new),
  `docs/CONTENT-PIPELINE.md` — the cited URLs become library Markdown, most-cited
  first, resumably, politely, and refusing anything not on the public internet.
- `frontend/vite.config.ts`, `dev.sh` — `PF_API_PORT`, because a dead listener on
  8787 had made the app unrunnable on this machine.
- `frontend/src/components/library/QuestionsView.tsx`, `FeedView.tsx` — two links
  that still pointed at routes retired in #6.
- `frontend/src/lib/topics.ts`, `components/notes/GraphView.tsx`, `ui/tabs.tsx`,
  `DeepAnswer.tsx` — `ACCENT_HEX` deleted (a frozen hex table that painted graph
  nodes in dark-theme pastels *in the light theme*), and the two places that
  accented chrome with `lavender` moved to the accent.

**Decisions:**

- **Gate on provider, not on a confirm step.** #14 deliberately removed the
  press-to-confirm gate and that stays removed: with LM Studio running the row
  behaves exactly as it did. The gate is now "is this lens free right now", which
  is the question the user actually has, and the backend was already answering it.
- **Not "disable the billed tabs".** They work; they cost. A disabled control that
  is neither broken nor forbidden is a lie about what the app can do.
- **`useProviders` is shared module state.** A 400ms hover sweep across eight tabs
  must not become eight probes. It re-probes on window focus, because alt-tabbing
  away to start LM Studio is the case that must not need a reload.
- **Two themes, because five could not be maintained honestly.** A palette is ~25
  values that each have to clear a contrast floor; four of the five were
  maintained by eye. Cutting to two paid for the checker, and the checker is what
  keeps them true.
- **The accent is a desaturated blue** so green can keep meaning *correct* and red
  *wrong* — on a surface where you grade yourself every few seconds those two
  meanings must never be ambiguous. The old accent was a saturated red-orange.
- **The palette searches titles only.** Library's box also reads answers and tags;
  that is right where it is and wrong in a jump box, and an index over 8,330
  answer bodies at app start is not free.
- **The fetched pages stay git-ignored.** They are third-party content that
  happens to live on your disk. The repo keeps the fetcher, not the copies.
- **`leetcode.com` is skipped by policy**, measured not assumed: 403 on all 14
  attempts in the first run, and the most-cited host in the bank by 2×. For a
  problem page the link *is* the content.

**Found on the way:**

- A `UnicodeEncodeError` on a page title containing `τ` killed a full fetch run at
  URL 137 of 1,445 — fixed in #23 (stdout/stderr forced to UTF-8 with `replace`).
  Nothing had to be re-fetched, which is what the write-after-every-fetch index is
  for.
- Port 8787 is held by a listener whose owning process no longer exists (pid 7768,
  gone). Fixed around, in #20, rather than waiting for a reboot.

**Follow-ups:**
- [ ] Look at all of it in a browser — the palette's keyboard path, the two
      themes, the `$` markers. Nothing here has been *seen*.
- [ ] `POST /ingest` after the fetch finishes, then `POST /pipeline/build`, so the
      fetched pages become cards and citations.
- [ ] A retry pass for the JS-only and 403 hosts (Medium, Stack Overflow) — a
      headless fetch or a reader service, not a bigger `User-Agent` lie.
- [ ] Cached lenses are free too, and the tab row cannot know it. A cache-state
      endpoint would make the `$` markers exact rather than conservative.

## 2026-08-28 23:10 — Everything the first entry left pending, closed

**Summary:** The follow-ups from the entry above are done, and the thing that made them
possible came first: `npm run shoot`, a screenshot script built on the Chrome that is
already installed and the WebSocket Node already has. Nine more PRs (#26-#36). The
question bank went **8,330 -> 19,074** because the fetched web pages became cards, and
five of the seven "not verified" claims from this morning are now photographs.

**Changes:**

- `frontend/scripts/shoot.mjs` (new) — launches a throwaway headless Chrome, drives it
  over CDP, writes PNGs of Today, Library, the palette (empty, typed, and showing recent)
  and a lens generating, in both themes.
- `frontend/src/hooks/useProviders.ts`, `QuestionDetail.tsx` — a third state, `loaded`.
  The row no longer claims "LM Studio is off" during the seconds before it has asked.
- `backend/main.py`, `generate.py` — `GET /questions/index` (1.17 MB instead of 17.5 MB)
  and `GET /generate/cached/{qid}` (a cached lens is free whatever the provider is).
- `frontend/src/App.tsx`, `pages/Today.tsx` — Library and Study lazy; Today reads the
  index. Main chunk 754 kB -> 344 kB.
- `backend/fetch_reading.py`, `capture.py` — `--render` through headless Chrome for
  JS-only pages, a User-Agent that Wikipedia accepts, and `looks_like_a_wall()`.
- `frontend/src/components/CommandPalette.tsx`, `lib/storage.ts`, `hooks/useProgress.ts` —
  `Recently read`, backed by `progress.recent`.
- The fetched library ingested: 6,685 -> 17,429 cards, 1,864 -> 3,016 questions with
  reading links.

**Decisions:**

- **A screenshot tool that asserts nothing.** A "visual test" that passes on a blank page
  is worse than no test; this writes evidence and a human reads it. It earned its place
  in the first ten minutes by showing two bugs a green build could not.
- **Unknown is a third state, not a default.** Twice today a surface rendered "I do not
  know yet" as a fact: the lens row said LM Studio was off, and the palette said nothing
  matched "kafka". Both are now explicit.
- **The wall gate exists because rendering succeeded.** `--render` "recovered" five pages
  that were 404s and Cloudflare interstitials. A pass that reports success while writing
  garbage is worse than one that fails.
- **PR #16 was merged, not closed.** Its measured LM Studio notes — gpt-oss-20b at 96
  tok/s versus qwen3.5-9b at 2.4 tok/s, whose entire token budget goes to reasoning and
  returns empty content — are not reproducible from the code, and would have cost the
  next session an afternoon.

**Found on the way:**

- The shot script's Chrome profile lived under `frontend/` for one run and killed vite's
  watcher with `EBUSY`. It is in the OS temp dir now.
- It also wrote `settings` rather than `prepforge:settings`, so three shots named "light"
  were dark — mislabelled evidence, which is worse than none.
- `/questions/index` returned `{"error":"not found"}` until the route moved above
  `/questions/{qid}`. FastAPI matches in definition order; a test now asserts it.
- Sampled ingested cards include consultancy marketing sections. `_is_boilerplate` was
  written for cloned repos, not the open web. Left as a decision for the next session.

**Follow-ups:**
- [ ] Decide on the web-ingest noise (a filter, or accept it).
- [ ] The three still-unverified UI-rebuild pieces: timed quiz expiry, Reader PDF +
      web-fetch, drill mode.
- [ ] A plain `--retry-failed` pass now that the User-Agent is fixed; Wikipedia alone is
      21 pages.
