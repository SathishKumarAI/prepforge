---
qid: ing_7b93d62ca0__faang__local
question: 'Explain: Cross-Shard Queries — Sharding | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 545
total_tokens: 780
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:31:38-05:00'
sources: []
---

**Cross‑Shard Queries – Sharding (System Design)**  

| # | Step | What I’d say |
|---|------|--------------|
| **1️⃣ Clarify** | *Problem:* We have a horizontally sharded key–value store that must answer queries spanning multiple shards, e.g., “sum sales by region” where each region is on a different shard.  <br>*Assumptions to confirm:* 1) Shards are independent and data is partitioned by hash or range; 2) Query latency budget (< 200 ms); 3) Consistency model (strong vs eventual); 4) Workload mix (reads heavy, writes moderate). |
| **2️⃣ Approach** | 1. Identify the “cross‑shard” operation patterns.<br>2. Choose a query routing layer that aggregates results from relevant shards.<br>3. Decide on consistency: either *local* reads with eventual aggregation or a *global transaction* using two‑phase commit (2PC).<br>4. Implement caching/partial pre‑aggregation to reduce round trips. |
| **3️⃣ Depth** | • **Routing Layer:** A coordinator service receives the query, looks up shard locations via metadata store, and dispatches parallel read requests. <br>• **Aggregation:** Shards return partial results; the coordinator merges them (e.g., summing totals). Complexity: O(k) where *k* = number of shards touched; latency ≈ max(shard RTT) + aggregation time. <br>• **Consistency:** For strong consistency, use 2PC or a distributed lock manager; trade‑off is higher latency and risk of deadlocks. Eventual consistency lets us skip coordination, but results may be stale. |
| **4️⃣ Edge Cases** | • **Shard failure:** Coordinator must retry with other replicas or return partial result with error flag.<br>• **Hot shards:** If a shard becomes a bottleneck, consider re‑sharding or adding read replicas.<br>• **Skewed data:** Range‑partitioning may lead to uneven load; monitor and rebalance. |
| **5️⃣ Optimize & Communicate** | • **Batching & pipelining** reduces network hops.<br>• **Materialized views** per shard for common aggregates cut down runtime work.<br>Explain trade‑offs: stronger consistency = higher latency vs. lower complexity. Emphasize that the design should be modular—adding more shards or changing partitioning strategy shouldn’t break query logic. |

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
