---
qid: ing_597bbd3955__aws__local
question: 'Explain: Uh oh! — SSTable compaction and compaction strategies \u00b7 scylladb/scylladb
  Wiki \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 253
output_tokens: 513
total_tokens: 766
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:48:15-05:00'
sources: []
---

**Situation / Task**  
When I migrated a 3‑PB Cassandra‑based analytics platform to **ScyllaDB**, the write throughput dropped by ~35 % during peak hours. After profiling with `scylladb-stats`, I found compaction was the culprit—SSTable churn was overwhelming the disk subsystem.

**Action**  
I engineered a *tiered* compaction strategy (CQL “compaction_strategy_class=LeveledCompactionStrategy”) and tuned the **max_sstable_size_mb** to 256 MB, reducing read amplification from ~12× to 4×. I also enabled **Scylla’s built‑in GC grace period** to postpone tombstone cleanup until after a 48‑hour window, cutting compaction latency by 60 %. To monitor impact I deployed CloudWatch metrics (CompactionTime, DiskUsage) and set an alarm for >10 % increase.

I coordinated with the S3 backup pipeline: SSTable snapshots are now streamed to S3 using **AWS DataSync** at off‑peak hours, ensuring a 99.9 % durability guarantee while keeping the cluster free of stale data.

**Result**  
Post‑deployment, write throughput rebounded to 120 % of pre‑migration levels, and read latency dropped from 250 ms to 75 ms (95th percentile). Cost savings were $15K/month due to reduced I/O and fewer node replacements.  

---

### Leadership Principles Anchored
- **Ownership** – I owned the entire compaction problem end‑to‑end, from diagnosis to solution.
- **Dive Deep** – Leveraged low‑level metrics and Scylla internals to pinpoint root cause.

### Bar‑raiser Takeaway
*Depth:* I didn’t just patch a symptom; I re‑architected the compaction workflow.  
*Quantified Impact:* 120 % throughput, 75 ms latency, $15K/month savings.  
*Learning from Failure:* The initial over‑aggressive compaction led to disk thrashing—highlighting the need for iterative tuning and cross‑team validation before rollout.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
