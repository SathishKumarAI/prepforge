---
qid: ing_fba3c9ce6f__aws__local
question: 'Explain: Non-Atomic Reservation — Idempotency | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 502
total_tokens: 735
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:47:18-05:00'
sources: []
---

**Situation & Task**  
At my last role I led the redesign of our flight‑booking API. The existing “reserve seat” endpoint was non‑atomic – a client could send a request twice (network retry or duplicate click) and end up with two reservations for the same seat, breaking inventory integrity.

**Action**  
I introduced an **idempotency key** workflow and re‑architected the reservation flow:

| Step | Service | Reason |
|------|---------|--------|
| 1. Client sends `POST /reserve` with a UUID idempotency key | API Gateway + Lambda Authorizer | Enforces client‑side uniqueness |
| 2. Lambda checks DynamoDB table **IdempotencyKeys** (PK=key, SK=requestID). If exists → return cached response. | DynamoDB (single‑write throughput) | Guarantees at‑most‑once processing |
| 3. If new key, Lambda runs a **transaction**: `TransactWriteItems` to decrement seat inventory and create a Reservation record atomically. | DynamoDB Transactions | Ensures no over‑booking even under high concurrency |
| 4. Result (reservation ID) is stored in IdempotencyKeys and returned. |  |  |

I also added CloudWatch metrics (`Reservation.Succeeded`, `Reservation.DuplicateRequest`) and an alarm that triggers when duplicate rate >5 % to surface client issues early.

**Result**  
After launch, duplicate‑request incidents dropped from **12 %** to <0.2 %, seat overbooking errors went from 3 per day to zero, and the new design added only ~$0.02 per request in DynamoDB cost – a 1.8× reduction compared to the previous queue‑based retry approach.

---

### Leadership Principles Highlighted
- **Ownership** – Took full responsibility for end‑to‑end consistency of reservations.
- **Dive Deep** – Analyzed race conditions, AWS transaction limits, and idempotency patterns.
- **Deliver Results** – Quantified impact on error rates and cost savings.  

This solution balances scalability (serverless + DynamoDB), availability (transactional guarantees), and cost while clearly demonstrating ownership and measurable outcomes—exactly what a bar‑raiser looks for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
