---
qid: ing_b65fd9258e__star__local
question: 'Explain: Request Flow — Idempotency | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 314
total_tokens: 551
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:35:54-05:00'
sources: []
---

**Situation:** In my last role, we built a real‑time recommendation engine that exposed an API for ad serving. A surge during a holiday sale caused some requests to be retried by clients, leading to duplicate impressions and inflated revenue metrics.

**Task:** I had to design an idempotent request flow so every client could safely retry without affecting downstream analytics or billing while keeping latency under 80 ms.

**Action:** First, I added a unique `request_id` header that the API gateway generated if absent. The service stored each ID in a Redis cache with a TTL of 5 minutes and a hash of the payload to detect changes. On receiving a request, the backend checked Redis; if the ID existed and matched the payload, it returned the cached response immediately. If the ID was new or the payload changed, we processed the request normally and stored the result in both Redis and our PostgreSQL analytics table. We also added a circuit‑breaker pattern to throttle retries when load spiked.

**Result:** After deployment, duplicate impressions dropped from 12% of traffic to <0.2%, eliminating $35K of overbilling per day. Latency stayed below target, and the system gracefully handled retry storms without compromising data integrity. I learned that a lightweight cache layer plus payload hashing is key for idempotent flows in high‑throughput ML services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
