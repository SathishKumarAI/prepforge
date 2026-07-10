# The Learning Pipeline

PrepForge is built around **how memory actually works**, not just a pile of flashcards. The `Learn`
page runs each card through a four-stage pipeline grounded in cognitive-science research.

## Why (the evidence)

| Principle | Finding | Where it shows up |
|---|---|---|
| **Forgetting curve** | ~50% of new info is lost in 24h, ~80% within a week without review | Cards resurface on a schedule before you'd forget them |
| **Active recall > rereading** | Testing yourself yields ~50% more retention than rereading (Roediger & Karpicke, 2006) | Recall stage hides the answer; you retrieve *before* revealing |
| **Spaced repetition** | Expanding review intervals beat massed cramming (spacing effect) | SM-2 schedules each card's next due date |
| **Interleaving** | Mixing topics improved transfer by 43% a week later (Rohrer & Taylor, 2010) | Sessions round-robin across the four topics |
| **Little and often** | 10–20 min daily beats multi-hour cramming | Session = due reviews + a small cap of new cards |

## The four stages

```
①  READ  (encode)      →  ②  RECALL (retrieve)  →  ③  SPACE (schedule)  →  ④  MASTER
   answer shown            answer hidden,             SM-2 sets next due       interval ≥ 21d
   "I've read it"          you attempt, then rate     date from your rating     = mastered
```

1. **Read / encode.** A brand-new card is shown answer-first so you can study it. You mark it read.
2. **Recall / retrieve.** The same card immediately flips to question-only. You answer from memory,
   then reveal and self-rate: **Again / Hard / Good / Easy**.
3. **Space / schedule.** Your rating feeds the SM-2 scheduler, which sets when the card is next due.
4. **Master.** Once the interval passes 21 days the card is tagged *mastered* and rarely resurfaces.

## The scheduler (SM-2)

Implemented in `frontend/src/lib/srs.ts`. Each card carries:

- `ef` — easiness factor (starts 2.5, floor 1.3). Higher = intervals grow faster.
- `interval` — days until the next review.
- `reps` — consecutive successful recalls.
- `due` — the next date the card appears.

Rating → quality mapping and interval rule:

| Button | Quality | Effect |
|---|---|---|
| Again | 2 | reset reps, interval → 1 day, record a lapse |
| Hard | 3 | grow, but ×0.7 |
| Good | 4 | standard SM-2 growth (`interval × ef`) |
| Easy | 5 | grow ×1.3 |

`ef` updates by the classic SM-2 formula: `ef += 0.1 − (5−q)·(0.08 + (5−q)·0.02)`, clamped to ≥ 1.3.
Each rating button shows a live preview of the resulting interval ("2d", "3mo", …).

## Session assembly

For a session the pipeline gathers:
1. **All due reviews** (cards seen before, `due <= today`), interleaved across topics — retrieval first.
2. **Up to 6 new cards** to encode — capped so you don't over-load a single sitting.

If nothing is due and there's no new material, the app tells you you're caught up rather than
manufacturing busywork.

## Bring your own book

The pipeline isn't limited to the curated bank. Drop Markdown into `backend/content/library/`, run
`/ingest`, and every heading section becomes a card that flows through the exact same four stages.
See [PROMPTS.md](./PROMPTS.md) for how ingestion optionally uses Claude to rewrite raw notes into
clean question/answer/quiz cards.
