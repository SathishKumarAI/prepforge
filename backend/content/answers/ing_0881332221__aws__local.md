---
qid: ing_0881332221__aws__local
question: 'Explain: Handling In-Progress Requests — Idempotency | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 448
total_tokens: 682
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:45:13-05:00'
sources: []
---

**Situation / Task**  
I led a cross‑functional team that built a real‑time recommendation API for a media platform serving 10 M daily active users. Every request could trigger expensive ML inference and database writes, so we needed to guarantee *exactly‑once* semantics under heavy load (≈200 req/s per user during peak).

**Action**  
1. **Idempotency key** – Clients passed a SHA‑256 hash of the payload; the API stored it in DynamoDB with a TTL of 24 h and an `in_progress` flag.  
2. **Distributed lock** – A Lambda function (event‑driven by API Gateway) acquired a lock via DynamoDB conditional write (`attribute_not_exists(id)`), ensuring only one worker could process a request at a time.  
3. **Retry logic** – If the lock existed, the caller received a `409 Conflict` with “Already processing”; clients were instructed to retry after back‑off.  
4. **Result cache** – Successful responses were cached in ElastiCache (Redis) for 5 min, so repeated identical calls returned instantly.

**Result**  
- Reduced duplicate ML runs by **96%**, cutting GPU compute cost from $2k/day to $80/day.  
- Latency dropped from 350 ms average to 120 ms post‑cache.  
- No user‑visible errors; SLA of 99.9% for “single result per request” was achieved.

**Reflection**  
Ownership: I took full responsibility for the end‑to‑end flow and drove the solution across services.  
Dive Deep: By instrumenting DynamoDB timestamps and Lambda logs, we discovered a subtle race that caused occasional double writes; fixing it required re‑thinking the conditional write logic.  

**Leadership Principles Highlighted**  
- **Ownership** – I owned the customer impact and cost savings.  
- **Customer Obsession** – Ensured users never saw duplicate recommendations or stale data.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
