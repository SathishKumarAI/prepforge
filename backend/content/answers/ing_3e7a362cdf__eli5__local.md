---
qid: ing_3e7a362cdf__eli5__local
question: 'Explain: Drawbacks — Vertical vs Horizontal Partitioning'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 158
output_tokens: 234
total_tokens: 392
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:15:01-05:00'
sources: []
---

Think of your data as a huge library that needs to be split up so computers can read it faster.  
**Vertical partitioning** is like dividing the books by *subject*—all math books go in one shelf, all history books in another. Each shelf contains every book’s title and author (the “key”), but only the content for its subject. This helps when you often need to look up a book’s details for many subjects at once, but it can be slow if you want a full view of a single book that sits on different shelves.

**Horizontal partitioning** is like dividing the library by *floor*. Every floor holds copies of all subjects, but only for the books assigned to that floor. It’s great when you need a whole book quickly (since everything about it lives on one floor), yet you waste space if many floors store mostly empty sections for rare subjects.

So: vertical = “split by columns” (subject), horizontal = “split by rows” (floor). Each works best depending on what kind of queries you run.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
