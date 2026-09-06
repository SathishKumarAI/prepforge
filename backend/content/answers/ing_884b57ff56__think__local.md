---
qid: ing_884b57ff56__think__local
question: 'Explain: 5.4 Get a Post by ID — Design Instagram | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 201
output_tokens: 628
total_tokens: 829
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T10:03:05-05:00'
sources: []
---

**1️⃣ Clarify the ask & assumptions**  
- The interviewer wants an end‑to‑end design of the “Get a post by ID” endpoint for an Instagram‑style system.  
- Assume: millions of users, high read traffic, eventual consistency is acceptable, and we’re focusing on latency (≤ 200 ms) rather than cost.  
- Clarify whether to support pagination, caching, privacy rules, or just the raw data retrieval.

**2️⃣ Pick a mental model / framework**  
Use the classic *data‑flow + scalability* lens:  
1. **Client → API Gateway → Service Layer** (REST/GraphQL)  
2. **Service ↔ Data Store(s)** (relational for user meta, NoSQL for posts, cache layer).  
3. **Edge / CDN** for static assets.  
Apply CAP: we’ll favor **C**onsistency for the post content, but allow **P**artial updates on metadata.

**3️⃣ Step‑by‑step reasoning**  

1. *API signature*: `GET /posts/{postId}` → returns JSON with text, media URLs, owner ID, likes count, comments summary.  
2. *Authorization*: Check JWT, ensure the user has permission (public post or follower).  
3. *Data lookup*:
   - **Cache first**: Redis key `post:{id}` → if hit, return immediately.
   - On miss: query a *Post Service* that reads from a NoSQL table (`posts`), which contains the core fields and pointers to media blobs in object storage (S3).  
4. *Denormalize counts*: Store likes & comments count in the post document; update via async side‑effect jobs to avoid write stalls.  
5. *Media URLs*: Generate signed URLs or use CDN cache for images/videos.  
6. *Response shaping*: Strip unnecessary fields, apply rate limiting per user.

**4️⃣ Common traps to avoid**  

- **N+1 queries**: Don’t fetch author info in a separate call; embed minimal user data in the post doc.  
- **Cold starts on cache miss**: Ensure fallback reads are fast (single‑query, no joins).  
- **Over‑sizing the cache keyspace**: Use consistent hashing or sharding to keep Redis memory bounded.  
- **Ignoring privacy**: Always enforce follow/visibility rules before serving data.

**5️⃣ Sanity‑check & verbalize**  

- Verify latency: `cache hit (≈1 ms)` vs `DB read (≈10–20 ms)`.  
- Confirm consistency: eventual updates to likes/comments won’t break the read path.  
- Communicate trade‑offs: “We’re sacrificing strong consistency on counts for lower write latency.”  

Wrap up by highlighting extensibility (e.g., adding comment pagination, real‑time like streams) and how monitoring/alerting would be set up for this critical endpoint.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
