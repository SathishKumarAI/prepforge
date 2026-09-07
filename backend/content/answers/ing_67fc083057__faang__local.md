---
qid: ing_67fc083057__faang__local
question: 'Explain: 5.4 Monitoring and Logging — Design Notification Service | System
  Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 674
total_tokens: 918
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:45:39-05:00'
sources: []
---

**1️⃣ Clarify**  
We need a *notification service* that can push alerts (email/SMS/push) to users in real‑time while providing monitoring & logging for reliability and observability.  
Assumptions:  

- 10 M+ daily active users, 100 k messages/second peak.  
- Deliveries must be **eventually consistent**; latency < 200 ms.  
- Users can opt‑in/out per channel.  
- We need audit trails and SLA metrics (dropped %, success rate).  

**2️⃣ Approach**  

| Layer | Responsibility |
|-------|----------------|
| **API Gateway** | Ingests notification requests, auth & rate‑limit. |
| **Message Queue** | Decouples producers from workers; e.g., Kafka or SQS. |
| **Worker Pool** | Pulls messages, enriches with user prefs, routes to channel adapters. |
| **Channel Adapters** (SMTP, Twilio, FCM) | External APIs; implement retry/back‑off. |
| **Observability Service** | Collects logs, metrics, traces; pushes to Prometheus/Datadog. |
| **State Store** | User preferences & delivery status (Cassandra or DynamoDB). |

**3️⃣ Depth**  

- **API**: idempotent POST `/notify` → `{userId, type, payload}`.  
- **Queue**: Partition by `userId` to preserve order; size 1‑5 MB per partition.  
- **Workers**: Horizontal autoscale; each worker processes ~200 msg/s.  
- **Retry Logic**: Exponential back‑off with jitter; max 5 attempts.  
- **Logging**: Structured JSON → Loki/Elastic; include `requestId`, `attempt#`.  
- **Metrics**: `notifications_sent_total`, `notifications_failed_total`, `latency_histogram`.  
- **Tracing**: OpenTelemetry context propagation to correlate request→queue→worker→adapter.  

Complexity: Queue ops O(1), worker processing O(log N) for priority queues; overall throughput linear in workers.

**4️⃣ Edge Cases**  

- *API surge*: rate‑limit + queue back‑pressure → drop with 429.  
- *External API downtime*: fallback to dead‑letter queue, alert ops.  
- *Duplicate requests*: use `requestId` idempotency key stored in Redis TTL = 24h.  
- *User opt‑out mid‑flow*: check state store before adapter call; log “skipped”.

**5️⃣ Optimize & Communicate**  

- **Batching**: group same channel messages to reduce API calls (e.g., 100 emails per batch).  
- **Circuit Breaker**: prevent cascading failures.  
- **Cold‑start mitigation**: keep a small pool of warm workers.  

I would narrate the design by walking through the data flow, emphasizing how each layer isolates concerns, guarantees observability, and scales horizontally while keeping latency low. This shows structured thinking, depth in trade‑offs, and clear communication—key FAANG signals.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
