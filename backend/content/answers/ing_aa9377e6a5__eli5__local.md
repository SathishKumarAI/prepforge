---
qid: ing_aa9377e6a5__eli5__local
question: 'Explain: Back-of-the-Envelope Estimation — Design URL Shortener | System
  Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 267
total_tokens: 437
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:08:18-05:00'
sources: []
---

Think of building a tiny library that turns long book titles into one‑letter codes so people can find the books quickly. In a **back‑of‑the‑envelope estimate** you sketch out how big this library will be and how fast it must serve patrons, just by rough math.

1. **Traffic (requests per second)** – Imagine 1000 visitors each day want to borrow a book; that’s our “calls/sec” rate.
2. **Storage** – Each long title plus its short code takes about 200 bytes. Multiply by the number of books you expect (say 10 million) and you get roughly 2 GB of data.
3. **Speed** – If we need to fetch a book within 50 ms, we must keep the index in memory or use a fast cache.

So you start with simple numbers: visitors → database size → memory budget → response time. It’s like sizing a library: how many shelves, how many bookshelves fit, and how long it takes a librarian to hand out a book. This quick math tells you whether your design can handle the load before diving into details.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
