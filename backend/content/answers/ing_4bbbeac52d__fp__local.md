---
qid: ing_4bbbeac52d__fp__local
question: 'Explain: Index lifecycle management — How LedgerStore Supports Trillions
  of Indexes at Uber'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 178
output_tokens: 477
total_tokens: 655
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:46:07-05:00'
sources: []
---

**Index Lifecycle Management in Uber’s LedgerStore**

At its core, an index is a *data structure that maps keys to positions* so that queries can be answered in sub‑linear time. In a system that ingests trillions of events per day (Uber’s ride‑sharing data), the sheer volume forces two constraints:

1. **Freshness** – new records must be searchable almost immediately;  
2. **Capacity** – the index cannot grow unboundedly or else disk, memory and query latency explode.

LedgerStore solves this by treating each partition of a stream as an immutable *ledger* (append‑only log). Every write is first recorded in the ledger; thereafter, an *indexer* processes the ledger in *segments* (time‑or‑size bounded). For each segment it builds a lightweight index that:

- **Points to offsets** within the ledger (no duplicate data);  
- **Is compressed** via prefix‑sharing and dictionary encoding, so its size is ≈ 0.1 % of the raw data.

The lifecycle has three phases:

| Phase | Operation | Rationale |
|-------|-----------|-----------|
| **Creation** | On first write to a new segment, instantiate an empty index file. | Guarantees that every segment is immediately searchable. |
| **Maintenance** | Periodically merge small indexes into a larger *merged* index; drop obsolete segments older than the retention window. | Merging reduces lookup overhead (fewer files) while dropping old data keeps storage bounded. |
| **Eviction** | When disk pressure rises, evict the *least‑recently‑used* merged index to SSD or cold storage, keeping only hot indexes in memory. | Keeps RAM usage predictable and avoids thrashing. |

Because each segment’s index is *independent*, the system can parallelise maintenance without locking the whole catalog—an embodiment of **optimisation by decomposition**. The non‑obvious insight: **by storing indices as immutable, merge‑friendly files you convert a dynamic update problem into a static merge problem**, which lets Uber maintain trillions of indexes with constant‑time query latency and linear‑scale storage growth.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
