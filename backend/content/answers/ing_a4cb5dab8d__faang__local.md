---
qid: ing_a4cb5dab8d__faang__local
question: 'Explain: company again in an event notification system'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 541
total_tokens: 773
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:08:23-05:00'
sources: []
---

**Clarify**  
You’re asking how a company could build an *event‑notification* platform (e.g., push alerts, email digests, webhook callbacks) that is reliable, scalable, and observable. I’ll assume:  
- Events originate from multiple microservices.  
- Consumers include mobile clients, web dashboards, and third‑party APIs.  
- Latency ≤ 200 ms for real‑time pushes; batch digest ≤ 1 h.  

**Approach**  
1. **Event ingestion layer** – a message bus (Kafka/Redis Streams).  
2. **Routing & filtering service** – decodes payloads, applies user preferences.  
3. **Delivery workers** – per channel (FCM/APNs, SMTP, webhook) with retry/back‑off.  
4. **Observability** – metrics, tracing, dead‑letter queue.  
5. **Scaling strategy** – partitioning by user ID, autoscaling workers.

**Depth**  
- *Kafka* provides durability and replay; each topic per channel ensures independent scaling.  
- Use a lightweight *worker pool* (e.g., Go goroutines) that pulls from Kafka partitions.  
- Implement idempotent delivery: store a hash of `(event_id,user_id,channel)` in Redis to avoid duplicates.  
- For push notifications, batch up to 100 events per FCM/APNs request to reduce overhead.  
- SMTP workers use pool connections and exponential back‑off; failed sends go to a DLQ.  
- Webhook callbacks are signed (HMAC) for security; retries follow RFC 6585 patterns.

**Edge Cases**  
- **Network partitions** → Kafka retains events until consumers catch up.  
- **Out‑of‑order events** → sequence numbers per user ensure correct ordering in digests.  
- **Large payloads** → compress before enqueueing, decompress at worker.  
- **Rate limits** (e.g., FCM) → token bucket back‑pressure.

**Optimize & Communicate**  
- *Performance*: Benchmark throughput; shift to gRPC for inter‑service calls if latency spikes.  
- *Cost*: Use spot instances for workers during low load, reserve capacity for peak.  
- *Observability*: Publish per‑channel success/failure rates; alert on >5% bounce.  

I’d explain this roadmap to the interviewers, highlighting trade‑offs (Kafka vs. RabbitMQ), how idempotency protects against retries, and how observability drives reliability—key signals of a FAANG‑style solution.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
