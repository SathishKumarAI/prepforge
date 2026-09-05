---
qid: ing_78edac30b4__star__local
question: 'Explain: Concurrency Issues — Urlshorteningservicetinyurl'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 324
total_tokens: 564
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:35:49-05:00'
sources: []
---

**Situation**  
When I joined a start‑up building a high‑traffic URL shortener, our traffic spiked from 50k to 1M requests per day during a viral marketing campaign. Our service used a Redis hash to map the generated key to the long URL, but we started seeing duplicate keys and occasional stale redirects.

**Task**  
I had to eliminate race conditions that caused duplicated or missing mappings while keeping latency below 10 ms under peak load.

**Action**  
I introduced optimistic locking with Redis transactions (`WATCH`/`MULTI`/`EXEC`) around the key‑generation loop. For each new URL, I first generated a candidate short code, then watched the hash field; if another client had written the same code, the transaction aborted and we retried with a new code. To reduce collisions, I switched from a random 6‑char alphanumeric scheme to a base‑62 counter with atomic increments (`INCR`), guaranteeing uniqueness. I also added a per‑user rate limit using Redis sorted sets to throttle request bursts.

**Result**  
After deployment, duplicate keys dropped from 3% of traffic to <0.001%. Redirect latency stayed at 8 ms on average, and the system handled over 2M requests per day without failures. I learned that a combination of atomic counters and transaction watching can turn a simple key/value store into a robust concurrent service.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
