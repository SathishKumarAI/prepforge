---
qid: ing_3ce0f3ac3d__eli5__local
question: 'Explain: LRU (Least Recently Used) — Top 8 Cache Eviction Strategies'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 165
output_tokens: 216
total_tokens: 381
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:12:15-05:00'
sources: []
---

Imagine you’re a librarian with only a few shelves for the most popular books. Every time someone checks out or returns a book, you note it. When a shelf spot frees up, you take the book that hasn’t been touched in the longest time—this is **Least Recently Used (LRU)**.

In machine learning, especially when training large models, we often keep only a handful of data pieces or model weights in fast memory (“cache”). LRU says: *evict the item that has gone untouched for the longest time* so that newer, more relevant information stays ready. It’s one of the eight most common “eviction strategies” (the others include FIFO, LFU, Random, etc.). LRU is simple, fast, and usually works well when recent data is a good predictor of near‑future needs—just like your library keeps the books people are currently reading on hand.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
