---
qid: ing_9d2d71aa22__star__local
question: 'Explain: Compaction Strategies — SSTable compaction and compaction strategies
  \u00b7 scylladb/scylladb Wiki \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 259
output_tokens: 380
total_tokens: 639
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:46:28-05:00'
sources: []
---

**Situation**  
In my last role I was tasked with scaling a real‑time analytics platform that used ScyllaDB to store event logs for an ad tech company. The cluster had grown from 4 nodes to 20, and the compaction latency was creeping up, causing query slowness during peak traffic.

**Task**  
I needed to redesign the compaction strategy so that read amplification dropped below 1.5× while keeping write throughput above 10 kops/s and ensuring disk usage stayed under 70 % of capacity.

**Action**  
First, I switched from the default **SizeTieredCompactionStrategy (STCS)** to **LeveledCompactionStrategy (LCS)** because our workload was read‑heavy. I tuned LCS parameters: set *sstable_size_in_mb* to 100 MB and enabled *compaction_throughput_mb_per_sec* at 200 MB/s to avoid write stalls. I also implemented a custom **TimeWindowCompactionStrategy (TWCS)** for cold, archival data that only needed occasional scans. To monitor the effect, I used Scylla’s `nodetool compactionstats` and Grafana dashboards to track read latency, disk usage, and compaction queue length.

**Result**  
After the switch, read latency dropped from 250 ms to 95 ms on average (≈ 62 % improvement). Disk usage stabilized at 68 %, and write throughput remained above 12 kops/s. I learned that choosing the right SSTable compaction strategy based on access patterns—and fine‑tuning its knobs—can dramatically reduce latency without sacrificing capacity or performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
