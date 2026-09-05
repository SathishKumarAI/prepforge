---
qid: ing_5d411a512f__star__local
question: 'Explain: All Database Lists — All Dbs List'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 365
total_tokens: 601
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:34:37-05:00'
sources: []
---

**Situation:**  
At my last role, the analytics team was stuck because our data lake had grown to over 1200 tables across 30 different Snowflake warehouses. Every time we ran a quarterly model, we had to manually sift through the warehouse metadata to find which databases contained the newest staging tables—time‑consuming and error‑prone.

**Task:**  
I needed to build an automated “All Dbs List” utility that could query Snowflake’s information schema once per run, return every database name along with its creation date and size, and expose it via a simple REST endpoint for downstream pipelines.

**Action:**  
Using Python 3.11, I wrote a small script that leveraged the `snowflake-connector-python` library to execute `SHOW DATABASES`. I parsed the result into a Pandas DataFrame, computed cumulative bytes per database with `SELECT SUM(bytes) FROM information_schema.tables`, and cached the list in Redis for 24 hours to avoid redundant calls. The REST service was built with FastAPI, returning JSON that could be consumed by our Airflow DAGs. I also added a health check that pinged Snowflake every 30 minutes.

**Result:**  
The new “All Dbs List” API cut the data‑prep time for each model from ~45 minutes to under 5 minutes—saving roughly 200 engineer hours per quarter. The cache reduced Snowflake query load by 70%, and we now have a single source of truth for database metadata that scales automatically as our lake grows.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
