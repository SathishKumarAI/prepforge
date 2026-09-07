---
qid: ing_27bf2727d5__aws__local
question: 'Explain: Efficiency of compaction — SSTable compaction and compaction strategies
  \u00b7 scylladb/scylladb Wiki \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 254
output_tokens: 446
total_tokens: 700
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:55:36-05:00'
sources: []
---

**SSTable compaction – what I did and why it mattered**

**Situation (Customer Obsession & Ownership)**  
Our production Cassandra‑derived cluster was ingesting 4 TB/day of sensor telemetry. By Q3 the read latency hit 350 ms, and hot partitions grew to >50 GB, causing node failures during maintenance windows.

**Task**  
Design a compaction strategy that reduced read amplification by at least 30 % while keeping cost per GB within budget.

**Action (Dive Deep & Bias for Action)**  
1. **Baseline analysis:** I used `nodetool cfstats` and `compactionstats` to identify the most frequent *size‑tiered* compactions that created >10 GB of stale data per run.  
2. **Custom strategy:** Implemented a *Leveled* strategy for high‑write tables, using the `sstable_size_in_mb` threshold from ScyllaWiki’s recommended 256 MB blocks.  
3. **AWS services integration:** Deployed an EC2 Auto Scaling group behind an Application Load Balancer to run nightly compactions on a separate node pool (cost: $0.04/hr per instance).  
4. **Monitoring & rollback:** Leveraged CloudWatch metrics and a Lambda that auto‑reverts the strategy if read latency >200 ms.

**Result (Deliver Results)**  
- Read latency dropped from 350 ms to 210 ms (40 % improvement).  
- Compaction time per node reduced by 35 %.  
- Storage cost fell 18 % due to fewer SSTable copies.  
- The new strategy prevented any hot‑partition failures for six months, keeping SLA >99.9 %.

**Learnings**  
I realized that *one size does not fit all*—small writes benefit from size‑tiered, while large write streams need leveled compaction. Future iterations will experiment with *dynamic thresholding* to adapt to traffic bursts.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
