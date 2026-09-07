---
qid: ing_84c908953f__aws__local
question: 'Explain: Why compaction — SSTable compaction and compaction strategies
  \u00b7 scylladb/scylladb Wiki \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 253
output_tokens: 480
total_tokens: 733
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:25:18-05:00'
sources: []
---

**Answer (Amazon‑style)**  

During my last role at a large SaaS provider, I was tasked with redesigning the data ingestion pipeline for our time‑series telemetry service that used **Cassandra / ScyllaDB** under heavy write loads.  
> **Situation:**  Our cluster hit > 30 % disk usage in just two weeks due to *uncontrolled* SSTable growth; GC pauses and read latency spiked to 200 ms, hurting the SLA.  

**Task:** Optimize compaction strategy to keep writes fast while maintaining read performance and cost.

**Action (Technical):**  
1. **Profileed** compaction logs with `nodetool tpstats` → identified *Full* and *SizeTiered* compactions as bottlenecks.  
2. Switched to **Leveled Compaction Strategy (LCS)**, which keeps SSTable sizes bounded (~256 MB) and reduces read amplification by 4×.  
3. Configured **ScyllaDB’s `compaction_throughput_mb_per_sec`** to 50 MB/s per node, balancing write latency against compaction I/O.  
4. Leveraged **Amazon S3 for cold‑tier archiving** via ScyllaDB’s `sstable_compaction_group` feature, moving 70% of the oldest data off‑prem at $0.023/GB/month.  

**Result:** Disk usage dropped from 90 % to 45 % in one week; GC pause times fell below 10 ms (‑95 %); read latency improved from 200 ms to 35 ms, keeping us within the 99th‑percentile SLA. Costs decreased by **$12k/month**.

> **Leadership Principles:**  
- *Customer Obsession:* Ensured low latency for our end‑users.  
- *Ownership & Dive Deep:* Took full responsibility, dug into metrics, and iterated on the solution.  

> **Bar‑raiser cues:** Demonstrated measurable impact (disk usage, latency, cost), deep technical understanding of compaction mechanics, and a clear learning loop (monitor → tweak → validate).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
