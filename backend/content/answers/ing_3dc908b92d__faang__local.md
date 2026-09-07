---
qid: ing_3dc908b92d__faang__local
question: 'Explain: Reads (Redirects) — Design URL Shortener | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 490
total_tokens: 733
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:07:36-05:00'
sources: []
---

**1️⃣ Clarify**  
We’re asked to design a *URL‑shortening service* (e.g., bit.ly).  
Key goals:  
- Accept an arbitrary long URL and return a short token.  
- Resolve the token back to the original URL via HTTP redirects.  
Assumptions to confirm: maximum traffic, persistence guarantees, global availability, rate limits, analytics need, TTL for shortened URLs.

**2️⃣ Approach**  
1. **API Layer** – `POST /shorten` (URL → token), `GET /{token}` (redirect).  
2. **Storage** – Hash‑map key = token, value = original URL + metadata.  
3. **Token Generation** – deterministic hash of the URL or random base62 string; detect collisions via lookup.  
4. **Scalability** – sharded key/value store (e.g., DynamoDB/Bigtable) with consistent hashing; CDN cache for redirects.  
5. **Redirection** – serve 301/302 from CDN edge to reduce latency and load on origin.

**3️⃣ Depth**  
- *Token space*: 62⁶ ≈ 56B → 6‑char tokens, collision probability negligible if random.  
- *Complexity*: `O(1)` average for lookup/insertion (hash table).  
- *Failure modes*: cache miss → DB read; eventual consistency can cause stale redirects.  
- *Analytics*: separate event stream (Kafka) to log hits asynchronously.

**4️⃣ Edge Cases**  
- Duplicate URLs: decide whether to reuse token or generate new one.  
- Extremely long URLs (>2 KB): truncate or reject.  
- Deletion/expiration of short links: TTL support in DB.  
- Bot abuse: rate limiting per IP/client.

**5️⃣ Optimize & Communicate**  
To reduce latency, cache the mapping in a distributed in‑memory store (Redis) and expose it via an edge CDN that can return the redirect directly. For high write throughput, use a write‑through cache with background persistence to avoid “write‑skew.” Finally, stress test by simulating millions of redirects per second and measure 99th‑percentile latency; iterate on sharding strategy if bottlenecks appear.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
