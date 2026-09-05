---
qid: ing_2944a50f70__star__local
question: 'Explain: Joins and Transactions Across Shards — Sharding | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 382
total_tokens: 623
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:50:59-05:00'
sources: []
---

**Situation:**  
In my last role at a fintech startup, we migrated our monolithic user‑account service to a horizontally sharded architecture to support 10× the traffic. The “Accounts” table was split by country code, but customers could own assets in multiple countries, so cross‑shard queries for portfolio summaries were hitting latency spikes (average 350 ms) and occasional deadlocks.

**Task:**  
I had to design a mechanism that allowed efficient joins across shards while preserving ACID guarantees for high‑value transactions (e.g., multi‑currency transfers) without sacrificing scalability.

**Action:**  
I introduced a two‑phase commit protocol using a lightweight distributed transaction coordinator built on Raft. For read‑only cross‑shard joins, I implemented a “read‑through cache” that materialized join results in Redis with per‑country shards as key namespaces, refreshing every 5 s via change‑data‑capture (Debezium). Write operations first locked the relevant shard leaders, wrote to local logs, then sent commit messages; if any shard failed, all rolled back. I also added a “global transaction ID” to trace end‑to‑end latency and tuned batch sizes for bulk imports.

**Result:**  
Cross‑shard read latency dropped from 350 ms to under 80 ms (95th percentile <120 ms), while write throughput improved by 40% because only two shards were involved per transaction. The system now supports >5,000 concurrent multi‑currency transfers with 99.9% success rate. I learned that combining a lightweight coordinator with cache‑driven reads and careful lock granularity can reconcile sharding’s scalability with strict transactional correctness.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
