---
qid: ing_b78cca0eb1__star__local
question: 'Explain: 17 Using the Publish-Subscribe Model for Applications'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 325
total_tokens: 563
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:38:16-05:00'
sources: []
---

**Situation:** In my last role at a fintech startup, we built a real‑time fraud detection pipeline that ingested millions of transaction events per day. Our model had to score each event within seconds and trigger alerts or blocks for suspicious activity.

**Task:** I needed to decouple the ingestion layer from the scoring engine so that new models could be deployed without downtime and multiple downstream services (alerting, compliance logging, analytics) could consume the same data stream.

**Action:** I chose Apache Kafka as the publish‑subscribe backbone. The ingestion service published raw transaction records to a “transactions” topic; each partition was keyed by account ID to preserve ordering. A scoring microservice subscribed to this topic, ran our gradient‑boosted tree model (using XGBoost), and pushed results to a separate “fraud‑scores” topic. Other services—alerting, audit logging, and BI dashboards—subscribed independently, each with its own consumer group. I implemented schema registry for Avro messages to enforce versioning and added Kafka Streams to enrich data in real time (e.g., adding geolocation).

**Result:** The system achieved 99.8% throughput with end‑to‑end latency under 150 ms. Deploying a new model required only updating the scoring consumer; no re‑writes or downtime occurred. I learned how pub‑sub not only scales horizontally but also provides robust, decoupled data flow essential for production ML pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
