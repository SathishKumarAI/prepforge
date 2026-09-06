---
qid: ing_a6035b0284__think__local
question: 'Explain: Design Instagram — Grokking System Design Interview: Patterns
  & Mock Interviews'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 195
output_tokens: 532
total_tokens: 727
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T12:01:38-05:00'
sources: []
---

**1️⃣ Clarify the ask and set assumptions**  
- *What is “Design Instagram” exactly?*  Assume we’re building a scalable, high‑throughput photo‑sharing platform (like Instagram).  
- *Scope:* focus on core features (user profile, feed, upload, likes/comments) while acknowledging optional services (search, recommendations, ads).  
- *Constraints:* millions of users, real‑time feeds, 24/7 availability, cost limits.  

**2️⃣ Adopt a system‑design framework**  
Use the classic “**Grokking System Design Interview**” pattern:  
1. Requirements & constraints → Functional vs non‑functional.  
2. High‑level components → API layer, storage, caching, background jobs, CDN.  
3. Data model & consistency → Tables/collections, eventual consistency for likes/comments.  
4. Scaling strategies → Partitioning, sharding, replication.  
5. Failure modes & monitoring → Circuit breakers, health checks.  

**3️⃣ Step‑by‑step reasoning**  
- **API gateway** → Route requests to user service, media service, feed service.  
- **User Service** (relational DB) → Stores profiles, follows/followers graph.  
- **Media Service** (object store + CDN) → Upload → compress → store → serve via CDN.  
- **Feed Service** (cache‑first + queue) → Pull user’s followees’ posts, push into Redis stream for real‑time feed; fallback to DB on cache miss.  
- **Background workers** → Rebuild feeds for new posts, handle likes/comments asynchronously.  
- **Analytics & recommendation** → Separate microservice using event streams (Kafka).  

**4️⃣ Avoid common traps**  
- Don’t over‑optimize early: start simple, then add caching/sharding.  
- Beware of “single point of failure” in media storage; use redundant buckets.  
- Remember that social graphs are highly skewed – hot users need special handling.  

**5️⃣ Sanity‑check & communicate**  
- Verify that each requirement is addressed (e.g., latency < 200 ms for feed).  
- Draw a concise diagram: arrows from client → API → services → DB/CDN, with sidebars for caching and queues.  
- Explain trade‑offs: eventual consistency vs strong consistency; cost of CDN vs on‑prem storage.  

Follow this pattern in mock interviews to demonstrate clear, structured thinking and depth of system design knowledge.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
