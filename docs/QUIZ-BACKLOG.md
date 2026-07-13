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
- [ ] **Quiz from a YouTube video, end-to-end**: capture transcript (yt-dlp/`youtube-transcript-api`)
      → save as library markdown → ingest → synthesized/LLM MCQs → source-scoped quiz on just that video.
- [ ] `source_file` (library/generated cards) should appear in the Quiz **source picker**, not only
      vault `sources[]`. Map `source_file` → a source entry in `_load_questions`.
- [ ] **Generate MCQs on demand** for a chosen resource (button in Resources): endpoint
      `POST /quiz/generate?resource_id=` using deterministic → Ollama → Claude tiers (reuse ingest modes).
- [ ] Better distractors: use the TF-IDF related index to pick *near-miss* concepts as wrong answers
      (harder, more educational than random same-topic glosses).
- [ ] Question kinds: definition-match (current), true/false, "spot the wrong statement", cloze/fill-blank.
- [ ] Weakness-aware quizzes: bias selection toward low-mastery topics + due SRS cards.
- [ ] Timed mode + per-question explanations on the results screen (link back to the full answer).
- [ ] Persist quiz config in Settings so it's remembered between sessions.
