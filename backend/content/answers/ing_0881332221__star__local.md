---
qid: ing_0881332221__star__local
question: 'Explain: Handling In-Progress Requests — Idempotency | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 322
total_tokens: 562
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:46:01-05:00'
sources: []
---

**Situation:**  
In a recent project for an e‑commerce payment gateway, we observed that a burst of traffic during flash sales caused duplicate transaction submissions from flaky network clients. Our existing endpoint simply processed each POST as new, leading to double charges and inconsistent inventory counts.

**Task:**  
I had to design a stateless API layer that guaranteed idempotent handling of in‑progress requests so that repeated client retries wouldn’t corrupt data or trigger multiple charges, while still supporting high throughput.

**Action:**  
I introduced a lightweight request‑id header (`X-Request-ID`) and stored it in Redis with a 24 h TTL. Each incoming POST first checked Redis; if the ID existed, the service returned the cached response instead of re‑executing the payment logic. For new IDs, I wrapped the entire payment flow—authorization, capture, inventory update—in an optimistic concurrency control transaction using Postgres’s `SELECT … FOR UPDATE`. After successful commit, I persisted the request‑id and result to a separate audit table, then set it in Redis with the same TTL. The endpoint returned HTTP 200 with a deterministic payload so clients could safely retry.

**Result:**  
Duplicate charge attempts dropped from 12% during peak sales to <0.1%. Inventory consistency improved, and our SLA for payment processing hit 99.9% within 150 ms latency. I learned that coupling a short‑lived cache with database transactions can provide robust idempotency without sacrificing scalability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
