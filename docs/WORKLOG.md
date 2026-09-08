# Worklog

## 2026-09-08 (later) — COD-166: the Library's chrome stays put

**Summary:** "the scrolling actions are not looking good, the text is going on top, the sidebar
moves away when I want to find something". Looked at it in the browser: four "get out of the way"
behaviours were fighting each other on one screen. The app bar slid away on a downward scroll, and
because every sticky offset is measured from it (`--app-bar-h`), the list and the filter band
jumped by 50px each time it went. The filter band was sticky glass the answer ran under. The list put
itself away on a downward scroll and on any `?id=` link — a reload is one — and came back as a hover
overlay. Rows selected on a 250ms hover, so scrolling the list under a resting pointer switched the
open answer (Chrome fires mouseover on scroll); lens tabs did the same on a 400ms hover, so a click on
Hide list that reflowed the tab row under the mouse flipped the lens to ELI5 by itself.

| Item | PR | What landed | Measured |
|---|---|---|---|
| COD-166 | chrome stays put | `useScrollDirection.ts` and `StickyChrome.tsx` deleted; `page/underAppBar.ts` keeps the one sticky offset. App bar never hides (only focus mode). Filter band scrolls with the page. List hides only from the Hide list button; `readingMode`, `pinOpen` and both hover-select timers are gone. Picking a row while deep in an answer scrolls the new heading under the bar (keyed on the LOADED question — keyed on the click it landed 28px short, the pane is briefly empty and the scroll clamps). | 11 files, +119 / −194. Deep link `?id=q006` keeps the list; page scrolled 700px, bar height stays 50px, list stuck at top 58px. List scrolled 800px with the pointer over a row: page scroll unchanged, heading unchanged. Row click from y=900: detail top lands at 66px (50 + 1rem). Lens tab hovered 800ms: still Answer. `tsc` 0, build 2.93s, 8/8 tests. |

---

## 2026-09-08 (night) — the pending items: dead hook, probe grace, test flake, backend split, five UI gaps

**Summary:** "complete all the pending tasks". Everything in Backlog for this repo, one branch each.
This entry grows one row per PR.

| Item | PR | What landed | Measured |
|---|---|---|---|
| COD-109 | dead hook | `hooks/useQuestions.ts` deleted. Its only live export, `reloadQuestions()`, downloaded the whole 39.7 MB bank into a map nothing read; `CollectionsView` and `FeedView` now call `reloadQuestionIndex()` (new, in `useQuestionIndex`): drop the ETag, conditional refetch of the 1.17 MB index, every consumer re-renders. `fetchQuestions` removed from `api.ts` — no page requests `GET /questions` any more, in any path | tsc (noUnusedLocals) clean, build ok, 8/8; after an ingest the refetch is the index, not the bank |
| COD-152 | probe grace | `generate.local_model()` keeps the last model it SAW (`_seen`: when, id, URL, 60 s grace). A probe that fails within a minute of a hit at the same URL is a slow GPU, not an absent server, so the hit is served and the miss is not cached. A different URL still forgets it | new test `test_one_slow_probe_does_not_forget_a_model_seen_a_moment_ago`: red (`one slow probe forgot the model`) → green; `test_local_provider` all passed incl. the dead-port case; `test_local_answers` 13/13; `test_answer_lenses` passed |
| COD-151 | transport flake | `test_api_transport.py` freezes `main._bank_stamp` for its process: the suite is about how the bank travels, and the one test about invalidation forges its own stamp | reproduced first: a writer touching `content/answers` every 0.3 s made the unfrozen suite 6/7 three runs of three; frozen, 7/7 three of three under the same writer |
| COD-34 | vault noise | the "weather" cards came from an English-conversation book in the vault ("Daily Native English: 400 Daily Questions & Answers") that the `questions` filename keyword let in: 124 Behavioral cards. `config/vault.yaml` gains `exclude_keywords`; `vault._collect_files` honours it. Found on the way: on Windows `include_folders` had never matched (`relative_to` yields `\`, the test used `/`) — fixed in the same function. Re-ingested: 1,545 → 1,421 vault questions, 0 added; the 726 orphaned lens files for those cards deleted from `content/answers` | `test_vault_collect.py` (new) 3/3 — the folder test was red on Windows before the separator fix; dry-run: 21 → 20 files, only the English book dropped; live bank "weather like today" → only transcript "Explain:" cards; browse / index / junk / stats tests all green |
| COD-164 a | main.py split | `main.py` 816 → 47 (the app, middleware, two `include_router`s). `paths.py` (13: BASE, CONTENT, DATA, CONFIG, ANSWERS_DIR), `bank.py` (268: assembling the bank, mtime stamp, ETag, `_not_modified`, `_with_related`, the search rows), `api_questions.py` (257: GET routes reading the bank, in the same order), `api_content.py` (306: everything that writes, fetches or scrapes). Bodies moved verbatim by marker; tests and the three scripts that reached into `main` repointed at `bank` / `api_questions` / `api_content` | route table identical (31 routes, same paths and methods); 10 endpoint bodies byte-identical between the still-running old process and a TestClient on the new code (`/questions/index` 3,432,263 B among them); all 15 test scripts green; `answer_lenses.py --dry-run` still plans 0 |
| COD-164 b | ingest + generate split, README | `ingest.py` 786 → 478 (`quiz_synth.py` 247: TF-IDF + three quiz shapes; `hygiene.py` 75: `usable_question` / `is_fragment`; `ingest_words.py` 26: the shared stopwords and regexes, so `quiz_synth` never imports `ingest`). `generate.py` 701 → 433 (`lens_prompts.py` 90: the prompts and `MODES`; `claude_client.py` 115: model, prices, pause_turn loop, `_extract`; `answer_stats.py` 114). `backend/README.md` (new): change → file table, the import direction, traps. Every backend file we wrote is under 500 now | all 15 test scripts green; 9 endpoint bodies byte-identical vs the old process (`/questions/index` 3,432,263 B); an AST scan for unused module imports found `threading` left behind in `generate.py`, removed; README paths all resolve |
| COD-117 | restore preview | four of the five gaps were closed by COD-118/119 on 2026-09-02 (the ticket outlived them). The fifth: the restore panel now shows, under the counts, the newest card you wrote, the newest note and the last study day (`lib/backup.sampleOf`, ≤ 3 clipped lines) | 3 new script tests (newest wins, empty file → no lines, a 300-char card clips under 120) 15/15; in the browser a picked file renders "Newest card you wrote: “Why does attention scale…”, Newest note: “Kafka offsets…”, Last studied: 2026-09-07" above Merge / Replace |
| rename | Recall everywhere a person reads | README, docs titles, the docs index, `package.json` name, FastAPI title, the extension's name and popup, backup error messages and the download filename (`recall-backup-*.json`; old `prepforge-backup-*` files still restore because the check is the `app` field inside), the curated origin label ("Recall bank"), the user agents. **Kept**: the GitHub repo name, `localStorage` `prepforge:`, IndexedDB `prepforge` / `prepforge-audio`, the backup `app: "prepforge"` field, the extension queue key — every one of them is a key to something already saved | grep for `PrepForge` in live docs and UI strings → only historical mentions; tsc, build, 15/15 backup tests; backend browse / index tests green with the new label |

---

## 2026-09-08 (evening) — modularisation round: every frontend file under the ceiling, a README per directory

**Summary:** "keep the code more modularized, update the documents". Measured first: after COD-161 four
frontend files were still over the 500-line ceiling (`sidebar.tsx` 773 is a shadcn primitive and stays;
`Study.tsx` 631, `QuestionCard.tsx` 575, `Layout.tsx` 524) and five directories with more than four
source files had no change → file README (COD-110). One PR per file, each snapshot-diffed; the READMEs
last, so the tables describe the final layout. Backend sizes filed as COD-164, not started.

| Item | PR | What landed | Measured |
|---|---|---|---|
| COD-162 | shell split | `Layout.tsx` 524 → 151. `shell/nav.ts` (routes, groups, view labels, `isActivePath`, `SIDEBAR_KEY`), `shell/AppSidebar.tsx` (156), `shell/AppBar.tsx` (195). Bodies moved verbatim by line range; Layout keeps focus mode, global keys, dialogs, composition | rendered sidebar, app bar, page and gear menu byte-identical before/after (17,156 / 4,732 / 6,606 / 5,486 chars); focus mode `--app-bar-h` 0px → 50px on Esc; Ctrl+B toggles and persists the same; tsc (with noUnusedLocals) clean, build, contrast, 8/8 |
| COD-163 | study split | `Study.tsx` 631 → 404. `lib/studyPlan.ts` (pure: `interleave`, `plannedSize`, `planQueue`, `NEW_PER_SESSION`), `hooks/useStudySession.ts` (the running session: start/end/reveal/rate/pick/next, the quiz countdown, the keys, `TIMED_SECONDS`), `components/study/{SessionSummary,RecentSessions,Setting}.tsx`. Study keeps setup and the two screens. Also removed a dead `toQuestion` import in `SavedView.tsx` that `--noUnusedLocals` found | six states byte-identical from the same saved progress: recall setup 6,606; card 3,537; revealed 6,702; after rating 3,616; back to setup 6,605; quiz setup 6,840 chars. tsc (noUnusedLocals), build, contrast, 8/8 |
| COD-165 | card split | `QuestionCard.tsx` 575 → 296. `components/card/CollapsibleAnswer.tsx` (34), `card/MoreToRead.tsx` (43), `card/RelatedLinks.tsx` (212: the disclosure, per-link hover preview, the one-fetch-per-id cache), `lib/stripMd.ts` (10, shared by the card's preview line and the tooltip). `OriginIcon` stays with the card | Saved view: list, expanded card and open Related list byte-identical (6,411 / 14,142 / 14,160 chars); the hover preview still fetches and fills (title → skeleton → answer text). tsc (noUnusedLocals), build, contrast, 8/8 |
| COD-110 | READMEs | change → file tables for `src/lib` (23 files), `src/hooks` (18), `src/components` (16 + subdirs), `src/components/ui` (19, with the list of edits that differ from upstream shadcn), `src/pages` (6). `CLAUDE.md` gains a where-to-look table. `ui/sidebar.tsx` recorded as vendor and exempt from the ceiling | every file named in a table exists (checked by script); no code change |

### Method, so the next split is the same split

1. Measure: `wc -l` over `src`, and which directories exceed four source files without a README.
2. Snapshot the rendered surface on the untouched branch — normalised `outerHTML` of the region,
   in every state you can reach by script (open, hidden, empty, a session running).
3. Slice by line range with a script, moving bodies verbatim; write only imports and headers.
4. `tsc --noEmit --noUnusedLocals` (stricter than the project's build — it found one dead import).
5. Re-run the snapshot; diff. Text-stripped structure must be identical; where data differs
   (a hover selected a different row) say so in the PR.
6. README with the change → file table in the same PR as the split that made it needed.

### Deliberately not done

- **Backend** (COD-164): three modules over the ceiling and no README. Same method; the pytest
  files are the gate.
- **`ui/sidebar.tsx`**: vendor. Recorded in `ui/README.md` rather than split.
- **`Dashboard.tsx` (452), `DeepAnswer.tsx` (440), `QuestionDetail.tsx` (480), `QuestionsView.tsx` (450)**:
  under the ceiling, over the target. Next candidates if any of them grows.

---

## 2026-09-08 (later) — QuestionsView split by concern (COD-161)

**Summary:** `QuestionsView.tsx` had grown to 805 lines (ceiling 500). Split by concern, behaviour
preserved, rendered output diffed before and after. Branch `refactor/questions-view-split`.

| Concern | Now lives in | Lines |
|---|---|---|
| paging: page one, debounce, next page, scroll sentinel | `hooks/useQuestionPages.ts` | 114 |
| search, chips, Clear filters, Recall, Hide list, the `/` key | `components/library/FilterBand.tsx` | 181 |
| gutter handle + hover overlay for a put-away list | `components/library/ListPeek.tsx` | 102 |
| the "Go deeper" disclosure | `components/library/DeepStudyLinks.tsx` | 71 |
| selection, list-away rules, two-pane grid, j/k, recall on/off | `components/library/QuestionsView.tsx` | 450 (was 805) |

`FilterBand` owns no state (values in, changes out). `ListPeek` owns its own open/closed and the
Escape that closes it — the two `setPeeking(false)` calls the view used to make are gone because the
overlay unmounts when the list comes back, which is the same thing. `components/library/README.md`
(new) carries the change → file table; COD-110 asked for it.

### Verified

| Check | Result |
|---|---|
| rendered `.page` outerHTML, four states (two-pane, list hidden, recall on, empty), before vs after | text stripped: identical except the row the baseline's hover had selected, that question's answer markup and tags, and a trailing space my normaliser left. No markup change in the band, the list, the handle, or the empty state |
| peek overlay, live | hover opens it with `60 questions` and 60 rows; Escape closes; reopens; Keep open puts the list back and the toggle reads `Hide list` |
| `/` focuses search; Clear filters restores 66 rows | yes / yes |
| `tsc` / `vite build` / `npm run contrast` / `npm test` | clean / ok (2.7s) / clear / 8/8 |

---

## 2026-09-08 — the Recall redesign brief, filed and built (COD-154 to COD-160)

**Summary:** a design brief for the Library ("Recall — Library Redesign Brief") arrived describing a
mockup: brand eyebrow, stats in the header row, liquid-glass chrome, a settings gear, and seven study
features. Reconciled against the repo (themes, text size, focus mode and flip cards already existed;
no timer existed; the brief's tokens were not adopted), filed one Plane item per increment, built
each on its own branch. This entry grows one line per PR.

| Item | PR | What landed | Measured |
|---|---|---|---|
| COD-154 | header row | `Recall` eyebrow over the title (`lib/brand.ts`, the one source of the name; sidebar, breadcrumb, tab title read it); the question count and an **All caught up** pill sit right of the title (`Orient compact`) | Library content starts at 206px, was 264px — one line reclaimed; `tsc`, build, contrast all clean |
| COD-155 | glass chrome | `.glass` is real glass now (was a dead alias for `.panel`): 72% mantle tint, two fixed ambient blobs in the accent hues, `backdrop-filter: blur(20px) saturate(1.4)`, a cursor-tracked highlight (`lib/glass.ts`, one rAF-throttled listener) and a 260ms spring open on any glass with Radix `data-state`. Applied to the sidebar, the app bar, the sticky search/filter band, dropdown menus, tooltips. Not the list, the detail, or any dialog | computed on the running page: bar, sidebar and band all `blur(20px) saturate(1.4)` on `rgba(22,26,32,0.72)`, detail pane `none`; menu opens with `pf-glass-open 0.26s cubic-bezier(0.34,1.56,0.64,1)`; both themes screenshotted; contrast still clears |
| COD-156 | settings gear | the app-bar appearance button is a gear: theme, **Reduce motion** (writes `data-motion="reduce"`, the CSS mirrors the OS media rule, `MotionConfig` moves into App and reads the same setting), shortcuts, All settings. Settings dialog gains **Line height (answers)** Tight / Normal / Airy (`data-leading`) and a Motion chip pair | reduce on: menu `animation-duration` 1e-06s; leading Airy: `.prose-answer` 28.875px → 32.175px; both persist in `prepforge:settings`; tsc, build, contrast, 8/8 tests clean |
| COD-157 | recall mode | a **Recall** toggle on the filter row (remembered in `pf-library-recall`): the answer surface is replaced by "Say the answer to yourself first" + **Reveal answer · Space**; once revealed a rating row **Got it / Shaky / Missed it** (keys 1 2 3, interval preview) calls `rateCard` (good / hard / again) and, in recall mode, advances. Outside recall the row is there too and just records. `j` / `k` alias the arrow keys; `step()` is the one definition of "next" for keys and the auto-advance | on the running page: j q001→q002, k back; Space: `.prose-answer` absent → present, rating row present; `1`: `prepforge:progress.srs.q001` = `{interval:1, reps:1, due: tomorrow}`, URL advanced to q002, answer hidden again |
| COD-158 | read aloud | a speaker button beside Save / Note (`hooks/useSpeech.ts`, Web Speech API, no dependency) reads the question then the rendered text of whatever lens is on screen — in recall mode, only the question; sentences are queued as separate utterances because Chrome drops one long utterance after ~15 s; press again to stop; unmount stops. Hidden where `speechSynthesis` is absent. Also fixed: the Space key cap on the Reveal button was on-accent-on-crust in dark (invisible) — button is secondary now | on the running page (3 voices): click → `speechSynthesis.speaking` true, button `aria-pressed` true / "Stop reading"; click → false; cap colours now overlay1 on crust |
| COD-159 | session timer | **Start session** in the Library header becomes a glass pill (`mm:ss · N reviewed · End`); End opens a **Session summary** dialog: time, questions reviewed, rated, saved. `hooks/useLibrarySession.ts` derives the counts by diffing the progress store (a new `recent[0]`, a replaced `srs` card, a longer `bookmarks`) — nothing reports to it, nothing is stored, and the session survives leaving the page. The brief's timer did not exist in the repo; this is the minimum both need | on the running page: three rows opened 3 s apart → pill `00:08 3 reviewed`; a rating and a save in an earlier run → summary `1 rated · 1 saved`. Opening rows faster than the detail fetch lands (~1–2 s in dev) counts them when the fetch lands, not on the click |
| COD-160 | docs | this entry; the brief's reconciliation table and its rules in `UIUX-BACKLOG.md`; STATUS rewritten; the rename noted in the docs index | — |

### Deliberately not done, and what would make it worth doing

- **The brief's tokens** (ember accent, Source Serif 4, Inter). Adopt only after running them
  through `npm run contrast` in both themes and reading an hour of answers on them.
- **Renaming the repo, package and docs** to Recall. One constant carries the UI name; do the rest
  when the name has survived a week.
- **Filters behind one button.** The brief wants the chip row hidden behind a Filters button; the
  row is the page's only topic navigation, so hiding it needs a replacement first.
- **Session history.** Summaries are shown once and dropped. Persist to `progress` when a second
  surface (Today, Progress) wants to show them.
- **COD-161**, the 805-line `QuestionsView.tsx`, filed and not started.

---

## 2026-09-07 (last) — what the answers add up to, in Settings and under ⓘ

**Summary:** "add a status of this to Settings and the information icon: how answers are reflecting,
what model, the cost, hours, tokens." Branch `feat/answer-stats`.

### What changed

- `generate._compute_stats(dir)`: one pass over the folder reading the first 700 bytes of each file
  (the whole frontmatter) with a regex — YAML at 107k files was 10× slower. Counts by lens (from the
  filename suffix) and by model (`model`, `provider`, tokens in/out, cost), totals, first→last
  `generated_at`, and `local_hours_estimate` = local output tokens ÷ 61 tok/s ÷ 3600 ÷ 4 slots, with
  `estimate_basis` in the payload so nobody mistakes it for a clock.
- `generate.answer_stats()`: serves `_stats.json` when its stamp (file count, newest mtime) matches
  the folder; otherwise returns `computing: true` and starts the scan in a thread. `_stats.json` is
  gitignored beside `_eval.json`.
- `GET /generate/stats`; `useAnswerStats(enabled)` (module cache, 3 s poll while computing, gated so
  the dialog that mounts on every route never starts a scan uninvited).
- Settings → **Generated answers**: three headline numbers, a pill per lens, a table per model, and
  the window + estimate line. Under a lens's ⓘ: one more row, "of N answers by this model · total on
  disk · billed · ≈ GPU-hours — full table in Settings".

### Verified

| Check | Result |
|---|---|
| `test_answer_stats.py` (new) | red (`no attribute _compute_stats`) → 2/2 |
| `tsc --noEmit` | clean |
| `GET /generate/stats` on the real folder | `computing: true`, then the totals (numbers in the PR) |
| Settings in the browser | see the PR |

### Trap, again

`uvicorn --reload` did not pick up `main.py`; the route was 404 until the server was restarted. Third
time this session — `dev.sh` should probably not rely on WatchFiles on this machine.

---

## 2026-09-07 — every question has every lens: 107,776 answers by a local model, nothing billed

**Summary:** the run that began as "let it go for about an hour" on the evening of 2026-09-04 finished
at 15:07 on 2026-09-07. All 17,927 questions now carry all six prose lenses (STAR, ELI5,
first-principles, thinking, FAANG, AWS), written by `openai/gpt-oss-20b` through LM Studio on the
RTX 5070 Ti, saved as Markdown with model, time, tokens and cost in the frontmatter, and committed to
`main` in hourly slices (PR #94 through #160). COD-149 → Done.

### The runs

| Run | Window | Written | Failed | What ended it |
|---|---|---|---|---|
| one-hour | 09-04 21:45 – 22:18 | 1,074 | 0 | replaced by an unbounded run |
| v1 | 09-04 22:18 – 09-05 03:26 | 9,328 | 49,342 | a provider blink drained the queue in 2 min (#98) |
| v2 | 09-05 03:26 – 09-06 11:30 | 54,491 | 3 | a persistent 400 held a worker 8 min (#132) |
| v3 | 09-06 11:30 – 12:33 | 1,109 | 43 | two retries sat inside a 400 burst (#134) |
| v4 | 09-06 12:33 – 09-07 15:07 | 40,730 | 16 | finished |
| final pass | 09-07 15:08, 0.9 min | 16 | 0 | 0 left |

Pace: 33–37/min on STAR, ELI5, FAANG, AWS; ~16/min on `thinking` (the lens makes the model reason
longer); ~30/min on first-principles. About 55 GPU-hours in total.

### Coverage

| Lens | Files |
|---|---|
| STAR | 17,931 |
| ELI5 | 17,928 |
| first-principles | 17,930 |
| thinking | 17,929 |
| FAANG | 17,928 |
| AWS | 17,929 |

The few above 17,927 are the curated questions' original Claude-written files sitting beside the
local ones — both are versions, both open from the versions row (#90).

### What the three days taught

- **A provider that is down is a reason to wait, not a verdict on the pair.** 49,342 failures in two
  minutes, all because a 10 s negative cache made every call raise instantly (#98).
- **Read stderr.** The stdout counter said 0 failed while stderr held 49,342 lines. Every later
  watcher counted both.
- **A 400 can be three different things:** a server mid-reload (retry), a burst of parser errors
  (retry, spaced — five naps), or a prompt the parser rejects every time (give up). #132 got the
  third right and generalised it wrongly; #134 measured the second.
- **Kill the worker, not just the reloader.** A dead `uvicorn --reload` left its worker bound to
  8787 and answering old code.
- **The UI's probe has the same weakness** (COD-152, open): one slow probe under GPU load shows
  "LM Studio is off" for 10 s.

### Deliberately not done

- No quality pass. `eval_answers.py` exists; the user wants a Claude evaluation later, not now.
- No re-generation of the curated 100's lenses — they already had Claude-authored versions.
- Hover-to-switch on the lens tabs unchanged (COD-30), noted in #96 as worth revisiting now that
  every lens opens from disk in ~20 ms.

---

## 2026-09-06 — the 400s are bursts, so five spaced retries, not two

**Summary:** run v3's first hour, on the two-retry budget from the previous entry, failed 43 pairs
with HTTP 400. Both pairs re-tried by hand succeeded first try, at `max_tokens` 1500 and 4096 alike
(443 completion tokens, 24 reasoning tokens — nowhere near a cap). So the 400s are not about the
prompt and not truncation: LM Studio's parser error arrives in bursts of tens of seconds, and the
two retries (5 + 10 s) sat inside one. Branch `fix/lens-batch-400-bursts`.

`RETRIES_400 = 5` — 5, 10, 20, 40, 60 s, two minutes total, outlasts a burst; the one pair in 54k that
fails deterministically now costs a worker two minutes rather than eight. Test renamed and
re-asserted (`naps == [5, 10, 20, 40, 60]`), 5/5 green. Run v3 stopped at 1,109 written / 43 failed;
run v4 started on this code with the 43 back in the plan.

The previous entry's diagnosis stands for its pair (deterministic for the MRoPE question); it was
wrong to generalise it to every 400.

---

## 2026-09-06 — a 400 that is about the prompt, not the provider

**Summary:** the 11:27 tick showed a third failure and a slow hour. The failure was a persistent 400
from LM Studio for one question; the ten-retry ladder from yesterday's fix had held a worker on it
for eight minutes. Branch `fix/lens-batch-400`.

### What the body said

Reproduced by hand with the model id given explicitly:

    Engine protocol predict stream returned an error: {"code":500,"message":"The model produced
    output that does not match the expected peg-native format","type":"server_error"}

LM Studio's parser rejects what gpt-oss-20b writes for that prompt (a Qwen2.5-VL / MRoPE question,
`thinking` lens), and it did so on every attempt. That is a per-pair failure wearing a provider
status code. A first attempt without the explicit id returned a different 400 — `Failed to load model
"null"` — because the probe had blinked and returned None at that moment: more evidence for COD-152.

### What changed

`generate_one()`: an `httpx.HTTPStatusError` with status 400 gets `RETRIES_400 = 2` (15 s), which
still covers a 400 from a server mid-reload; connect errors and the probe's RuntimeError keep the
ten. New test `test_a_400_that_persists_fails_after_two_naps_not_ten`, 5/5 green. Run v2 (pid 5104,
54,491 written, 3 failed) stopped; run v3 started on the new code.

### Coverage at the restart

| Lens | Files | State |
|---|---|---|
| STAR · ELI5 · first-principles | 17,927 each | complete |
| thinking | ~10,800 | in progress, ~16/min — the lens makes the model reason longer |
| FAANG · AWS | 101 · 102 (curated) | queued |

### Left

- The three failed pairs (two empty answers, one parser rejection) have no file; a later run tries
  each once more. If the parser rejection repeats, that question simply has no `thinking` lens.
- COD-152 stands: the probe blinked again under load during the repro.

---

## 2026-09-05 — the batch that failed 49,342 pairs in two minutes, and the retry that stops it

**Summary:** the 03:18 hourly tick showed the run on the `thinking` lens with `star` unfinished. The
stdout counter said 0 failed; stderr had 49,342 FAILED lines. Branch `fix/lens-batch-retry`.

### What happened

| Count | Error | Meaning |
|---|---|---|
| 276 | `Client error '400 Bad Request'` from `/v1/chat/completions` | LM Studio stopped accepting requests for a few seconds — mid-reload, most likely |
| 49,066 | `LM Studio is not answering at http://localhost:1234/v1` | the `local_model()` probe (1.5 s timeout) failed under load and cached `None` for 10 s; inside that window every `local_only` raised before any HTTP call |

Four workers, instant failures, no GPU: the remaining 8,912 STAR pairs, all 17,827 ELI5, all 17,827
first-principles and 1,476 `thinking` pairs were marked failed in about two minutes. Then the probe
refreshed and the run carried on writing `thinking` at 31/min as if nothing had happened. All 40 of
the "failed" pairs re-tried by hand succeeded, so the pairs were fine; the provider had blinked.

### What changed

- `generate_one()` in `answer_lenses.py`: a `RuntimeError` (the probe's "not answering") or any
  `httpx.HTTPError` is waited out — 5, 10, 20, 40, 60 s… — with `generate._probe` cleared before each
  retry so the 10 s TTL cannot replay the miss. Gives up after `RETRIES = 10` (~8 minutes of silence:
  a machine that went to sleep), and that failure names its pair.
- New `test_answer_lenses.py` (4 tests): down-then-up is waited for and written; a 400 is the same
  event; a provider that never returns does fail; the probe cache is cleared before the retry.
- The run was stopped (pid 17536, 9,328 written) and restarted on the fixed code (`lenses_full2.log`).
  The plan re-included every skipped pair — 96,411 to write — because none of them has a file.

### Verified

| Check | Result |
|---|---|
| `test_answer_lenses.py` | red (`no attribute generate_one`) → 4/4 |
| `answer_lenses.py --dry-run` | 96,411 pairs, star/library first |
| restarted run | first lines writing STAR library cards at the usual pace (see the pid in STATUS) |

### Left

- `local_model()`'s probe timeout (1.5 s) and 10 s negative cache are tuned for a hover in the UI, not
  a saturated GPU. The retry makes the batch immune; the interactive path still sees "LM Studio is
  off" for 10 s after a slow probe. Filed as COD-152.
- Nothing about the 400s themselves — not reproducible afterwards, no body logged. If they recur,
  `generate_one` will now wait rather than skip, and the `.err` line names the pair to inspect.

---

## 2026-09-05 — the flicker, measured frame by frame, and removed

**Summary:** "there is flickering when the question moves forward in the bank." Reproduced with a
requestAnimationFrame recorder that logged every DOM change on the detail pane, then fixed the two
things it showed. Branch `fix/lens-flicker`.

### What the recorder showed

| Gesture | Frames | Verdict |
|---|---|---|
| ArrowDown to the next question | new heading with a `$` on Grounded → 92–114 ms later the `$` gone | **flicker**: `cached_modes` was a second request after the question |
| hover a lens tab (400 ms) | spinner frame, article 709 → **463** px → answer 892 px, opacity 0 → 1 over 300 ms, then **0.999 → 0 → 1** | **flicker**: one-frame spinner, then a one-frame blackout when framer-motion settled |
| hover rows in the peek overlay | nothing | clean |
| click a row in the overlay | one frame | clean |
| document shrinks under a deep scroll | list stays away | clean (`readingMode` from `?id=`) |

Why tonight: LM Studio was off until this session. With it off, hover reached no lens (billed lenses
need a press). With it on, six tabs switch on hover, and every pointer path across the row fires the
spinner + fade + blackout.

### What changed

- `GET /questions/{qid}` carries `cached_modes`; `QuestionDetail` reads it from the question and the
  separate effect + `fetchCachedModes` are deleted. First frame is the right frame.
- `DeepAnswer`: `AnimatePresence`/`motion.div` gone — a plain `div`. The fade was the flicker.
- One spinner element for both loading states, class `spinner-late`: `animation: pf-appear 0s linear
  150ms both` holds `visibility: hidden` for 150 ms, so a disk hit (~20 ms) never paints one.

### Verified

| Check | Result |
|---|---|
| new `test_a_question_says_which_lenses_are_on_disk` | red (`None`) → green, 16/16 |
| the other eleven backend test files | green |
| `npm test`, `npm run build`, `tsc --noEmit` | green |
| recorder, hover STAR then ELI5 | 2 frames each: spinner `visibility: hidden`, then answer. No opacity ramp, no 0 frame |
| recorder, ArrowDown | 1 frame, `dollars` constant |

**Left:** the article still collapses to 463 px for the one hidden-spinner frame, so content below the
answer moves up for ~20 ms. Not visible in practice; the fix would be to keep the previous lens on
screen while the next loads. Hover-to-switch stays — it is COD-30's deliberate design — but with six
free lenses it now fires on every pointer path across the row, and press-only may be the better
default. Not changed without being asked.

### Trap

A killed `uvicorn --reload` leaves its worker process alive and bound to 8787 beside the new server.
`netstat` showed two LISTENING rows; the old one answered, so the new route "did not work" for ten
minutes. Kill the worker (`CommandLine -match 'main:app'`), not just the reloader.

---

## 2026-09-04 — pre-writing the lenses: LM Studio up, a one-hour batch, 35 answers a minute

**Summary:** the ask was to make sure the local model works on this machine and then let it run for
about an hour writing answers to disk, so study time is spent reading rather than waiting on a model.
Branch `feat/answer-lenses-batch`.

### What was found

| Question | Answer |
|---|---|
| Is LM Studio running? | Installed, server **OFF**, no model loaded. Ollama was running instead (qwen3.8-27b), which nothing here talks to. |
| Which models are on disk? | `openai/gpt-oss-20b` (12.1 GB — what every existing `__local` answer was written with), `qwen/qwen3.5-9b`, a nomic embedding model. |
| What is missing? | Nothing in the *bank*: all 17,927 questions have an answer, and `answer_missing.py` has 0 to do (#89's junk filter took the last ones). What is missing is the **lenses**: only q001–q100 have them. 17,827 × 6 = **106,961** question+lens pairs with no file. |
| How fast is it? | One request: 6.7 s, 410 tokens, 61 tok/s. Four concurrent (LM Studio's default `PARALLEL 4`): **35 answers/min**, so ~2,100 in an hour — about 2 % of the backlog. |

### What changed

`lms server start` + `lms load openai/gpt-oss-20b -y` brought the provider up; `/generate/providers`
then reported six free lenses. New **`backend/answer_lenses.py`**: the lens counterpart of
`answer_missing.py`. A time budget (`--hours`), a priority (vault questions before the library's
"Explain: <heading>" cards; every question gets STAR before any gets ELI5), four workers fed a few at
a time so the deadline stops *new* requests promptly, `--dry-run` printing the plan and an estimate.
Same `generate.local_only()` underneath, so there is no billed path and every answer is the same
Markdown the interactive path writes, with `generated_at`, model, tokens, cost in its frontmatter.

One wrong turn recorded: the first plan checked the disk per pair through `generate._version_paths`
— 106,961 directory walks of 800 files, **over two minutes just to print the plan**. Now one listing
is reduced to a set of "bases" (name minus stamp minus `__local`) and the plan takes **1.1 s** with
identical output.

### Verified

| Check | Result |
|---|---|
| `answer_lenses.py --hours 1 --dry-run` | 106,961 pairs, vault STAR first; 1.15 s |
| `--limit 8` smoke run, 4 workers | 8/8 written, 0 failed, 0.2 min, 37/min; a file inspected: frontmatter complete, STAR labels present, machine-written note at the end |
| the one-hour run | detached at 21:45 (`Start-Process`, pid 14232), 16 answers at 35/min when this was written. **Its result is not in this entry** — see STATUS for how to commit the files it leaves |

### Deliberately not done

- Not the whole backlog: 106,961 pairs at 35/min is **51 hours** of GPU. Re-run `answer_lenses.py`
  whenever the machine is idle; it resumes.
- No quality pass: `eval_answers.py` exists for that and nothing here has been read by a human.
- Ollama untouched. `generate.py` speaks LM Studio's OpenAI-compatible server only.

---

## 2026-09-04 — every generated answer is kept: versions, provenance, a regenerate row

**Summary:** the request was "do not cache the answers, save them to local files" — and measuring
showed they already were: 814 Markdown files under `backend/content/answers/`, served disk-first. The
pill saying **"cached"** was the lie. What was missing: a way to ask for a *new* answer, a choice of
who writes it, and a history so the old one is never lost. Branch `feat/answer-history`.

### What changed, and why

| Piece | Before | After |
|---|---|---|
| Regenerate | delete the `.md` by hand | **new answer ›** row under every lens: `↻ Local · free` (hidden when LM Studio is off) · `↻ Claude` · `↻ Claude + web search` |
| Overwrite | a second write replaced the file | never. `force` writes `<qid><lens>__YYYYMMDDTHHMMSS.md`; `versions()` lists every file for the lens newest first |
| Two files per lens | `__local` shadowed the Claude file whenever LM Studio was up | both are versions; the newest opens, the other is one click away |
| Provenance | model · tokens · cost as pills | **ⓘ info** panel: model · provider · written (local time) · tokens in/out · cost · web searches · file name. `generated_at` is stamped into the frontmatter on write; older files read their mtime |
| Web search | `deep` only | `provider=claude_search` puts the web_search tool on any lens |
| Provider promise | `local` silently fell back to Claude | an explicit `local` returns `no_local_model` / `generation_failed`, bills nothing |
| Pill | "✓ cached · no API call" | "✓ saved on disk · no API call" |

`POST /generate/answer` gains `provider` (`auto|local|claude|claude_search`) and `force`; the
response gains `versions`. `_claude_generate()` is the old inline Claude body, extracted so both
providers share one persist step. `cached_modes()` now counts every file shape through the same
`_version_paths()` regex, anchored at both ends so `deep` (no suffix) cannot swallow `q001__star.md`
and `q001` cannot swallow `q0011.md`.

### Found on the way

- **A failed regenerate wiped the answer on screen.** The error replaced `slot.data`, and with it the
  versions row and the regenerate row — a dead end after a billing attempt. Now the error lives in
  `slot.error`, drawn above the answer that stays. Found by pressing ↻ Claude on a machine without
  credentials; fixed in the same branch.

### Verified

| Check | Before | After |
|---|---|---|
| `backend/test_answer_history.py` (new) | — | 5/5 |
| `test_local_provider.py`, `test_local_answers.py` | all passed, 13/13 | all passed, 13/13 |
| the other ten backend test files | green | green |
| `npm test` | 12/12 · 8/8 · 8/8 | 12/12 · 8/8 · 8/8 |
| `npm run build`, `tsc --noEmit` | green | green |
| q001 · STAR via the live API | `versions` absent | 2 versions: `q001__star__local.md` (2026-08-28, gpt-oss-20b), `q001__star.md` (2026-07-11, authored) |
| q001 · First-principles in the browser | — | versions row v2/v1; picking v1 swaps body and ⓘ file to `q001__fp.md`; ↻ Claude → credentials error, answer + rows stay |

**Not verified:** a billed regenerate end to end — no API key on this machine. The write path it
would take is the one `test_a_regenerate_keeps_the_old_answer_and_adds_the_new_one` exercises.

### Deliberately not done

- **No delete.** Files are removed by hand or not at all; a button would make the history optional.
- **No diff between versions.** Two clicks show two answers; add a side-by-side when that is not enough.
- **Local + web search.** LM Studio has no search tool. When a local model gains one, `claude_search`
  is the shape to copy.

---

## 2026-09-04 — the app shell on shadcn: sidebar, breadcrumb, command palette

**Summary:** the hand-rolled nav (397 lines of `Layout.tsx` owning open/closed state, Ctrl+B, a
phone scrim and a body-scroll lock) is replaced by shadcn's `Sidebar`, `Breadcrumb`, `DropdownMenu`
and `Command` (cmdk). shadcn is initialised for real now — `components.json`, `npx shadcn add`
works — and the components it writes pick up the existing palette through the semantic colour
tokens `tailwind.config.js` already mapped. Branch `feat/shadcn-shell`.

---

### What changed, and why

| Piece | Before | After |
|---|---|---|
| Nav | a 240px column that was either there or not | `Sidebar collapsible="icon"`: full labels, or a 3rem icon rail with tooltips, or a sheet on a phone. Two groups, *Practice* and *Material*, so six items read as two decisions |
| Reader | reachable only from Library's corner link or Ctrl+K | a nav item |
| App bar | a page name, three icon buttons | `SidebarTrigger` · breadcrumb (`PrepForge › Library › Questions`, the second crumb read from `?view=` / `?mode=`) · a search field that is a button · one menu for theme / shortcuts / settings |
| Ctrl+K | a `Dialog` with a hand-written listbox | `CommandDialog` on cmdk, `shouldFilter={false}` so Fuse stays the ranker |
| Today aside | two horizontal scrollbars under the fortnight strips (14 × 24px = 336px in a 304px column) | `table-fixed w-full`: the cells share whatever width they are given |
| `border` with no colour | Tailwind's gray-200, on every theme | `borderColor.DEFAULT` = the palette hairline |

### Traps hit

- **`npx shadcn add` rewrites `tailwind.config.js` and breaks it.** It stripped every comment and
  re-quoted `'"Fraunces"'` as `'Fraunces"'`. Restore the file from git after any `add`, then hand-edit.
  The `--sidebar-*` hsl variables it appends to `index.css` were reverted too — the eight `sidebar.*`
  colours in the config map straight onto `--ctp-*`, so the nav follows the theme switch for free.
- **`add` prompts to overwrite `button.tsx` / `tooltip.tsx` / `dialog.tsx` and hangs without a tty.**
  Move ours aside, run `add`, move ours back. Upstream copies are worth a diff, not an overwrite: the
  button's five tiers are load-bearing across the app.
- **Tailwind config changes do not reach the running Vite dev server.** `bg-sidebar` did not exist
  until the server was restarted; the phone sheet rendered transparent for exactly that reason. The
  production build was right the whole time.
- **chrome-devtools `resize_page` resizes the window every tab shares**, and `take_screenshot` times
  out on a background window. Keep one tab in front.

### Verification

- `npm run build` green (`index-*.js` 504 kB — cmdk, dropdown-menu, sheet and separator add ~15 kB
  to the shell chunk); `npm test` 28/28; `npm run contrast` "All pairs clear their floor in 2 themes".
- Driven at 1536px: expanded, icon rail (tooltips on hover), breadcrumb on every route, Ctrl+K →
  typed `k` → "12 of 18,151 questions", theme menu switches to light. Driven at 502px: the trigger
  opens the sheet, computed background `rgb(22, 26, 32)`, a link closes it.
- Plane was unreachable (`localhost:8080` refused) — no work item filed; file `feat` +
  `repo:interview_prep` when it is back.

---

## 2026-09-02 — a local model answers the 99 questions that had none

**Summary:** 99 of the 18,284 questions in the bank had a question and no answer — vault-ingested SQL
and PL/SQL cards that `has_answer: false` kept out of Study and left with a blank Answer tab. All 99
are answered now, by `openai/gpt-oss-20b` running in LM Studio, for **$0** and about **13 minutes**,
cached as Markdown and served by the API. PRs #81, #82.

---

### What was built

| Piece | What it is |
|---|---|
| `generate.local_only()` | Generation with **no billed path at all**. `generate()` falls back to Claude when LM Studio hiccups — right for one hover, wrong for a run of hundreds where one flaky moment starts spending money nobody decided to spend |
| `answer_missing.py` | The batch. Resumable by construction: answers cache under `<qid>__local.md`, the same Markdown the interactive lenses already write, and a question that has one is skipped |
| `eval_answers.py` | The gate. Deterministic checks plus an optional `--judge` pass |
| `_fill_missing_answers()` | The half that makes it visible: `GET /questions/{id}` serves a generated answer for a question that has none |
| `test_local_answers.py` | 13 tests over the parts that fail quietly |

### The numbers

| | |
|---|---|
| Attempted / written | 96 → 94, then 2 retried → **99 of 99** |
| Time · cost | ~13 min · **$0** |
| Deterministic eval | **99 answers, 0 failing** |
| Judge (`--judge`, 97 answers) | mean **4.80**, median **5.00**, min **4.00**, 1 unparsable |
| Backend suite | nine files, all pass |

The two that failed the first time returned an empty completion and succeeded on the retry, which is
what the resumable design is for: re-running cost 0.2 minutes and nothing else was touched.

### Three properties, each because the failure is silent

- **It cannot bill.** The fallback that is correct interactively is a liability in a loop.
- **It only ever fills a gap.** A question that has an answer keeps it, so unreviewed prose can never
  shadow something curated or ingested.
- **It says what it is.** Every generated answer ends with *"Written by … running locally.
  Machine-generated, not reviewed."* — in the body, not a schema field, so it survives the detail
  pane, a study card, an export and a grep.

### The evaluation caught one thing, and it was the evaluation

`restates_question` flagged *"Is Python case-sensitive?"*, whose answer was good: *"Yes — Python
identifiers are case-sensitive"*, then four sentences about `train_df` vs `Train_Df` breaking a
pipeline. The check read only the FIRST sentence, so it punished the exact shape the system prompt
asks for — *lead with the crisp answer, then the nuance*. It now requires that **every distinct
sentence** be a restatement. `--delete-failures` would have deleted that answer.

### The judge inflates, measurably

Over 97 of its own answers: **mean 4.80, median 5.00, nothing below 4.00** — including one it
described as *"does not directly address the unclear question"* and scored 4.0. The default floor was
3.0, which **would never have fired once**. A gate that cannot fire is a decoration that makes a run
look inspected; the floor is 4.5 now and the measurement is in the docstring and the README so the
number is not read as a grade.

What the judge *is* good for: the `why` line, and the ranking. Its four lowest are the four a human
would also pick out — three of which are barely questions.

### What this exposed, and did not fix

Some of these are not questions. *"2 Should you read this book?"* is a heading from a book blurb, and
the model answered it with a confident recommendation of *Accelerate* and an invented 2019 migration
story. *"will be created in all ?"* is half a sentence split across two cards. Several are
multiple-choice stubs whose choices did not survive ingest.

The pipeline answers all of them plausibly, and the judge scores those answers well, because it
grades the answer and not the question. `ingest._drop_repeated_bodies` filters junk *bodies* by
repetition; there is no equivalent for junk *questions* — **COD-132**.

### The cost this added, measured

The answers directory is now part of the bank's version stamp, because a file written there changes
what the API serves. Writing any answer therefore costs one **0.59s** re-assembly of 18,284 questions
on the next request, plus a client index revalidation. `_bank_stamp` says so, and says when a
narrower marker would be worth the extra mechanism.

---

## 2026-09-02 (later) — the stack landed, four features off the backlog, and a UI bug hunt

**Summary:** started with **eleven unmerged PRs** and a `main` carrying none of the perf work. Ended
with **twenty-seven commits on `main`**, zero open PRs, four features built from the backlog, seven
UI bugs found by driving the app, and a Markdown viewer that renders Markdown.

`59 files changed, 4,889 insertions, 736 deletions.` The frontend has tests now.

---

### 1. The stack, merged (PRs #52, #62, #54–#61, #51)

Ten stacked branches plus the ingest filter, squash-merged bottom to top. `git diff` between `main`
and the old stack tip `17a88fa` came back **empty** — the ten squashes reproduce that tip exactly.

**One casualty, and the lesson is the entry.** `gh pr merge --squash --delete-branch` **closes every
PR based on that branch**, and a closed PR whose base branch is gone **cannot be reopened** —
recreating the branch does not help. #53 died that way and continued as **#62**. Merging a stack:
retarget every child to `main` *first*, then merge bottom to top, rebasing each branch with
`git rebase --onto origin/main <old-parent-tip>`. GitHub also reports `mergeable: UNKNOWN` for a few
seconds after a force-push — poll it, do not read it as a conflict.

### 2. Four features, built by asking what a daily user loses (COD-112 to COD-115)

| PR | Feature | The problem it answers |
|---|---|---|
| #64 | **Backup / restore** — Settings → Your data | Every card, note, setting and voice clip lived in one browser with no exit. Clearing site data took months of due dates, and the app could not tell it had happened |
| #65 | **Leeches** — "Keeps slipping", `?pool=leeches` | `lapses` had been counted since the scheduler was written and no screen read it |
| #66 | **Due forecast** — Today, "Coming up" | SM-2 builds a load one rating at a time; forty cards landing on one day was invisible until that morning |
| #67 | **Highlight → card** | Reading and recalling were separate acts: a passage worth remembering could only be bookmarked |

Then the gaps those four left (COD-117): `c` makes a card without a mouse, and **Undo** restores a
deleted card *or* note — audio included, because the clip is read out of IndexedDB *before* the
delete (#69). The leech list expands instead of dead-ending at "and 14 more", and the cards you wrote
surface on Today and in Ctrl+K (#70).

**Decisions worth keeping:**

- **`u-` prefixed ids.** `progress.srs` is keyed by question id alone, so a collision between a card
  you wrote and one in the bank would not be a duplicate card — it would be your schedule for one
  question silently attached to another.
- **The backup version moves when a store is added**, even additively. A build that did not know
  about `cards` would restore a file, report success, and drop every card you wrote — the exact
  silent loss the feature exists to prevent. It is at **2**.
- **Merge keeps the local copy on every collision.** Nothing in an SM-2 card records when it was last
  reviewed, so "the newer copy" cannot be computed, only invented.
- **Overdue lands in the forecast's first bar**, with today. It is work waiting now, not work that
  happened on some past day, and a bar backwards in time would say the opposite.
- **A card is not restored without both a question and an answer.** It would sit in the deck as a
  blank you cannot rate, and nothing else would complain.

### 3. `npm test` exists now — 28 cases, no framework

Three plain-Node scripts and zero new dependencies: `test-backup.mjs` (12), `test-srs.mjs` (8),
`test-usercards.mjs` (8).

**The rule that makes them possible:** Node 24 strips TypeScript types on import, so a `.mjs` check
can import a `.ts` module — *as long as every import in that module is `import type`*. Vite resolves
extensionless specifiers and Node does not, so one value import makes the module unloadable and the
check has to be deleted to keep the module. `lib/backup.ts`, `lib/srs.ts` and `lib/userCards.ts` are
pure for that reason. On Windows the dynamic import needs `pathToFileURL()` — a bare `C:\…` path is
read as a URL scheme.

### 4. Seven UI bugs, all found by driving the app (#71, #73, #76, #77, #78)

**The URL said one thing, the screen showed another (#71).** Three instances of
`useState(params.get("x"))` — the URL read *once*, at mount. Picking a question in Ctrl+K while
already in Library left the previous answer on screen; a `?id=` link on a phone showed the list of
18,284 and never the answer; `?scope=mine` ignored the chip it named. **Why it survived:** every test
run while building a feature arrives from another route, which remounts the component and re-runs the
initialiser. The one path that does *not* remount is a same-route navigation — the path nobody clicks
while building the thing. `?q=` got its sync effect in #46 and was the only one of the four that
worked.

**The answer scrolled through the chrome (#73).** The app bar slides away on a downward scroll while
`--app-bar-h` kept publishing **61px**, so the question header parked against a bar that was not
there and the top 69px of the viewport had nothing painted in it — the answer scrolled through in
full view and was cut in half at the header's edge. Fixed at the source: the variable publishes the
bar's *effective* height (0 while hidden). The app bar and the filter row were also `bg-base/95` with
a blur, so text ghosted through them — the same defect #47 fixed on the question header and left one
element above it. **A blur does not fix ghosting, it softens it.**

**The answer in a 330px strip (#76).** A regression from reading mode: the grid's column template
keyed on `listHidden` (the stored preference) while the list was put away by `listAway` (the derived
value), so the grid still declared two tracks — and CSS Grid puts a lone child in the **first** one.
**When a derived value replaces a stored one, every reader of the stored value is a call site.** The
layout branch, the button label, `aria-pressed` and the grid template were four readers; three were
updated, and the fourth decided the width of the page.

**Then the opposite problem (#77).** Uncapped, a 1,438px answer runs about 180 characters a line and
the eye loses the start of the next one on every return sweep. The prose caps at **100ch** (measured:
100 characters = 999px) while the page stays full width, left-aligned so it shares its left edge with
the question above it.

**A sweep for more of the same (#78).** Every route at 1536px and 520px, measured rather than read.
Found: explanatory copy has no measure anywhere — Progress's empty state at 1,304px, the Reader's at
1,269px, and `EmptyFrame`'s label, the component behind *every* empty state in the app. Clean: no
horizontal overflow, no grid with an empty track, no translucent chrome left, focus mode sane on four
pages, **no console errors**, and with `fetch` stubbed to reject the app still renders Today, Study
and Progress from the cached index while Library says so in words.

### 5. Reading mode, and the list that would not move (#75)

The question list is *setup*: it answers "what should I read", and once that is decided it is sixty
titles competing with the one answer you chose. It now hides while you read — only with a question
open, and only scrolling down, which on a wide screen means the answer is moving because the list
scrolls inside itself. **"Keep open" pins it**, and arriving *at* a question (link, Ctrl+K, back
button) opens with it away; clicking a row does not, because `select()` sets the id before the URL.

Rows are titles now: the difficulty letter went because difficulty is a **filter** with its own chips
above the list, and the origin glyph went because the detail header prints provenance in words.

### 6. A Markdown viewer that renders Markdown (#74)

The Reader had always accepted `.md`, and `react-markdown` ran with **no remark plugins at all** —
measured on a test file: 0 tables, 0 checkboxes, 0 footnotes, pipe rows rendered as literal text.

**remark-gfm**, the canonical plugin from the same unified/remark project react-markdown belongs to.
Nothing reimplemented. Loaded lazily like the highlighter: the Markdown chunk stayed at 129 kB and
remark-gfm is its own **39.27 kB (11.87 kB gzipped)** chunk that arrives only when the text contains
a table, a task list, a `~~strike~~`, a footnote or a bare URL.

Tables scroll inside their own box — a table that widens the *page* makes every column on screen
unreadable at once. Column alignment is matched on the inline `style` remark-gfm emits;
`td[align="right"]` is the HTML4 attribute and matches nothing.

### 7. Verified what had been unverified for four sessions (#72)

- **Timed quiz through a real 30s expiry:** the countdown ran 29→0 on its own clock, the card read
  "Time ran out — counted as a miss", and the next question opened with the spine at "0 recalled,
  1 missed" and a fresh 30s.
- **Reader:** a Wikipedia URL fetched, stripped and rendered with its own contents list (20,375
  characters); a generated PDF opened in the browser's viewer from a `blob:` URL.
- **Drill mode:** a leech-filtered session fetched its cards through `/questions/batch` and ran.

Verifying the PDF caught a README line written the day before: highlight-to-card **cannot** reach a
PDF, because the file goes to the browser's own viewer in an iframe — a plugin document, not markup
this app rendered. The README states the limitation now (COD-121).

### The board

**COD-112 → COD-128 filed and closed this session**, except COD-117 (one gap left: the restore panel
names counts without showing a card from the file) and COD-121 (the PDF limitation). **62 Done, 5
Backlog, no open PRs.**

---

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
