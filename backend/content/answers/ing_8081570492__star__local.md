---
qid: ing_8081570492__star__local
question: 'Explain: Deleting the old SSTables — SSTable compaction and compaction
  strategies \u00b7 scylladb/scylladb Wiki \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 262
output_tokens: 404
total_tokens: 666
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:50:31-05:00'
sources: []
---

**Situation:**  
While leading the migration of our customer‑feedback analytics platform from Cassandra to ScyllaDB, we hit a performance wall: query latency spiked to 250 ms during peak hours because the node’s storage engine was bloated with stale SSTables from nightly batch imports.

**Task:**  
I had to design and execute a compaction strategy that would purge obsolete data without disrupting real‑time ingestion or compromising fault tolerance, all while keeping the cluster within its IOPS budget.

**Action:**  
First, I enabled ScyllaDB’s “SizeTieredCompactionStrategy” (STCS) on the analytics table, but with a custom `compaction_window_size` of 2 hours to keep windows tight. Then, I scripted a cron job that ran `nodetool compact` during low‑traffic windows, passing a `--max-sstable-size=1GB` flag to force aggressive compaction. To avoid hot‑spotting, I staggered the compactions across replicas using Scylla’s “Parallelism” setting (set to 4). Finally, I monitored SSTable counts via JMX and adjusted the `sstable_preemptive_open` threshold to keep read amplification under control.

**Result:**  
After two weeks of iterative tuning, we cut SSTable count from ~3,200 to <300 per node, reducing disk usage by 40 % and slashing read latency from 250 ms to 85 ms. The compaction schedule also kept IOPS within the 20k limit, preventing throttling during peak traffic. This exercise taught me that a well‑configured, time‑windowed STCS combined with controlled compaction windows can dramatically improve ScyllaDB’s write‑amplification and overall system health.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
