---
qid: ing_5e34369746__eli5__local
question: 'Explain: Cache as Primary Storage — What is Caching? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 163
output_tokens: 252
total_tokens: 415
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:05:39-05:00'
sources: []
---

**What is caching?**  
Think of a library that has two shelves: the *main shelf* (primary storage) holds every book ever written, but it takes a long time to fetch a title from there because the librarian must walk all the way to the back. A *quick‑access shelf* (the cache) sits right at the front desk and holds copies of the books people ask for most often. When someone wants a book, the librarian first looks on the quick‑access shelf; if it’s there, the book is handed out instantly. If not, the librarian goes to the main shelf, brings the book back, and also places a copy on the front shelf so future requests are faster.

In computer systems the *cache* works exactly like that quick‑access shelf: it stores recently used data in fast memory (like RAM or an SSD), letting the processor read it quickly instead of fetching from slower disk or network storage. The cache automatically decides which items stay and which are evicted, so the system feels responsive while still having a large “primary” store behind it.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
