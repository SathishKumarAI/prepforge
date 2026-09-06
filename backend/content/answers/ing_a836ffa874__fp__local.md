---
qid: ing_a836ffa874__fp__local
question: 'Explain: Rollover — Data streams | Elastic Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 493
total_tokens: 664
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:03:18-05:00'
sources: []
---

**Rollover in Elastic’s data streams**

*Problem:*  
Time‑series workloads generate a continuous stream of documents that must remain searchable, yet each shard can only grow to a practical size (e.g., 50 GB) before queries slow and maintenance becomes expensive. We also want the index name visible in the API while keeping the underlying shards immutable.

*Solution mechanism:*  
A *data stream* is a logical collection of **backing indices** that are all read‑only once written. A **rollover** creates a new backing index when the current one satisfies any of the following predicates:

| Predicate | Why it matters |
|-----------|----------------|
| `max_size` (bytes) | Prevents a shard from becoming too large. |
| `max_age` (time)   | Keeps indices fresh for cache‑friendly access patterns. |
| `max_docs` (count) | Avoids very long index lifetimes that hurt search latency. |

When rollover fires, Elastic:

1. Creates a new backing index with the same *data stream* alias (`<stream>`) pointing to it.
2. Marks the previous index as read‑only and updates the stream’s metadata to reflect the new “write” index.
3. Optionally triggers an **Index Lifecycle Policy** on the old index for deletion or archival.

*Why this works:*  
By keeping each backing index small, we bound query latency (O(1) shard lookups) while still exposing a single logical name (`<stream>`) to clients. The immutable nature of old indices guarantees no accidental writes, preserving data integrity and simplifying concurrency control.

**Non‑obvious insight**  
Rollover is *not* merely a housekeeping step; it can be the pivot for **autoscaling compute resources**. Since each new backing index signals that a threshold was reached, an orchestrator can spin up additional nodes just before rollover triggers, ensuring smooth scaling without manual intervention. This coupling of data‑driven thresholds with infrastructure elasticity is what makes Elastic’s data streams uniquely powerful for real‑time analytics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
