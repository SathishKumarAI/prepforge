---
qid: ing_996c2ed8d8__star__local
question: 'Explain: LFU (Least Frequently Used) — Top 8 Cache Eviction Strategies'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 327
total_tokens: 570
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:39:20-05:00'
sources: []
---

**Situation:** In my last role as a backend engineer for a streaming service, our CDN hit‑rate was dropping from 92% to 78% after we added new recommendation features. The analytics team suspected cache thrashing due to the old LRU strategy.

**Task:** I had to audit the eviction policy and propose an alternative that would keep frequently accessed recommendation models in memory while still respecting memory limits, all within a two‑week sprint.

**Action:** I started by implementing LFU (Least Frequently Used) as a baseline. We wrapped each cache entry with a counter updated on every read, then used a min‑heap to evict the lowest‑count items when space ran out. To avoid “stale” hotness, we added a decay factor that periodically reduced counts. I compared this against seven other strategies—LRU, ARC, Clock, Random, FIFO, LFU with aging, and Hybrid (combining LRU+LFU). Using a synthetic workload of 1M requests over a week, I measured hit‑rate, latency, and eviction overhead.

**Result:** Switching to the LFU-with-aging strategy raised our cache hit‑rate from 78% to 94%, reduced average latency by 18%, and cut memory churn by 30%. The exercise taught me how to balance theoretical policies with real‑world decay dynamics and the importance of empirical benchmarking before deployment.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
