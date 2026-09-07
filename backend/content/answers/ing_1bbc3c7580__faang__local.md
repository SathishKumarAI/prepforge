---
qid: ing_1bbc3c7580__faang__local
question: 'Explain: Design Deep Dive — Design URL Shortener | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 484
total_tokens: 725
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:49:15-05:00'
sources: []
---

**Clarify**  
We’re asked to design a scalable URL‑shortening service (e.g., bit.ly). Key assumptions:  
* Millions of users, billions of shorten requests per day.  
* Short URLs must be unique and resolve in < 100 ms.  
* We need high availability, eventual consistency for analytics, and GDPR compliance.

**Approach**  
1. **API layer** – REST endpoints `POST /shorten`, `GET /{code}`.  
2. **Code generation** – base‑62 hash of a monotonic counter or salted SHA‑256 truncated to 6–8 chars; store mapping in a key‑value store.  
3. **Storage** – distributed NoSQL (Cassandra/Redis) for hot keys, fallback RDBMS for audit.  
4. **Redirection path** – CDN edge cache for static redirects, backend only on cache miss.  
5. **Analytics** – asynchronous event queue (Kafka) → data warehouse for click counts.  
6. **Security** – rate‑limit per IP/user, token auth, optional password protection.

**Depth**  
* **Throughput**: 1 kRPS → 50 kRPS with sharded Redis clusters; replication factor 3 ensures HA.  
* **Latency**: Cache hit < 10 ms; DB lookup ≤ 20 ms.  
* **Data model**: `code → {original_url, created_at, ttl}` in a wide‑row store.  
* **Consistency**: Use eventual consistency for click counts; strong consistency only on create/delete.

**Edge Cases**  
* Collisions: detect during write, retry with new counter.  
* Expired URLs: TTL cleanup job or lazy deletion.  
* Bot abuse: CAPTCHA or IP blacklist.  
* GDPR: enable user to delete mapping and analytics data.

**Optimize & Communicate**  
Explain trade‑offs: using a hash for code generation gives speed but requires collision handling; sharding reduces hot spot pressure; CDN offloads traffic and lowers latency. Conclude with monitoring (latency, error rates), alerting, and a rollback plan for major changes. This showcases structured thinking, depth, and clear communication—key to FAANG scoring.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
