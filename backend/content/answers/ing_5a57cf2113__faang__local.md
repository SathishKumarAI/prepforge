---
qid: ing_5a57cf2113__faang__local
question: 'Explain: Feed Service — Design Instagram | System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 599
total_tokens: 837
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:13:44-05:00'
sources: []
---

**1️⃣ Clarify**  
We’re asked to design an **Instagram‑style feed service** that pulls posts from followers, orders them by recency/engagement, and serves them with low latency. Assume: *public posts only*, *millions of users*, *high write/read ratio* (≈10× writes), *global scale*, *no real‑time constraints beyond a few hundred ms per request*.  

**2️⃣ Approach**  
- **Data model**: `Post(id, authorId, ts, likes, …)`; `Follow(follower, followee)`.  
- **Feed generation**: precompute “home feeds” per user using a *push* strategy (write‑time fan‑out).  
- **Storage**: use a key‑value store for posts, and a distributed cache (Redis/ElasticCache) for feeds.  
- **Algorithm**: on post write → publish to author’s followers’ queues; each follower gets the new post inserted at front of their feed list (size capped, e.g., 2000). Use priority queue sorted by `(ts * α + likes * β)` to blend recency & engagement.  

**3️⃣ Depth**  
- **Write path**: `Post → write to PostStore` (O(1)), then `Fan‑out → enqueue to N follower queues` (N ≈ avg followers). Use asynchronous workers to batch writes; store queue entries in a sorted set per user (`ZADD`).  
- **Read path**: client requests feed → read from cache; if miss, fetch next slice from PostStore via the queue and cache. Complexity: write ~O(N) fan‑out (but async), read O(log k) where k is number of posts in feed.  
- **Scalability**: shard by user hash for queues; use partitioned key ranges for PostStore.  

**4️⃣ Edge Cases**  
- Users with >1M followers → throttle fan‑out or switch to pull‑based hybrid.  
- Deleting a post → propagate tombstone markers in follower queues.  
- Re‑like/hide actions → update feed ordering by pushing new score into queue.  

**5️⃣ Optimize & Communicate**  
- **Backpressure**: use message brokers (Kafka) for fan‑out to smooth spikes.  
- **Caching tiering**: L1 in‑memory, L2 distributed cache, fallback to PostStore.  
- **Monitoring**: track read/write latency, queue lengths, cache hit rates; alert on cold starts.  

By framing the problem with clear assumptions, outlining a push‑based precomputed feed, detailing data structures and complexity, addressing edge scenarios, and discussing operational optimizations, we demonstrate structured, deep engineering thinking—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
