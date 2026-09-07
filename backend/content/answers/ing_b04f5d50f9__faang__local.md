---
qid: ing_b04f5d50f9__faang__local
question: 'Explain: Flow: Redirecting to Original URL — Design URL Shortener | System
  Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 481
total_tokens: 726
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:33:12-05:00'
sources: []
---

**Clarify**  
We’re building a *URL‑shortening* service that accepts an original long URL and returns a compact key (e.g., `https://tiny.app/abc123`). When the key is visited, the user must be redirected to the original URL. Key assumptions:  
- High read/write traffic, low latency required.  
- URLs are arbitrary strings; duplicates may exist.  
- Need to support custom aliases and analytics.  

**Approach**  
1. **API Layer** – REST endpoints: `POST /shorten`, `GET /{key}`.  
2. **Data Model** – Table with columns `(id PK, key, original_url, created_at, click_count)`.  
3. **Key Generation** – Use a counter → base‑62 encode for deterministic keys; or hash + collision resolution for custom aliases.  
4. **Storage** – Primary DB (e.g., PostgreSQL) for durability; cache (Redis) to hit hot URLs.  
5. **Redirect Service** – On `GET`, lookup key in cache, fallback to DB, increment click count asynchronously.  

**Depth**  
- *Encoding*: maintain a global counter via atomic DB or distributed lock; encode counter → 6‑char base‑62 string.  
- *Scalability*: horizontal API servers behind LB; read traffic served by Redis cluster.  
- *Consistency*: eventual consistency for click counts (update in DB asynchronously).  
- *Complexity*: `O(1)` lookup, `O(log n)` write to DB, `O(1)` cache hit.  

**Edge Cases**  
- Key collision on custom alias → reject or suggest alternative.  
- Extremely long URLs → truncate or store hash with validation.  
- Deleted URLs → return 404 but log analytics.  

**Optimize & Communicate**  
To reduce latency further, we can shard the key space by prefix (first character) and replicate cache nodes per shard. For a production rollout, start with a monolith, then gradually add caching and sharding as traffic grows. Explain trade‑offs: stronger consistency vs. higher write throughput; larger cache size vs. memory cost. This shows clear, structured thinking expected in FAANG interviews.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
