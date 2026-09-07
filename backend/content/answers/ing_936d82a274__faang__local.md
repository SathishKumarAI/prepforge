---
qid: ing_936d82a274__faang__local
question: 'Explain: Time-to-Live (TTL) — Cache Eviction Policies'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 435
total_tokens: 672
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:27:05-05:00'
sources: []
---

**Clarify**  
We need to explain *Time‑to‑Live (TTL)* as a cache eviction strategy, how it works, and why a system might choose it over others.

**Approach**  
1. Define TTL and its role in caching.  
2. Compare with other policies (LRU, LFU, FIFO).  
3. Discuss implementation trade‑offs (memory, CPU, consistency).  
4. Highlight use cases where TTL shines or fails.

**Depth**  
TTL assigns each cache entry an expiration timestamp (`now + ttl`). On access, the system checks if `expires_at < now`; if so, the item is considered stale and evicted/ refreshed. It’s simple to implement—just a per‑entry timer—and guarantees bounded staleness without global bookkeeping.  

*Pros:*  
- Predictable cache size (entries auto‑expire).  
- No need for access counters → low CPU overhead.  
- Works well with data that naturally changes on a schedule (e.g., config files, CDN edge caches).

*Cons:*  
- May evict useful items early if TTL is short.  
- Items may remain in cache longer than needed if accessed frequently (no “hot” promotion).  
- Requires careful choice of TTL per key type; wrong values can hurt hit rate.

**Edge Cases**  
- Clock skew across nodes → use monotonic timers or synchronize clocks.  
- Rapidly changing data with very short TTL → leads to thrashing.  
- Memory pressure: if many items share the same long TTL, eviction may not happen fast enough.

**Optimize & Communicate**  
A hybrid strategy often works best: use TTL for “stale‑but‑good” data and LRU for frequently accessed dynamic content. When presenting this to interviewers, emphasize how TTL offers deterministic staleness guarantees with minimal runtime cost, but must be tuned per workload. Highlight that a production system would monitor hit/miss ratios and adjust TTLs automatically, balancing freshness against cache hit rate.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
