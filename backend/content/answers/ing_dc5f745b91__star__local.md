---
qid: ing_dc5f745b91__star__local
question: 'Explain: SLRU (Segmented LRU) — Top 8 Cache Eviction Strategies'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 364
total_tokens: 609
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:48:43-05:00'
sources: []
---

**Situation** – While leading the backend team for our real‑time analytics platform, we noticed that the in‑memory cache was thrashing under peak traffic. The hit ratio dropped from 92 % to 70 %, causing latency spikes during flash sales.

**Task** – I had to redesign the eviction policy so the cache could keep frequently accessed “hot” data while still efficiently purging stale items, without adding significant overhead or memory fragmentation.

**Action** – I introduced a **Segmented LRU (SLRU)** strategy, one of the top eight cache evictions used in high‑throughput systems. The cache was split into two segments: a *protected* segment for recently accessed items and an *probationary* segment for new entries. On each hit, an item is promoted to protected; on eviction from protected, it moves to probationary. When the probationary segment fills, its least‑recently used entry is evicted entirely. I implemented this in Go using a combination of `container/list` and a map for O(1) lookups, tuned the segment sizes via A/B testing, and added instrumentation to monitor hit ratios per segment.

**Result** – The new SLRU policy raised cache hit ratio to 94 % under load, reduced average latency by 35 ms during peak periods, and cut server CPU usage by ~12 %. I learned that a carefully balanced segmented approach can outperform simple LRU in bursty traffic environments, and that measurable telemetry is key to fine‑tuning such policies.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
