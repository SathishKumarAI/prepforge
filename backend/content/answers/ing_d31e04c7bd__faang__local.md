---
qid: ing_d31e04c7bd__faang__local
question: 'Explain: Cache Memory - Redis — Urlshorteningservicetinyurl'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 424
total_tokens: 662
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:51:14-05:00'
sources: []
---

**Clarify**  
We’re asked how a URL‑shortener (e.g., TinyURL) can use Redis cache to speed up lookups. Assume: *one-to-one mapping*, high read traffic, eventual consistency, and that the cache should be refreshed after TTL or eviction.

**Approach**  
1. Store each short key → long URL in Redis as a string.  
2. On redirect request, query Redis first; if hit, return immediately.  
3. If miss, fetch from persistent store (DB), return result, and write back to Redis with an appropriate TTL.  

**Depth**  
- **Data model:** `SET key value` for the mapping, `GET key` for lookup.  
- **TTL strategy:** e.g., 24 h; use `EXPIRE` or `SET key value PX <ms>` so stale entries self‑expire.  
- **Cache invalidation:** On URL update, issue `DEL key` and optionally repopulate with new mapping.  
- **Scalability:** Redis Cluster sharding by hash tag (`{shortKey}`) distributes load; replication ensures high availability.  
- **Complexity:** O(1) average for GET/SET; memory usage linear to number of active short URLs.

**Edge Cases**  
- Cache miss on cold start → latency spike.  
- TTL expiry before DB update leads to stale redirects; mitigate with write‑through or read‑repair logic.  
- Key collision if short key generation overlaps; use a UUID or hash function that guarantees uniqueness.

**Optimize & Communicate**  
Explain trade‑offs: longer TTL reduces DB hits but risks serving outdated URLs; shorter TTL ensures freshness at cost of more DB traffic. Highlight monitoring metrics (hit rate, latency) and how to auto‑scale Redis nodes based on request volume. Conclude by noting this pattern keeps the redirect path sub‑millisecond while keeping persistence consistent.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
