---
qid: ing_355b9750a1__faang__local
question: 'Explain: RESTful API Requests — Top 6 Cases to Apply Idempotency'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 589
total_tokens: 828
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:48:07-05:00'
sources: []
---

**Clarify**  
The interviewee is asked to explain *when* a RESTful endpoint should be idempotent and why. I’ll assume the audience knows HTTP verbs, status codes, and the idempotency concept (same result on repeated identical requests). The goal: list six common use‑cases where idempotence matters.

**Approach**  
1. Identify operations that alter state or resources.  
2. For each, reason whether repeated identical calls must yield the same final state.  
3. Map to HTTP verbs and typical business logic.

**Depth (Six Idempotent Cases)**  

| Case | Typical Verb(s) | Why Idempotent? | Example |
|------|-----------------|------------------|---------|
| 1️⃣ Create with client‑supplied ID | `POST /users` with body `{id:123,…}` | Prevent duplicate users if retry occurs. | Same user returned on second POST. |
| 2️⃣ Update a resource | `PUT /orders/42` | Reapplying the same update must leave order unchanged. | Order status stays “shipped”. |
| 3️⃣ Delete a resource | `DELETE /sessions/abc` | Deleting an already‑deleted session should still succeed (e.g., return 204). | Subsequent DELETE returns 404 or 204, not error. |
| 4️⃣ Conditional GET for caching | `GET /products/7?etag=xyz` | Repeated fetches must produce same representation. | Same JSON body on each request. |
| 5️⃣ Payment capture with idempotency key | `POST /payments/capture` (header X‑Idempotency‑Key) | Avoid double charging when client retries after timeout. | One charge, second POST is a no‑op. |
| 6️⃣ User activation link | `GET /activate?token=abc` | Clicking the same link again should not create new accounts or change state. | Same “already activated” message. |

**Edge Cases**  
- **Non‑idempotent verbs (POST)**: if body lacks a client key, retries may duplicate data.  
- **Time‑sensitive updates**: e.g., stock decrement – must lock or use optimistic concurrency.  
- **Partial failures**: ensure rollback to preserve idempotence.

**Optimize & Communicate**  
Explain that implementing idempotency often means storing a request ID → result mapping (e.g., Redis with TTL) and checking it before processing. Mention trade‑offs: storage overhead vs. safety. Conclude by stressing that idempotent APIs improve resilience, simplify client retry logic, and reduce accidental side effects—key for large‑scale services at Meta/Google/Amazon.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
