---
qid: ing_5fad20e221__star__local
question: 'Explain: Read more — Messagebrokervsdb'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 333
total_tokens: 570
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:39:44-05:00'
sources: []
---

**Situation**  
At my last company we had a real‑time fraud detection pipeline that processed millions of transaction events per day. The data originally lived in an on‑premise relational database and was pulled into our Spark jobs every 15 minutes, which caused backlogs and stale alerts.

**Task**  
I needed to redesign the ingestion layer so that new transactions could be detected within seconds while still keeping a durable copy for audit and replay purposes.

**Action**  
I introduced Apache Kafka as the streaming backbone. Each transaction service published a lightweight JSON record (≈ 200 bytes) to a “transactions” topic with idempotent keys. In Spark Structured Streaming I consumed the topic using the built‑in Kafka source, applying a 5‑second micro‑batch window and performing stateful joins against a small in‑memory cache of known merchant risk profiles. To satisfy regulatory audit requirements, I also wrote every record to an HDFS parquet sink for long‑term storage. The architecture leveraged schema registry for evolving fields and used Kafka’s exactly‑once semantics via idempotent producers.

**Result**  
The end‑to‑end latency dropped from 15 minutes to under 7 seconds, increasing our fraud detection rate by 32% and reducing false positives by 18%. I learned that decoupling real‑time processing from persistent storage with a message broker not only improves responsiveness but also provides a clean audit trail without overloading the transactional database.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
