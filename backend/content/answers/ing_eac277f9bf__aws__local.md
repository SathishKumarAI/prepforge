---
qid: ing_eac277f9bf__aws__local
question: 'Explain: Idempotency Keys — Idempotency | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 508
total_tokens: 741
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:08:54-05:00'
sources: []
---

**Situation / Task**  
When I led the migration of our e‑commerce checkout API to a serverless architecture on AWS, we noticed duplicate orders when users retried payment requests—causing $12k/month in unnecessary chargebacks. The requirement was to guarantee *idempotent* order creation while keeping latency < 200 ms and cost <$0.01 per request.

**Action**  
I introduced **Idempotency Keys** stored in a single‑write‑low‑read table (Amazon DynamoDB) keyed by the client‑generated UUID. Each request first queries the key; if it exists, we return the cached response. If not, we:

1. Use an **AWS Lambda** to atomically create the order in **DynamoDB** and publish a “OrderCreated” event to **Amazon SNS** for downstream services.
2. Store the idempotency key with a TTL of 48 h and a status flag (`IN_PROGRESS`, `SUCCESS`) using conditional writes (optimistic locking).

We leveraged **API Gateway**’s request validation to enforce key presence, and added CloudWatch metrics to track duplicate attempts.

**Result**  
Post‑deployment, duplicate order rate dropped from 8.5% to <0.1%, eliminating $11.7k/month in chargebacks—**a 138 % cost saving**. Latency remained at 180 ms on average, and DynamoDB read/write capacity stayed below 20 RCU/WCU, keeping the monthly bill under $250.

---

### Leadership Principles Highlighted
- **Ownership** – I owned the end‑to‑end solution from design to metrics monitoring.
- **Dive Deep** – Used conditional writes and TTLs to guarantee consistency without extra round trips.
- **Deliver Results** – Quantified impact with real cost savings and performance numbers.

### Bar‑raiser Signals
- Demonstrated *deep technical knowledge* (DynamoDB conditional writes, Lambda idempotency patterns).
- Showed *quantifiable business value* (cost reduction, latency targets).
- Shared a *learning moment*: initial design used a separate table for keys, leading to eventual consistency issues; switched to single‑write atomicity after observing stale reads.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
