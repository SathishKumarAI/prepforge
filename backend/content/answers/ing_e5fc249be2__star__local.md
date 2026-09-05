---
qid: ing_e5fc249be2__star__local
question: 'Explain: Caching after compaction — SSTable compaction and compaction strategies
  \u00b7 scylladb/scylladb Wiki \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 261
output_tokens: 345
total_tokens: 606
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:07:43-05:00'
sources: []
---

**Situation** – In my last role I was tasked with reducing read latency for a high‑throughput time series database that stored millions of sensor events per day. The cluster had been experiencing slow compaction cycles and stale data in the cache, leading to 30 % higher page‑fetch times during peak hours.

**Task** – My goal was to implement an efficient “caching after compaction” strategy so that only compacted SSTables were promoted to the query cache, thereby eliminating unnecessary eviction of hot keys and keeping the cache size manageable.

**Action** – I first instrumented ScyllaDB’s compaction metrics (using `nodetool cfstats` and the Prometheus exporter) to identify when SSTable merges completed. Then I modified the node‑side cache controller: on each `SSTABLE_COMPACTED` event, I triggered a lightweight background job that scanned the new SSTables for frequently accessed keys using a Bloom filter. Those keys were preloaded into the LRU cache via Scylla’s `cache_insert` API, while obsolete keys were purged. To avoid race conditions, I wrapped the whole flow in a single transaction on the commit log.

**Result** – After deployment, read latency dropped from 120 ms to 75 ms (≈37 % improvement), and cache hit rate rose from 68 % to 91 %. The team learned that coupling compaction events with targeted cache warm‑ups can dramatically improve throughput without increasing memory usage.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
