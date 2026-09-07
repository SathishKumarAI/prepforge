---
qid: ing_d3afd6678a__faang__local
question: 'Explain: Step 8: Sending the Notification — Design Notification Service
  | System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 484
total_tokens: 728
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:52:32-05:00'
sources: []
---

**Clarify**

You’re asked to design a *Notification Service* that pushes alerts (email/SMS/push) to users after a trigger event.  
Key assumptions:  
- High throughput (millions of events/day).  
- Multiple channels, each with its own SLA and cost.  
- Strong reliability: at least 99.9 % delivery, idempotent retries.  
- Users can opt‑in/out per channel.

**Approach**

1. **Event ingestion** – Kafka topic `notification_events`.  
2. **Routing layer** – a stateless worker that reads events, enriches with user prefs from Redis.  
3. **Channel adapters** – separate services (email, SMS, push) each exposed via gRPC.  
4. **Retry & dead‑letter queue** – exponential backoff; after 5 failures move to DLQ.  
5. **Monitoring** – Prometheus metrics + alerting on latency/delivery.

**Depth**

- **Throughput**: Kafka partitioned by user ID → horizontal scaling of workers.  
- **Latency**: Target <200 ms from event to dispatch; achieved with in‑memory cache and async I/O.  
- **Idempotence**: Each notification carries a UUID; adapters dedupe via Redis hash.  
- **Cost**: Use serverless functions for low‑volume channels (SMS) and dedicated VMs for bulk email.

Complexity: O(events × channels) per second, but bounded by Kafka throughput. Memory: cache ~50 MB/user prefs.

**Edge Cases**

- Duplicate events → dedupe at worker level.  
- User opt‑out after event queued → check cache before sending.  
- Channel outage → fallback to secondary channel or DLQ.

**Optimize & Communicate**

Future improvements:  
- Add machine‑learning ranking for channel prioritization (e.g., push over email).  
- Use a causal tracing system (OpenTelemetry) to surface delivery bottlenecks.  

When presenting, start with the problem restatement, walk through each layer with diagrammatic bullets, then dive into trade‑offs and metrics—this shows structured thinking, depth, and communication expected at FAANG interviews.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
