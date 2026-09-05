---
qid: ing_2532738fff__star__local
question: 'Explain: Data Definition Language (DDL) Statements ¶'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 316
total_tokens: 552
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:43:10-05:00'
sources: []
---

**Situation:**  
During a fraud‑detection project for a fintech client, our data science team was pulling transaction logs from an on‑prem SQL Server into a Spark cluster. The nightly ETL job kept failing because the target staging tables had drifted: new columns were added in production, but the schema definition in the cluster wasn’t updated.

**Task:**  
I needed to design a robust process that would automatically keep the Spark‑SQL catalog in sync with the source database, so data scientists could query fresh features without manual intervention.

**Action:**  
I wrote a lightweight Python script that queried the SQL Server’s `INFORMATION_SCHEMA.COLUMNS` to extract DDL statements (`CREATE TABLE`, `ALTER TABLE ADD COLUMN`). The script compared the live schema against a YAML manifest stored in Git. When differences were detected, it generated the appropriate DDL and executed it via Spark’s JDBC connector, ensuring the Hive metastore reflected the exact column types and nullability constraints. I also added unit tests to validate that every new column had a corresponding feature pipeline.

**Result:**  
The nightly job error rate dropped from 12 % to <1 %. The automated DDL sync cut data prep time by 4 hours per week, allowing the model team to iterate on feature engineering 30 % faster. I learned that treating schema as code and integrating it into CI/CD pipelines is critical for scalable ML workflows.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
