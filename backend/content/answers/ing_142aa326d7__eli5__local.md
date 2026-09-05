---
qid: ing_142aa326d7__eli5__local
question: 'Explain: Implement "top-k most frequent search queries" over a large query
  log, then tell me what breaks when the log becomes an unbounded stream across many
  machines.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 181
output_tokens: 222
total_tokens: 403
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:07:17-05:00'
sources: []
---

Imagine a giant library where every time someone asks a question, a sticky note is placed on the shelf with that question written on it. “Top‑k most frequent search queries” means you’re looking for the k questions that have the most sticky notes—like finding the most popular books in the library.

In a single computer, you can count all the sticky notes at once: read every page of the log, tally each query, then pick the top k. But when the library turns into an unbounded stream across many buildings (machines), two things break:

1. **Counting becomes impossible** – each building sees only part of the stream, so no one has a complete list of counts.
2. **Memory blows up** – as new queries keep arriving forever, you’d need infinite storage to keep every note.

Thus, without extra tricks (like sketching or distributed counters), you can’t reliably know the true top k in an endless, multi‑machine stream.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
