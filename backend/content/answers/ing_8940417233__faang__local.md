---
qid: ing_8940417233__faang__local
question: 'Explain: Designing Scalable Webhook Infrastructure'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 493
total_tokens: 724
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:03:44-05:00'
sources: []
---

**Clarify**  
We need a system that accepts, stores, and forwards webhook events from many clients to potentially millions of consumers with low latency and high reliability. Key assumptions: *event volume is bursty*, *consumers may be offline*, *delivery guarantees are at least once‑but‑ordered per consumer*, and *scalability must support 10⁶+ concurrent connections.

**Approach**  
1. **Ingress layer** – API gateway + auto‑scaling worker pool to validate signatures, de‑duplicate, and enqueue events into a durable message queue (Kafka or Pulsar).  
2. **Storage & state** – Persist raw payloads in an append‑only log (S3/Blob) for audit; maintain per‑consumer offsets in a distributed KV store (Redis Cluster/Cassandra).  
3. **Delivery engine** – Worker pool that pulls events, resolves consumer endpoints, and pushes via HTTP with exponential back‑off & circuit breakers.  
4. **Retry & dead‑letter** – After N attempts, route to DLQ for manual inspection; provide webhook dashboard for consumers to monitor status.

**Depth**  
- *Kafka* offers partitioned ordering and horizontal scaling; each consumer group reads from its own offsets → guarantees per‑consumer order.  
- *Back‑pressure* handled by queue size limits; if full, reject with 429 or buffer in memory until space frees.  
- *Idempotency*: include unique event ID in payload; consumers can safely retry.

**Edge Cases**  
- Network partitions: fallback to local cache and reconcile offsets once connectivity resumes.  
- Consumer downtime: ensure at‑least‑once delivery without duplicates using idempotent keys.  
- Malformed payloads: validate schema early, route to DLQ.

**Optimize & Communicate**  
- Use serverless functions for light workers to reduce operational overhead; keep stateful components in managed services (Kafka, Redis).  
- Instrument latency and error rates with Prometheus + Grafana; set alerts on SLA breaches.  
- Explain trade‑offs: Kafka gives ordering but adds complexity; serverless scales better but may increase cold‑start latency.  

This design balances throughput, reliability, and operational simplicity—exactly what FAANG interviewers expect.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
