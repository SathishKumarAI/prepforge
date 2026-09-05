---
qid: ing_d348fa7a68__star__local
question: 'Explain: Write-Back (Write-Behind) — Caching Strategies Summary | System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 337
total_tokens: 581
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:32:03-05:00'
sources: []
---

**Situation:**  
At my previous company we were launching a real‑time analytics platform for IoT sensors. The data ingestion rate hit 20 k events per second, and our existing read‑through cache was causing latency spikes because every write forced an immediate flush to the NoSQL store.

**Task:**  
I needed to redesign the caching layer so that write traffic wouldn’t bottleneck reads, while still ensuring eventual consistency within a strict 2‑second window for downstream dashboards.

**Action:**  
I implemented a *write‑back* strategy using Redis Streams. Each write was first stored in an in‑memory LRU cache; the key/value pair was appended to a stream with a TTL of 5 seconds. A background worker batched stream entries every 500 ms, wrote them atomically to Cassandra, and then evicted the keys from Redis. I added a lightweight version counter to detect stale writes and used optimistic locking on Cassandra to avoid race conditions. To monitor consistency, I instrumented Prometheus metrics that reported average write lag and cache hit ratios.

**Result:**  
Read latency dropped from 120 ms to under 20 ms during peak periods, and the system sustained 30 k events per second without queue buildup. Cache hit ratio climbed to 92%, and the average consistency delay stayed below 1.8 seconds. I learned that careful batching with stream semantics can turn a write‑heavy workload into a low‑latency read service while keeping data fresh.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
