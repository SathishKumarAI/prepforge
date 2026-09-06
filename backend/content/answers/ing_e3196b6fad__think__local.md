---
qid: ing_e3196b6fad__think__local
question: 'Explain: Endpoint: GET /{short_code} — Design URL Shortener | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 202
output_tokens: 539
total_tokens: 741
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T15:59:29-05:00'
sources: []
---

**1️⃣ Clarify the scope and assumptions**  
- Identify what “Endpoint: GET /​{short_code}” means (a REST call that resolves a short code to the original URL).  
- Assume we’re designing only this read‑path; other services (create, analytics, auth) are out of scope.  
- Decide on target traffic (e.g., millions of requests per day) and latency requirement (< 200 ms).  

**2️⃣ Adopt a layered system‑design framework**  
- *Front‑end layer*: API gateway / load balancer.  
- *Application layer*: stateless service that looks up the code.  
- *Data layer*: key‑value store for mapping short_code → long_url, plus optional cache and analytics tables.  

**3️⃣ Step‑by‑step reasoning**  
1. **Cache first**: Query an in‑memory cache (Redis/Memcached) to avoid hitting disk or DB for hot codes.  
2. **Fallback to persistent storage**: If miss, hit a distributed key‑value store (e.g., DynamoDB, Cassandra).  
3. **Update cache on miss**: Write back to cache so subsequent hits are fast.  
4. **Return HTTP 301/302** with the long URL and set appropriate caching headers.  
5. **Graceful degradation**: If DB is down, serve a static error page or cached “unavailable” response.  

**4️⃣ Common pitfalls to avoid**  
- *Over‑caching*: Stale data if URLs are updated; use TTL or cache‑invalidating messages.  
- *Hotspotting*: A single popular code can overwhelm the DB; shard keys by prefix or use consistent hashing.  
- *Latency spikes*: Don’t block on DB latency; time out early and return a 503 with retry‑after header.  

**5️⃣ Sanity checks & verbalizing the design**  
- Verify that read traffic is ~10× write traffic; cache hit rate > 90 % keeps DB load low.  
- Estimate cost: e.g., 10 GB RAM for Redis ≈ $0.02/hr, DB storage minimal for key‑value pairs.  
- Explain to a peer: “We first try the cache; on miss we fetch from DynamoDB, then update cache. The endpoint is stateless so we can scale horizontally behind an ALB.”  

Use this numbered flow whenever you need to articulate a read‑heavy microservice endpoint in a system‑design interview.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
