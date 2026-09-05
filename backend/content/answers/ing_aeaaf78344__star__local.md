---
qid: ing_aeaaf78344__star__local
question: 'Explain: Consistency vs. Availability (CAP Theorem)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 325
total_tokens: 563
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:21:32-05:00'
sources: []
---

**Situation**  
While leading a real‑time fraud detection pipeline for an e‑commerce platform, we noticed that the daily transaction volume spiked to 12 M during Black Friday. The existing Redis cache, used for user risk scores, was configured with eventual consistency; after a score update it sometimes served stale data, causing legitimate orders to be blocked.

**Task**  
I needed to redesign the caching layer so that every read reflected the most recent write (strong consistency) while still maintaining sub‑50 ms latency and not throttling traffic under peak load.

**Action**  
I introduced a dual‑write strategy: writes first hit a strongly consistent PostgreSQL row‑level lock, then an async Kafka stream updates Redis. For reads I used a “read‑through” cache that falls back to Postgres if the in‑memory key is older than 200 ms. This hybrid approach leveraged Redis for speed and Postgres for correctness. I also added circuit breakers and rate limits on the Kafka consumer to avoid backpressure.

**Result**  
After deployment, the fraud engine’s false‑positive rate dropped from 4.7% to 0.8%, and average read latency stayed at 42 ms under peak load. The project demonstrated that, in practice, you can achieve high availability while still honoring consistency constraints by combining strong storage with a smart cache strategy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
