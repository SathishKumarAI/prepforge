---
qid: ing_002cbb6e70__faang__local
question: 'Explain: Anti-patterns for partition keys — Partitionkey'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 528
total_tokens: 762
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:44:50-05:00'
sources: []
---

**Clarify**  
The interview asks: *“What are the common anti‑patterns when choosing a partition key (e.g., in a NoSQL store) for ML workloads?”*  
Assumptions: we’re dealing with distributed data stores that use hash or range partitioning, and the data is used for training/serving pipelines.

**Approach**  
1. List typical anti‑patterns.  
2. Explain why each hurts ML performance (latency, skew, scaling).  
3. Mention mitigation tactics.

**Depth**

| Anti‑pattern | Why it’s bad for ML | Mitigation |
|--------------|---------------------|------------|
| **Random/UUID keys** | No locality → every query hits a random shard; heavy cross‑shard traffic for joins or aggregations (e.g., feature lookup). | Use natural grouping (user_id, model_version) as key. |
| **High cardinality only** | Leads to *hot* shards if the distribution is uneven (e.g., most data in few keys); limits parallelism. | Bucket by a hash of multiple fields or use composite key with a secondary index. |
| **Time‑only keys** | Time‑based ranges cause “write amplification” and make range scans expensive; cold data stays hot. | Combine time with another dimension (user_id, feature_set) to spread writes. |
| **Low cardinality keys** | All rows fall into one shard → bottleneck on a single node. | Add a hash suffix or secondary partitioning field. |
| **Changing key over time** | Re‑partitioning triggers massive data movement and downtime. | Design immutable keys; use versioned models instead of mutating the key. |

**Edge cases**  
- Skewed user activity: even with composite keys, some users may still dominate a shard → test with realistic click‑stream logs.  
- Schema evolution: adding new feature columns shouldn’t force re‑partitioning.

**Optimize & communicate**  
Explain that choosing a *composite* partition key (e.g., `user_id#model_version`) balances locality and cardinality, enabling efficient training batches and inference lookups. Highlight trade‑offs: more complex queries vs. lower latency. Conclude with a recommendation to profile access patterns before finalizing the key strategy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
