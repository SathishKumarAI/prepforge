---
qid: ing_363fb599b9__faang__local
question: 'Explain: Caching — Design Notification Service | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 441
total_tokens: 680
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:50:14-05:00'
sources: []
---

**Clarify**  
We’re building a scalable push‑notification system (email/SMS/APNs) that must deliver messages quickly and reliably. The question focuses on *caching*: which data to cache, how long, and when to evict. Key assumptions:  

- Users can have thousands of devices; read receipts are required.  
- Notification payloads are small but high‑volume (≈10⁶ per hour).  
- Latency target < 200 ms for the “send” API.  

**Approach**  
1. **Cache user preferences & device tokens** – read‑only, warm cache (Redis) keyed by `user_id`.  
2. **Cache notification templates & rate‑limit counters** – mutable but small.  
3. **Use a write‑through pattern** for updates to ensure consistency.  

**Depth**  
- *User prefs*: TTL 24 h; refresh on profile update via pub/sub. Complexity O(1) read, O(log N) eviction (LRU).  
- *Device tokens*: Partitioned by region; size <10 MB per shard → fits in memory.  
- *Rate‑limit counters*: Sharded Redis counters with atomic `INCR` and expiry to enforce sliding window.  
- Eviction: LRU for prefs, TTL for counters, manual purge on account deletion.

**Edge Cases**  
- Token rotation failures → fallback to DB read (2× latency).  
- Cache stampede when a hot user’s entry expires – use distributed locking or cache‑aside with stale‑while‑revalidate.  
- Stale preferences after update → publish invalidation events.

**Optimize & Communicate**  
We can reduce memory footprint by compressing JSON prefs and using Bloom filters for device existence checks. Explain trade‑offs: higher CPU for compression vs. lower network traffic. Finally, outline monitoring: cache hit ratio, eviction rate, latency percentiles to validate the design in production.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
