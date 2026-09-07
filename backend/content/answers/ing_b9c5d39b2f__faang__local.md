---
qid: ing_b9c5d39b2f__faang__local
question: 'Explain: Concurrent requests limiter — Scaling your API with rate limiters'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 429
total_tokens: 665
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:54:55-05:00'
sources: []
---

**Clarify**  
We’re asked how to scale an API that receives many concurrent calls by imposing a *rate‑limit* per client (or globally). I’ll assume the limiter must be distributed, fault‑tolerant, and enforce limits like “100 requests / minute” without throttling legitimate traffic.

**Approach**  
1. **Token bucket or leaky bucket** – each client has a bucket that refills at a defined rate.  
2. **Distributed store** – Redis (or Memcached) keeps the token count per key, with atomic `INCR`/`DECR` and expiry.  
3. **Middleware layer** – intercepts requests, checks the bucket, accepts or rejects with 429.  
4. **Graceful degradation** – if the store is down, fallback to in‑memory limits for short bursts.

**Depth**  
- **Token Bucket**: `tokens = min(max_tokens, tokens + refill_rate * elapsed)`; use Lua scripts in Redis for atomicity.  
- **Complexity**: O(1) per request (single get/set), memory O(#clients).  
- **Trade‑offs**: Redis latency can be a bottleneck; sharding reduces contention but adds complexity.

**Edge Cases**  
- Clock skew between services → use server timestamps in Redis.  
- Burst traffic when store is unavailable → fallback bucket may over‑accept.  
- Clients with many sub‑requests (e.g., WebSocket upgrades) need separate keys to avoid mis‑counting.

**Optimize & Communicate**  
To improve, implement a *global* rate limiter using a sliding window counter in Redis Streams for auditability, and expose metrics (hit/miss ratios). I’d explain: “We start with token buckets because they’re simple and provide smooth traffic. By pushing the state to Redis we get consistency across replicas. If latency spikes, we can switch to an in‑memory cache with a short TTL as a safety net.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
