---
qid: ing_92091f2706__faang__local
question: 'Explain: When to Use Each Pattern — Production Rag At Scale'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 499
total_tokens: 733
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:24:09-05:00'
sources: []
---

**Clarify**  
You’re asking when each “rag‑at‑scale” design pattern (e.g., *single‑source*, *distributed cache*, *event‑driven replication*) is appropriate for AI workloads that need large‑scale inference or training data pipelines.

**Approach**  
1. List the common patterns.  
2. For each, state the core trade‑off (latency vs consistency, cost vs freshness).  
3. Map typical AI use‑cases (real‑time recommendation, batch model training, multi‑region inference) to the pattern that best satisfies its constraints.

**Depth**  
| Pattern | Typical Use | Why it fits |
|---------|-------------|--------------|
| **Single‑source / leader‑follower** | High consistency required for model versioning or label pipelines. | Guarantees a single source of truth; writes are serial, so training data is clean. |
| **Distributed cache (e.g., Redis cluster)** | Low‑latency inference serving where stale data is acceptable (e.g., recommendation embeddings). | Fast reads, tolerates eventual consistency; cost per request is low. |
| **Event‑driven replication** | Real‑time feature store updates for online learning. | Asynchronous update keeps inference fast while keeping the feature store eventually consistent. |
| **Sharded read/write** | Massive batch training data ingestion. | Parallel writes reduce bottleneck; reads can be served from local shards during model training. |
| **Multi‑region quorum** | Global recommendation service with SLA for all regions. | Balances latency and consistency by tuning `N` and `W`. |

**Edge Cases**  
- *Data skew*: sharding may lead to hot spots; mitigate with consistent hashing or dynamic rebalancing.  
- *Network partitions*: event‑driven patterns can lose messages unless a durable queue (Kafka) is used.  
- *Model drift*: single‑source pattern can become a bottleneck if model updates are frequent.

**Optimize & Communicate**  
Start by profiling latency and consistency needs; choose the simplest pattern that meets SLAs, then layer additional mechanisms (e.g., fallback caches). Explain trade‑offs to stakeholders: “We’ll sacrifice a few milliseconds of freshness for 30 % cost savings in cache reads.” This keeps the architecture both scalable and understandable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
