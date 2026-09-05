---
qid: ing_810152b402__star__local
question: 'Explain: Problem 1: Data normalization — Reconciliation in Payment'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 333
total_tokens: 572
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:51:27-05:00'
sources: []
---

**Situation** – At my last fintech gig we had a daily batch that pulled raw transaction feeds from three different payment processors (Stripe, PayPal, and an on‑premise gateway). The data came in separate schemas with wildly different currency formats, timestamp zones, and amount precision; the reconciliation engine was flagging 12% of payments as mismatched even though they were correct.

**Task** – I was tasked to build a normalization pipeline that would ingest all feeds into a single canonical format, reconcile them within seconds, and reduce false positives below 2%.

**Action** – First, I mapped each source’s schema to a unified model in Apache Spark, applying UDFs to convert timestamps to UTC and amounts to cents. Then I used a two‑stage scaler: min–max for numeric fields (amount, fee) and one‑hot encoding for categorical flags (payment method). To handle missing values I leveraged median imputation per merchant. Finally, I wrapped the pipeline in Airflow DAGs so it ran nightly, feeding the reconciled table into our Kafka stream for real‑time alerts.

**Result** – The reconciliation error rate dropped from 12% to 1.3%, cutting manual triage time by 70%. The system processed 5 million transactions per day with sub‑second latency, and I documented the schema so new processors could be added in under a week. I learned that clean data pipelines are as critical as model accuracy in production ML systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
