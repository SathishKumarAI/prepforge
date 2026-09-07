---
qid: ing_32931c4021__faang__local
question: 'Explain: Cache Repeated Work — Client-Server Architecture | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 448
total_tokens: 685
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:42:05-05:00'
sources: []
---

**Clarify**

The question asks how a client‑server system can cache and reuse expensive computations (e.g., ML inference) so that repeated identical requests avoid recomputation.  
Assumptions: *Clients send identical request payloads; the server hosts stateless inference code; network latency dominates; we care about throughput, consistency, and fault tolerance.*

**Approach**

1. **Identify cacheable units** – hash input data → key.  
2. **Cache layer** – in‑memory (Redis, Memcached) or distributed store with TTL.  
3. **Serve** – on request: check cache; hit → return cached result; miss → compute, store, then respond.  
4. **Consistency & invalidation** – versioned model IDs or ETags; when a new model is deployed, invalidate old keys.  
5. **Scalability** – sharded cache keyed by hash prefix; use consistent hashing to balance load.

**Depth**

- *Cache key* = SHA‑256(input || model_version).  
- *Storage*: Redis with `EXPIRE` for TTL (e.g., 24 h).  
- *Complexity*: O(1) average lookup/insert in Redis.  
- *Fault tolerance*: Replicated cache nodes; fall back to recompute if node fails.  
- *Consistency*: Use optimistic locking (`WATCH/MULTI`) or versioned keys to avoid stale results.

**Edge Cases**

- Non‑deterministic models → include random seed in key.  
- Cache stampede on cold miss → use request coalescing (singleflight).  
- Extremely large inputs → stream input and hash incrementally; store partial cache entries.

**Optimize & Communicate**

Explain that caching reduces latency from milliseconds to microseconds, frees GPU/CPU cycles for new requests, and improves user experience. Show trade‑offs: memory cost vs. compute savings; TTL choice balances freshness against hit rate. Conclude by highlighting monitoring (hit/miss ratios) and automated cache eviction policies as next steps.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
