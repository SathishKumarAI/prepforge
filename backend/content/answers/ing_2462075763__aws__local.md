---
qid: ing_2462075763__aws__local
question: 'Explain: Snapshots — HDFS Architecture Guide'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 438
total_tokens: 667
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:49:12-05:00'
sources: []
---

**Situation & Task (Customer Obsession / Ownership)**  
At my last role I led the migration of a legacy Hadoop cluster that processed 3 TB/day of log data for real‑time analytics. The production team needed point‑in‑time restores to debug downstream dashboards without affecting live ingestion.

**Action (Dive Deep / Bias for Action)**  
I designed an **HDFS snapshot strategy** using *Hadoop 3.x*’s built‑in snapshot feature, combined with AWS S3 for durable storage and Glacier for archival.  

1. **Snapshot creation** – Triggered every 30 min via cron + `hdfs dfsadmin -createSnapshot /data`.  
2. **Storage tiering** – Snapshots are first written to a *S3‑FS* (Amazon FSx for Lustre) for low latency, then replicated to S3 Glacier for cost savings.  
3. **Retention policy** – 7 days of active snapshots; older ones automatically migrated to Glacier using AWS Lambda and lifecycle rules.  

I added an automated **monitoring pipeline**: CloudWatch metrics on `hdfs_snapshot_success` + a Kinesis stream that triggers alerts if snapshot creation fails for >2 consecutive runs.

**Result (Deliver Results)**  
- Reduced point‑in‑time restore time from 45 min to <5 min.  
- Cut storage costs by **30 %** while keeping I/O latency <10 ms for active snapshots.  
- Achieved 99.999% snapshot availability; no production incidents reported in the first six months.

**Learning & Bar‑raiser cues**  
I documented failure scenarios (e.g., corrupted metadata) and built an automated rollback script, demonstrating ownership and continuous improvement. The design balanced **scalability** (S3/Glacier), **availability** (FSx replication), and **cost** (tiered storage).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
