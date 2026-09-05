---
qid: ing_a35916b279__eli5__local
question: 'Explain: MRU (Most Recently Used) — Top 8 Cache Eviction Strategies'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 165
output_tokens: 218
total_tokens: 383
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:56:52-05:00'
sources: []
---

Imagine a librarian who keeps only the most recent books on a small shelf. When a new book arrives, she puts it in front and pushes the one that was borrowed just before her out of the shelf. This is **Most Recently Used (MRU)** eviction: the item accessed *last* is the first to leave when space is needed.

In computing, a cache stores frequently used data to speed things up. When the cache fills up, it must decide which entry to discard. MRU does that by tossing out the entry that was just read or written—just like our librarian. It works well when recent items are unlikely to be reused immediately (e.g., in some streaming scenarios). Other common strategies include Least Recently Used (LRU), Least Frequently Used (LFU), and First‑In, First‑Out (FIFO); MRU is simply the opposite of LRU, focusing on the newest access.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
