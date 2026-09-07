---
qid: ing_8f04e9a409__faang__local
question: 'Explain: Expiration Policy — Design of a Modern\u00a0Cache - High Scalability
  -'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 496
total_tokens: 739
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:17:05-05:00'
sources: []
---

**Clarify**  
You’re asking how to design an expiration policy for a cache that can scale horizontally and still keep data fresh without hurting throughput. I’ll assume we need: *low latency reads*, *high write concurrency*, *distributed consistency*, and *predictable eviction*.

**Approach**  
1. Pick a **time‑to‑live (TTL)** model per key or bucket.  
2. Store metadata (expire timestamp) inline with the value so lookups are O(1).  
3. Use a **lazy expiration** check on read/write: if the current time > expire, evict on access.  
4. Complement lazy eviction with a background *time wheel* or *hierarchical timer* that batches expirations to avoid write amplification.  
5. For multi‑node scaling, use a consistent hashing ring; each node owns its own expiration queue so no cross‑cluster traffic.

**Depth**  
- **Data layout**: `key | value | expire_ts`.  
- **Read path**: hash key → local bucket → check `expire_ts`; if stale, return miss and trigger async eviction.  
- **Write path**: update value + new `expire_ts` atomically (e.g., compare‑and‑swap).  
- **Background sweep**: a min‑heap or wheel of expire timestamps; every tick pops due keys and removes them in bulk, O(log n) per bucket.  
Complexity: reads O(1), writes amortized O(1)+background O(log k) where k is number of scheduled expirations.

**Edge Cases**  
- Clock skew across nodes → use a monotonic logical clock or sync via NTP/PTP.  
- Extremely long TTLs can bloat memory; cap max TTL or promote to persistent store.  
- Sudden spike in writes may flood the expiration queue; rate‑limit eviction batches.

**Optimize & Communicate**  
To improve, we could shard the expiration wheel per node, use a *probabilistic skip list* for sub‑second granularity, and expose metrics (eviction rate, hit/miss ratio). In an interview I’d highlight that lazy eviction keeps latency low, while background sweeps prevent memory bloat—balancing consistency, performance, and scalability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
