---
qid: ing_8eb100b125__faang__local
question: What Is a Webhook? — Webhooks | System Design
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 494
total_tokens: 729
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:16:02-05:00'
sources: []
---

**Clarify**  
A webhook is an HTTP callback that lets one system notify another in real‑time when an event occurs (e.g., a new order or payment). The “source” registers a URL; when the event fires it sends a POST payload to that URL, and the “sink” processes it. I’ll assume we’re talking about stateless REST endpoints, HTTPS, idempotency, and basic auth or HMAC for security.

**Approach**  
1. **Registration** – API endpoint `/webhooks` where clients POST `{url, event_type, secret}`.  
2. **Storage** – Persist mappings in a relational table (id, url, event, secret, active).  
3. **Triggering** – On event occurrence, enqueue a job that iterates matching rows and performs an HTTP POST with the payload.  
4. **Reliability** – Exponential back‑off retries, circuit breaker, and deduplication via idempotency keys.  
5. **Security** – Sign requests (HMAC SHA‑256) with the stored secret; verify on receipt.

**Depth**  
- *Complexity*: O(k) per event where k is number of subscribers for that event; storage cost is O(n).  
- *Scalability*: Use a message broker (Kafka/Redis Streams) to decouple triggers from delivery.  
- *Latency*: Target <200 ms by batching in micro‑tasks and using async HTTP clients.  
- *Monitoring*: Metrics on success/failure rates, latency, and retry counts.

**Edge Cases**  
- Duplicate deliveries → use idempotency keys.  
- Unresponsive endpoints → after N retries mark webhook inactive.  
- High cardinality events (e.g., 10k per second) → partition by event type to avoid hot spots.  
- Payload size limits → enforce max body size and stream large payloads.

**Optimize & Communicate**  
Future improvements: caching webhook configs in Redis for O(1) lookup, using serverless functions for lightweight delivery, and supporting WebSocket fallbacks for ultra‑low latency. I’d explain the trade‑offs between synchronous vs asynchronous delivery and why idempotency is crucial for correctness, aligning with FAANG expectations of clean, production‑ready design.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
