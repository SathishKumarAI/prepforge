---
qid: ing_df73fe51f3__fp__local
question: 'Explain: Tiered storage — Time-Series PostgreSQL at Petabyte Scale'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 422
total_tokens: 596
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:54:57-05:00'
sources: []
---

**Tiered storage for petabyte‑scale time‑series in PostgreSQL**

The problem is twofold: (1) we must ingest billions of timestamped rows per day; (2) queries are usually *range* scans over a recent window, while older data is read rarely. A single uniform storage layer cannot satisfy both throughput and cost constraints.

PostgreSQL’s **partitioning** solves the first issue by logically slicing the table into time‑based segments (e.g., daily or weekly tables). Each segment can be loaded into memory or SSDs for fast inserts, while a lightweight WAL ensures durability. For the second issue we apply a *tiered* strategy:

| Tier | Storage medium | Access pattern | Cost |
|------|-----------------|----------------|------|
| **Hot** | In‑memory / NVMe | 0–7 days | High |
| **Warm** | SSD / high‑performance HDD | 7 days–1 year | Medium |
| **Cold** | Object store (S3, Glacier) | >1 year | Low |

The migration policy is a simple *time‑decay* rule: once a segment’s age exceeds the tier threshold, it is moved to the next level. Because each partition is an independent table, PostgreSQL can drop indexes or convert the storage format (e.g., `TOAST` compression) without affecting active partitions.

**Non‑obvious insight:**  
The key optimisation lies in *data locality* of the WAL. By keeping the WAL on a separate fast disk for hot partitions and compressing it aggressively for warm/cold segments, we avoid the “write amplification” that would otherwise inflate costs when moving data across tiers. This subtle decoupling turns what looks like a simple tiering policy into a scalable architecture that respects PostgreSQL’s MVCC semantics while delivering petabyte‑scale performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
