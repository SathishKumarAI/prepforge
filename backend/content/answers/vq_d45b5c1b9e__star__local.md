---
qid: vq_d45b5c1b9e__star__local
question: Is it possible to add a parameter while running a saved job?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 337
total_tokens: 576
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:21:20-05:00'
sources: []
---

**Situation** – In late Q2 I was maintaining the nightly ETL pipeline that loads our click‑stream data into Snowflake. The job was scheduled in Airflow as a DAG that pulled from S3, transformed with dbt, and staged into a warehouse. One morning the ingestion failed because a new column “user_id” appeared in the source schema, but the DAG had no way to handle it.

**Task** – I needed to add an optional parameter for the table name suffix (e.g., “_v2”) so that the same DAG could run against either the legacy or the updated schema without rewriting code or redeploying a new DAG.

**Action** – I refactored the Airflow task to read a JSON config file from S3, added a “table_suffix” key with default “_v1”, and passed it as an Airflow variable. In the dbt models I used Jinja templating: `{{ var('table_suffix', '_v1') }}` to append the suffix in the SELECT statements. Then I updated the trigger to allow runtime injection of the variable via a REST call to the Airflow API, so operators could override the default when scheduling.

**Result** – The pipeline ran successfully against both schemas with a single DAG run; we cut deployment time from 2 hours to 10 minutes and reduced the risk of manual edits. I learned that treating configuration as code and exposing it through Airflow variables can make saved jobs truly parameter‑driven.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
