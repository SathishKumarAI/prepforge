---
qid: ing_4b66135fde__star__local
question: 'Explain: Rolling Window Algorithm — Ratelimiting'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 343
total_tokens: 579
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:59:07-05:00'
sources: []
---

**Situation** – At my last startup we had a public API that was suddenly hit with a surge of traffic during a product launch. Our existing hard‑limit throttling caused legitimate users to time out and our support team flooded with complaints.

**Task** – I needed to implement a smooth, fair rate limiter that could adapt in real time, keeping the average request latency under 150 ms while preventing any single user from hogging resources.

**Action** – I designed a sliding‑window algorithm using Redis Streams and Lua scripting. Each API key had a sorted set keyed by timestamp; on every request I pushed the current epoch to the set, then removed entries older than *t* seconds (the window). The script returned the current count atomically. If the count exceeded our per‑second quota, the request was rejected with a 429 header and an “X‑RateLimit-Remaining” value calculated from the remaining capacity in the window. I tuned *t* to 60 s and burst allowance to 5 requests, balancing fairness and performance.

**Result** – The new limiter reduced API errors by 92% during peak traffic, kept average latency at 120 ms, and cut support tickets related to throttling by 75%. It also gave us clear metrics on user behavior, which informed future quota policies. I learned that a well‑implemented sliding window can be both precise and low‑overhead when backed by an in‑memory datastore like Redis.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
