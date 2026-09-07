---
qid: ing_f4ec0df62e__faang__local
question: 'Explain: 5.2 Follow a User — Design Instagram | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 467
total_tokens: 711
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:09:26-05:00'
sources: []
---

**Clarify**  
We need a scalable *“follow”* service for an Instagram‑style app: users can follow/unfollow others, and we must support real‑time feed generation and notifications. Assume millions of users, high write traffic (follows), and read traffic for feeds.

**Approach**  
1. **Data model** – store follower lists in a distributed key–value store (e.g., Cassandra). Each user has two tables: `followers(user_id) → set<user_id>` and `following(user_id) → set<user_id>`.  
2. **Write path** – on follow/unfollow, update both tables atomically (using lightweight transactions or a transactional layer).  
3. **Read path** – to build a user’s feed, pull the latest posts from all users in their `following` list. Cache popular feeds with Redis or use a push‑based “fan‑out” approach: when a user posts, push that post into followers’ queues (e.g., Kafka + per‑user topic).  
4. **Consistency** – eventual consistency is acceptable for feeds; we can enforce strong consistency on the follow tables via write‑time transactions.

**Depth**  
- *Complexity*: Follow/unfollow O(1) writes to two tables; feed read O(F log P) where F = following count, P = posts per user.  
- *Scalability*: Shard by user_id; use Bloom filters to avoid unnecessary reads for users with no followers.  
- *Fault tolerance*: Replicate key‑value stores; use Kafka’s partitioning for fan‑out.

**Edge Cases**  
- Self‑follow prevention, duplicate follows, large follower lists (>10k). Test bulk follow/unfollow bursts and cache eviction.  

**Optimize & Communicate**  
To reduce read latency, precompute “home feeds” during low traffic windows (batch job) or use a CDN for static post blobs. Explain trade‑offs: fan‑out writes consume more write bandwidth but yield faster reads; pull‑based feeds save writes but increase read load. Conclude with monitoring metrics: follow churn rate, feed latency, cache hit ratio.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
