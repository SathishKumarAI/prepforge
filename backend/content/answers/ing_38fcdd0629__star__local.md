---
qid: ing_38fcdd0629__star__local
question: 'Explain: Functional Requirements — Distributed Counter System Design -
  System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 322
total_tokens: 560
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:22:44-05:00'
sources: []
---

**Situation:**  
In my last role I was tasked with redesigning our click‑tracking service for a global news app that had hit 10 M daily active users. The existing single‑node counter exploded under load and caused stale counts during peak traffic.

**Task:**  
I needed to build a horizontally scalable, eventually consistent distributed counter that could handle millions of increments per second while still delivering accurate totals in real time for the front‑end dashboards.

**Action:**  
I chose Redis Cluster with sharded counters plus an append‑only log written to Kafka. Each user action incremented a local shard counter; every 5 ms we flushed batches to the cluster via Lua scripts, ensuring atomicity. A background consumer aggregated shards into a global view stored in Cassandra for fault tolerance and long‑term analytics. I added a conflict‑resolution layer using vector clocks so that retries after transient network failures wouldn’t double count. We also introduced a rate limiter per IP to prevent abuse spikes.

**Result:**  
The new system handled 15 M increments/second with <30 ms latency for the counter API, and global counts stayed within ±2% of the ground truth measured against an in‑memory oracle. User engagement metrics rose by 12% after accurate real‑time feedback was available. I learned how to balance consistency, availability, and performance in a distributed counter while keeping operational complexity manageable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
