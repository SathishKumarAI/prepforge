---
qid: ing_a353035114__star__local
question: 'Explain: Message brokers compared to databases — Messagebrokervsdb'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 315
total_tokens: 555
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:59:30-05:00'
sources: []
---

**Situation:**  
At a fintech startup we were migrating our real‑time fraud detection pipeline from a monolithic architecture to a microservices model. The existing analytics service stored every transaction in PostgreSQL and pulled data for downstream risk scoring, but latency kept growing as traffic doubled.

**Task:**  
I had to redesign the data flow so that new services could consume transaction events instantly while still retaining durability for audit purposes, all within 200 ms end‑to‑end latency.

**Action:**  
I introduced Apache Kafka as a message broker between the ingestion service and the fraud engine. Transactions were published to a topic; the fraud service subscribed and processed each record in parallel. To preserve persistence I configured Kafka’s log retention and used a separate PostgreSQL replica for archival queries, leveraging Kafka Connect to stream events into it asynchronously. We also added schema registry to enforce Avro schemas, preventing version drift.

**Result:**  
Latency dropped from 800 ms to under 120 ms; throughput scaled from 1k TPS to 15k TPS without bottlenecks. The audit database still held all records for compliance, but the real‑time path was decoupled and fault‑tolerant. I learned that a broker excels at decoupling producers/consumers and providing replayability, while a database remains essential for durable storage and complex queries.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
