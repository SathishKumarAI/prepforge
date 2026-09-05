---
qid: ing_996c2ed8d8__eli5__local
question: 'Explain: LFU (Least Frequently Used) — Top 8 Cache Eviction Strategies'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 165
output_tokens: 227
total_tokens: 392
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:40:54-05:00'
sources: []
---

Imagine a tiny library that can hold only eight books at a time. Every time someone borrows a book, the librarian writes its name on a sticky note and puts a second note next to it each time it’s borrowed again. When space runs out, the librarian looks at all the sticky notes and sends home the book with the fewest notes – the one that has been read least often.

That “fewest notes” rule is LFU (Least Frequently Used). It keeps track of how many times each item in a cache has been requested. Whenever new data must be stored, LFU discards the item whose request count is lowest, hoping it won’t be needed soon. Other top cache eviction methods include LRU (least recently used), FIFO (first‑in first‑out), ARC, and others that focus on recency or a mix of frequency and recency. LFU is simple yet powerful for workloads where some items are consistently popular.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
