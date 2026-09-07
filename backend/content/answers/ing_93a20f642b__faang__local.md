---
qid: ing_93a20f642b__faang__local
question: 'Explain: How Webhooks Work — Webhooks | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 462
total_tokens: 697
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:27:23-05:00'
sources: []
---

**Clarify**  
You’re asking how a webhook system is designed—i.e., the flow from an event source (the “producer”) to a consumer endpoint via HTTP callbacks. Key assumptions: single‑tenant vs multi‑tenant, reliability requirements (at least once delivery), and scale (thousands of events/sec).

**Approach**  
1. **Event source** emits an event object.  
2. **Event bus / queue** buffers the event (Kafka/Redis Streams).  
3. **Worker pool** consumes events, looks up subscriber URLs, serializes payloads, and sends HTTP POSTs.  
4. **Retry & back‑off** logic for failures; idempotency keys to avoid duplicates.  
5. **Monitoring / metrics** track latency, success rate, and throttling.

**Depth**  
- *Queue*: Kafka partitions per tenant → horizontal scaling.  
- *Worker*: Stateless containers (e.g., Go microservice) read from the queue, perform a lookup in a fast KV store (Redis) for webhook registrations, then HTTP client with timeout + circuit breaker.  
- *Retry policy*: Exponential back‑off up to N attempts; after that, push to a dead‑letter queue.  
- *Idempotency*: Include `X-Webhook-ID` header derived from event ID; consumer can dedupe.  
- *Security*: Sign payloads (HMAC) and verify on the consumer side.  

**Edge Cases**  
- Consumer downtime → retries exhaust → SLA breach.  
- High latency consumers → back‑pressure on queue.  
- Duplicate events in source → idempotency needed.  
- Malformed URLs or unsupported HTTP methods.

**Optimize & Communicate**  
To reduce cost, use serverless workers (AWS Lambda) with concurrency limits tied to queue depth. For low latency, keep a cache of webhook endpoints per tenant. In interviews, explain trade‑offs: using Kafka gives durability but adds complexity; Redis Streams is simpler but less fault‑tolerant. Highlight that the design balances reliability, scalability, and observability—key for any FAANG‑grade system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
