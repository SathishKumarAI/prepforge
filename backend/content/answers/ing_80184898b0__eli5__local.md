---
qid: ing_80184898b0__eli5__local
question: 'Explain: Option 3: Bloom Filter — How to Avoid Crawling Duplicate URLs
  at Google Scale?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 233
total_tokens: 401
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:59:56-05:00'
sources: []
---

Imagine you’re a librarian who has to decide whether a book is already in the library before adding it. Checking every shelf would be slow, so instead she keeps a tiny “quick‑look” card: each book’s title is hashed into one of many spots on the card, and that spot is marked ‘yes’. When a new book arrives, she looks at its spot; if it’s already marked, she assumes the book exists (maybe right, maybe not). If the spot is empty, she knows the book is definitely new and puts it in.  

A Bloom filter works exactly like that card for URLs. It uses several hash functions to set bits in a large array. When crawling, Google checks the array: if all corresponding bits are already set, the URL is probably a duplicate and can be skipped; if any bit is clear, the URL is new and must be fetched. The trade‑off is that rare “false positives” (thinking a new URL is old) are acceptable because they save huge amounts of crawling time at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
