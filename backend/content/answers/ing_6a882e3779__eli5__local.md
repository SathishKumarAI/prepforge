---
qid: ing_6a882e3779__eli5__local
question: 'Explain: Docstore Architecture — How Uber Serves Over 40 Million Reads
  Per Second from Online Storage Using an Integrated Cache'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 233
total_tokens: 405
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:24:53-05:00'
sources: []
---

Imagine a gigantic library that never closes, where every book is a tiny data file called a “document.” When a reader (a user or app) asks for a book, the library first checks its front‑door shelves—an *integrated cache*—which holds copies of the most popular books right next to the door. If the requested book is there, it’s handed out instantly; if not, the librarian goes to the massive underground storage (the “online storage”) where all 40 million books live.

Uber’s system works just like that: every request first hits a fast in‑memory cache that mirrors the hottest data. When a hit occurs, the read is served in microseconds—over 40 million reads per second are possible because most queries find their answer at the door. If the book isn’t cached, the system fetches it from disk, updates the cache for future requests, and then returns it. This two‑tier design keeps the library open and responsive even under massive traffic.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
