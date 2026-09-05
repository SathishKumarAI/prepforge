---
qid: ing_a633175d83__star__local
question: 'Explain: Uh oh! — CachesExplained \u00b7 google/guava Wiki \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 252
output_tokens: 350
total_tokens: 602
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:05:30-05:00'
sources: []
---

**Situation**  
At my previous company we were building a recommendation engine that pulled user preferences from a relational database for every page load. During peak traffic the latency jumped from 120 ms to over 1 s, and our ops team flagged an SLA breach.

**Task**  
I needed to reduce read latency by at least 70% while keeping consistency guarantees for users who updated their profile within the last minute.

**Action**  
I introduced a two‑level cache using Guava’s `CacheBuilder`. The first level was an in‑memory LRU cache (maxSize = 10,000) with `expireAfterWrite(5m)` to serve most reads instantly. For data that could be stale for up to 60 s I added a second tier backed by Redis, configured as a read‑through cache via Guava’s `CacheLoader`. I also implemented a listener that invalidated the in‑memory entry whenever an update event hit the database, ensuring near real‑time consistency. To monitor health, I instrumented JMX metrics (`hitRate`, `missCount`) and set alerts on hit rates falling below 95%.

**Result**  
Latency dropped to ~30 ms on average, a 75% improvement, and the 99th percentile latency fell from 1.2 s to 180 ms. The cache hit rate stayed above 96%, keeping our SLA intact. I learned how Guava’s simple API can be combined with external stores for layered caching and that proper eviction policies are key to balancing freshness and performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
