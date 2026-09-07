---
qid: ing_56770cd936__faang__local
question: 'Explain: Building rate limiters in practice — Scaling your API with rate
  limiters'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 428
total_tokens: 667
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:05:12-05:00'
sources: []
---

**Clarify**  
You’re asked how to *scale an API* by building a practical rate limiter.  
Assume we need per‑user or per‑IP limits, high traffic (10k req/s), and low latency (<5 ms). Confirm:  
- What unit of measurement? (requests/second, minute?)  
- Do we allow burst or strict sliding windows?  
- Is persistence required across servers?  

**Approach**  
1. Pick a token‑bucket algorithm for smooth bursts.  
2. Store counters in an in‑memory distributed store (Redis or Memcached) with atomic ops.  
3. Expose a lightweight middleware that checks/updates the bucket before routing to business logic.  
4. Use asynchronous, non‑blocking I/O so a single request doesn’t block the thread pool.

**Depth**  
- **Token bucket**: `tokens = min(max_tokens, tokens + (now - last_ts)*rate)`; reject if `tokens==0`.  
- Redis implementation uses Lua scripts to atomically read–modify–write.  
- Complexity per request is O(1) with constant‑time hash lookups and atomic ops.  
- Sharding keys by user/IP ensures horizontal scalability; a single node handles ~10k req/s.  

**Edge Cases**  
- Clock drift: use monotonic timestamps or Redis server time.  
- Cache miss on first request: initialize bucket atomically to avoid race conditions.  
- DoS attacks that target the rate‑limiter itself: add circuit‑breaker logic.  

**Optimize & Communicate**  
Explain trade‑offs: token bucket allows bursts but consumes more memory than fixed windows; Redis gives persistence and consistency at cost of network hop. Highlight that we can expose a “soft” limit (HTTP 429) before hard throttling to keep user experience smooth. Conclude by stressing monitoring—track hit/miss ratios, latency added, and adjust `rate`/`burst` via A/B tests.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
