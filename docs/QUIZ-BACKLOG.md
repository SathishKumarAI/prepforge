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
- [~] **Generate MCQs on demand** — done for videos via `/quiz/from_video`; a generic
      "generate for this resource" button in Resources + Ollama/Claude tiers still TODO.
- [ ] Better distractors: use the TF-IDF related index to pick *near-miss* concepts as wrong answers
      (harder, more educational than random same-topic glosses).
- [ ] Question kinds: definition-match (current), true/false, "spot the wrong statement", cloze/fill-blank.
- [ ] Weakness-aware quizzes: bias selection toward low-mastery topics + due SRS cards.
- [ ] Timed mode + per-question explanations on the results screen (link back to the full answer).
- [ ] Persist quiz config in Settings so it's remembered between sessions.
