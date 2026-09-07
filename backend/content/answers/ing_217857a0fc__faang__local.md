---
qid: ing_217857a0fc__faang__local
question: 'Explain: Cache Key Bugs — Content Delivery Network (CDN) | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 477
total_tokens: 716
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:02:40-05:00'
sources: []
---

**Clarify**

We’re asked to explain *cache‑key bugs* that can arise in a CDN and how they affect content delivery.  
Assumptions: the CDN serves static and dynamic assets, uses URL + query string hashing for cache keys, and supports signed URLs/headers for authenticated content.

**Approach**

1. Identify the root cause of cache key mismatches.  
2. Show typical failure modes (over‑caching or under‑caching).  
3. Outline mitigation strategies.  

**Depth**

Cache keys are usually derived from the request URI, query string, and sometimes host/headers. Bugs happen when:

- **Query‑string ambiguity**: Two URLs that differ only in order of parameters (`?a=1&b=2` vs `?b=2&a=1`) map to the same key if the CDN normalizes order, leading to stale or incorrect content.  
- **Unintended header inclusion**: If a CDN mistakenly includes mutable headers (e.g., `User-Agent`) in the cache key, requests from different browsers will hit the same cached object, causing personalization leaks or missing user‑specific assets.  
- **Signed URL expiration mis‑handled**: The CDN may ignore the signature’s expiry and serve an expired token from cache, resulting in 403 errors for fresh clients while still serving stale content to others.

Mitigations: canonicalize query strings, whitelist headers for keying, use a separate “private” cache segment that honors authentication tokens, and purge on expiration or policy change.

**Edge Cases**

- Mixed HTTPS/HTTP requests with same path.  
- Cache‑control headers that override default key logic.  
- CDN edge nodes in different regions caching the same key but pulling from divergent origin caches.

**Optimize & Communicate**

Explain that a robust cache strategy balances *hit ratio* and *content correctness*. Use versioned asset URLs (`/v1/...`) to avoid query‑string bugs, employ signed cookies for authenticated content, and monitor hit/miss logs to detect anomalous key collisions. Convey this clearly by mapping each bug scenario to its root cause, impact, and fix—showing structured reasoning and awareness of real‑world CDN behavior.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
