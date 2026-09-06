---
qid: ing_9e53bd348f__fp__local
question: 'Explain: Directory-Based Sharding — Key Concepts to Understand Database
  Sharding'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 388
total_tokens: 562
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:41:54-05:00'
sources: []
---

**Directory‑Based Sharding (DBS)**  
*Why it matters:* When a model’s training data or feature store grows beyond the capacity of a single node, we must partition the data so that each shard can be queried and updated in parallel. The naïve “range” or “hash” splits ignore *access locality*: different ML pipelines often touch only a subset of keys (e.g., user‑specific features).  

*Core principle:* DBS introduces an **auxiliary lookup table**—the directory—that maps logical key ranges to physical shard locations. This is essentially a *consistent hashing* scheme wrapped in a small, highly‑available index. The directory decouples the logical partitioning from physical placement, allowing shards to be moved or replicated without changing application code.  

*Key concepts:*  
1. **Logical vs. Physical keys** – Logical keys are what ML pipelines use (e.g., `user_id`); physical keys are shard identifiers in storage.  
2. **Directory consistency** – The directory must be strongly consistent; otherwise, reads may hit stale shards and corrupt model gradients.  
3. **Load‑aware routing** – Each directory entry stores current load metrics so that future lookups can route to under‑utilized shards, embodying an online optimization loop.

*Non‑obvious insight:* Because the directory is a tiny dataset, it can be replicated across all nodes with minimal overhead, turning what appears to be a single point of failure into a *global metadata service*. This means that even if a shard fails, the system can immediately redirect traffic through the directory without incurring costly re‑partitioning. In practice, this yields near‑linear scalability for ML feature stores while preserving strong consistency and low latency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
