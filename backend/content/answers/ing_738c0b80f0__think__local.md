---
qid: ing_738c0b80f0__think__local
question: What is Instagram? — Design Instagram | System Design Interview | AlgoMaster.io
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 194
output_tokens: 501
total_tokens: 695
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T08:40:19-05:00'
sources: []
---

**1️⃣ Clarify the ask & assumptions**  
* Identify that the interviewer wants a high‑level system design for an “Instagram‑style” photo sharing app, not a deep dive into ML models.  
* Assume: public users, unlimited media uploads, real‑time feed, basic privacy (follow/unfollow), and a single data center initially.  

**2️⃣ Adopt a layered architectural framework**  
* **Client layer** – mobile/web UI → REST/GraphQL APIs.  
* **API gateway** – request routing, auth, rate‑limiting.  
* **Business logic services** – user mgmt, feed generation, media handling.  
* **Data stores** – relational DB for users & relationships; object store (S3) for images/video; NoSQL for feeds (e.g., Cassandra).  
* **Cache layer** – Redis/Memcached for hot feed items and session tokens.  
* **Background workers** – image resizing, thumbnail creation, async feed pushes.  

**3️⃣ Step‑by‑step reasoning**  
1. **User flow**: register → upload photo → tag & share → followers see in timeline.  
2. **Write path**: API → auth → media store (async) → DB update; enqueue background job for feed propagation.  
3. **Read path**: client requests feed → cache lookup → if miss, query “user_feed” table → assemble post objects → return to UI.  
4. **Scalability**: partition feeds by user ID shard; use CDN for media delivery; horizontally scale API servers behind a load balancer.  

**4️⃣ Avoid common traps**  
* Don’t over‑optimize early – start with simple relational DB, then move heavy ops (feeds) to NoSQL.  
* Forgeting eventual consistency can break feed freshness.  
* Ignoring security (e.g., token expiration, HTTPS).  

**5️⃣ Sanity‑check & verbalize**  
* Verify each component satisfies a requirement: upload speed, feed latency < 2 s, 99.9% uptime.  
* Speak the design in layers: “We’ll expose REST endpoints… behind an API gateway… we store media in S3…”  
* End with trade‑offs: “Using Cassandra gives us fast reads but sacrifices ACID; we handle that with eventual consistency.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
