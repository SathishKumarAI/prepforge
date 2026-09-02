# PrepForge Docs

Start here, then read `../STATUS.md` — that is where you stopped, what to do next, and the traps.

| Doc | What's inside |
|---|---|
| [ARCHITECTURE.md](./ARCHITECTURE.md) | The pieces, **the five shapes the bank is fetched in**, request flow, what loads when, directory map, design decisions |
| [PIPELINE.md](./PIPELINE.md) | The learning pipeline — the science, the four stages, the SM-2 scheduler |
| [CONTENT-PIPELINE.md](./CONTENT-PIPELINE.md) | How outside material becomes cards: ingest, dedupe, MCQ synthesis, deep links |
| [PROMPTS.md](./PROMPTS.md) | Every LLM prompt the app/build uses, why it exists, what it outputs |
| [DESIGN-THEMES.md](./DESIGN-THEMES.md) | The two themes and how their contrast is measured (`npm run contrast`) |
| [SCALING.md](./SCALING.md) | Where this design breaks and what replaces it at 100M questions. Forward-looking; not what is built |
| [BACKLOG.md](./BACKLOG.md) | Feature backlog — shipped, next up, ideas. **We work from here.** |
| [WORKLOG.md](./WORKLOG.md) | Dated session entries: what shipped, what it measured, what was found on the way |
| [UIUX-BACKLOG.md](./UIUX-BACKLOG.md) | **Live.** UI craft queue, plus every UI bug fixed on 2026-09-02 with the reason it survived — and what a sweep already checked, so the next one can skip it |

`AUDIT-BACKLOG.md`, `QUIZ-BACKLOG.md`, `UI-REDESIGN-BACKLOG.md`, `UI-BUTTONS.md`,
`RESEARCH-obsidian-notes.md` and `SESSION-LOG.md` are historical — read them for reasoning, not for
what is true today.

## The one thing to know before adding a screen

**`GET /questions` is 38.6 MB and no page in the app requests it.** Reaching for it from a component
is almost always the wrong shape; there are four narrower ones. See
[ARCHITECTURE.md](./ARCHITECTURE.md#the-bank-is-fetched-in-five-shapes-and-they-are-not-interchangeable).

## The 30-second version

PrepForge helps you prep for **AI / ML / Data Science / Analytics** interviews. You *read* a
concept, *recall* it from memory, and a spaced-repetition scheduler decides when you see it again —
the study loop that memory research says actually works. You can also drop in your own book/notes
and the same pipeline builds itself on top of them.

Everything runs locally. Your progress lives in the browser; your private notes never leave your
machine. See the root [README](../README.md) to run it.
