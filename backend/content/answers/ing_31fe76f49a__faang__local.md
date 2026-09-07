---
qid: ing_31fe76f49a__faang__local
question: 'Explain: Cache Keys — Content Delivery Network (CDN) | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 445
total_tokens: 683
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:40:24-05:00'
sources: []
---

**Clarify**  
We’re asked how *cache keys* work for a CDN in a system‑design interview. I’d confirm:  

- What data types are cached (HTML, images, JS)?  
- Do we need versioning or cache busting?  
- Is the CDN global or region‑specific?  
- How is user identity handled (personalized vs public content)?

**Approach**  
1. Identify key components: origin server, edge caches, request routing.  
2. Define a deterministic cache key that maps an HTTP request to a unique cache entry.  
3. Discuss invalidation strategy and TTLs.  

**Depth**  
A cache key is usually the *URL path + query string + host* (and optionally headers like `Accept-Language`). For static assets we append a fingerprint (hash of file contents) so that any change forces a new key, eliminating stale data. Example:  

```
key = f"{host}{path}?{sorted(query)}&v={content_hash}"
```

Edge nodes store the body and metadata; when a miss occurs they fetch from origin or another edge. Invalidation can be time‑based (TTL) or event‑driven (purge API). Complexity: O(1) lookup in hash map, memory proportional to cache size.

**Edge Cases**  
- Query‑string variations that don’t affect content should be canonicalized.  
- User‑specific cookies must not be cached unless using a separate private cache layer.  
- Large query strings can blow up key space—normalize or use hashing.  

**Optimize & Communicate**  
To improve hit rates, we can implement *cache partitioning* by region and use *consistent hashing* to distribute keys across edge nodes, minimizing evictions when scaling. I’d explain that the trade‑off is added complexity in key generation versus cache freshness guarantees. This structured answer demonstrates clear problem framing, a solid plan, technical depth, awareness of pitfalls, and thoughtful optimization—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
