---
qid: ing_0da620cb06__faang__local
question: 'Explain: Rate limit by user — Ratelimiterapi'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 446
total_tokens: 680
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:15:32-05:00'
sources: []
---

**Clarify**  
We need a system that throttles how many requests a single user can make to an API in a given time window (e.g., 100 calls/5 min). I’ll assume: *user identity is known (API key or JWT), traffic is high‑volume, and we want sub‑second latency.*  

**Approach**  
1. **Token Bucket per user** – store a bucket that refills at a fixed rate.  
2. Persist the bucket state in an in‑memory cache (Redis) so all instances see the same counts.  
3. On each request, atomically decrement the token count; if zero, reject with 429.  
4. Use Lua scripting or Redis transactions to keep it single‑threaded per key and avoid race conditions.  

**Depth**  
- *Data model:* `user:{id}:bucket` → fields: `tokens`, `last_refill_ts`.  
- Refill logic: `new_tokens = min(capacity, tokens + rate*(now-last))`.  
- Complexity: O(1) per request; memory O(U) where U is active users.  
- Trade‑offs: Redis latency adds ~2–3 ms; acceptable for most APIs.  

**Edge Cases**  
- Burst traffic when many users hit the limit simultaneously → use a leaky bucket to smooth spikes.  
- Clock skew between services → store timestamps in UTC and allow a small grace period.  
- User deletion or inactivity → TTL on keys to free memory.  

**Optimize & Communicate**  
- Scale Redis horizontally with sharding by user hash.  
- For very high throughput, switch to an embedded in‑process cache for hot users while falling back to Redis for others.  
- Explain the trade‑offs: higher consistency vs. lower latency; memory consumption vs. rate‑limit granularity.  

This design balances correctness, performance, and ease of deployment—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
