---
qid: ing_f449701445__fp__local
question: 'Explain: Storage (5 Years) — Design URL Shortener | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 180
output_tokens: 718
total_tokens: 898
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:38:28-05:00'
sources: []
---

## Why “five‑year retention” matters

A URL shortener is essentially a *bijective map* \(f:\text{short}\to\text{long}\).  
If we demand that every entry survive for **5 years**, the system must guarantee:

1. **Durability** – no data loss during crashes, updates or migrations.  
2. **Availability** – look‑ups must stay fast (≈10 ms) even under traffic spikes.  
3. **Scalability** – the storage cost grows roughly linearly with the number of entries.

The fundamental problem is *how to store a sparse, append‑only key/value table that is read‑heavy and rarely updated*.

## Design principle: “Write‑once, read‑many”

Because new URLs are added but never modified, we can treat each entry as immutable.  
This allows us to:

- **Append** to an *immutable log* (e.g., a distributed log like Kafka or a file‑system blob).  
  Append is O(1) and guarantees durability once the log is flushed.  
- **Index on‑demand** by maintaining a lightweight in‑memory hash map that points into the log.  
  If memory is insufficient, we spill to a *partitioned key‑value store* (e.g., RocksDB or DynamoDB).

The non‑obvious insight: **the index can be rebuilt from the log in linear time**.  
Thus we avoid expensive “write‑back” operations and can recover after catastrophic failures simply by replaying the log.

## Concrete architecture

| Layer | Role | Implementation |
|-------|------|----------------|
| Log (append‑only) | Durable storage of `(short, long)` tuples | Sharded Parquet files on S3 or GCS; each file ~1 GB. |
| In‑memory cache | Fast lookup for hot keys | LRU‑evicted map per shard; persisted to disk every 5 min. |
| Secondary index | Space‑efficient pointer | Bloom filter + sorted array of (hash, offset) pairs on SSD. |
| Garbage collector | Purge expired entries | Periodic job scans the log; deletes orphaned records after 5 years + grace period. |

### Why this works

- **Durability**: The append‑only log is immutable; once written to a replicated storage tier (S3 with versioning), it survives hardware failures.  
- **Availability**: The in‑memory cache serves the majority of requests; only ~1 % hit the disk, keeping latency low.  
- **Cost**: Storing 10⁹ URLs at 200 B each ≈ 200 GB per year → 1 TB over 5 years. Parquet on S3 is cheap and compresses well.  
- **Recoverability**: After a disaster, replay the log to rebuild both cache and index within minutes.

## One non‑obvious takeaway

*The bottleneck in long‑term retention is not storage space but **write amplification**.*  
By treating each URL as immutable and appending it once, we eliminate compaction cycles that would otherwise double I/O. This turns the 5‑year durability requirement into a linear‑time, low‑cost operation rather than an exponential one.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
