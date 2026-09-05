---
qid: ing_fe3cf94ad4__star__local
question: 'Explain: Chat Servers — Design WhatsApp | System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 405
total_tokens: 647
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:57:21-05:00'
sources: []
---

**Situation:**  
When I joined a startup building a global messaging app, our user base had already hit 12 million active users, but the chat delivery latency was averaging 3.8 seconds during peak hours, causing complaints and churn.

**Task:**  
I was tasked with redesigning the chat infrastructure to reduce end‑to‑end latency below 200 ms for 99th percentile traffic while keeping costs under $4 M/yr and ensuring data consistency across three continents.

**Action:**  
I broke the problem into four layers: (1) **Message ingestion** – I switched from a single Kafka cluster to a sharded, geo‑replicated Kafka setup with per‑user topic partitions, using Avro for schema evolution. (2) **Storage** – replaced our monolithic MySQL DB with a hybrid approach: Redis Streams for hot messages and Cassandra for long‑term retention, tuned read/write consistency to QUORUM/LOCAL_QUORUM. (3) **Delivery** – introduced a push‑notification microservice that pulls from the stream, batches per device region, and uses WebSocket + MQTT fallback with exponential backoff. (4) **Observability** – deployed OpenTelemetry for tracing every hop and Grafana dashboards to spot bottlenecks in real time. I also ran chaos experiments to validate fault tolerance.

**Result:**  
Latency dropped to 120 ms at the 99th percentile, reducing churn by 18 %. The new architecture cut operational costs by 22 % through better resource utilization, and we achieved a 30 % higher throughput during peak times. I learned that micro‑services coupled with event‑driven design and careful consistency tuning are key to scaling real‑time messaging at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
