---
qid: ing_f36f20b527__star__local
question: 'Explain: Problem — Pattern: Database per service'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 317
total_tokens: 552
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:34:45-05:00'
sources: []
---

**Situation** – In my last role I was building a recommendation engine for a multi‑tenant e‑commerce platform. Each tenant had its own user base and product catalog, but the analytics team wanted to run global models to surface cross‑tenant trends. The existing monolithic database made it hard to isolate data for training without affecting live traffic.

**Task** – I needed to redesign the data layer so that each microservice could store its own structured data while still allowing a central ML pipeline to ingest clean, isolated datasets for model training and inference, all within our 12‑hour nightly batch window.

**Action** – I introduced a “database per service” pattern: every tenant got a lightweight PostgreSQL schema managed by Flyway migrations. For the ML pipeline I built an Airflow DAG that pulled each schema into a shared data lake on S3 using dbt, performed feature engineering in Spark, and stored the resulting Parquet files in a dedicated analytics bucket. This kept operational traffic unaffected while giving the model team consistent, versioned input.

**Result** – The new architecture cut training time from 6 hours to under 2 hours, increased data freshness by 30%, and reduced cross‑tenant data leakage risk to zero. I learned that isolating data at the schema level can dramatically improve both reliability and ML efficiency in a multi‑tenant environment.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
