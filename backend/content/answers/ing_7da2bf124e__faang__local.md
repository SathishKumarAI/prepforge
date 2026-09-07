---
qid: ing_7da2bf124e__faang__local
question: 'Explain: Writes (URL Shortening) — Design URL Shortener | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 481
total_tokens: 725
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:37:27-05:00'
sources: []
---

**1️⃣ Clarify**  
We’re asked to design a service that turns long URLs into short, human‑readable tokens (e.g., `https://tinyurl.com/abc123`). Key assumptions:  
- High read/write traffic; millions of redirects per second.  
- Tokens must be unique and collision‑free.  
- We need analytics (hit counts, referrers) and support for custom aliases.  

**2️⃣ Approach**  
1. **API layer** – expose `POST /shorten` and `GET /{token}`.  
2. **Token generator** – base‑62 counter or hash‑based scheme with collision check.  
3. **Storage** – NoSQL (e.g., DynamoDB/Bigtable) for key/value mapping (`token → longURL`).  
4. **Cache** – LRU Redis/TiKV to serve hot tokens and reduce DB load.  
5. **Analytics** – append hit data asynchronously to a log (Kafka → BigQuery).  

**3️⃣ Depth**  
- *Write*: generate token, ensure uniqueness via a distributed lock or atomic counter; store in DB; publish event for analytics. Complexity: O(1) write + eventual consistency.  
- *Read*: lookup cache first; miss triggers DB read and cache update. Latency ~ 10‑20 ms.  
- *Scalability*: horizontal scaling of API frontends, sharding the keyspace (token prefix → region).  
- *Availability*: use multi‑AZ replicas; read‑only replicas for analytics queries.  

**4️⃣ Edge Cases**  
- Token collisions on hash scheme → retry or fallback to counter.  
- Custom alias conflicts → check existence before creation.  
- Deletion/expiration of unused URLs – background job that flags stale entries.  

**5️⃣ Optimize & Communicate**  
Explain trade‑offs: a counter guarantees uniqueness but can expose usage patterns; hashing hides counts but needs collision handling. Discuss caching strategy to reduce DB load and latency, and how analytics are decoupled via event streaming for real‑time insights. This structured walk‑through showcases problem understanding, design decisions, complexity analysis, and edge‑case robustness—key signals for FAANG interview success.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
