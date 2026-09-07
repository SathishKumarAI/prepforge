---
qid: ing_a818559fa0__faang__local
question: 'Explain: Add Observability — Webhooks | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 563
total_tokens: 797
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:15:33-05:00'
sources: []
---

**Clarify**  
We need to design an observability layer for a distributed system that exposes events via webhooks. The goal is to allow downstream services (e.g., monitoring dashboards or alerting engines) to subscribe to state changes without polling. Assume we already have event streams (Kafka, CloudEvents), and we must support high throughput, low latency, fault‑tolerance, and security.

**Approach**  
1. **Event ingestion** – consume events from the source bus into a “Webhook Dispatcher” service.  
2. **Subscription store** – a durable table (e.g., DynamoDB / Spanner) mapping event types → subscriber URLs + auth tokens.  
3. **Dispatch queue** – per‑subscriber FIFO queues (SQS/Redis Streams) to buffer outgoing calls and guarantee at‑least‑once delivery.  
4. **Worker pool** – stateless workers poll the queue, perform HTTP POST with retry logic (exponential backoff), idempotency via request IDs, and circuit‑breaker patterns.  
5. **Observability** – log each attempt, expose metrics (latency, success rate) to Prometheus; use tracing (OpenTelemetry) to follow a webhook flow.

**Depth**  
- **Throughput**: Partition the queue by subscriber ID → horizontal scaling of workers.  
- **Latency**: Keep queue latency < 200 ms for real‑time alerts; batch small payloads if needed.  
- **Reliability**: Use dead‑letter queues for persistent failures, allow manual retry via UI.  
- **Security**: Sign requests with HMAC or JWT, enforce TLS, validate callbacks.  
Complexity: O(1) per event dispatch to the queue; overall system scales linearly with subscribers.

**Edge Cases**  
- Subscriber downtime → retries until TTL expires.  
- Duplicate events → idempotent payloads via deduplication keys.  
- Malformed URLs or auth errors → immediate failure, alert admin.  
Test with 10k+ concurrent subscribers and simulate network partitions.

**Optimize & Communicate**  
We can reduce cost by sharing a single worker pool across all queues using a priority scheduler. For latency‑critical events, introduce a “fast path” that bypasses the queue for known high‑priority URLs. In interviews, I’d narrate: “First, let’s isolate ingestion from delivery so we can scale independently; next, we’ll guarantee at‑least‑once with retries and circuit breakers; finally, we’ll expose metrics to close the loop.” This shows clear problem decomposition, trade‑off awareness, and a production‑ready design.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
