---
qid: ing_9c1182874f__fp__local
question: 'Explain: Cache Invalidation — Change Data Capture (CDC) | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 326
total_tokens: 501
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:37:05-05:00'
sources: []
---

**Cache invalidation through Change‑Data‑Capture (CDC)**  
In a distributed system we often keep hot data in an in‑memory cache to reduce read latency. The cache must stay *consistent* with the source of truth; otherwise stale reads violate correctness.  

The fundamental problem is that writes happen asynchronously on a database, while the cache is updated synchronously by application code. If a write occurs outside the cache’s control (e.g., via another service or a background job), the cache will silently drift. To guarantee *strong consistency* we need an observable stream of every change in the primary store—this is what CDC provides.

CDC captures mutations at the storage engine level (log replay, binlog, change‑feed) and emits them as events. The cache subscribes to this feed and invalidates or updates entries on receipt. By deriving cache state from a *causal chain* of writes rather than ad‑hoc checks, we satisfy the **CAP theorem’s consistency side** without sacrificing availability: reads continue to hit the cache while updates are propagated in real time.

A non‑obvious insight: CDC can be used not only for invalidation but also for *eventual recomputation* of derived aggregates. If a cached summary depends on many rows, listening to CDC lets you incrementally adjust it instead of recomputing from scratch, dramatically reducing latency and compute costs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
