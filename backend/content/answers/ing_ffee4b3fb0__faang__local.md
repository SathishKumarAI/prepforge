---
qid: ing_ffee4b3fb0__faang__local
question: 'Explain: 5.1 Get User Profile — Design Instagram | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 480
total_tokens: 723
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:34:57-05:00'
sources: []
---

**Clarify**  
We need a scalable *GetUserProfile* service for Instagram‑style app that returns the user’s public profile (username, avatar, bio, follower/following counts) plus a paginated list of recent posts. Assume millions of users, high read traffic (~10k req/s), eventual consistency acceptable, and data stored in a mix of relational DB (users, relationships) and NoSQL (posts).

**Approach**  
1. **Data model** – Users table (`user_id`, `username`, `avatar_url`, `bio`).  
2. **Pre‑compute aggregates** – Store follower/following counts in a separate cacheable key/value store (Redis).  
3. **Post feed** – Store posts in a partitioned collection keyed by `user_id` with a timestamp; use an inverted index for quick range queries.  
4. **API flow** –  
   * Read user record from RDBMS (or read‑through cache).  
   * Fetch counts from Redis (cache‑miss → recompute via async job).  
   * Query posts collection with limit/offset or cursor for pagination.  
5. **Caching & CDN** – Serve static assets (avatar, images) via CDN; cache whole profile JSON in edge caches.

**Depth**  
- Complexity: O(1) per lookup + O(log N) for post range query.  
- Fault tolerance: Read‑through cache with fallback to DB; async jobs update counts.  
- Consistency: Accept eventual consistency for follower counts; use write‑ahead logs for critical updates.

**Edge Cases**  
- User deleted → 404 after soft delete flag.  
- Extremely popular users → paginate posts, throttle requests.  
- Cache stampede on cold start → cache‑aside with request coalescing.

**Optimize & Communicate**  
- Batch multiple profile requests (e.g., for a feed) to reduce DB roundtrips.  
- Use a CDN and HTTP/2 server push for avatars.  
- Present trade‑offs: caching reduces latency but adds staleness; using NoSQL for posts scales horizontally but complicates joins.  

This design balances speed, scalability, and maintainability while keeping the user experience smooth.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
