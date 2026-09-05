---
qid: ing_8329f34bf0__star__local
question: 'Explain: Streaming — HTTP/HTTPS | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 353
total_tokens: 589
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:55:37-05:00'
sources: []
---

**Situation** – At my previous company we launched a live‑video analytics service that streamed real‑time sensor data from thousands of IoT devices to our web dashboard. The existing batch pipeline couldn’t deliver the sub‑second latency required for anomaly alerts, and we had to support millions of concurrent users over HTTPS.

**Task** – Design a scalable, low‑latency streaming architecture that could ingest, process, and broadcast data in real time while ensuring security and compliance with GDPR.

**Action** – I chose an event‑driven approach using Apache Kafka as the ingestion backbone. Devices push encrypted JSON payloads to a secure HTTPS endpoint; the endpoint decrypts and forwards to a Kafka producer cluster (auto‑scaling on CPU). On the consumer side, we spin up stateless microservices in Kubernetes that read from topic partitions, run lightweight inference models (TensorFlow Lite) locally, and publish results to a Redis Streams instance. The front‑end consumes via Server‑Sent Events over HTTPS, providing a single‑page app with WebSocket fallback for legacy browsers. We implemented token‑based authentication and TLS termination at the ingress controller, while using Kafka’s ACLs for fine‑grained access control.

**Result** – The system handled 2 M messages per second with <200 ms end‑to‑end latency, a 60% reduction in alert response time compared to our previous batch model. I learned that combining HTTPS for secure ingestion with Kafka’s partitioning and Redis Streams for low‑latency delivery yields a robust, elastic pipeline suitable for real‑time analytics at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
