---
qid: ing_9d2d71aa22__aws__local
question: 'Explain: Compaction Strategies — SSTable compaction and compaction strategies
  \u00b7 scylladb/scylladb Wiki \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 253
output_tokens: 438
total_tokens: 691
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:20:22-05:00'
sources: []
---

**Situation & Task**  
While leading a migration from Cassandra to **ScyllaDB** for our real‑time analytics platform, I was tasked with reducing the 3 TB per node storage churn that caused nightly maintenance windows to exceed 6 hours.  

**Action (Dive Deep + Ownership)**  
I first mapped the current **SSTable compaction** pipeline: *SizeTiered* (default) merged files in a breadth‑first manner, producing many small SSTables and high I/O during reads. I compared it with Scylla’s *Leveled* strategy, which keeps SSTables of uniform size (4 GB) and performs background compactions that are predictable and low‑impact.

I rewrote the cluster configuration to enable **Leveled** compaction, tuned the `compaction_threshold` to 12 for our 512 GB nodes, and added a **Tiered** fallback for hot partitions. I also scripted automated monitoring with CloudWatch metrics (`scylla_compaction_bytes_per_second`) and triggered Lambda alerts when compaction exceeded 200 MB/s.

**Result (Deliver Results)**  
Post‑migration, nightly compaction time dropped from 6 hrs to **45 min**, a **92% reduction** in maintenance windows. Read latency fell by 35 ms on average, and disk I/O cost was cut by 40 %.  

**Learning & Bar‑raiser Insight**  
The key takeaway: *understand the trade‑offs between compaction strategy, write amplification, and read performance*. A bar‑raiser looks for ownership (I owned the entire migration), depth (I quantified I/O patterns and tuned thresholds), and learning from failure (initial attempts with SizeTiered caused hot‑spot throttling). This approach aligns with Amazon’s **Customer Obsession** and **Ownership** principles.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
