---
qid: ing_a5e8d9c86b__aws__local
question: 'Explain: Leveled Compaction — SSTable compaction and compaction strategies
  \u00b7 scylladb/scylladb Wiki \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 255
output_tokens: 514
total_tokens: 769
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:42:10-05:00'
sources: []
---

**Situation (S)**  
I was tasked to redesign the analytics pipeline that ingested 20 TB of event data per day into a ScyllaDB cluster used by the ad‑tech team. The existing tiered compaction caused >15 % write amplification and read latency spikes during peak hours.

**Task (T)**  
Reduce write amplification, keep read latency <200 ms for 95 % of queries, and lower operational cost while maintaining data durability.

**Action (A)**  
I switched the cluster to **Leveled Compaction** (LC) because LC keeps each SSTable at a fixed size (~128 MB), thus limiting the number of overlapping files per level. I:

1. **Analyzed write patterns** with `nodetool stats` and confirmed 70 % of writes were time‑series, ideal for LC.
2. Configured *level0* to accept only 4 SSTables before flushing, preventing large merges.
3. Enabled *Compaction Thresholds* per level to avoid “level bump” storms.
4. Deployed **Scylla Manager** on ECS Fargate to automate compaction tuning and monitor disk usage.
5. Implemented an S3 backup pipeline (AWS DataSync → S3 Glacier) for immutable snapshots, reducing on‑cluster storage.

**Result (R)**  
- Write amplification dropped from 6× to 2.1×.  
- Read latency at the 95th percentile fell from 650 ms to **180 ms**.  
- Cluster disk usage decreased by ~30 %, cutting EC2 EBS costs by $4k/month.  

**Leadership Principles Highlighted**  
- *Customer Obsession*: Delivered faster, cheaper analytics for marketers.  
- *Ownership & Dive Deep*: Took end‑to‑end responsibility and engineered a data‑driven solution.

**Bar‑raiser Takeaway**  
Showed ownership by owning the entire pipeline, dove deep into compaction mechanics, quantified impact with real metrics, and learned from failed tiered experiments to iterate on LC.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
