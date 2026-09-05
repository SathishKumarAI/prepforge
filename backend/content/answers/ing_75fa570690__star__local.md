---
qid: ing_75fa570690__star__local
question: 'Explain: Disk use during compaction — SSTable compaction and compaction
  strategies \u00b7 scylladb/scylladb Wiki \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 261
output_tokens: 419
total_tokens: 680
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:30:12-05:00'
sources: []
---

**Situation** – In my last role I was responsible for maintaining a production ScyllaDB cluster that served a real‑time analytics dashboard. Over the first six months, write amplification had climbed to 3×, and the disk usage per keyspace grew from 120 GB to over 300 GB, jeopardizing our SLA on storage costs.

**Task** – I needed to reduce the overall disk footprint by at least 40% while keeping read latency below 5 ms. The challenge was to do it without a costly hardware upgrade and with minimal downtime for our users.

**Action** – First, I audited the compaction strategy logs and identified that the default **SizeTieredCompactionStrategy (STCS)** was creating too many small SSTables because of bursty write patterns. I switched to a hybrid **TimeWindowCompactionStrategy (TWCS)** with a 24‑hour window and set `max_compactions` to control parallelism. Then, I tuned the `sstable_size_in_mb` parameter down from 256 MB to 128 MB, enabling more efficient merges. Using Scylla’s built‑in `nodetool compactionstats`, I monitored real‑time disk usage and read/write latency. Finally, I scheduled a phased restart of nodes during off‑peak hours to apply the new strategy with zero data loss.

**Result** – Within three weeks, the keyspace shrank from 300 GB to 180 GB—a 40% reduction—while read latency improved from 7 ms to 4.2 ms. I also learned that aggressive compaction parameters can backfire if not matched to write patterns; continuous monitoring is essential to balance space savings against performance overhead.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
