---
qid: ing_f00c10bf12__faang__local
question: 'Explain: Keep Receiving Fast — Webhooks | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 504
total_tokens: 738
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:57:41-05:00'
sources: []
---

**Clarify**  
The requirement is a “keep‑receiving” fast webhook system: many producers send events, and subscribers must get them with minimal latency while the service scales.  
Assumptions to confirm:  
• Event volume (≈10⁶ req/s).  
• Maximum acceptable delivery latency (< 100 ms).  
• Reliability guarantees (at‑least‑once, idempotency).  
• Subscribers may be up to thousands per event type.

**Approach**  
1. **Ingress layer**: API Gateway + load balancer → stateless microservice that validates and queues events.  
2. **Message broker**: Partitioned Kafka topics per event type; use key‑based partitioning for ordering.  
3. **Consumer workers**: Spin up a pool of “delivery” services, each subscribing to a subset of partitions.  
4. **Delivery logic**: For each event, HTTP POST to subscriber URLs with retry/backoff and circuit‑breaker patterns.  
5. **Ack & dedup**: Store delivery state in Redis (LRU cache) + persistent store for replay.  

**Depth**  
- Kafka guarantees 99.999% durability; partition count ≈ number of workers × 2.  
- Delivery service uses async HTTP client with a 200 ms timeout; retries up to 3 times, exponential backoff.  
- Idempotency keys (event ID + subscriber) prevent duplicates.  
- Complexity: Ingress O(1), broker O(log N), delivery O(1) per event.  

**Edge Cases**  
• Subscriber downtime → circuit breaker opens after N failures; events queued in Redis until health restored.  
• Burst traffic → Kafka auto‑scales partitions, workers scale horizontally.  
• Large payloads → stream body to subscriber using chunked transfer.

**Optimize & Communicate**  
- Profile latency per hop; shift hot paths to memory (Redis) and use HTTP/2 multiplexing.  
- Expose metrics (delivery latency, failure rate) via Prometheus; alert on SLA breaches.  
- Present trade‑offs: Kafka vs. Pulsar (better multi‑tenant isolation), Redis vs. Cassandra for state persistence.  

This design satisfies low latency, high throughput, and resilience—key FAANG criteria.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
