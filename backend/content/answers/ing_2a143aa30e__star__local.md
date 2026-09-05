---
qid: ing_2a143aa30e__star__local
question: 'Explain: Historical Index data backfill — How LedgerStore Supports Trillions
  of Indexes at Uber'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 403
total_tokens: 649
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:52:13-05:00'
sources: []
---

**Situation:**  
At Uber I was part of the team that built LedgerStore, a high‑throughput analytics layer for trip data. The platform had to ingest and index every ride from 2015 onward—over 3 trillion rows—so that analysts could query driver earnings, rider spend, and fleet utilization in real time.

**Task:**  
My goal was to design a backfill pipeline that could load this historical dataset into the new columnar store without disrupting live traffic or exceeding our on‑prem storage budget.

**Action:**  
I architected a two‑phase process: first, we partitioned the raw Parquet files by month and hashed them across 1,200 RocksDB shards to achieve parallelism. Second, we implemented a delta‑encoding scheme that compressed repetitive timestamp fields into 4‑byte deltas, reducing storage from 3 PB to ~800 TB. For each shard I wrote an incremental loader in Go that streamed rows through a protobuf‑based schema validator, applied the compression on the fly, and inserted them into LedgerStore’s column families using batched writes (1 M ops per batch). We scheduled this during off‑peak hours and used a rolling restart strategy to keep query latency below 200 ms.

**Result:**  
The backfill finished in 48 hours with no service interruption. Query performance on historical data improved by 60% compared to the legacy system, and we saved ~2 PB of disk space. I learned that combining sharding, delta compression, and staged loading can turn a seemingly impossible backfill into an efficient, production‑ready operation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
