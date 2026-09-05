---
qid: ing_a35916b279__star__local
question: 'Explain: MRU (Most Recently Used) — Top 8 Cache Eviction Strategies'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 330
total_tokens: 573
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:59:44-05:00'
sources: []
---

**Situation** – While building a real‑time recommendation engine for an e‑commerce platform, our feature extraction stage was bottlenecked by repeatedly reloading the same user embedding vectors from disk. The cache hit ratio dropped below 60 % during peak traffic.

**Task** – I had to redesign the in‑memory cache to keep the most valuable embeddings and reduce latency, choosing an appropriate eviction policy that matched our access patterns.

**Action** – I implemented a *Most Recently Used (MRU)* strategy: every time a vector was accessed it was moved to the front of a doubly linked list; when the cache exceeded its 512 MB limit, we evicted from the back. This worked because embeddings for trending products were queried most often right after a user’s first interaction, so keeping recently used items made sense. I benchmarked MRU against LRU and LFU using synthetic workloads that mimicked our click‑stream distribution, measuring hit ratios and average latency.

**Result** – The MRU cache raised the hit ratio from 60 % to 85 %, cutting feature load times by 35 %. We also reduced CPU usage on the caching node by 12 %. I learned that eviction policies must be tuned to actual access patterns; in our case, recency outperformed frequency because user sessions were short and highly dynamic.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
