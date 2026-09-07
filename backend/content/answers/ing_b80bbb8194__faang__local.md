---
qid: ing_b80bbb8194__faang__local
question: 'Explain: Step 1: Notification Request Creation — Design Notification Service
  | System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 624
total_tokens: 868
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:51:20-05:00'
sources: []
---

**Clarify**

You’re asked to design a *Notification Service* that handles “step 1: notification request creation.”  
Assumptions to confirm:  

| Question | Why it matters |
|----------|----------------|
| What types of notifications (email, push, SMS)? | Affects transport & format. |
| Volume and burst patterns? | Determines scaling strategy. |
| Delivery guarantees (at‑least‑once vs exactly‑once)? | Drives deduplication logic. |
| Latency budget? | Influences in‑memory vs async path. |
| Do we support scheduling or only immediate sends? | Adds a queue/cron component. |

**Approach**

1. **API Gateway → Front‑end service**: expose `POST /notifications` with payload & user context.  
2. **Validation & Enrichment**: verify recipient, enrich with preferences (channel, locale).  
3. **Persist to DB**: write a “notification record” (id, type, status=queued).  
4. **Publish to Message Queue** (e.g., Kafka/Redis Streams) for decoupling.  
5. **Worker pool** consumes the queue → selects channel & calls external provider.

This pipeline keeps the request path fast while delegating heavy lifting asynchronously.

**Depth**

- **Schema**: `notifications(id PK, user_id, type, payload, status, created_at, updated_at)`.  
- **Queue partitioning** by user_id ensures order per recipient.  
- **Retry & Dead‑Letter Queue**: exponential backoff; after N failures move to DLQ for manual review.  
- **Idempotency**: client passes `notification_id`; service checks before creating a new record, avoiding duplicates.  

Complexity:  
- *Write* – O(1) DB insert + O(log N) queue publish.  
- *Read/Retry* – proportional to worker throughput; bounded by consumer lag.

**Edge Cases**

| Edge | Mitigation |
|------|------------|
| High burst → queue backlog | Auto‑scale workers, add horizontal partitions |
| Provider outage | Fallback channel (e.g., SMS if email fails) |
| Duplicate requests | Idempotency key check |
| Schema evolution | Use schema registry + backward compatibility |

**Optimize & Communicate**

- **Performance**: cache user preferences in Redis to avoid DB lookups per request.  
- **Observability**: instrument metrics (`queue depth`, `processing latency`) and alerts for SLA breaches.  
- **Scalability**: use a stateless worker design; deploy via Kubernetes with horizontal pod autoscaling.

When presenting, walk through the data flow diagram, emphasize decoupling & fault tolerance, then quantify expected throughput (e.g., 10k req/s) to show you’ve considered capacity planning. This demonstrates structured thinking, clear communication, and depth—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
