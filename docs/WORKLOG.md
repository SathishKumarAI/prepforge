# Worklog

## 2026-09-04 (last) — every generated answer is kept: versions, provenance, a regenerate row

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
