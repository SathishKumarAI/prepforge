---
qid: ing_1f3ce8fc74__faang__local
question: 'Explain: Use a Dead Letter Queue — Webhooks | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 459
total_tokens: 695
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:57:22-05:00'
sources: []
---

**Clarify**  
The goal is to build a webhook‑delivery system that reliably pushes payloads to external services, guaranteeing at‑least‑once delivery while gracefully handling transient failures (network hiccups, 5xx errors). We’ll assume: *stateless workers*, *horizontal scalability*, *no central lock contention*, and *support for retries with back‑off*.  

**Approach**  
1. **Publish‑Subscribe Layer** – A message broker (Kafka/Redis Streams) receives webhook events from producers.  
2. **Worker Pool** – Stateless consumers pop messages, invoke the target URL, capture HTTP status.  
3. **Retry Logic** – On non‑final error codes (429, 5xx), re‑queue with exponential back‑off via a delayed queue.  
4. **Dead Letter Queue (DLQ)** – After `N` attempts or on permanent errors (4xx client), move the message to a DLQ topic.  

**Depth**  
- *Message schema*: `{id, payload, target_url, attempt_count}`.  
- *Idempotency*: Include correlation ID; worker idempotently checks if already succeeded via a distributed cache (Redis).  
- *Complexity*: O(1) enqueue/dequeue; retries cost `O(log N)` due to delay queue ordering.  
- *Fault tolerance*: Broker replicates, workers stateless → any node can take over.  

**Edge Cases**  
- Network partitions: broker remains available; workers may retry longer.  
- Duplicate events: idempotency key prevents double delivery.  
- DLQ overflow: monitor size, trigger alerts, auto‑archive to cold storage (S3).  

**Optimize & Communicate**  
We can batch HTTP calls for identical targets to reduce round trips, and employ circuit breakers to stop hammering failing endpoints. During interviews I’d narrate the flow diagramically, justify each component with trade‑offs (e.g., Kafka vs. SQS), and highlight observability hooks (metrics on retry count, DLQ latency). This structured plan shows clear problem understanding, scalable design, and practical resilience.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
