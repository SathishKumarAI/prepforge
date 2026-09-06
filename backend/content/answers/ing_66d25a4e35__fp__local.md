---
qid: ing_66d25a4e35__fp__local
question: 'Explain: Time-range indexes — How LedgerStore Supports Trillions of Indexes
  at Uber'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 178
output_tokens: 458
total_tokens: 636
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:43:43-05:00'
sources: []
---

**Why a time‑range index is indispensable**

A service that writes billions of events per second (think of every Uber ride, driver ping or telemetry sample) must answer *“give me all records in the last N minutes”* in milliseconds.  
If we naïvely scan the log, latency grows linearly with the number of events; a linear scan over trillions of rows is infeasible.

**The fundamental trick**

Treat the write stream as an immutable sorted list by timestamp.  
A *time‑range index* is nothing more than a lightweight bitmap that records **where** in the log each contiguous chunk of time begins and ends:

```
chunk 0 : [t₀ … t₁) → offset 0
chunk 1 : [t₁ … t₂) → offset 1,000,000
…
```

Because writes are append‑only, these offsets never change; a query for `[T_start,T_end]` becomes:

1. Binary‑search the bitmap to locate the first chunk ≥ T_start.
2. Read sequentially from that offset until the timestamp exceeds T_end.

Thus, we avoid scanning unrelated data and keep read I/O proportional to *time span*, not *record count*.

**Deep principle**

This is an instance of **range partitioning + prefix‑sum indexing**, a classic space–time trade‑off:  
- Space overhead ≈ O(number of chunks) (a few bytes per second).  
- Query time ≈ O(log chunks + ΔT), where ΔT is the requested interval length.

**Non‑obvious insight**

Because the index is *immutable* and *append‑only*, it can be shared safely across all replicas without locking or garbage collection.  
Each replica reads from its local copy, while a background compactor periodically merges small chunks into larger ones, keeping the index size bounded even as trillions of events accumulate.

This design lets Uber’s LedgerStore support billions of concurrent time‑range queries with sub‑second latency and minimal storage overhead.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
