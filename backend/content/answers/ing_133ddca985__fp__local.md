---
qid: ing_133ddca985__fp__local
question: 'Explain: Key Parameters — Databases'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 432
total_tokens: 599
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:46:35-05:00'
sources: []
---

**Key Database Parameters for Machine‑Learning Pipelines**

| Parameter | Fundamental Role | Why It Matters |
|-----------|------------------|---------------|
| **Schema Normalization / Denormalization** | Controls data redundancy and join cost. | A highly normalized DB minimizes storage but forces expensive joins during feature extraction, inflating training time. Conversely, a denormalized star schema keeps features close together, speeding up scans at the expense of consistency. |
| **Index Cardinality & Selectivity** | Determines how quickly a query can locate rows. | ML workloads often filter on high‑cardinality columns (e.g., user IDs). Poorly chosen indexes lead to table scans that dominate I/O budgets and delay feature retrieval. |
| **Partitioning Strategy** | Splits data into manageable chunks (range, hash, list). | Partitioned tables let the engine prune irrelevant buckets, reducing disk seeks. For time‑series models, range partitioning on timestamps keeps recent data hot for online learning. |
| **Storage Engine & Compression** | Defines physical layout and byte‑level encoding. | Columnar engines (e.g., Parquet) compress numeric columns efficiently, lowering I/O in bulk feature pulls. Row‑store engines suit transactional updates but hurt ML batch reads. |
| **Concurrency Control & Isolation Level** | Governs how concurrent transactions interact. | In a streaming pipeline, low isolation (READ COMMITTED SNAPSHOT) allows learners to read fresh data without blocking writers, keeping latency low while tolerating minor staleness. |

### Non‑obvious Insight
Most practitioners focus on *query speed* alone, overlooking that **data locality**—the physical proximity of related features—is a hidden bottleneck. Even with perfect indexes, if the storage engine scatters columns across disks (e.g., in a row‑store), feature extraction will suffer cache misses and disk seeks. Choosing a columnar layout or explicitly clustering by feature group can reduce this overhead dramatically, often outweighing index tuning efforts.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
