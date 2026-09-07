---
qid: ing_e720519bfd__aws__local
question: 'Explain: Replica Selection — HDFS Architecture Guide'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 486
total_tokens: 715
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:00:58-05:00'
sources: []
---

**Situation (S)** – While leading a data‑engineering team for a real‑time ad‑tech platform, we migrated our nightly batch pipeline from an on‑prem Hadoop cluster to Amazon EMR with S3 as the underlying storage. **Task (T)** – We had to guarantee 99.9 % read availability and keep latency under 200 ms for ad‑click analytics, which required a robust replica‑selection strategy.

**Action (A)** –  
1️⃣ *Design*: Implemented HDFS‑on‑S3 with EMR’s **Hadoop Distributed File System (HDFS) on S3**. Configured the `dfs.replication` factor to 3 and used **Amazon S3 Transfer Acceleration** for cross‑region replication.  
2️⃣ *Replica Selection*: Leveraged EMR’s built‑in **DataNode locality awareness**—the scheduler first checks the local node, then the same rack, finally any rack. Added a custom `FileSystem` hook that queried the S3 Access Analyzer to prioritize replicas in the nearest Availability Zone, reducing inter‑AZ traffic by 35 %.  
3️⃣ *Monitoring*: Deployed CloudWatch metrics (`HDFS_ReadLatency`, `ReplicaHealth`) and set up an automated Lambda to trigger re‑replication when a node’s health score dropped below 80 %.

**Result (R)** – Achieved **99.97 % read availability**, cut average query latency from 350 ms to 180 ms, and lowered storage costs by 12 % through targeted replication.  

---

### Leadership Principles  
- **Customer Obsession**: Delivered faster insights for ad‑buyers.  
- **Ownership**: Took full responsibility for end‑to‑end pipeline reliability.  

### Bar‑raiser Signals  
- **Depth (Dive Deep)**: Showed how HDFS locality and S3 Transfer Acceleration interplay.  
- **Quantified Impact**: Precise latency & cost savings figures.  
- **Learning from Failure**: Adjusted replication factor after a node failure that caused 2 % SLA breach, proving iterative improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
