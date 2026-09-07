---
qid: ing_117aed48a7__faang__local
question: 'Explain: End-to-End Example — Design URL Shortener | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 533
total_tokens: 775
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:24:21-05:00'
sources: []
---

**Clarify**  
We’re asked to design a URL‑shortening service (think Bitly).  
Assumptions:  
* Public API: `POST /shorten?url=… → shortURL`, `GET /{code} → redirect`.  
* High traffic (millions of requests/day), low latency (< 100 ms).  
* Unlimited user base, no auth.  
* Persistence must survive restarts and data loss.

**Approach**  
1. **Encode logic** – generate a unique short code (base‑62) from a counter or hash.  
2. **Storage layer** – key/value store mapping `code → longURL`.  
3. **Cache layer** – in‑memory LRU cache for hot URLs.  
4. **Scalability** – horizontal scaling of API front‑end + sharded DB.  
5. **Reliability** – write‑through to DB, eventual consistency for reads.

**Depth**  
*Code generation*: maintain a global atomic counter (or use Snowflake IDs). Convert integer → base‑62 string; length grows automatically.  
*Storage*: use a distributed KV store (e.g., DynamoDB, Cassandra) with the code as primary key.  
*Cache*: Redis or Memcached per front‑end node; size tuned to hit rate (~70–80 %).  
*API flow*: `POST /shorten` → validate URL, generate code, write through DB, return shortURL. `GET /{code}` → lookup cache → miss: query DB, populate cache, redirect.  

**Edge Cases**  
*Collision*: impossible with atomic counter; hash‑based IDs need collision detection.  
*Invalid URLs*: reject or sanitize.  
*Deleted/expired URLs*: optional TTL in KV store + cache.  
*Rate limiting*: protect against abuse.

**Optimize & Communicate**  
- **Throughput**: batch DB writes during high load, use write‑ahead logs.  
- **Latency**: keep cache hit ratio > 80 % by caching popular codes.  
- **Cost**: shorter codes reduce storage keys; compress long URLs if needed.  

Explain trade‑offs: counter guarantees uniqueness but scales poorly in multi‑region setups; hash + collision check is more flexible but adds latency. Highlight that this architecture satisfies FAANG expectations: clear assumptions, systematic design, complexity analysis (O(1) lookup, O(log n) for counter increments), and edge‑case coverage.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
