---
qid: ing_2090535487__star__local
question: 'Explain: Idempotency — How to Avoid Double Payment'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 320
total_tokens: 557
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:34:31-05:00'
sources: []
---

**Situation:**  
In a fintech startup, our payment microservice handled high‑volume credit‑card transactions. During a recent launch, we saw a spike in duplicate charges when users refreshed the checkout page or experienced network latency.

**Task:**  
I needed to design and implement an idempotency mechanism that guaranteed each user action resulted in at most one charge, while keeping latency low for millions of concurrent requests.

**Action:**  
I introduced a per‑user request ID generated client‑side and sent it with the payment payload. On the server, we used Redis as a fast, distributed cache to store a hash mapping `request_id → transaction_id`. Upon receiving a payment, the service first checked Redis; if the key existed, it returned the stored transaction ID immediately (no new charge). If not, it proceeded to call our payment gateway, persisted the result in PostgreSQL, and then set the key with a 24‑hour TTL. To handle race conditions, I wrapped the cache lookup and creation in a Lua script executed atomically in Redis. We also added a retry policy for transient gateway failures that respected the idempotent flag.

**Result:**  
After deployment, duplicate charge incidents dropped from 3.7% to <0.01%. Transaction latency increased by only ~15 ms on average. I learned how to balance consistency guarantees with performance using distributed caches and atomic scripts, a pattern now standard across our payment services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
