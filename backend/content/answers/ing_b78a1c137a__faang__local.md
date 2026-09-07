---
qid: ing_b78a1c137a__faang__local
question: 'Explain: Step 2: The Provider Records an Event — Webhooks | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 588
total_tokens: 828
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:49:45-05:00'
sources: []
---

**Clarify**

We’re asked to design the *“Provider records an event”* step of a webhook‑based event system.  
Assumptions I’d confirm:  

- The provider is a third‑party service that emits events (e.g., Stripe, GitHub).  
- Events are sent via HTTP POSTs to our callback URL.  
- We must guarantee *at least once* delivery, preserve order per entity, and scale to millions of requests/day.  
- Security: verify signatures, rate limit malicious callers.

**Approach**

1. **Ingress Layer** – API gateway / load balancer with TLS termination, request validation, and IP whitelisting.  
2. **Message Queue** – Push validated payloads into a durable queue (Kafka/Redis Streams) keyed by entity ID to maintain ordering.  
3. **Consumer Workers** – Pull messages, write event record to a transactional DB (PostgreSQL or a NoSQL table with partition key = entity).  
4. **Acknowledgment Flow** – If consumer fails, re‑queue; after successful DB write, send 200 OK back to provider.  
5. **Monitoring & Metrics** – Track latency, queue depth, failure rates; alert on spikes.

**Depth**

- **Queue choice**: Kafka gives exactly‑once semantics with idempotent producers; Redis Streams offers low overhead for high throughput.  
- **Ordering**: Partition key = `entity_id` ensures events for the same entity are processed sequentially while allowing parallelism across entities.  
- **Idempotency**: Store a hash of event ID + payload in DB to dedupe retries.  
- **Scalability**: Horizontal scaling of consumers; auto‑scale based on queue depth.  
- **Latency**: Target < 200 ms from receipt to DB write; use async I/O and batching where possible.

**Edge Cases**

- Duplicate events (same ID) → dedup logic prevents double writes.  
- Provider throttling → exponential backoff retries before marking as failed.  
- Payload size > queue limit → chunking or rejecting with 413.  
- Security breach → signature mismatch → drop request and log.

**Optimize & Communicate**

- **Batching**: Group events per consumer to reduce DB roundtrips; trade‑off is slightly higher latency for throughput.  
- **Schema evolution**: Use JSON schema validation and store version metadata so downstream consumers can adapt.  
- **Cost**: Reserve compute for peak periods, use spot instances for workers, archive old events to cold storage.

In sum, the design balances reliability (acknowledgments, retries), scalability (partitioned queue, stateless workers), and maintainability (clear separation of concerns) – the key qualities interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
