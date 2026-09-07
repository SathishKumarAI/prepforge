---
qid: ing_8574f16b64__faang__local
question: 'Explain: 5.5 Get User Feed — Design Instagram | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 520
total_tokens: 763
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:54:50-05:00'
sources: []
---

**1️⃣ Clarify**  
We need a scalable “feed” service for an Instagram‑like app: users see recent posts from people they follow, sorted by recency (and optionally relevance).  
Assumptions to confirm:  
- How many users and posts per day?  
- Is the feed personalized beyond simple follower order?  
- What latency budget?  
- Do we support offline reads or only real‑time?

**2️⃣ Approach**  
1. **Model data** – `User`, `FollowRelation`, `Post`.  
2. **Precompute feeds** (push model) to avoid heavy joins at read time.  
3. Store each user’s feed in a partitioned key‑value store (`user_id → sorted list of post_ids`).  
4. On new post: fetch followers, push post ID into each follower’s feed slice (capped size).  
5. For “pull” edge cases (e.g., offline or large fan‑out), use a lightweight query against the Post table.

**3️⃣ Depth**  
- **Write path**: `Post → Followers list (cached in Redis) → Push to Feed shards`. Complexity ≈ O(#followers).  
- **Read path**: O(1) fetch of top N posts from user’s feed shard.  
- **Storage**: Shard by hash(user_id); each shard holds sorted lists (e.g., using RocksDB or Cassandra with time‑series column families).  
- **Consistency**: eventual; new posts appear within seconds.  
- **Backfilling**: scheduled job to rebuild feeds for users who missed pushes.

**4️⃣ Edge Cases**  
- Users with millions of followers → throttle push (rate limit, batch updates).  
- Deleting a post → tombstone in feed shards or background cleanup.  
- Follow/unfollow churn → update follower list cache and invalidate affected feeds.  

**5️⃣ Optimize & Communicate**  
- Use *fan‑out on write* for low read latency; trade‑off is higher write cost.  
- Compress feed entries (only post_id, timestamp).  
- Cache most recent posts in Redis per user to serve hot traffic instantly.  
Explain that this design scales horizontally: add more shards as users grow, and the push pipeline can be distributed across worker queues. This balances latency, consistency, and resource usage—key for a FAANG‑style feed service.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
