---
qid: vq_6e128378bd__aws__local
question: SQL Managed Instance ?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 224
output_tokens: 413
total_tokens: 637
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:56:23-05:00'
sources: []
---

**Situation & Task**

In my previous role I was tasked with migrating a legacy on‑premise data warehouse to AWS while keeping the existing T‑SQL codebase intact. The client had a 1 TB transactional store and ran nightly ETL jobs that took ~4 hrs, producing reports for 50 business analysts.

**Action (Design)**

I chose **Amazon RDS SQL Server Managed Instance** because it supports in‑memory OLTP, Always On availability groups, and native T‑SQL compatibility—exactly what the client needed to avoid code rewrites.  
*Architecture*:  
- **RDS MI** with Multi-AZ for HA (primary + synchronous standby).  
- **Aurora PostgreSQL** as a read replica for reporting workloads to offload OLTP traffic.  
- **AWS Data Migration Service (DMS)** for continuous data capture (CDC) and minimal downtime.  
- **Amazon S3** + **Glue** for incremental lakehouse ingestion, feeding Redshift Spectrum for ad‑hoc analytics.

I also implemented **RDS Proxy** to pool connections, reducing per‑connection overhead by ~30 % and lowering CPU usage. Cost was optimized by choosing a **db.m5.large** instance with reserved capacity, saving 40 % annually versus on‑demand.

**Result**

- Migration completed in 3 days (vs the planned 7).  
- ETL runtime dropped from 4 hrs to 45 min—an 88 % improvement.  
- Report latency decreased from 15 min to <2 min, boosting analyst satisfaction scores by 20 points on our quarterly survey.  

**Reflection**

I took full ownership of the migration plan, validated each step in a staging environment (Dive Deep), and introduced automated rollback scripts—an early bias for action that prevented potential data loss. The success was quantified and directly tied to business outcomes, which is what bar‑raisers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
