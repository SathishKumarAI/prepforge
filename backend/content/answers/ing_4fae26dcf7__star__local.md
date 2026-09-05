---
qid: ing_4fae26dcf7__star__local
question: 'Explain: New Key on Every Retry — Idempotency | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 323
total_tokens: 563
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:07:37-05:00'
sources: []
---

**Situation:**  
I was working on a payment‑processing API for a fintech startup that had to guarantee exactly one charge per user request even under network glitches and duplicate client retries.

**Task:**  
Design an idempotent endpoint so that if the same payment request is sent multiple times (due to timeouts or manual resends), the system would not create duplicate charges but still return the original transaction result.

**Action:**  
I introduced a “client‑generated” idempotency key field in the request header. The server stored each incoming key with its response status and payload in a Redis cache keyed by `userId:key`. On receipt of a request, the service first checked Redis; if an entry existed it returned the cached result immediately. If not, it proceeded to create a Stripe charge, persisted the transaction ID in PostgreSQL, and then stored the full response (including the new Stripe charge ID) back into Redis with a 24‑hour TTL. I also added a background job that periodically purged stale keys to keep memory usage bounded.

**Result:**  
The system achieved 99.9% idempotency compliance; duplicate requests no longer created extra charges, and the average latency dropped from 350 ms to 180 ms because cached responses bypassed external calls. I learned how careful key design and cache strategy can turn a fragile external integration into a robust, user‑trustworthy service.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
