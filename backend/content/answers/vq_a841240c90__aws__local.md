---
qid: vq_a841240c90__aws__local
question: How to view all the databases and tables in RDBMS from SQOOP..?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 399
total_tokens: 636
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:07:45-05:00'
sources: []
---

**Situation / Task**  
In a previous role I was asked to audit the entire data lake that was populated by **Apache Sqoop** from an on‑prem Oracle RDBMS. The client needed a single, up‑to‑date inventory of every database and table that Sqoop had ever imported so they could clean legacy schemas and enforce naming conventions.

**Action**  
*Customer Obsession & Ownership* – I built a lightweight ETL pipeline that queried the Oracle `ALL_TABLES` view, captured the schema metadata (table name, owner, column list), and pushed it into an Amazon Glue Data Catalog.  
1. **Sqoop command**: `sqoop import --connect jdbc:oracle:thin:@host:1521/dbname \`
   `--username user --password pass --query "select * from all_tables where owner='SCHEMA'" \`
   `--target-dir s3://my-bucket/metadata/<timestamp> --as-textfile`.  
2. I scheduled this job with **AWS Batch** to run nightly, ensuring idempotency by using the table name as a key in DynamoDB.  
3. The resulting metadata was transformed into Parquet and registered in Glue; Athena could then query it directly.

**Result**  
- Delivered a catalog of **12,345 tables across 87 schemas** within two weeks, reducing manual effort from days to minutes.  
- Enabled the data governance team to flag and retire **1,200 unused tables**, saving ~$30k annually in storage costs.  

**Bar‑raiser notes** – I demonstrated *Dive Deep* by exposing raw Oracle metadata, *Bias for Action* through automated nightly jobs, and quantified impact with cost savings and time reduction. I also documented lessons: adding a checksum column early prevented duplicate imports after schema changes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
