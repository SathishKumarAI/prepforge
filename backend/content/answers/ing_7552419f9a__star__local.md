---
qid: ing_7552419f9a__star__local
question: 'Explain: Scheduling — SSTable compaction and compaction strategies \u00b7
  scylladb/scylladb Wiki \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 257
output_tokens: 370
total_tokens: 627
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:29:15-05:00'
sources: []
---

**Situation:** While leading the migration of our analytics platform from Cassandra to ScyllaDB, we hit a performance bottleneck during nightly data ingestion: read latency spiked after each compaction cycle, especially for hot partitions that were constantly rewritten.

**Task:** I needed to redesign the compaction strategy and scheduling so that compactions ran efficiently without starving real‑time queries, while keeping disk usage under control and maintaining fault tolerance.

**Action:** First, I profiled the compaction logs and identified that the default SizeTieredCompactionStrategy was creating too many large SSTables for our write‑heavy workload. I switched to a HybridCompactionStrategy (HCS) with a `min_threshold` of 4 and `max_threshold` of 32, tuned the `sstable_size_in_mb` to 256 MB, and enabled *time‑window compaction* for time‑series tables. I then set up a cron job that triggers compactions during off‑peak hours (2–3 AM) using Scylla’s `nodetool compact` command with the `--scheduling-policy=background`. Finally, I added an alerting rule in Prometheus to monitor `scylladb_compaction_duration_seconds`, ensuring any spikes triggered a rollback.

**Result:** Post‑migration, read latency dropped from 350 ms to under 90 ms during peak hours (a 74% improvement). Disk space usage decreased by ~18%, and the new compaction schedule eliminated the nightly backlog. I learned that choosing the right strategy and timing is critical; even a small tweak in thresholds can yield massive gains in throughput and stability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
