---
qid: ing_9eafb7205b__star__local
question: 'Explain: Row-columnar storage — Time-Series PostgreSQL at Petabyte Scale'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 390
total_tokens: 631
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:49:23-05:00'
sources: []
---

**Situation**  
In my last role I was tasked with ingesting and querying over a petabyte of IoT sensor data for an energy‑grid company. Their existing PostgreSQL setup used traditional row‑store, so read queries were painfully slow—averaging 45 seconds per time‑window scan—and write throughput dropped below 10k rows/sec.

**Task**  
I had to redesign the storage layer to support sub‑second reads on arbitrary time ranges while keeping writes at >20k rows/sec and staying within their existing PostgreSQL ecosystem, so we could avoid a costly migration to a new database.

**Action**  
We introduced the “row‑columnar” hybrid approach: each partition (daily tables) was stored as a columnar format using the `pg_columnar` extension. For ingestion I built a lightweight bulk loader that batches 1 M rows per transaction, compresses numeric columns with RLE+delta encoding, and writes to a separate “compressed” table while keeping an up‑to‑date row‑store for real‑time analytics. Queries were rewritten to read from the columnar tables via `pg_columnar`’s vectorized executor, applying predicate pushdown on timestamps and down‑sampling aggregates in C++ UDFs. We also implemented a TTL job that materializes summarized views nightly.

**Result**  
Read latency for 30‑minute window queries dropped from 45 seconds to under 300 ms—an 150× improvement—and write throughput rose to 35k rows/sec, comfortably exceeding our SLA. The team learned that keeping a thin row layer for OLTP and a columnar layer for heavy analytics can give the best of both worlds at petabyte scale without abandoning PostgreSQL.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
