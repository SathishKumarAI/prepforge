---
qid: ing_fba3c9ce6f__star__local
question: 'Explain: Non-Atomic Reservation — Idempotency | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 330
total_tokens: 569
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:52:05-05:00'
sources: []
---

**Situation:**  
In my last role at a fintech startup, we built an on‑demand recommendation engine that could reserve ad slots for users before delivering personalized content. The reservation API was called by multiple microservices during a single user session, and the database used PostgreSQL with a simple “INSERT … ON CONFLICT DO NOTHING” to prevent duplicate reservations.

**Task:**  
I had to guarantee that each slot reservation was idempotent even when the same request reached the service twice due to network retries or front‑end glitches. If a second identical call slipped through, it could create duplicate rows and break billing logic.

**Action:**  
I introduced a two‑phase commit pattern using a lightweight “reservation lock” table keyed by user ID + slot ID with an `EXCLUDED` clause that stored the request’s UUID. On each incoming reservation, the service first attempted to insert the lock row; if it already existed, it returned the existing reservation ID instead of creating a new one. I wrapped this in a single database transaction and exposed a small Go microservice that handled retries idempotently by re‑using the same UUID.

**Result:**  
After deployment, duplicate reservations dropped from ~12% to <0.01%. Billing accuracy improved, and our SLA for ad fill rate rose from 92% to 99.8%. I learned how careful transaction design can enforce idempotency without sacrificing throughput.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
