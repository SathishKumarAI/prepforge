---
qid: ing_4ff86981d9__faang__local
question: 'Explain: Token-based rate limiting and quota — Llm Gateway And Serving
  Platform'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 461
total_tokens: 698
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:50:19-05:00'
sources: []
---

**Clarify**  
You’re asking how a large‑language‑model (LLM) gateway enforces *token‑based rate limits* and *quotas*. Clarify the units: *tokens* (sub‑word pieces), *requests per second (RPS)*, and *daily/weekly quotas*. Assume we have multiple tenants with distinct SLAs, a stateless front‑end, and a backend that streams tokens.

**Approach**  
1. **Token accounting** – Wrap each request in a wrapper that counts generated tokens.  
2. **Sliding‑window rate limiter** – Use a per‑tenant token bucket or leaky bucket to enforce RPS.  
3. **Quota enforcement** – Persist daily/weekly totals in a fast store (Redis, DynamoDB) and block when exceeded.  
4. **Graceful degradation** – Throttle back to the minimum viable response if nearing quota.

**Depth**  
- *Token Bucket*: `capacity = maxTokensPerSec`, `refillRate = tokens/sec`. Each request deducts `n` tokens; if insufficient, reject or delay. Complexity: O(1) per request.  
- *Quota Store*: Atomic increment (`INCRBY`) in Redis with expiry set to next day/week. Use Lua scripts for atomicity.  
- *Streaming*: For chunked responses, update bucket on each chunk and send partial results until quota is hit.

**Edge Cases**  
- Burst requests that exceed the bucket → reject early to avoid backend overload.  
- Token mis‑estimation (e.g., model outputs more tokens than counted) → over‑provision bucket or use conservative estimates.  
- Clock drift between services → sync via NTP or use logical clocks.

**Optimize & Communicate**  
- Cache per‑tenant buckets in memory to reduce latency; fall back to Redis on miss.  
- Use distributed locks sparingly; rely on atomic ops instead.  
- Log quota violations for billing and alerting.  

By combining token buckets with atomic quota counters, the gateway cleanly enforces per‑second limits while respecting overall usage caps across tenants.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
