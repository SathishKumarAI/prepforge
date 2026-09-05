---
qid: ing_3e3ff2b0f5__fp__local
question: 'Explain: Design with DynamoDB — How LedgerStore Supports Trillions of Indexes
  at Uber'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 179
output_tokens: 568
total_tokens: 747
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:17:05-05:00'
sources: []
---

### Why a “ledger” can hold *trillions* of indexes

At the core, Uber’s traffic‑matching problem is a **lookup‑by‑key** operation:  
given a rider’s location and time, find the nearest driver.  The lookup key is
a composite of latitude/longitude and a timestamp.  If every request were served
by scanning a table, latency would explode; if we indexed only one dimension,
we’d miss many viable drivers.

A **ledger** solves this by turning *every* write into an immutable event
(`driver‑status‑change`, `trip‑start`, etc.) and then building a **multi‑dimensional
index** on top of those events.  Each index entry is itself a key/value pair:
```
key   = <partition, sort>
value = pointer to the ledger record
```
Because DynamoDB partitions data by hash and orders it by sort key, we can
create **hundreds of thousands of partition keys** (e.g., hashed geohash prefixes)
and within each a fine‑grained sort order (time or distance).  By sharding the
geospatial space into tiny cells, the number of partitions grows linearly with
the number of distinct cells; by hashing we spread writes evenly across the cluster.

The key insight is that **immutability + append‑only storage lets us precompute
every possible index entry in advance**.  A write that updates a driver’s status
creates *all* relevant index entries for that driver (one per cell, one per
time bucket).  Subsequent reads are pure point queries on DynamoDB, which
scale linearly with the number of partitions and have sub‑millisecond latency.

Thus:

1. **Fundamental problem** – fast, multi‑dimensional lookups over a streaming
   data source.
2. **Why it must work this way** – immutable events + pre‑indexed pointers avoid
   runtime joins or scans.
3. **Underlying principle** – *information locality* (store the index where
   queries will hit) and *geometric hashing* (partition space to control fan‑out).
4. **Non‑obvious insight** – by treating every write as an “index update” for *all*
   potential query dimensions, we convert a read‑heavy workload into a
   deterministic, linear‑time lookup even when the index set explodes to trillions.

This design turns DynamoDB’s strengths (fast key/value access) into a scalable
trillion‑row indexing engine, which is why Uber can match riders and drivers in
real time at global scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
