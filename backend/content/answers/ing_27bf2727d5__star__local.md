---
qid: ing_27bf2727d5__star__local
question: 'Explain: Efficiency of compaction — SSTable compaction and compaction strategies
  \u00b7 scylladb/scylladb Wiki \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 260
output_tokens: 440
total_tokens: 700
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:47:54-05:00'
sources: []
---

**Situation:**  
At my previous company we ran a real‑time analytics platform on ScyllaDB. By the end of Q2 our ingestion rate hit ~12 M rows per hour, but query latency for hot partitions started creeping past 200 ms during peak hours.

**Task:**  
I was tasked with cutting read latency by at least 40% without adding hardware, so I focused on optimizing SSTable compaction to reduce the number of overlapping files and improve cache hit rates.

**Action:**  
First, I ran `nodetool compactstats` to profile compaction churn. The data showed a high ratio of level‑0 SSTables (L0) piling up, which caused frequent merge compactions that increased disk I/O. I switched from the default **Size‑Tiered Compaction Strategy (STCS)** to **Leveled Compaction Strategy (LCS)** on the keyspace handling hot traffic. In LCS, each level holds a bounded number of SSTables and merges them in background when capacity is exceeded, keeping read paths short. I also tuned `compaction_throughput_mb_per_sec` to 400 MB/s to match our sustained write throughput, and enabled **SSTable compression** with Zstd at level 3 to cut disk usage by ~30%. Finally, I scheduled compactions during low‑traffic windows using Scylla's `auto_compaction` feature to avoid spikes.

**Result:**  
After the switch, read latency for hot partitions dropped from 200 ms to 120 ms (40% improvement). The number of L0 SSTables fell from an average of 12 to 2, reducing compaction I/O by ~70%. Disk usage decreased by 28%, freeing capacity for future growth. This exercise taught me that selecting the right compaction strategy and tuning throughput thresholds can dramatically improve both performance and storage efficiency in a production ScyllaDB deployment.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
