---
qid: ing_d5afff6522__faang__local
question: Why Sharding? — A Crash Course on Database Sharding
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 460
total_tokens: 695
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:56:27-05:00'
sources: []
---

**Why Sharding? – A Crash‑Course for ML Engineers**

| Step | What I’ll do |
|------|--------------|
| **Clarify** | *Problem*: We need to keep a training dataset (hundreds of GBs, millions of rows) responsive for read/write during hyper‑parameter sweeps. 1️⃣ Confirm: data size > single‑node capacity? 2️⃣ Is latency critical for ML pipeline orchestration? |
| **Approach** | 1️⃣ Partition the table by key (e.g., user ID hash). <br>2️⃣ Deploy each shard to a separate DB node or cluster. <br>3️⃣ Use a routing layer that maps keys → shard endpoints. |
| **Depth** | • **Horizontal scaling**: each shard holds ~1/N of data, so query cost ≈ O(1) per shard.  <br>• **Write amplification** avoided by sharding writes locally.  <br>• **Consistency**: eventual consistency is acceptable for ML feature tables; otherwise use multi‑shard ACID via distributed transactions (e.g., Spanner).  <br>• **Complexity**: O(#shards) if a query touches all shards, but most ML lookups are point queries → O(1). |
| **Edge Cases** | • *Skew*: uneven key distribution → hot shard; mitigate with consistent hashing + virtual nodes. <br>• *Schema changes*: need to propagate migrations across shards. <br>• *Cross‑shard joins*: expensive; redesign data model or materialize denormalized tables. |
| **Optimize & Communicate** | • Start with 4–8 shards, monitor CPU/RAM and query latency. <br>• Add shards elastically when a node hits >70 % utilization. <br>Explain to interviewers: “Sharding lets us keep our feature store horizontally scalable while preserving low‑latency reads for training jobs.” |

*Result*: With sharding we achieve linear scalability, high availability, and maintain the throughput required for production‑grade ML pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
