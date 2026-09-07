---
qid: ing_7d0ec6c849__aws__local
question: 'Explain: Databases — Checksums | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 457
total_tokens: 687
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:08:13-05:00'
sources: []
---

**Situation & Task**  
At my previous role I led the migration of a legacy on‑prem MySQL cluster to an Aurora Serverless V2 deployment for our recommendation engine. The database held 3 TB of user interaction data and we had to guarantee data integrity across nightly ETL jobs that ran every 15 min.

**Action**  
I introduced **checksum validation** at three layers:

1. **Application level** – after each ETL run I compute a SHA‑256 hash of the new rows, store it in an S3 “checksums” bucket, and compare against the previous batch.  
2. **Database level** – enabled Aurora’s *point‑in‑time recovery* with automated *data checksums* (using `ALTER TABLE … CHECKSUM=1`).  
3. **Infrastructure level** – set up a Lambda that runs nightly on CloudWatch Events to run `SELECT BINLOG_CHECKSUM` against the MySQL binary log, and pushes anomalies to SNS for Ops alerts.

I chose Aurora Serverless V2 for its **auto‑scaling** (0–200 RDS capacity units) and built an RDS Proxy to reduce connection churn. The checksum Lambda is a lightweight 128 MB container that costs <$0.01 per run, keeping overall DB cost down by 12 % compared to the previous manual reconciliation process.

**Result**  
Post‑migration we saw a **35 % reduction in data corruption incidents**, and the automated checks cut manual verification time from 4 h to 15 min. Customer-facing recommendation latency dropped from 1.2 s to 0.8 s, directly improving NPS by 7 points.

**Learnings & Ownership**  
I own the end‑to‑end data quality pipeline and continuously monitor for drift; when a checksum mismatch occurs I trigger an automated rollback to the last known good snapshot. This deep dive into failure modes taught me that *small, frequent validations* outweigh large batch checks in high‑velocity systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
