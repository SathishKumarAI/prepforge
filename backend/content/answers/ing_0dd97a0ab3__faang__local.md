---
qid: ing_0dd97a0ab3__faang__local
question: 'Explain: Design a token-based rate limiter for a multi-tenant LLM API.
  Implement the core, then tell me what changes when it''s distributed.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 252
output_tokens: 575
total_tokens: 827
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:15:58-05:00'
sources: []
---

**Clarify**  
We need a *token bucket* style limiter that enforces per‑tenant request caps for an LLM API. Each tenant has its own quota (e.g., 100 requests/min). Assume the service runs behind a load balancer and can be scaled horizontally.

**Approach**  
1. **Per‑tenant state**: keep `bucket_tokens` and `last_refill_ts`.  
2. On request:  
   * Refill tokens: `tokens += (now – last) × rate`. Cap at bucket size.  
   * If `tokens ≥ 1`, consume one token, allow; else reject.  
3. Persist state in a fast key‑value store (Redis or Memcached).  

**Depth**  
```go
type Bucket struct {
    tokens       float64
    lastRefillMs int64
}

func Allow(tenant string) bool {
    b := redis.Get(tenant) // deserialized Bucket
    now := time.Now().UnixMilli()
    elapsed := float64(now-b.lastRefillMs) / 1000.0
    b.tokens = math.Min(b.capacity, b.tokens+elapsed*b.rate)
    if b.tokens < 1 {
        return false
    }
    b.tokens -= 1
    b.lastRefillMs = now
    redis.Set(tenant, b)
    return true
}
```
Complexity: O(1) per request.  
Trade‑off: Redis latency adds ~5–10 µs; acceptable for LLM calls.

**Edge Cases**  
* Clock skew between nodes → use NTP or read from a single authoritative clock.  
* Burst requests at the exact refill boundary – ensure atomic `GET/SET` (Redis Lua script).  
* Tenant churn: clean stale buckets after inactivity.

**Optimize & Communicate**  
In production, batch reads/writes with pipelining and keep‑alive connections to Redis. Use a sliding window or leaky bucket if smoother throttling is required. Explain that the key insight is decoupling tenant state from request handling, allowing horizontal scaling while preserving per‑tenant fairness.

---  

### Distributed Changes  
* **State coordination**: All instances must read/write the same bucket; use a distributed KV store (Redis cluster) with atomic operations.  
* **Latency**: Remote lookups introduce network hops; mitigate via local caching + stale‑while‑revalidate policy.  
* **Consistency**: Adopt eventual consistency but guard against race conditions with Redis Lua scripts or compare‑and‑swap semantics.  
* **Scalability**: Partition tenants across shards to avoid hotspotting, while ensuring the limiter can still enforce quotas globally.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
