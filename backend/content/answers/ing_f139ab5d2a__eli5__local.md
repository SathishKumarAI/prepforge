---
qid: ing_f139ab5d2a__eli5__local
question: 'Explain: High-Level Architecture — How Uber Serves Over 40 Million Reads
  Per Second from Online Storage Using an Integrated Cache'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 250
total_tokens: 422
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:56:39-05:00'
sources: []
---

Imagine a huge library (Uber’s data) that has millions of books (rows of user and ride information). Readers (drivers, riders, apps) come in all the time, looking for specific pages. If every reader had to walk to the back‑office catalog (the slow online storage), it would take forever.

Instead, Uber keeps a smart “reading desk” near the entrance—an integrated cache that remembers the most requested books. When a reader asks for a page, the desk first checks its own shelves; if the book is there, it hands it out instantly. Only when the desk doesn’t have it does it fetch from the back‑office catalog and then store a copy on its shelf for future visits.

The architecture uses multiple layers of this desk: tiny, fast caches close to each reader (in the app), medium caches in regional data centers, and a large shared cache that sits between the apps and the massive storage database. By keeping the most popular data right where it’s needed, Uber can answer over 40 million read requests every second without waiting for the distant catalog.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
