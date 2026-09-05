---
qid: ing_eac48d9f52__eli5__local
question: 'Explain: You''re receiving an unbounded stream of event IDs. Return the
  k most frequent IDs seen so far, at any point, with bounded memory.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 209
total_tokens: 386
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:46:53-05:00'
sources: []
---

Think of a busy library where books (event IDs) are checked out all the time, but you can only keep a few shelves in your tiny office. You want to know which books are most popular at any moment, yet you never have enough space to list every single title.

Use a “hot‑spot” shelf that holds **k+1** books. Each time a book is checked out:

* If it’s already on the shelf, bump its counter up.
* If it isn’t and there’s room, add it with a counter of 1.
* If the shelf is full, drop the least‑countered book and replace it with the new one starting at 1.

Because you only keep the most active books, the top *k* on the shelf are always your best guess for the overall favorites. This trick guarantees you never exceed a fixed memory size while staying close to the true top *k* IDs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
