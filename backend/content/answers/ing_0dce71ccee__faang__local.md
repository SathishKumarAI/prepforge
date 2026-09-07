---
qid: ing_0dce71ccee__faang__local
question: 'Explain: Pastebin — System Design Interview Cheat Sheet - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 514
total_tokens: 750
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:15:51-05:00'
sources: []
---

**Clarify**

We’re asked to outline a *Pastebin*‑style service (a web app that lets users upload and share text snippets).  
Key assumptions:  
1. Public read access; optional private tokens.  
2. Low write latency, high read throughput.  
3. Content can be large (up to ~10 MB) but most are small (<1 KB).  
4. Users may want expiry dates or password protection.

**Approach**

1. **Front‑end** → stateless HTTP/HTTPS API.  
2. **API layer** → load‑balanced, autoscaled microservice.  
3. **Storage**: store raw text in a CDN‑backed object store (S3‑compatible).  
4. **Metadata DB**: NoSQL (Cassandra / DynamoDB) for paste ID → {hash, user_id, ttl, created_at}.  
5. **Cache**: In‑memory LRU cache (Redis) for hot pastes.  
6. **Security**: HMAC signed URLs for private pastes; rate limiting per IP.

**Depth**

- *Write path*: API generates a UUID → writes to object store; inserts metadata row with TTL; returns short URL.  
- *Read path*: API checks cache → if miss, fetches from object store, streams response, updates cache.  
- *Expiration*: TTL in DB triggers background job that deletes objects and rows; or use object‑store lifecycle policies.  
- Complexity: O(1) for writes/reads on average; cost dominated by storage I/O.

**Edge Cases**

- Extremely large pastes → chunked upload to avoid timeouts.  
- Same content submitted repeatedly → dedupe via SHA‑256 hash in DB.  
- Denial‑of‑service: enforce per‑IP quota, CAPTCHA after threshold.  

**Optimize & Communicate**

Explain trade‑offs (e.g., using a relational DB would give ACID guarantees but higher latency). Highlight monitoring: request latency, cache hit rate, error rates. Conclude with scaling plan: auto‑scale API based on CPU/latency, add read replicas for the metadata store if needed. This structured walk‑through shows clear problem framing, architectural reasoning, and practical implementation details—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
