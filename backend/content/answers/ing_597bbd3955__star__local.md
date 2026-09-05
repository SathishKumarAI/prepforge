---
qid: ing_597bbd3955__star__local
question: 'Explain: Uh oh! — SSTable compaction and compaction strategies \u00b7 scylladb/scylladb
  Wiki \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 259
output_tokens: 459
total_tokens: 718
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:26:47-05:00'
sources: []
---

**Situation:**  
At my previous company we were running a real‑time analytics platform on ScyllaDB. Our ingestion rate hit 2 M rows per second, and by the end of the month our SSTables had ballooned to over 10 TB across 20 nodes. Query latency for our trending reports slipped from <50 ms to ~250 ms because compaction was choking on a flood of small writes.

**Task:**  
I needed to design a compaction strategy that kept write amplification low, reduced read latencies, and fit within the cluster’s storage budget without increasing hardware costs. The goal was to bring latency back under 80 ms while keeping disk usage below 12 TB per node.

**Action:**  
I switched from ScyllaDB’s default “size‑tiered” compaction to a “time‑window” strategy, creating custom time‑bucket SSTables (1‑hour windows) and enabling the “streaming‑to‑local‑sstable” feature. I tuned the `compaction_threshold` per keyspace to 3:2 ratio and added a `max_compaction_time` of 30 minutes to avoid long background tasks. Using Scylla’s `nodetool` metrics, I monitored compaction throughput and adjusted `gc_grace_seconds` to 48 h so tombstones didn’t accumulate. Finally, I scripted an automated job that rotated the strategy after every 24‑hour ingestion peak.

**Result:**  
Read latency dropped from ~250 ms to 65 ms for our top queries, and SSTable count per node fell from 2000 to 350, cutting disk usage by 30 %. Write amplification stayed below 1.5x. The experience taught me that choosing the right compaction window and fine‑tuning thresholds can dramatically improve performance without adding hardware—critical in cost‑constrained environments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
