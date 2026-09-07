---
qid: ing_7d9311deed__faang__local
question: 'Explain: Example: GitHub Webhook to Your App — Webhooks | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 540
total_tokens: 780
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:37:10-05:00'
sources: []
---

**Clarify**

> *Problem*: Build a system that receives GitHub webhook events (e.g., push, pull‑request) and forwards them to our internal app for processing.  
> **Assumptions**:  
> • High request volume (tens of thousands per second).  
> • Events must be processed exactly once and in order per repository.  
> • The target app is a stateless microservice behind an autoscaler.

---

**Approach**

1. **Ingress Layer** – API Gateway + TLS termination.  
2. **Message Queue** – Kafka topic `github-events` (partitioned by repo‑ID).  
3. **Consumer Group** – one consumer per partition; each pulls events, deserializes JSON, and pushes to the app via HTTP/GRPC.  
4. **Exactly‑once guarantee** – use idempotent keys (`event_id`) stored in a Redis cache or write-through to Kafka offset commit after successful ack from the app.  
5. **Monitoring & Retry** – dead‑letter topic for failures; exponential back‑off retry logic.

---

**Depth**

*Kafka* gives high throughput, horizontal scaling, and partitioned ordering per repo. Consumers process events sequentially within a partition, ensuring order. After each event is acknowledged by the app, the consumer commits its offset—providing at‑least‑once semantics; idempotency keys eliminate duplicates.  
The API Gateway performs rate limiting (e.g., 100 req/s per IP) and verifies GitHub’s HMAC signature for security.

**Complexity**:  
• Ingestion O(1) per request.  
• Kafka throughput ≈ millions of messages/sec with proper broker sizing.  
• Consumer latency ≈ 10–50 ms (network + app processing).

---

**Edge Cases**

* Duplicate webhooks*: handled by idempotency key.  
* Out‑of‑order delivery*: partitioning guarantees order per repo; cross‑repo events are independent.  
* Service downtime*: messages buffered in Kafka; consumers resume once the app recovers.

---

**Optimize & Communicate**

- **Auto‑scaling**: Use Kubernetes HPA on consumer pods, scaling with Kafka lag metrics.  
- **Backpressure**: If the app is slow, throttle consumer commits to avoid offset backlog.  
- **Observability**: Centralized logs, Prometheus metrics (lag, latency), alerting on high retry rates.

This architecture balances reliability, scalability, and maintainability—exactly what FAANG interviewers expect.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
