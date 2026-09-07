---
qid: vq_84d1898e40__aws__local
question: How do you copy just the structure of a table?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 462
total_tokens: 693
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:01:18-05:00'
sources: []
---

**Situation / Task**  
At my previous role I had to migrate a legacy PostgreSQL schema to Amazon Redshift for analytics. The migration team needed *only the table structure* (columns, types, constraints) before loading data, so we could validate downstream ETL jobs without pulling large volumes of data.

**Action**  
I leveraged **AWS Glue Catalog** and **Redshift’s `CREATE TABLE AS` with `SELECT 1/0` trick** to copy schemas. First, I ran a lightweight `pg_dump --schema-only` against the source, parsed it, and used AWS Glue ETL jobs (Python) to generate DDL for Redshift. The job was scheduled on **Amazon EMR** using Spark to parallelize parsing across many tables—this cut execution time from 2 hrs to under 15 min for a 1,200‑table database.  
For incremental schema syncs I created an **AWS Lambda** function triggered by S3 events whenever the source schema changed; it compared Glue Catalog metadata using `boto3` and applied `ALTER TABLE` statements via Redshift Data API.  

**Result**  
The automated pipeline reduced manual effort by 80 % (from ~8 hrs to <1 hr per migration) and eliminated data‑drift errors, keeping downstream dashboards accurate. Cost stayed under $200/month thanks to spot EMR instances and Lambda’s pay‑per‑invoke pricing.

> **Leadership Principles**  
> • *Ownership* – I built an end‑to‑end solution that handled schema changes automatically.  
> • *Dive Deep* – By inspecting catalog metadata programmatically, we surfaced hidden constraints (e.g., missing NOT NULL) that previously caused downstream failures.  

**Bar‑raiser takeaway**  
The interview panel looks for a clear ownership narrative, deep technical justification (why Glue + EMR over direct SQL), quantified impact, and evidence of learning—here I iterated on the initial manual script to create a reusable, cost‑effective, highly available pipeline.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
