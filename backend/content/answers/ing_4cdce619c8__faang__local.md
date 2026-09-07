---
qid: ing_4cdce619c8__faang__local
question: 'Explain: Endpoint: POST /shorten — Design URL Shortener | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 481
total_tokens: 725
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:43:03-05:00'
sources: []
---

**Clarify**  
We need a REST endpoint `POST /shorten` that receives a long URL and returns a short token (e.g., `abc123`). Assume: 1 M requests/day, 100 % uptime, 99.9 % success rate, latency < 200 ms. We’ll ignore authentication for brevity.

**Approach**  
1. **API layer** – FastHTTP with JSON body `{url:"…"} → {short:"abc123"}`.  
2. **Service layer** – Two‑step: (a) generate a unique key, (b) persist mapping.  
3. **Storage** – Distributed cache (Redis) for hot keys + durable DB (PostgreSQL/NoSQL) for persistence.  
4. **Redirection** – `GET /{token}` looks up in Redis; on miss, query DB and repopulate cache.

**Depth**  
*Key generation*: Base‑62 counter or hash of URL+salt → 8‑char string. Collision resolution by linear probing.  
*Storage schema*: `short_id PK`, `original_url TEXT NOT NULL`. Index on `short_id` for O(log n).  
*Scalability*: Horizontal API shards behind a load balancer; Redis cluster sharded by hash of key; DB read replicas.  
*Complexity*: Generation O(1), lookup O(1) in cache, O(log n) in DB.  
*Fault tolerance*: Cache miss → DB fallback; if DB fails, serve 503.

**Edge Cases**  
- Duplicate URLs: optionally return same short ID (idempotent).  
- Invalid URL format → 400 Bad Request.  
- Token collision after many inserts → rehash or extend length.  
- High write burst → rate‑limit API, use async queue to DB.

**Optimize & Communicate**  
We can pre‑allocate a pool of tokens in Redis to avoid DB contention during spikes. Use CDN edge caching for redirection responses. Explain trade‑offs: tighter latency ↔ higher cache hit ratio; larger token space ↔ storage overhead. Conclude with monitoring (latency, error rate) and A/B testing for key‑generation strategy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
