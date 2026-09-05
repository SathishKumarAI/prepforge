---
qid: ing_afaa621279__eli5__local
question: 'Explain: Consistency — Acid Transactions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 155
output_tokens: 216
total_tokens: 371
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:15:45-05:00'
sources: []
---

Imagine you’re playing a board game where every move must keep the board in a legal state—no pieces can end up outside their squares, and no two pieces can occupy the same spot at once. In database terms, that rule is **consistency**: after any transaction (a set of changes) finishes, all data still satisfies all defined rules.

Think of an “acid” transaction as a single move in the game: you pick up a piece, move it to a new square, and place it down—all in one smooth action. If you pause midway—say, halfway through moving—you might leave a piece floating in mid‑air or two pieces on the same spot, breaking the rules. Consistency guarantees that either the whole move happens at once or not at all, so the board (the database) is always in a valid, predictable state.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
