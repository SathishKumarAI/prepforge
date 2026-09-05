---
qid: ing_205e60e582__star__local
question: 'Explain: Merging partitions — SSTable compaction and compaction strategies
  \u00b7 scylladb/scylladb Wiki \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 259
output_tokens: 353
total_tokens: 612
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:34:10-05:00'
sources: []
---

**Situation**  
At my previous company we ran a time‑series analytics platform on ScyllaDB. The ingestion rate hit 1 M rows per minute, and after a week the node’s SSTables ballooned to over 10 000 files, each around 128 MB. This caused read latency to climb from 5 ms to 80 ms and compaction overhead was killing CPU cycles.

**Task**  
I had to reduce the number of SSTables by an order of magnitude while keeping write throughput above 900 k rows per second and ensuring that read amplification stayed under 2×.

**Action**  
First, I profiled the compaction logs and discovered that the default “SizeTiered” strategy was creating too many small files. I switched to **Leveled Compaction Strategy (LCS)** with a level size of 1 GB and set `sstable_size_in_mb` to 512 MB. Then, I tuned `compaction_throughput_mb_per_sec` to 200 MB/s and enabled the *Compaction Priority* feature so that hot partitions were compacted first. To avoid write stalls, I added a background thread that monitored SSTable count and triggered *manual compactions* on the most fragmented tables.

**Result**  
Within two days, the number of SSTables dropped from 10 000 to 850, read latency fell to 12 ms, and CPU usage during compaction was cut by 35 %. I learned that choosing the right strategy and fine‑tuning thresholds is as critical as hardware capacity in a production ScyllaDB cluster.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
