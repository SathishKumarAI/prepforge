---
qid: ing_25ccca153a__fp__local
question: 'Explain: Update a document — Cassandra Vs MongoDB Comparison | MongoDB'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 580
total_tokens: 754
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:25:33-05:00'
sources: []
---

**Why the two engines treat updates so differently**

Both Cassandra and MongoDB are *distributed* key‑value stores that promise high write throughput, but they solve different optimisation problems.

| Problem | Cassandra’s design choice | MongoDB’s design choice |
|---------|--------------------------|------------------------|
| **Write path latency** | Append‑only, immutable SSTables → writes hit a single node’s commit log (≈ 1 ms). Updates are *logical* merges that never overwrite existing data. | In‑place document modification on the same storage engine page → update can be done in‑place but requires lock acquisition and potential disk seeks. |
| **Consistency model** | Tunable: eventual or strong via read repair & hinted handoff; updates propagate asynchronously to replicas, ensuring write availability even under network partitions (CAP = AP). | Strong consistency by default (single‑primary writes) with optional multi‑document transactions in newer versions. |
| **Schema flexibility** | Columns are immutable per row; adding a new column is just another key/value pair in the same partition, no schema change needed. | Documents can be arbitrarily nested; an update may add or remove fields without touching other documents. |

### The update mechanics

- **Cassandra**: An *update* is simply an insert with the same primary key but a newer timestamp. Each node keeps all previous values in its commit log and SSTables. During reads, Cassandra performs *merge‑time compaction*: it selects the newest value per column (max timestamp). This guarantees that no update ever overwrites data on disk; replicas only merge metadata.  
  **Insight**: Because updates are immutable, Cassandra can skip expensive page locks and maintain linear scalability even with millions of writes per second.

- **MongoDB**: The WiredTiger engine stores documents in B‑Tree pages. An update may rewrite the page (in‑place) or, if the new document grows beyond its original space, allocate a new location and leave a *tombstone* for garbage collection.  
  **Insight**: In‑place updates keep write amplification low but force strict locking; however, they enable efficient secondary index maintenance because only changed fields are updated.

### Non‑obvious takeaway

> The choice of *immutable writes* in Cassandra trades off “read‑time cost” (merging multiple versions) for “write‑time simplicity”. In contrast, MongoDB’s mutable pages trade off “write‑time complexity” (index updates and page splits) for “read‑time speed” (direct lookup). Thus, when a workload is write‑heavy with many overlapping updates on the same key, Cassandra outperforms; when reads dominate and document shape is stable, MongoDB wins.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
