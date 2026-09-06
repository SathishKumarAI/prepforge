---
qid: ing_ab3aa251c9__fp__local
question: 'Explain: System Design Interview — Cursor (Anysphere) Interview Questions
  (2026)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 178
output_tokens: 364
total_tokens: 542
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:09:27-05:00'
sources: []
---

**Why “cursor” is a canonical system‑design question**

At its core, a *cursor* is an iterator over a stream of records that can be **seeked**, **filtered**, and **paginated** while preserving **consistency** across a distributed store. The interview asks you to design such a cursor because it forces you to balance three deep principles:

1. **Consistency vs. Availability (CAP)** – A cursor must guarantee that the user sees each record exactly once, even if replicas fail or new data is ingested concurrently.
2. **Scalability via Partitioning** – The system must support millions of rows per second, which requires sharding and efficient range queries without central bottlenecks.
3. **Latency‑Aware Pagination** – Users expect sub‑100 ms responses for “next page” calls; this demands clever prefetching or incremental aggregation.

From these constraints you derive a *partitioned log* backed by an append‑only storage (e.g., Kafka, GCS), coupled with a distributed index that maps logical offsets to physical shards. The cursor is then a lightweight token containing:  
- **Shard ID** – where to read next.  
- **Last seen offset** – to avoid duplicates.  
- **State hash** – for replay‑safe resumption.

A non‑obvious insight: *the cursor itself should be immutable and signed*. By making the cursor tamper‑proof you eliminate a whole class of consistency bugs (e.g., re‑ordering or replay attacks) while allowing stateless servers to serve it—greatly simplifying horizontal scaling.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
