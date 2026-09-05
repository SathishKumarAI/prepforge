---
qid: ing_56770cd936__star__local
question: 'Explain: Building rate limiters in practice — Scaling your API with rate
  limiters'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 351
total_tokens: 593
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:20:57-05:00'
sources: []
---

**Situation:**  
At my last company we launched a new analytics API that started seeing traffic spikes of up to 10,000 requests per second during quarterly reports. Our backend was fine‑tuned for latency, but the sudden load caused our database to hit its write throughput limits and some users received 503 errors.

**Task:**  
I had to design and deploy a rate limiter that would smooth request bursts, protect downstream services, and still allow legitimate high‑volume clients to get their data quickly—without adding a costly dedicated gateway.

**Action:**  
I chose a token bucket algorithm implemented in Redis because it gives sub‑second latency and is horizontally scalable. Each API key got its own bucket with a refill rate of 200 requests per minute and a burst capacity of 500. I wrapped the Express middleware to check Redis before hitting the database, and added a fallback path that queued excess calls for 100 ms, which kept them in order. To avoid cache stampedes, I used Lua scripts for atomic token consumption. I also exposed a “premium” tier where customers could request higher bucket sizes via an internal policy table.

**Result:**  
After rollout, we saw a 92% drop in 503 errors during peak periods and the average response time stayed under 150 ms even at 8,000 req/s. The rate limiter cost us only $0.02 per million requests on Redis, so we kept infrastructure lean while scaling our API reliably. I learned that choosing the right token bucket parameters is as critical as picking the right store—small mis‑tuning can either throttle legitimate traffic or let a surge crash the system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
