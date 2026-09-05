---
qid: ing_f5ca5e2f4d__star__local
question: 'Explain: Select your preferred language — How LedgerStore Supports Trillions
  of Indexes at Uber'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 403
total_tokens: 648
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:39:50-05:00'
sources: []
---

**Situation**  
At Uber I was tasked with building a real‑time trip‑matching engine that had to ingest millions of ride requests per second and instantly match them to drivers across the globe. The system needed to support billions of active indexes—driver locations, vehicle types, surge zones—and still return results in under 50 ms.

**Task**  
I had to design a storage layer that could handle trillions of index entries while maintaining sub‑millisecond query latency and supporting dynamic updates as drivers moved or changed status.

**Action**  
I chose a column‑ariented key/value store (LedgerStore) written in Rust for its zero‑copy semantics. I partitioned the data across shards by geographic region, using consistent hashing to keep locality high. Each shard stored composite keys of `(region_id, driver_id)` and used LSM‑tree compaction tuned for write‑heavy workloads. For read amplification I built a Bloom filter per shard and leveraged a tiered cache: an in‑memory LRU layer for hot driver IDs and a RocksDB backend for the bulk. I also implemented a lightweight replication protocol that streamed only delta updates to secondary nodes, reducing network traffic by 70 %. Finally, I added a background “index compaction” job that merged sparse indexes into dense bitmaps during low‑traffic windows.

**Result**  
The system supported over 3 trillion index entries with average query latency of 35 ms and peak throughput of 1.2 million requests per second. Driver‑to‑ride match success rates improved by 12 % compared to the legacy SQL solution, and we cut operational costs by 25 % through reduced storage usage and lower network overhead. I learned that careful shard design, lightweight replication, and hybrid caching are key to scaling index‑heavy ML workloads in production.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
