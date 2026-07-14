# PrepForge — Quiz Backlog

Goal: quizzes the user can **shape** (how many, which topics/tags, how hard) and take on
**their own content** — including a single YouTube video or article. Zero-token where possible.

## Done
- [x] Quiz setup: choose question **count** (5/10/15/20).
- [x] Filter by **topic**, **difficulty** (multi), and **tags** (multi, any-match).
- [x] **Source-scoped quiz** — pick a specific ingested doc/video that has quiz-ready questions.
- [x] Per-session rotation seed so Retry draws a different slice (no more identical 10).
- [x] Only quiz-ready questions are drawn; clear "N match · drawing K" + empty-filter hint.
- [x] **Deterministic MCQ synthesis** in ingest — every ingested card (incl. notes from a video)
      gets a zero-token "which description matches X?" quiz. `_synthesize_quiz` in `backend/ingest.py`.
- [x] **Session controls**: Exit mid-run (back to setup) + **Resume** — an in-progress quiz is
      persisted to localStorage (`pf-quiz-run`), so leaving the page shows a Resume banner that
      picks up at the same question; completing or discarding clears it.

## Next (roadmap)
- [x] **Quiz from a YouTube video, end-to-end**: `transcript.py` pulls captions via
      `youtube-transcript-api` → chunks into `##` sections → `capture.read` saves as library
      markdown → `POST /quiz/from_video` ingests (zero-token MCQ synthesis) + builds the related
      index → returns `source_path`. Quiz setup has a "Quiz from a YouTube video" input that
      reloads questions and scopes the quiz to that video. No API key.
- [x] `source_file` (library/generated cards) now appears in the Quiz **source picker** — ingest
      attaches `sources:[{title,path,kind:"library"}]` (frontmatter title); the card source chip
      opens it via `POST /library/read` (SourceDoc routes vault vs library by `kind`).
- [x] **Generate MCQs on demand** — every resource card has a "＋ quiz" button →
      `POST /quiz/from_resource` (article or video) → ingest → opens the quiz scoped to it.
      Deterministic tier only; Ollama/Claude tiers optional (kept zero-token by default).
- [x] Better distractors: ingest now builds a local TF-IDF index over the card set and picks the
      *most similar* other cards as distractors (near-miss, not random). `_build_vectors`/`_similarity`.
- [x] Question kinds — **four**, all zero-token & correctly labelled *by construction* (no model):
      **definition-match**, **cloze/fill-blank**, **true/false** (subject paired with its own gloss =
      true, or a least-similar card's gloss = reliably false), and **spot-the-wrong-statement** (four
      `subject: gloss` lines, one deliberately mismatched). `quiz.kind` + `quiz.prompt` drive rendering.
- [x] Weakness-aware quizzes: "Focus weak spots" toggle floats not-yet-mastered / unseen cards first.
- [x] Timed mode + per-question explanations on the results screen (gloss from the source answer).
- [x] Persist quiz config so it's remembered between sessions (`pf-quiz-config` in localStorage).
