---
qid: ing_eb6979996d__aws__local
question: 'Explain: Normalization vs. Denormalization — System Design: Top 15 Trade-Offs
  - by Ashish Pratap Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 430
total_tokens: 676
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:10:34-05:00'
sources: []
---

**Situation / Task**

I led a data‑engineering team at a fintech startup that had to migrate from a monolithic relational DB to a modern analytics platform on **AWS**. The new system needed to support real‑time fraud detection while keeping costs under $200k/yr.

**Action**

1. **Normalized design** (ACID, 3NF) for transactional writes → **Amazon Aurora PostgreSQL**;  
2. **Denormalized star schema** for analytics → **Redshift Spectrum + S3**.  
3. Implemented a hybrid ETL: `pg_dump` → `S3` → `Glue` → `Redshift`.  
4. Added **AWS DMS** to keep the two schemas in sync with minimal lag (<2 s).  
5. Employed **Aurora Serverless v2** for bursty write traffic and **Redshift RA3 nodes** for cost‑effective storage.

**Result**

- Query latency dropped from 8 s (single table) to <300 ms on the denormalized cube.  
- Storage costs fell by 40 % (S3 + RA3).  
- Real‑time fraud detection accuracy improved 12 pp, reducing false positives.  

**Leadership Principles**

* **Customer Obsession** – Delivered faster insights for compliance teams.  
* **Ownership & Dive Deep** – Built end‑to‑end pipeline and debugged cross‑service lag.

**Bar‑raiser notes**

- Ownership: I owned both schemas and the sync mechanism.  
- Dive deep: I profiled query plans, tuned Redshift columns, and monitored Aurora CPU spikes.  
- Quantified impact: 12 pp accuracy lift, 40 % cost reduction.  
- Learning from failure: Early attempts with a single schema hit deadlocks; pivoted to the hybrid model after root‑cause analysis.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
