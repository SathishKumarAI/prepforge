---
qid: vq_ae5ed62cfc__star__local
question: How many types of tables have in Hive?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 342
total_tokens: 577
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:14:37-05:00'
sources: []
---

**Situation** – While leading a migration project from an on‑prem data lake to AWS Glue/Hive, I discovered that our legacy system had been using a mix of table formats without documentation. The downstream BI team was reporting inconsistent query performance and occasional data corruption.

**Task** – My goal was to catalog all Hive tables, identify their storage types (managed vs external), and standardize the usage so that we could enforce best practices for partitioning and compression.

**Action** – I ran `SHOW TABLES` across each database, then queried the Hive metastore with `DESCRIBE FORMATTED <table>` to pull out the `Table Type`, `Storage Format`, and `Location`. This revealed four main categories: **managed**, **external**, **transactional (ACID)**, and **temporary** tables. I created a spreadsheet mapping each table to its type, added notes on partition columns, and built a simple Python script that used PyHive to update any mis‑classified external tables back to managed where data ownership was clear. I also set up a nightly Airflow DAG to flag new tables that didn’t match the naming conventions.

**Result** – We reduced query latency by 35% for the most heavily accessed reports, eliminated accidental deletions of critical data, and cut the time it took to onboard new datasets from days to hours. The exercise taught me how crucial a clear taxonomy is in Hive and reinforced the importance of automated metastore checks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
