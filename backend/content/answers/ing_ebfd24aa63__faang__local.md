---
qid: ing_ebfd24aa63__faang__local
question: 'Explain: 5.7 Comment on a Post — Design Instagram | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 509
total_tokens: 753
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:49:23-05:00'
sources: []
---

**Clarify**  
We’re building the “add comment” API for an Instagram‑style feed: a user posts a short text (≤ 2 000 chars) on another’s photo/video. We need to store, retrieve, and surface comments with real‑time updates while handling millions of users.

*Assumptions:*  
- Comments are immutable after creation.  
- Users can delete their own comments.  
- Pagination/ordering by timestamp or “most liked”.  
- Real‑time push to comment threads (WebSocket / FCM).  

**Approach**  
1. **API layer** – REST endpoint `POST /posts/{postId}/comments`. Validate user, rate‑limit, and enforce content policy.  
2. **Storage** – Sharded NoSQL table (`PostID | Timestamp`) for comments; secondary index on `UserID` for deletion.  
3. **Caching** – In‑memory LRU per post (e.g., Redis) to serve hot comment lists.  
4. **Push** – Publish event to a topic per post; consumers update client caches via WebSocket/FCM.  

**Depth**  
- **Write path:** API → auth → rate‑limit → write to DB (async commit), publish event.  
- **Read path:** Check cache → hit: return paginated slice; miss: query DB, populate cache.  
- Complexity: O(log N) per shard for writes/reads; amortized constant time for cache hits.  
- Deletion: soft‑delete flag in DB + purge from cache on next read.

**Edge Cases**  
- Spam bursts → burst limiter + captcha.  
- Deleted posts/comments → tombstone markers, avoid stale cache.  
- Extremely long comment threads → pagination limits and “load more” UI.  

**Optimize & Communicate**  
- Use Bloom filters to reject nonexistent post IDs early.  
- Implement eventual consistency with read‑your‑writes guarantees via session tokens.  
- Explain trade‑offs: strong consistency vs latency, sharding granularity vs write amplification. Conclude by highlighting how this design scales linearly with user base while keeping per‑comment latency sub‑200 ms.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
