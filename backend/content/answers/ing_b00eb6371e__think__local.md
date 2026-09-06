---
qid: ing_b00eb6371e__think__local
question: 'Explain: 5.8 Get Comments for a Post — Design Instagram | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 201
output_tokens: 518
total_tokens: 719
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T12:37:56-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**  
- Confirm that “Get Comments for a Post” is a *read* endpoint on a social‑media platform (Instagram‑like).  
- Assume we’re dealing with millions of posts, high read traffic, eventual consistency, and that comments can be nested or threaded.  
- Note constraints: latency < 200 ms, data size per request ~10–20 KB, rate limits per user.

**2️⃣ Adopt a system‑design framework**  
- Start with **requirements** (functional & non‑functional).  
- Sketch a **high‑level architecture**: API gateway → load balancer → stateless web servers → cache → database.  
- Decide on the *data model* (SQL vs NoSQL) and how to partition/shard comments.

**3️⃣ Step‑by‑step reasoning**  
1. **API contract** – GET `/posts/{postId}/comments?limit=20&offset=0`.  
2. **Caching strategy** – Cache hot posts’ comment lists in Redis with TTL; use cache‑aside pattern.  
3. **Database schema** – Store comments in a NoSQL collection (`comment_id`, `post_id`, `parent_id`, `content`, `author_id`, `timestamp`). Index on `post_id`.  
4. **Pagination** – Use cursor pagination (store last comment’s timestamp or ID).  
5. **Consistency** – Accept eventual consistency; updates to comments go through a write‑through cache or async queue.  
6. **Scaling** – Shard by `post_id`; replicate read replicas; use CDN for static assets.

**4️⃣ Common pitfalls to avoid**  
- Over‑caching mutable data (stale comments).  
- Ignoring nested comment depth limits → performance blowup.  
- Using offset pagination on huge datasets → O(n) scans.  
- Forgetting to handle rate limiting & abuse detection.

**5️⃣ Sanity checks & verbalizing**  
- Verify latency targets by simulating cache hit/miss scenarios.  
- Ask: “How does the system behave when a post has 1M comments?” – ensures sharding and pagination are solid.  
- Communicate trade‑offs clearly: e.g., “We choose NoSQL for horizontal scalability but accept eventual consistency.”  

By following this checklist, you can systematically design and explain the “Get Comments for a Post” endpoint in an interview setting.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
