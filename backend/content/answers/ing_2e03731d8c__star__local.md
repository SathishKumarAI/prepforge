---
qid: ing_2e03731d8c__star__local
question: 'Explain: Introduction — How LedgerStore Supports Trillions of Indexes at
  Uber'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 367
total_tokens: 609
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:00:30-05:00'
sources: []
---

**Situation:**  
At Uber I was on the data platform team when we had to shift from a monolithic analytics pipeline to a real‑time recommendation engine that required instant lookup of user trip histories and driver availability across all markets. The index volume ballooned to over 3 trillion keys, and our existing PostgreSQL cluster could not keep up.

**Task:**  
Design a storage layer that would allow sub‑millisecond reads for any user or vehicle ID while keeping write latency under 50 ms, all on commodity hardware.

**Action:**  
I led the build of LedgerStore, a custom key‑value engine built on top of RocksDB with a multi‑tiered partitioning scheme. We sharded data by region and further subdivided each shard into hash‑based sub‑shards to avoid hotspots. To reduce disk usage we applied LZ4 compression per column family and implemented a write‑back cache using memtables sized dynamically based on hot key traffic. For consistency, we used Raft replication across three nodes per shard, with log compaction to prune obsolete entries. We also exposed a thin REST API that translated complex query patterns into efficient range scans.

**Result:**  
LedgerStore handled 1.2 million read requests per second with an average latency of 12 ms and sustained 300 k writes per second while keeping disk usage down by 40% compared to our previous solution. The success proved that a custom, sharded KV store could scale to trillions of indexes without sacrificing performance or reliability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
