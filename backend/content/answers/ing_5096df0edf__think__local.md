---
qid: ing_5096df0edf__think__local
question: 'Explain: Feed Reads — Design Instagram | System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 194
output_tokens: 819
total_tokens: 1013
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T06:20:57-05:00'
sources: []
---

**1️⃣ Clarify the ask & set assumptions**  
- *Goal*: Sketch a scalable “Feed” service for an app like Instagram.  
- *Constraints*: High read traffic, low latency, personalized ordering (time‑sorted + relevance), eventual consistency of likes/comments, data size ≈ billions of posts.  
- *Assume*: We have user IDs, post IDs, timestamps, and basic social graph (followers). No need to dive into image storage.

**2️⃣ Pick a mental model / framework**  
Use the classic **“Read‑Heavy System” + “Social Graph”** design pattern:  
1. Data layer → stores raw posts.  
2. Feed generation layer → pre‑computes or streams feeds.  
3. Delivery layer → serves requests with caching.

**3️⃣ Step‑by‑step reasoning**  

| Step | What to decide | Why |
|------|----------------|-----|
| **Data model** | Post table: `post_id, user_id, timestamp, media_url, metadata`. Store in a partitioned NoSQL store (e.g., DynamoDB). | Enables fast point reads by post ID. |
| **Social graph** | Use a graph DB or key‑value map: `user_id → followers_set`. Cache frequently accessed follower lists in Redis. | Needed to know who should see a post. |
| **Feed generation strategy** | *Push* vs *Pull*.  
- Push: When a user posts, push the post ID into each follower’s feed queue (e.g., Kafka topic or SQS).  
- Pull: On read, merge recent posts from followed users on‑the‑fly.  | Push gives low latency but heavy write traffic; pull is simpler but can be slower. |
| **Feed storage** | Store per‑user feeds as a sorted set in Redis (`ZADD user_feed post_id timestamp`). Trim to N items. | Allows O(log N) insert and O(N) read for top K posts. |
| **Personalization / ranking** | Add score = `α * recency + β * engagement`. Store engagement metrics separately (likes, comments). Update scores asynchronously via a worker. | Keeps feed relevant without heavy per‑request computation. |
| **Caching layer** | Cache the first page of each user’s feed in Redis or CDN edge cache. Invalidate on new post or engagement update. | Reduces DB load and latency. |
| **Scalability & fault tolerance** | Partition feeds by user hash; replicate across shards. Use eventual consistency for likes/comments; read‑through cache with TTL. | Handles millions of concurrent reads. |

**4️⃣ Common pitfalls to avoid**  
- *Over‑caching*: stale data if you invalidate too late.  
- *Too many writes*: pushing a post to every follower can overwhelm the system. Consider batching or hybrid push/pull.  
- *Ignoring cold starts*: new users with no followers → feed empty; handle gracefully.  
- *Simplifying graph traversal*: fetching large follower sets on‑the‑fly leads to latency spikes.

**5️⃣ Sanity check & verbalize**  

1. **Does it meet read latency?** Yes—feed is pre‑computed in Redis, so a GET returns < 50 ms.  
2. **Is write load manageable?** Push strategy requires `#followers` writes; mitigated by batching and partitioning.  
3. **Can we scale horizontally?** Each component (DB shards, cache nodes) can be added independently.  

When explaining to an interviewer:  
- Start with the high‑level architecture diagram.  
- Walk through a user posting → push to followers → feed stored in Redis → read request hits cache.  
- Highlight trade‑offs (push vs pull, consistency vs latency).  
- Conclude with scalability metrics and potential extensions (content filtering, A/B testing).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
