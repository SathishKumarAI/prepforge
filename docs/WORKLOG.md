# Worklog

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
