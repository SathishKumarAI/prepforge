---
qid: ing_78055043c2__faang__local
question: 'Explain: Build a rate limiter for an API gateway: per-key token bucket
  first, then extend it to multiple gateway instances.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 484
total_tokens: 731
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:23:17-05:00'
sources: []
---

**Clarify**  
We need an *API‑gateway* rate limiter that throttles requests per API key using a **token bucket** algorithm, then scale it to multiple gateway instances while keeping counts consistent and avoiding race conditions.

Assumptions:  
- Requests carry a unique `apiKey`.  
- Desired limits are configurable (tokens per interval).  
- Latency must stay < 10 ms per request.  

**Approach**  
1. **Single‑instance token bucket** – store `<lastRefill, tokens>` in an in‑memory map keyed by `apiKey`.  
2. On each request:  
   - Refill `tokens += (now-lastRefill)/interval * capacity` capped at `capacity`.  
   - If `tokens > 0`, decrement and allow; else reject.  
3. **Multi‑instance** – move the bucket state to a shared store with atomic ops. Use Redis `INCRBYFLOAT` + `GETSET` or a lockless Lua script to refill & consume atomically.

**Depth**  
- Bucket struct: `{capacity, tokens, last}`.  
- Refill formula: `tokens = min(capacity, tokens + (now-last)/interval * capacity)`.  
- Redis Lua script ensures **no lost updates** and constant‑time O(1).  
- Complexity per request: O(1) in-memory; O(log N) for Redis key lookup.  

**Edge Cases**  
- Clock skew across instances → use a single NTP source or store `last` as absolute timestamp from a shared clock.  
- Sudden burst of requests → bucket may under‑refill; test with high concurrency bursts.  
- Redis failure → fallback to in‑memory buckets with eventual consistency (rare).  

**Optimize & Communicate**  
Explain trade‑offs: in‑memory is fastest but single‑point of failure; Redis provides durability at ~1 ms latency if sharded properly. Show how the Lua script prevents race conditions, and mention monitoring metrics (`bucket_fill_rate`, `rejection_rate`) to detect hot keys. Conclude with a brief code snippet (pseudo) for the Lua script and the API call flow.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
