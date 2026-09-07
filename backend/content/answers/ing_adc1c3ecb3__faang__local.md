---
qid: ing_adc1c3ecb3__faang__local
question: 'Explain: Cache frequently accessed URLs — Urlshorteningservicetinyurl'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 480
total_tokens: 718
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:27:33-05:00'
sources: []
---

**Clarify**  
We’re asked how a URL‑shortener (e.g., TinyURL) could cache the *long* destination for a *short* key that is hit often.  
Assumptions:  
- Keys are unique strings; each maps to one long URL.  
- Read traffic vastly outnumbers writes.  
- Latency of 1–2 ms per lookup is desired.  

**Approach**  
1. **In‑memory cache** (LRU or LFU) keyed by short URL, storing the full target URL.  
2. On miss, fetch from persistent store (DB/Key‑Value), then populate the cache.  
3. Use a write‑through policy: when a new mapping is created, update cache and DB atomically.  
4. Deploy across shards so each node handles a subset of keys; use consistent hashing to keep locality.

**Depth**  
- **Cache layer**: Redis or Memcached, with 64 GB per shard; LRU eviction keeps hot URLs resident.  
- **Persistence**: Cassandra/Spanner for high write throughput and strong consistency.  
- **Latency**: Cache hit ≈ 0.5 ms; DB hit ≈ 10–15 ms.  
- **Consistency**: Write‑through guarantees the cache never serves stale data.  
- **Scaling**: Add shards horizontally; use a key‑sharding function so lookups stay local.

**Edge Cases**  
- **Cache stampede** on first request for a new URL—use a “single flight” lock or pre‑warm strategy.  
- **Key collision** in hashing—handle with separate chaining or rehashing.  
- **TTL expiration**—set conservative TTLs to avoid stale redirects; refresh on access if near expiry.

**Optimize & Communicate**  
- Reduce memory footprint by compressing URLs (e.g., prefix compression).  
- Batch DB reads for sequential short URLs to exploit locality.  
- Monitor hit‑rate; if it drops, trigger cache warm‑up from hot logs.  
Explain that this architecture keeps latency low, scales horizontally, and maintains strong consistency—all key metrics for a production URL‑shortener at FAANG scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
