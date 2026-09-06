---
qid: ing_45cf7c9e8f__fp__local
question: 'Explain: Most databases weren’t built for time series'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 442
total_tokens: 612
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:33:46-05:00'
sources: []
---

**Why “ordinary” relational stores are ill‑suited for time‑series data**

At its core, a database is an *indexing* machine: it must map a key to the rows that satisfy a query.  
In a typical OLTP workload the key is a stable identifier (customer id, product code). The optimizer can afford to materialise a B‑tree on that column; each leaf node contains only a handful of rows and the cost of re‑balancing is negligible compared with transaction volume.

A time series, by contrast, is a *dense, monotonic* key: every new sample appends at the end. The optimizer’s assumptions break down:

1. **Index growth** – B‑trees grow linearly in height; for millions of points per minute, insertions hit the leaf node and cause frequent splits, producing random I/O bursts that defeat caching.
2. **Compression vs. access pattern** – Relational engines compress by grouping similar values across columns. In TS data, the key dominates every row; compression offers little benefit while still incurring a CPU cost during decompression for each read.
3. **Query semantics** – Typical queries ask for contiguous ranges (e.g., last 24 h). A B‑tree must traverse many nodes to gather that slice, whereas a columnar or time‑partitioned layout can stream a single block.

The deeper principle is *data locality*: time series are already sorted by the query key. A database that treats it as an arbitrary index ignores this inherent ordering and pays the penalty of generic structures.  
**Non‑obvious insight:** The real bottleneck isn’t write throughput; it’s *read amplification* caused by traversing a deep B‑tree for a range that is naturally contiguous in storage. Designing a system that stores data sequentially and indexes only at higher granularity (e.g., per‑hour blocks) eliminates the need for a fine‑grained index altogether, yielding orders‑of‑magnitude gains.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
