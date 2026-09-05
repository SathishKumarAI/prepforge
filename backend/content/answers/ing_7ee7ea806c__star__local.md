---
qid: ing_7ee7ea806c__star__local
question: 'Explain: Failover, retries, hedging, and idempotency'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 345
total_tokens: 584
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:47:23-05:00'
sources: []
---

**Situation:** In my last role at a fintech startup, we built a real‑time payment gateway that hit a regulatory audit deadline. The service was exposed to thousands of concurrent transactions per minute, and any downtime meant lost revenue and compliance penalties.

**Task:** I had to guarantee 99.99 % availability for the external banking API while ensuring each transaction was processed exactly once, even under network partitions or transient failures.

**Action:** First, I added a **failover** layer: traffic could automatically redirect from our primary bank endpoint to a secondary one with minimal latency (using AWS Route 53 health checks). Next, I implemented exponential **retries** with jitter for non‑critical calls, capped at three attempts. For high‑priority payments, I introduced **hedging** by firing parallel requests to both endpoints and accepting the first successful response, thus cutting average latency by 30 %. Finally, every transaction ID was stored in a Redis cache; before executing a payment, we checked if that ID had already been processed—this enforced **idempotency**, preventing duplicate charges even if retries retried the same request.

**Result:** We achieved 99.999 % uptime during the audit period and reduced transaction latency from 250 ms to 180 ms on average. The system handled a 200 % spike in traffic without any chargebacks, and I learned that combining these patterns is essential for building truly resilient, business‑critical services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
