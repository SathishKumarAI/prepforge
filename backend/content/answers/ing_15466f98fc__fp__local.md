---
qid: ing_15466f98fc__fp__local
question: 'Explain: Capacity Planning — Leaderboard System Design - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 524
total_tokens: 696
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:50:20-05:00'
sources: []
---

### Capacity Planning for a Leaderboard System

**Fundamental problem**  
A leaderboard must deliver *real‑time* rank queries to millions of users while ingesting continuous score updates from games or services. The system is inherently read‑heavy (many users poll their position) but also write‑intensive when events generate new scores.

**Why the architecture looks this way**

| Requirement | Design choice | Rationale |
|-------------|---------------|-----------|
| **Low latency reads** | In‑memory sorted set per epoch (Redis, RocksDB in LSM mode) | O(log n) lookup; cache locality keeps the top‑k hot. |
| **High write throughput** | Log‑structured append (Kafka → HBase/Bigtable) + background merge | Allows bursty writes without contention; eventual consistency is acceptable for rank updates. |
| **Horizontal scalability** | Shard by *user ID hash* or *score bucket* | Keeps data locality for range queries while balancing load. |
| **Fault tolerance** | Replicated WAL + quorum reads | Guarantees durability and high availability. |

**Optimization principle**  
The system is a constrained version of the *online ranking problem*: we must maintain an order statistic under continuous updates with bounded latency. This reduces to maintaining a dynamic balanced BST or skip list, but in distributed settings we approximate it with *probabilistic data structures* (e.g., Count‑Min Sketch for top‑k estimation) to cut memory.

**Non‑obvious insight**  
Most designs treat the leaderboard as a single monolithic sorted set. A better approach is **epoch‑based segmentation**: partition time into short windows (e.g., 1 min). Each epoch has its own in‑memory structure; queries first consult the most recent epoch and then roll back to older ones if needed. This dramatically reduces contention during write bursts, keeps hot data in RAM, and simplifies cache eviction—all while preserving accurate global rankings through a lightweight merge step.

*Capacity planning* thus hinges on balancing **write amplification** (via log‑structured storage) against **read locality** (in‑memory sorted sets), with epoching as the key architectural lever.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
