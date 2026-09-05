---
qid: ing_13f168e30b__star__local
question: 'Explain: SQL Databases'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 319
total_tokens: 550
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:08:02-05:00'
sources: []
---

**Situation:**  
During a churn‑prediction project for a telecom client, the data science team discovered that our model’s input features were scattered across multiple legacy systems—billing logs in MySQL, customer demographics in PostgreSQL, and call detail records stored in an older Oracle DB.

**Task:**  
I was tasked with consolidating these disparate sources into a single, query‑friendly repository so we could run feature engineering pipelines at scale without pulling data out of each system daily.

**Action:**  
First, I designed a normalized schema in Amazon Aurora (MySQL compatible) that mirrored the core tables but added surrogate keys to unify customer identifiers across systems. Using AWS DMS, I set up continuous replication from the three source databases into Aurora, applying CDC transforms to keep the data fresh. Then I built an ETL pipeline with dbt that performed incremental loads, calculated rolling averages of call usage, and flagged high‑risk customers. Finally, I exposed the consolidated tables via Amazon Athena for ad‑hoc SQL queries used by the ML notebooks.

**Result:**  
The unified SQL layer cut feature extraction time from 12 hours to under 30 minutes nightly. Our churn model’s AUC improved from 0.72 to 0.78 thanks to richer, consistent features. I learned that a well‑designed SQL backbone can dramatically accelerate ML workflows and reduce data latency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
