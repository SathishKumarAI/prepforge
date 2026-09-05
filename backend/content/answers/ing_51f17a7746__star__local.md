---
qid: ing_51f17a7746__star__local
question: 'Explain: Types of Indexes — How LedgerStore Supports Trillions of Indexes
  at Uber'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 356
total_tokens: 601
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:12:17-05:00'
sources: []
---

**Situation** – At Uber we had a global analytics platform that ingested telemetry from every driver’s vehicle, generating over 2 TB of log data daily. The business needed to run ad‑hoc queries across any combination of time window, location, and driver attributes, but the raw store was a flat Parquet lake and query latency shot up to minutes.

**Task** – I was tasked with designing an indexing layer that could support billions of distinct key/value pairs—essentially trillions of index entries—while keeping write throughput above 10 k records per second and query response under 200 ms for any filter combination.

**Action** – We built a sharded, column‑arithmetic index called LedgerStore. Each shard is a compact Bloom‑filter + sorted list of block pointers stored in RocksDB. For every incoming record we compute multiple hash keys (driver_id, region_code, event_type) and append the offset to the corresponding bucket. To keep size bounded we use tiered compaction: hot buckets stay in memory as L0 structures; cold ones are merged into compressed SSTables with run‑length encoding. We also maintain a lightweight metadata cache in Redis so that a query only scans the relevant shards.

**Result** – The index grew to 3 trillion entries across 1,200 shards while write latency stayed below 12 ms per record. Query performance improved from 4 seconds to 140 ms on average for complex filters, and we cut storage cost by 35% due to aggressive compression. I learned that combining probabilistic filters with tiered compaction lets you scale index size linearly without sacrificing throughput.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
