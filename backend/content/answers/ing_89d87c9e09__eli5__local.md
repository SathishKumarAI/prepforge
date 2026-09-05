---
qid: ing_89d87c9e09__eli5__local
question: 'Explain: Docstore Query Patterns — How Uber Serves Over 40 Million Reads
  Per Second from Online Storage Using an Integrated Cache'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 243
total_tokens: 416
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:15:07-05:00'
sources: []
---

Imagine a giant library where every book is a piece of data that millions of people want to read at once. Uber’s “Docstore” is like that library, but instead of books on shelves, it stores documents (small data files) in an online storage system. When someone asks for a document—say the current price of a ride—the request first hits an **integrated cache**, which is a super‑fast memory shelf right next to the reader’s desk. If the requested document is already there, Uber can hand it out instantly, without going back to the slow, faraway storage shelves.

If the cache misses (the book isn’t on the quick shelf), the system pulls it from the main storage and puts a copy in the cache for future readers. This two‑step pattern—“look first in the fast cache, otherwise fetch from the slower store”—lets Uber handle over **40 million reads per second** with minimal delay, just like a bustling library that keeps popular books on a quick‑access table while still storing all titles safely in the backroom.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
