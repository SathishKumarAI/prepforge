---
qid: ing_99048515c3__eli5__local
question: 'Explain: Least-Recently Used (LRU) — Cache Eviction Policies'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 163
output_tokens: 197
total_tokens: 360
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:40:18-05:00'
sources: []
---

Imagine you’re in a tiny kitchen with only one counter that can hold a handful of recipes. Every time you cook, you write the recipe on a sticky note and place it on the counter. When the counter is full and you need room for a new recipe, you look at which sticky note has been on the counter the longest without being used again— that’s the *least‑recently used* (LRU) one—and you remove it to make space.

In computing, a cache is like that counter: it stores recent data so future requests can be answered quickly. LRU eviction policy keeps track of how recently each cached item was accessed; when new data must enter and the cache is full, it discards the item that hasn’t been used for the longest time. This simple rule mimics human memory: we keep what we’ve used lately and toss what’s forgotten.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
