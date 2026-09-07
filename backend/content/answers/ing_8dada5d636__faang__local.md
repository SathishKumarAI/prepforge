---
qid: ing_8dada5d636__faang__local
question: 'Explain: Stale Content — Content Delivery Network (CDN) | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 602
total_tokens: 841
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:13:28-05:00'
sources: []
---

**Clarify**  
We’re asked to design a CDN that serves *stale* content – i.e., cached objects that may be out‑of‑date but still usable until they expire or are refreshed.  
Key assumptions:  
- Content is read‑heavy, low write latency.  
- Staleness tolerance (e.g., 5 min).  
- Users expect high availability; cache miss must be served quickly.  
- Global distribution with edge nodes.

**Approach**  
1. **Cache tiering** – Edge → Regional → Origin.  
2. **Stale‑while‑revalidate policy** – serve stale content while asynchronously fetching fresh copy.  
3. **Invalidate strategy** – TTL + push invalidation for critical updates.  
4. **Consistency model** – eventual; use version tags (ETag/Cache‑Control).  
5. **Metrics & alerts** – hit ratio, staleness rate.

**Depth**  
- **Edge nodes** store objects keyed by URL+hash. On miss: fetch from nearest regional node; if that misses, go to origin.  
- When a request hits a stale entry (TTL expired but still present), the CDN returns it immediately and starts a background refresh (`PUT`/`GET` to origin). The refreshed object is stored with new TTL.  
- **Invalidation**: producers push an invalidation message (e.g., via Kafka) that propagates to edge caches; nodes purge or mark stale.  
- **Consistency**: each cached object carries a version header. If the origin returns a newer ETag, the CDN updates its store and all subsequent requests see fresh data.  
- **Complexity**: O(1) read for cache hit, O(log N) for invalidation propagation (N = number of edges). Refreshes run in background; no blocking.

**Edge Cases**  
- *Burst traffic after TTL expiry*: many clients hit stale copy and trigger duplicate refreshes → deduplicate via a “refresh lock” per key.  
- *Network partitions*: edge may be unable to reach origin – keep serving stale until connectivity restores.  
- *Content updates faster than staleness window*: push invalidation; if missed, serve stale beyond allowed window.

**Optimize & Communicate**  
- **Back‑pressure**: limit concurrent refreshes per node to avoid overload.  
- **Cache replacement**: LRU with size budget; prioritize high‑traffic keys.  
- **Monitoring**: track staleness distribution and automatically tighten TTL for critical paths.  
Explain the trade‑off between freshness vs latency, how stale‑while‑revalidate reduces perceived lag, and why eventual consistency is acceptable in many CDN scenarios. This narrative demonstrates clear problem framing, systematic design, technical depth, and consideration of failure modes—key signals for a FAANG interview.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
