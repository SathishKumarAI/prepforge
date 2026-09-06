---
qid: ing_e029c4c340__think__local
question: 'Explain: Post Service — Design Instagram | System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 194
output_tokens: 443
total_tokens: 637
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T15:45:57-05:00'
sources: []
---

**Metacognitive roadmap for tackling the “Post Service – Design Instagram” interview**

1. **Clarify scope & assumptions**  
   * Identify core features (post upload, feed, likes/comments, user‑profile).  
   * Decide on constraints: scale (millions of users), latency targets, data consistency vs availability.  
   * State any trade‑offs you’ll accept (e.g., eventual consistency for feeds).

2. **Choose a design framework**  
   * Start with high‑level components: API gateway → Service layer → Data stores → Cache → CDN.  
   * Map each requirement to an architectural pattern (CQRS for write/read separation, event sourcing for audit).  

3. **Step‑by‑step reasoning**  
   * **Write path**: Upload → store media in object storage + metadata in relational DB; publish event to a message queue.  
   * **Read path**: Build user feed by pulling recent posts from a “feed” table or materialized view, served via cache (Redis).  
   * **Likes/comments**: Increment counters asynchronously, use sharded tables for high write throughput.  
   * **Scaling**: Discuss horizontal scaling of services, database sharding, CDN for media.

4. **Avoid common traps**  
   * Don’t forget to address data consistency and eventual sync between shards.  
   * Beware of over‑engineering (e.g., microservices when a monolith suffices).  
   * Don’t ignore failure modes—think about retries, idempotency, circuit breakers.

5. **Sanity check & verbalize**  
   * Re‑state the big picture: “We’re building a write‑optimized pipeline feeding a read‑optimized cache.”  
   * Highlight trade‑offs (latency vs consistency), and justify design choices with numbers (e.g., 10k writes/sec, 200 ms latency).  
   * End with open questions to gauge interviewers’ priorities.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
