---
qid: ing_f5ca5e2f4d__fp__local
question: 'Explain: Select your preferred language — How LedgerStore Supports Trillions
  of Indexes at Uber'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 179
output_tokens: 394
total_tokens: 573
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:41:56-05:00'
sources: []
---

**How LedgerStore Scales to Trillions of Indexes**

The core problem is *continuous ingestion* of event streams (e.g., ride‑hail telemetry) while still enabling fast point queries on billions of keys.  
LedgerStore solves this by treating every row as an **immutable log entry** and building a **partitioned LSM‑tree** over it:

1. **Write‑amplification minimisation** – data is appended to a single, sequential write buffer (a *write‑ahead ledger*). Because the buffer is ordered by timestamp, disk seeks are eliminated.
2. **Tiered compaction** – entries are compacted into sorted runs at exponentially increasing levels. Each run contains a *prefix range* of keys; the number of runs per key grows logarithmically with total rows.  
3. **Bloom‑filter shards** – every run stores a Bloom filter for its key prefix, allowing the query engine to skip entire runs in O(1) time.
4. **Distributed hash‑based partitioning** – partitions are allocated across nodes by hashing the primary key; this keeps hot spots isolated and lets each node maintain only a slice of the trillions of indexes.

The deeper principle is *information locality*: by keeping keys together in sorted runs, read amplification drops from linear to logarithmic.  

**Non‑obvious insight:**  
Because writes are immutable, compaction can be performed **in parallel with reads** without locking. This “write‑once, read‑many” model eliminates the contention that plagues traditional B‑trees when scaling to trillions of rows.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
