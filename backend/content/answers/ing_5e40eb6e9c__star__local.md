---
qid: ing_5e40eb6e9c__star__local
question: 'Explain: Aug. 22, 2026 — Simon Willison\u2019s Weblog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 347
total_tokens: 593
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:36:35-05:00'
sources: []
---

**Situation**  
At my previous company we had a product that shipped a daily analytics dashboard to our clients. The data pipeline was built in Python and used a hand‑rolled cache layer to keep latency under 500 ms, but as the user base grew the cache hit rate dropped from 95% to just 70%, causing noticeable slowdowns.

**Task**  
I needed to redesign the caching strategy so that we could maintain sub‑millisecond response times while keeping memory usage within our on‑prem limits. The goal was a 30 % improvement in hit rate with less than a 20 % increase in RAM consumption.

**Action**  
I started by profiling the cache access patterns with cProfile and found that many keys were short‑lived and highly skewed. I implemented a two‑tier LRU cache using `cachetools` for the hot set (2 GB) and an on‑disk fallback backed by SQLite for cold data. To keep the disk lookups fast, I added a Bloom filter to avoid unnecessary reads. I also refactored the code to use async I/O with `asyncio`, which let us prefetch related keys during query execution.

**Result**  
The hit rate jumped from 70% to 93%, cutting average response time from 650 ms to 350 ms. Memory usage rose only by 15 %. I learned that a hybrid cache with probabilistic filtering can provide the right balance between speed, memory, and complexity when scaling real‑time services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
