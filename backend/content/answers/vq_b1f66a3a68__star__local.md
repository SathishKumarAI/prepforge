---
qid: vq_b1f66a3a68__star__local
question: will be created in all ?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 363
total_tokens: 595
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:15:20-05:00'
sources: []
---

**Situation:**  
When I joined a fintech startup, our reporting team was pulling data from three different databases (PostgreSQL, MongoDB, and an on‑prem Oracle instance). Each system had its own schema, and the data warehouse in Snowflake was missing key dimension tables that were critical for compliance dashboards.

**Task:**  
I needed to design an automated ETL that would extract the raw records, transform them into a unified format, and load *the same* dimension tables into Snowflake, Redshift, and BigQuery—so every downstream BI tool had consistent data without manual intervention.

**Action:**  
Using Airflow, I created a single DAG with dynamic operators. Each extraction step ran in parallel across the three sources, then a PythonOperator applied a shared schema‑mapping function (leveraging Pandas and SQLAlchemy). For loading, I employed Snowflake’s COPY command, Redshift’s `COPY` from S3, and BigQuery’s `bq load`, all driven by a single YAML manifest that defined table names, columns, and partition keys. I added checksum validation and automated alerts via Slack.

**Result:**  
The pipeline reduced manual data prep time by 70%, ensured 99.9% data consistency across warehouses, and cut dashboard refresh latency from 12 hrs to under 30 min. I learned that a single source‑of‑truth definition and orchestration can unify disparate systems without duplicating effort.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
