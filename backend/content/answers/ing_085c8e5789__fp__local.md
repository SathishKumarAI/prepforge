---
qid: ing_085c8e5789__fp__local
question: 'Explain: Company — How LedgerStore Supports Trillions of Indexes at Uber'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 460
total_tokens: 636
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:23:34-05:00'
sources: []
---

**Why Uber needs trillions of indexes**

When every ride request, driver status update, fare calculation, or surge‑pricing rule is stored as a row, the database must answer *“who was at location X at time T?”* and *“what’s the last price for route Y?”* in real time.  The fundamental problem is: *how to locate any record in an ever‑growing log with sub‑millisecond latency while keeping writes cheap.*

**LedgerStore’s design**

1. **Immutable append‑only logs** – Each write goes to a new segment file; no in‑place updates mean the engine can stream data linearly, which is optimal for SSD bandwidth and simplifies crash recovery.
2. **Segmented inverted indexes** – Every segment builds a small Bloom‑filter‑plus‑offset table for each key.  The filter tells whether the key could exist in that segment; if not, we skip the whole file.  This turns a potential O(n) scan into a bounded number of random seeks.
3. **Global merge tier** – Periodically segments are merged hierarchically (L0 → L1 → …).  Each level contains disjoint time ranges, guaranteeing that any key appears in at most one segment per level, so lookups touch only *O(log N)* files.
4. **Vector‑clock partitioning** – Writes are sharded by a hash of the primary key plus a vector clock derived from the service’s logical timestamp.  This keeps hot shards isolated and prevents write amplification.

**Non‑obvious insight**

The key to scaling to trillions of indexes is *composing cheap, probabilistic filters with deterministic segment boundaries*.  The Bloom filter reduces random I/O dramatically, while the merge hierarchy guarantees that each key is stored only once per level.  Together they make every read a handful of predictable seeks, regardless of how many rows have accumulated.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
