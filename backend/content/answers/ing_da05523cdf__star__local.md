---
qid: ing_da05523cdf__star__local
question: 'Explain: Context — Pattern: Event sourcing'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 299
total_tokens: 533
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:44:18-05:00'
sources: []
---

**Situation:** In a fintech startup, we were building a real‑time fraud detection system for credit card transactions. Our analytics team noticed that model drift was happening faster than we could retrain because the training data was coming from an inconsistent snapshot of the database.

**Task:** I needed to design a pipeline that would provide a reliable, auditable stream of transaction events so we could train and update our models on exact sequences of user actions without replaying stale data.

**Action:** I introduced event sourcing by creating a Kafka topic that captured every CRUD operation on the transaction table as immutable JSON events. Each event included the entity ID, timestamp, operation type, and full payload. We used Debezium to stream MySQL binlogs into Kafka, guaranteeing order and durability. For feature engineering, we built an Apache Flink job that replayed these events to reconstruct user profiles in real time, feeding a rolling window of features into our XGBoost model. We also set up a PostgreSQL event store for audit and rollback purposes.

**Result:** The new pipeline cut model retraining time from 48 hours to under 4 hours, reduced concept drift by 37%, and gave the compliance team an immutable audit trail. I learned that treating domain changes as first‑class events not only solves data consistency but also unlocks real‑time learning at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
