---
qid: ing_927823187b__faang__local
question: 'Explain: Building a Webhook Receiver — Webhooks | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 469
total_tokens: 705
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:25:06-05:00'
sources: []
---

**Clarify**

You’re asked to design a webhook‑receiver service that ingests HTTP POSTs from third‑party services and forwards them downstream (e.g., queues or APIs). Confirm assumptions:  
• What volume of events per second?  
• Do we need guaranteed delivery, ordering, or deduplication?  
• How long must data be retained?  
• Which protocols and security requirements apply?

**Approach**

1. **Ingress layer** – scalable HTTP endpoint (NGINX/ALB + auto‑scaling).  
2. **Validation & auth** – verify signatures/HMAC, rate‑limit per client.  
3. **Queueing** – push payloads to a durable broker (Kafka/SQS) for decoupling.  
4. **Worker pool** – consumers that deserialize and forward to downstream services or databases.  
5. **Monitoring** – metrics on latency, drop rates, error codes; alert on anomalies.

**Depth**

- Use HTTPS + client certificates or shared secrets.  
- Store events in a partitioned topic keyed by `client_id` to preserve ordering per client while allowing parallelism.  
- Implement idempotent workers: hash payload → dedupe store (Redis/LRU) before processing.  
- Back‑pressure: expose queue depth via API; throttle ingress if depth exceeds threshold.  
- Complexity: O(1) for enqueue, O(log n) for dedupe lookup.

**Edge Cases**

- Malformed JSON or oversized bodies → return 400 & drop.  
- Duplicate signatures → ignore after idempotency check.  
- Sudden traffic spikes → auto‑scale ingress and increase broker partitions.  
- Downstream failure → retry with exponential backoff, persist to dead‑letter queue.

**Optimize & Communicate**

Discuss trade‑offs: Kafka gives low latency but higher operational cost; SQS is simpler but has at‑least‑once semantics. Emphasize observability: use distributed tracing (Jaeger) and log aggregation. Conclude by highlighting how this design scales horizontally, guarantees delivery, and isolates failures—key FAANG expectations for robust system architecture.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
