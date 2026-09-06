---
qid: ing_78055043c2__think__local
question: 'Explain: Build a rate limiter for an API gateway: per-key token bucket
  first, then extend it to multiple gateway instances.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 203
output_tokens: 737
total_tokens: 940
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T08:56:35-05:00'
sources: []
---

**1️⃣ Clarify the problem & state assumptions**

- *What is required?*  A token‑bucket rate limiter that works per‑API key on a single gateway instance, and then can be scaled across many instances.
- *Assumptions:*  
  - Each request carries an API key.  
  - We want “soft” limits (replenish tokens) and not hard blocking.  
  - Latency must stay low; we’ll store state in memory first, then move to a shared store.

**2️⃣ Adopt a mental model / framework**

- *Token‑bucket fundamentals*: capacity \(C\), refill rate \(R\).  
- *State per key*: current token count and timestamp of last refill.  
- *Distributed consistency*: use an atomic counter or compare‑and‑set in the shared store.

**3️⃣ Step‑by‑step reasoning**

1. **Per‑instance bucket**  
   - Keep a hash map `<key → (tokens, lastRefill)>` in memory.  
   - On each request:  
     * Refill tokens = `min(C, tokens + (now – lastRefill) * R)`; update timestamp.  
     * If tokens ≥ 1 → consume one token and allow the request.  
     * Else → reject or queue.

2. **Scaling to multiple instances**  
   - Move bucket state into a distributed cache (Redis, Memcached).  
   - Use Redis `INCRBY` + TTL or Lua script to atomically refill and decrement:  
     ```lua
     local key = KEYS[1]
     local now  = ARGV[1]; local rate=ARGV[2]; local cap=ARGV[3]
     local last, tokens = redis.call('HMGET', key, 'last', 'tokens')
     if not last then last = now; tokens = cap end
     local refill = math.min(cap, tonumber(tokens) + (now- tonumber(last)) * rate)
     if refill < 1 then return 0 end
     refill = refill - 1
     redis.call('HMSET', key, 'last', now, 'tokens', refill)
     return 1
     ```
   - Each gateway instance calls this script; Redis guarantees atomicity.

3. **Handle bursty traffic**  
   - Set `C` high enough for short bursts.  
   - Optionally implement leaky‑bucket if you need strict pacing.

4. **Fail‑over & persistence**  
   - Configure Redis replication or use a distributed database with ACID guarantees.  
   - Persist the hash map to disk for recovery after crashes.

**4️⃣ Common traps**

- Forgetting to cap tokens at `C` during refill → overflow.  
- Using separate counters per instance → “double‑counting” requests.  
- Relying on wall‑clock time across machines (NTP drift) → inconsistent refills.  
- Not handling key eviction → memory bloat.

**5️⃣ Sanity‑check & communicate**

- Verify with unit tests: simulate a burst of 10 requests, ensure only `C` pass.  
- Log the token count before/after each request for debugging.  
- Explain to stakeholders that the distributed script ensures *exactly* one token per request across all instances, preserving fairness and preventing over‑usage.  

By following this structured approach—start local, then lift state into a shared store with atomic operations—you’ll build a robust, scalable rate limiter.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
