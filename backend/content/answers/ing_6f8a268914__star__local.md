---
qid: ing_6f8a268914__star__local
question: 'Explain: Size-Tiered Compaction — SSTable compaction and compaction strategies
  \u00b7 scylladb/scylladb Wiki \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 262
output_tokens: 351
total_tokens: 613
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:10:03-05:00'
sources: []
---

**Situation:**  
In my last role I was tasked with improving read latency for a real‑time analytics platform built on ScyllaDB. The cluster had grown to 10TB and we were seeing >30 ms tail latencies during peak traffic.

**Task:**  
I needed to reconfigure the compaction strategy so that hot data stayed in smaller, more frequently merged SSTables while cold data was batched into larger ones, all without disrupting production workloads.

**Action:**  
I switched from the default Size‑Tiered Compaction Strategy (STCS) to a hybrid approach: I kept STCS for tables with high write churn but added a “min_sstable_size” of 10 GB and a “max_sstable_size” of 100 GB. This forced Scylla to merge smaller SSTables early, reducing read amplification on hot partitions. For cold tables I enabled Leveled Compaction Strategy (LCS) to keep a predictable read latency. I also tuned the compaction thread pool to 50% of available cores and set “compaction_throughput_mb_per_sec” to 200 MB/s per node, balancing CPU usage against disk I/O.

**Result:**  
After three weeks, tail latency dropped from 30 ms to under 12 ms, and read throughput increased by ~18%. The compaction queue length stabilized below 2 hours of data backlog. This exercise taught me that fine‑tuning size tiers can dramatically reduce read amplification without sacrificing write performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
