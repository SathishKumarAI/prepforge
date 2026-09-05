---
qid: ing_6248aa3832__star__local
question: 'Explain: Reserving a Key — Idempotency | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 338
total_tokens: 577
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:44:42-05:00'
sources: []
---

**Situation** – At my last company we built a payment API that accepted high‑volume checkout requests. A single user could hit the “checkout” endpoint many times due to network retries or buggy front‑ends, and our database would end up creating duplicate orders and charging customers twice.

**Task** – I had to design an idempotency mechanism that guaranteed each logical request was processed exactly once, even under concurrent traffic and partial failures, while keeping latency low (< 200 ms) and not adding a single point of failure.

**Action** – I introduced a “reserve‑key” pattern using Redis as a distributed lock store. When the API received an incoming request it generated a deterministic key (userID+orderHash) and attempted to `SETNX` it with a TTL of 5 minutes. If the key already existed, the service returned the cached result; otherwise it proceeded to create the order in Postgres, then stored the response body under the same Redis key before releasing the lock. I also added a background job that cleans stale keys and used Redlock for multi‑node safety.

**Result** – Duplicate orders dropped from 12% to <0.001%, revenue loss avoided by $1.2 M in a quarter, and average response time stayed at 180 ms. I learned the importance of combining fast in‑memory locking with durable persistence, and how TTLs prevent lock starvation while keeping system resilient.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
