---
qid: ing_5e366f9e53__star__local
question: 'Explain: Deletes — Change Data Capture (CDC) | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 367
total_tokens: 606
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:36:20-05:00'
sources: []
---

**Situation**  
In my last role I was responsible for keeping our data warehouse in sync with the transactional PostgreSQL database used by a SaaS platform. The customer churn rate had risen to 18% and we needed near‑real‑time insights into why users were deleting their accounts.

**Task**  
I had to design a Change Data Capture (CDC) pipeline that reliably captured DELETE events from the source, propagated them to our analytics layer, and fed those deletions into downstream ML models that predict churn risk.

**Action**  
I chose Debezium with Kafka Connect because it streams binlog records as Avro messages. I added a “soft‑delete” flag in the application layer so each DELETE became an UPDATE marking `is_deleted = true`. In Kafka, I configured a topic partitioned by user_id and set up a compacted consumer group that writes to our BigQuery table via a Cloud Dataflow job. The Flow transforms the CDC records into a time‑series feature vector, appends a “deletion_timestamp”, and feeds it into an XGBoost model in Vertex AI. I also implemented idempotency by using Kafka’s exactly‑once semantics and replayed 30 days of history to bootstrap the ML model.

**Result**  
The pipeline processed 200k delete events per day with <5 ms latency, allowing our churn model to update predictions within an hour after a user deletion. As a result, we cut churn by 4% in two months and reduced data drift risk by 30%. I learned the importance of aligning CDC design with ML feature engineering needs and that soft deletes can simplify downstream analytics while preserving auditability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
