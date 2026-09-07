---
qid: ing_66d25a4e35__faang__local
question: 'Explain: Time-range indexes — How LedgerStore Supports Trillions of Indexes
  at Uber'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 457
total_tokens: 698
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:43:24-05:00'
sources: []
---

**Clarify**  
*Problem:* Describe how Uber’s **LedgerStore** scales to support trillions of time‑range indices for event logs, and why this matters for analytics.  
*Assumptions:* We’re talking about a distributed append‑only store; indices are range‑based (e.g., timestamp → shard) rather than key‑value; latency < 100 ms is required for ad‑hoc queries.

**Approach**  
1. Partition data by *time buckets* (e.g., hourly).  
2. Use **columnar compression + delta encoding** to keep each bucket small.  
3. Maintain a lightweight *bitmap index* per bucket pointing to shards that contain relevant timestamps.  
4. Cache hot buckets in memory; cold ones stay on SSD/NFS.

**Depth**  
- Each log record gets appended to its hourly file; the bucket header stores min/max timestamp and a Bloom filter for quick existence checks.  
- The bitmap index (one bit per shard) is only ~1 kB per hour, so trillions of buckets fit in RAM if hot.  
- Querying: intersect bitmaps across requested hours → O(k) where k = number of hours, then fetch only those shards.  
- Complexity: Append O(1), query O(k + hits).  
- Trade‑offs: Slightly higher write overhead for maintaining bitmap; but read latency stays sub‑100 ms even at 10⁶ queries/sec.

**Edge Cases**  
- Skewed workloads (e.g., all traffic in one bucket): use *sharding* within that hour.  
- Data deletion or compaction: rebuild affected bitmaps atomically to avoid inconsistencies.  
- Clock drift: store absolute epoch timestamps; use NTP‑synchronized clocks.

**Optimize & Communicate**  
- Future: replace bitmaps with Roaring Bitmaps for sparse shards, further reducing memory.  
- Explain that this design lets Uber run real‑time fraud detection and A/B tests on trillions of events without a single point of contention—exactly what a FAANG scale‑up demands.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
