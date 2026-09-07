---
qid: ing_d2b7ec1477__faang__local
question: 'Explain: Summary — Webhooks | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 470
total_tokens: 702
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:50:21-05:00'
sources: []
---

**Clarify**  
You’re asking for a design of a webhook‑based system that lets clients register URLs to receive event notifications (e.g., order updates). Key assumptions: *high volume, low latency*, *at least 10⁶ concurrent endpoints*, *exactly‑once delivery is preferred but eventual consistency acceptable*.  

**Approach**  
1. **API Gateway → Register/Delete**: Clients POST `/webhooks` with event types and target URL; we store metadata in a sharded key‑value store (e.g., DynamoDB).  
2. **Event Producer** pushes events to a partitioned message queue (Kafka/Redis Streams) keyed by event type.  
3. **Dispatcher Workers** consume the stream, look up subscribers from cache (Redis), and fire HTTP POSTs in parallel using an async worker pool.  
4. **Retry & Dedup**: Use idempotency keys per webhook; on failure schedule exponential back‑off; store retry state in a separate table.  

**Depth**  
- *Scalability*: Kafka scales horizontally; each partition can be consumed by one dispatcher, ensuring order per event type.  
- *Latency*: In‑memory cache reduces DB lookups; async HTTP calls keep dispatch latency < 200 ms for 99th percentile.  
- *Reliability*: Retry policy (max 5 attempts) + dead‑letter queue guarantees eventual delivery; use Circuit Breaker to avoid overloading downstream services.  

**Edge Cases**  
- **Invalid URLs** → validate on register, reject with 400.  
- **Unresponsive endpoints** → timeouts trigger retries and eventual blacklist after N failures.  
- **Duplicate registrations** → enforce unique composite key (client_id + event_type).  

**Optimize & Communicate**  
To improve throughput, batch HTTP requests per destination using multiplexing libraries; add a rate‑limit window per webhook to honor client SLA. I’d present this flow with a diagram, discuss trade‑offs (exact vs eventual delivery), and explain monitoring metrics (delivery success rate, retry count). This showcases structured reasoning, depth in design choices, and clear communication—hallmarks of FAANG interview success.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
