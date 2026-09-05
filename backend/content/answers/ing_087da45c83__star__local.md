---
qid: ing_087da45c83__star__local
question: 'Explain: Log Retention — Change Data Capture (CDC) | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 358
total_tokens: 599
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:46:01-05:00'
sources: []
---

**Situation:**  
In my last role at a fintech startup, our real‑time fraud detection engine lagged behind by 12 % because the data pipeline was pulling stale snapshots from our PostgreSQL warehouse instead of streaming changes. The business required 99.9 % freshness for compliance.

**Task:**  
Design a log‑retention CDC layer that could ingest every write to the “transactions” table, buffer it in Kafka with a configurable retention window, and expose a low‑latency API for downstream services while keeping storage costs under $5k/month.

**Action:**  
I chose Debezium on top of Kafka Connect to capture Postgres WAL events, then implemented a compacted topic per entity type. To control cost I set the retention to 7 days and used tiered storage; older logs were archived to S3 with lifecycle rules. For downstream consumers I built a lightweight Rust microservice that subscribed to the CDC topics, applied schema evolution via Avro, and exposed a gRPC endpoint for real‑time queries. We also added a Prometheus exporter to monitor lag, ensuring it stayed below 200 ms.

**Result:**  
The new CDC layer cut data freshness from 12 % lag to <1 % and reduced the fraud engine’s average response time by 35 %. Storage costs stayed at $3.8k/month, and we gained a single source of truth that other teams now use for analytics and compliance reporting. I learned how to balance latency, cost, and data integrity in an event‑driven architecture.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
