---
qid: ing_0135fa0db7__star__local
question: 'Explain: Communications — system-design-primer/solutions/system_design/pastebin/README.md
  at master \u00b7 donnemartin/system-design-primer \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 266
output_tokens: 340
total_tokens: 606
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:30:58-05:00'
sources: []
---

**Situation:** While leading a backend team at a fintech startup, we needed an internal log aggregation service similar to Pastebin’s “system_design” repository for quick code snippet sharing across teams, but with real‑time analytics on usage.

**Task:** Build a scalable, low‑latency communication layer that could ingest millions of paste events per day, expose REST endpoints for CRUD operations, and stream updates to dashboards without bottlenecks.

**Action:** I chose a hybrid architecture: a Kafka cluster as the ingestion backbone, Redis Streams for near‑real‑time message delivery, and PostgreSQL with JSONB columns for durable storage. Using Go’s `net/http` for microservices, I implemented a publish–subscribe pattern where each paste event was serialized to Avro, produced to Kafka, then consumed by a worker that wrote to Postgres and pushed to Redis Streams. For the dashboard, I built a lightweight WebSocket server in Node.js that subscribed to Redis Streams, ensuring sub‑second updates. We used Prometheus/Grafana for monitoring latency and throughput, tuning Kafka partitions and consumer group sizes based on observed 99th percentile latencies.

**Result:** The system handled 3 M events/day with <120 ms average latency and a 0.1 % error rate. Dashboards reflected changes within 200 ms, enabling developers to spot spikes instantly. I learned the importance of decoupling ingestion from persistence for scaling and how streaming layers can bridge real‑time needs with durable storage without sacrificing performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
