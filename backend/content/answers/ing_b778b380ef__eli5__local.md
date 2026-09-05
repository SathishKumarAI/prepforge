---
qid: ing_b778b380ef__eli5__local
question: 'Explain: Cache Invalidation — How Uber Serves Over 40 Million Reads Per
  Second from Online Storage Using an Integrated Cache'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 254
total_tokens: 426
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:27:14-05:00'
sources: []
---

Imagine a gigantic library that holds every book you could ever want (that’s the **online storage**). But if every reader had to walk into this library and pull out their book each time, it would take forever—especially when millions of people ask for the same titles at once.  
Uber solves this by creating a *temporary* “reading room” right next to the library. This room is the **cache**: a fast, small‑size space where copies of popular books are kept. When someone asks for a book, the system first checks the reading room; if it’s there (a *hit*), they get it instantly. If not (a *miss*), the book is fetched from the library and then copied into the reading room for future requests.

Because the reading room can be refreshed quickly, Uber **invalidates** old copies whenever a book changes—like updating a new edition—so readers never get stale information. By constantly moving the most‑requested books into this cache and discarding outdated ones, Uber serves over 40 million read requests per second without overwhelming its main library.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
