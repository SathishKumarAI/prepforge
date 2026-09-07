---
qid: ing_86b84659d7__faang__local
question: 'Explain: Clients (Web, Mobile) — Design Instagram | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 509
total_tokens: 751
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:57:08-05:00'
sources: []
---

**Clarify**  
You’re asked to design a scalable Instagram‑style photo‑sharing service for web and mobile clients.  
Assumptions:  
- Unlimited users, high read/write traffic.  
- Users can upload photos, like/comment, follow others, and view a feed.  
- Latency ≤ 200 ms for feed retrieval; data consistency is eventual.

**Approach**  
1. **Core entities & storage** – Users, Photos, Likes/Comments, Followers.  
2. **API gateway + load balancer** – Route traffic to stateless app servers.  
3. **Data layer** – Use a relational DB (e.g., PostgreSQL) for strong consistency on user/profile data; NoSQL (Cassandra / DynamoDB) for high‑write photo metadata and feeds.  
4. **Feed generation** – Pull‑based: precompute *timeline* tables per follower using an append‑only log. Push‑based: stream new posts to followers’ queues via Kafka.  
5. **Caching** – Redis/Memcached for hot feeds, image CDN for media assets.  
6. **Image processing** – Store originals in S3; generate thumbnails asynchronously with a worker pool.

**Depth**  
- *Feed read*: `SELECT * FROM timeline WHERE user_id=? ORDER BY ts DESC LIMIT 50`. O(1) on key‑value store + cache hit.  
- *Post write*: Append to global log → trigger async job that updates each follower’s timeline (write‑amplification).  
- *Scalability*: Horizontal scaling of app servers; sharding by user ID for DBs; partitioning Kafka topics.

**Edge Cases**  
- New users with no followers: avoid heavy writes.  
- Very active users causing write spikes → backpressure on worker pool.  
- Cache invalidation when a photo is deleted or privacy changes.

**Optimize & Communicate**  
- Use *Read‑Through* cache for feed; fallback to DB only if miss.  
- Batch updates to timelines to reduce I/O (e.g., every 500 ms).  
- Monitor latency, error rates, and auto‑scale Kafka consumers.  

Convey that the design balances consistency vs. availability, leverages CDN for media, and uses event streaming to keep feeds fresh while keeping write amplification manageable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
