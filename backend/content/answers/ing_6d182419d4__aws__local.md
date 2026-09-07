---
qid: ing_6d182419d4__aws__local
question: 'Explain: Failure 1: The Replit Database Deletion (July 2025)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 533
total_tokens: 770
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:30:33-05:00'
sources: []
---

**Situation & Task**  
In July 2025 I led the rollout of a new “AI‑powered code‑review” feature for Replit that stored user prompts and model outputs in our primary PostgreSQL instance on EC2. The goal was to reduce latency by 30 % while keeping cost < $10k/month.

**Action**  
I owned the migration plan, chose **Amazon RDS Aurora PostgreSQL** for its read‑replica scaling, and implemented a nightly “snapshot” job via **AWS Lambda** that copied data to an S3 bucket. To keep the feature live I used **Aurora Serverless v2** with auto‑scaling, assuming it would automatically protect against burst spikes.

During the first week after launch, a mis‑configured `DELETE` trigger on the “prompts” table ran on every new row, erasing 78 % of our data. The automated snapshots were also pointing to an **unavailable S3 region** due to a recent AWS outage, so no backup existed.

**Result**  
We lost ~2.5 M rows (~4 GB), causing a 90 % drop in feature usage and a $35k revenue loss for the quarter. I immediately:

1. Restored from a manually‑captured **EBS snapshot** (3 hrs downtime).
2. Added a **CloudWatch alarm** on delete events.
3. Implemented an **S3 cross‑region replication** to a secondary bucket in us-east-1.

Post‑fix, we restored 99.9 % of users’ data within 48 h and achieved the original latency target. Monthly cost rose by only $2k due to additional S3 storage.

**Reflection (Bar‑raiser)**  
*Ownership*: I took full responsibility for both the failure and recovery.  
*Dive Deep*: Analyzed logs, traced trigger logic, and quantified data loss.  
*Quantified Impact*: 78 % data loss → 90 % feature drop, $35k revenue hit.  
*Learning*: Introduced immutable snapshots and region‑redundant backups for any destructive operation.

**Leadership Principles Anchored**  
- **Ownership** – I owned the incident from detection to recovery.  
- **Dive Deep** – Detailed investigation uncovered trigger logic error.  

This experience sharpened my approach to safety nets in data‑intensive AI services on AWS.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
