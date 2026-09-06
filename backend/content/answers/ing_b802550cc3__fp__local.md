---
qid: ing_b802550cc3__fp__local
question: 'Explain: Distributed Cache — Grokking System Design Interview: Patterns
  & Mock Interviews'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 437
total_tokens: 613
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:35:27-05:00'
sources: []
---

**Distributed Cache – the ML‑centric view**

In a production ML pipeline we often have millions of inference requests that must be answered in sub‑millisecond time. The *fundamental problem* is: *how to keep the model’s feature table or pre‑computed embeddings close to the request stream without duplicating the entire dataset on every node?*  

A distributed cache solves this by **sharding** the key space across a cluster of fast, in‑memory stores (Redis, Memcached, or an SSD‑backed store). Each shard is a *partition* that can be queried independently; this gives us linear scalability because adding nodes simply adds more partitions. The design must obey two constraints:

| Constraint | Reason |
|------------|--------|
| **Low latency** | Inference time budgets are in microseconds, so the cache must be on‑premise and single‑hop. |
| **Stale‑data tolerance** | ML models can tolerate a small staleness (e.g., 1–5 s) because feature vectors change slowly; this lets us use *eventual consistency* rather than strong ACID guarantees, yielding higher throughput. |

From an optimization perspective the cache is a **trade‑off between memory cost and I/O cost**: we store only the “hot” part of the feature space (high hit ratio) and evict with LRU or LFU. The deeper insight most people miss is that *sharding the key space itself can be guided by the model’s feature distribution*. If certain user IDs generate far more requests, place them on a dedicated shard to avoid hot‑spot contention—this is called **feature‑aware sharding**.

In short, a distributed cache in ML is an engineered solution to the “latency vs. consistency” optimization problem, leveraging sharding and controlled staleness to keep inference pipelines responsive at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
