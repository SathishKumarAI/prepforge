---
qid: ing_9ba59a7ff8__faang__local
question: 'Explain: Caching Requirements — Design Instagram | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 456
total_tokens: 695
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:46:10-05:00'
sources: []
---

**Clarify**  
You’re asked to design the caching layer for an Instagram‑style feed system.  
Key assumptions: *real‑time* user actions (likes, follows), high read volume, low write latency, and a large global user base with millions of posts per day.

**Approach**  
1. Identify hot data: most viewed posts, trending tags, user home feeds.  
2. Choose cache tiers: in‑memory (Redis) for ultra‑fast reads; CDN edge caches for static media.  
3. Eviction policy: LFU for feed items, LRU for profile thumbnails.  
4. Invalidation strategy: publish/subscribe to a “feed update” topic so followers’ caches refresh on new posts or likes.

**Depth**  
- **Feed cache key** = `home:{user_id}:{page}` → list of post IDs ordered by relevance.  
- Store each post’s metadata in Redis hash; media served from S3 + CloudFront.  
- Use a write‑through pattern: updates go to DB, then publish invalidation event.  
- Complexity: O(1) read for cache hit; O(log N) for priority queue eviction.  
- Trade‑offs: heavier memory usage vs. latency gains; eventual consistency acceptable for likes count.

**Edge Cases**  
- Cache stampede when a new post is first requested → use “double‑checked locking” with distributed lock.  
- Users following/unfollowing rapidly → batch invalidations to avoid thrashing.  
- Cold start for new users → fall back to DB until cache warmed.

**Optimize & Communicate**  
Explain that adding a second tier (e.g., Memcached) can reduce load on Redis, and using CDN for media cuts origin traffic by >80 %. Emphasize monitoring hit rates; if below 70 % switch eviction or add more nodes. Conclude with a diagram of the flow: Client → Edge Cache ↔ Redis ↔ DB, highlighting asynchronous invalidation via Kafka. This showcases structured reasoning, clear trade‑offs, and scalability—key signals for FAANG interviewers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
