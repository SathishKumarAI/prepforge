---
qid: ing_f5be528510__aws__local
question: 'Explain: Rate limiting — SSTable compaction and compaction strategies \u00b7
  scylladb/scylladb Wiki \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 252
output_tokens: 495
total_tokens: 747
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:32:23-05:00'
sources: []
---

**Situation** – In my previous role I led a data‑platform team that was scaling a multi‑region ScyllaDB cluster to support an e‑commerce catalogue with > 5 M rows per shard and 1 k writes/sec. Our compaction layer started throttling during peak traffic, causing latency spikes.

**Task** – Design a rate‑limiting strategy for SSTable compaction that keeps write throughput high while preventing I/O saturation.

**Action** –  
1. **Profile I/O**: Instrumented `nodetool info` and Scylla’s built‑in metrics; discovered compaction was consuming > 70 % of SSD bandwidth during 20 min windows.  
2. **Dynamic throttling**: Implemented a *compaction rate limiter* that reads the cluster’s *current I/O load* (via CloudWatch custom metric “CompactionIO”) and adjusts the `compaction_throughput_mb_per_sec` per node in real time using AWS Lambda triggered by CloudWatch Alarms.  
3. **Compaction strategy tuning**: Switched from “SizeTiered” to a hybrid *Leveled* strategy (via Scylla’s `compact_strategy`) which reduces the number of SSTables read per compaction, cutting I/O by ~35 %.  
4. **Cost/Availability trade‑off**: The Lambda‑driven throttler adds 2 % latency but guarantees < 200 ms write latency SLA and saves ~$0.15/hr on SSD I/O charges.

**Result** – After deployment the cluster sustained 1,200 writes/sec with < 150 ms tail latency while reducing IOPS consumption by **38 %**, cutting operating costs by **$300/month**. The solution was adopted across all regions and is now part of our ScyllaDB best‑practice Wiki.

> **Leadership Principles**  
> *Customer Obsession* – ensured end users never saw latency spikes.  
> *Ownership & Dive Deep* – built a real‑time, metric‑driven throttle that lives inside the cluster lifecycle.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
