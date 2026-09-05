---
qid: ing_00bcaf223c__star__local
question: 'Explain: Database Types — How to Decide Which Type of Database to Use'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 425
total_tokens: 665
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:29:59-05:00'
sources: []
---

**Situation** – In a recent churn‑prediction sprint at my previous company we had to move from a legacy monolith to a data‑centric architecture. The model needed real‑time feature updates from millions of customer events while still supporting batch training on historical logs.

**Task** – I was charged with choosing the right database stack that would support low‑latency inference, high write throughput for streaming data, and efficient storage for long‑term analytics, all within a $200k budget.

**Action** – First, I mapped our workload: 1M events/day, 10 GB of raw logs, 100k concurrent read queries during model serving. I compared relational (PostgreSQL), document (MongoDB), columnar (Amazon Redshift), and time‑series (InfluxDB) options. Using a cost‑of‑delay analysis, I ran a micro‑benchmark: a SELECT on user features vs. an INSERT of event streams. PostgreSQL handled 200 req/s reads but lagged at 50 req/s writes; MongoDB did the opposite. InfluxDB excelled at high write throughput (≈5k writes/s) and time‑based queries, while Redshift delivered fast aggregations for training data.

I decided on a hybrid approach: **InfluxDB** for real‑time event ingestion and feature derivation, **PostgreSQL** for transactional user data, and **Redshift** for nightly batch training. I built an ETL pipeline in Airflow to sync InfluxDB aggregates into Redshift, keeping the storage costs under budget.

**Result** – The new stack cut feature latency from 300 ms to <30 ms during inference, increased event ingestion capacity by 12×, and reduced monthly data‑storage cost by 18%. I learned that a single “best” database rarely exists; matching each workload pattern to the right technology is key.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
