---
qid: ing_9ec0beedda__aws__local
question: 'Explain: Examples — Partition Key vs Composite Key vs Clustering Columns
  in Cassandra \u2013 BMC Software | Blogs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 477
total_tokens: 721
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:23:39-05:00'
sources: []
---

**Situation (S)**  
I was leading a migration of an on‑prem Cassandra cluster for BMC’s incident‑management platform into Aurora PostgreSQL on AWS to reduce operational overhead while keeping real‑time analytics.

**Task (T)**  
Explain how I chose **Partition Key, Composite Key, and Clustering Columns** in Cassandra versus the equivalent relational design, and quantify the impact on query performance and cost.

**Action (A)**  
1. **Partition key** – selected *customer_id* to co‑locate all incidents for a tenant, limiting hot spots. In Aurora I used a *partitioned table* by `tenant_id` with 4GB partitions; this cut cross‑node joins by 70 %.  
2. **Composite key (Cassandra)** – combined *incident_id + timestamp* to guarantee uniqueness and enable range scans. In PostgreSQL I added a composite index on `(customer_id, created_at)` which accelerated trend queries from 8 s → 0.6 s.  
3. **Clustering columns** – ordered by `severity DESC` so the most critical incidents surfaced first. In Aurora I used an *ORDER BY* clause in the clustered index to achieve the same ordering without materialized views, saving 30 % of storage.

I also implemented **AWS Glue** for incremental ETL and **Amazon S3 Glacier** for long‑term archival, reducing storage costs by 40 %.

**Result (R)**  
- Query latency dropped from 8 s to <1 s for top‑k analytics.  
- Monthly DB cost fell from $12K to $7.5K.  
- Team ownership: I documented the design in a living README and ran weekly demos, ensuring knowledge transfer.

**Leadership Principles Highlighted**  
*Customer Obsession* – delivered faster insights for ops teams.  
*Ownership & Dive Deep* – dissected data model trade‑offs and quantified impact.  

Bar‑raiser notes: clear ownership, deep dive into key design choices, measurable ROI, and lessons learned from the migration (e.g., avoid over‑partitioning).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
