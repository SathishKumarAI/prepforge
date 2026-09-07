---
qid: ing_ee45854abf__faang__local
question: 'Explain: Requirement Clarification — Design Instagram | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 565
total_tokens: 804
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:54:14-05:00'
sources: []
---

**Clarify**  
The interviewer wants a high‑level system design for an Instagram‑style photo‑sharing app.  
Assumptions I’d confirm:  

- Expected traffic (users, uploads per second).  
- Feature scope (feed, stories, reels, comments, likes, direct messages).  
- Data persistence needs (relational vs NoSQL).  
- Latency targets for feed generation and image serving.  
- Geographic distribution and CDN requirements.

**Approach**  
1. **Front‑end & API gateway** – load‑balanced HTTP(S) endpoints.  
2. **User service** – auth, profile CRUD (PostgreSQL + Redis cache).  
3. **Media service** – upload → S3/Blob storage; generate thumbnails via Lambda or worker pool.  
4. **Feed service** – push vs pull model; use a graph database (e.g., Neo4j) for follow edges, and pre‑compute feeds in Kafka streams into Redis Streams.  
5. **Engagement service** – likes/comments stored in a sharded NoSQL store (Cassandra).  
6. **Messaging** – SNS/SQS or Pub/Sub for notifications.  
7. **CDN** – CloudFront / Akamai to serve images globally.  

**Depth**  
- *Upload flow*: Client → API Gateway → Media Service → S3 + thumbnail job; return media ID.  
- *Feed generation*: On follow, publish event → Kafka → worker that writes new post IDs into follower’s feed list in Redis (LRANGE for pagination). Complexity: O(1) push per follower, O(log n) read for pagination.  
- *Scalability*: Horizontal scaling of services; use auto‑scaling groups. Consistency: eventual consistency for likes/comments; strong consistency for user profile updates via PostgreSQL.

**Edge Cases**  
- Large media files → chunked uploads, resumable.  
- Sudden traffic spikes → autoscaling thresholds, circuit breakers.  
- Data loss in Kafka → replication factor ≥ 3.  
- Privacy: enforce per‑user ACLs on media objects; use signed URLs with short TTL.

**Optimize & Communicate**  
I’d reduce read latency by caching popular feeds in Redis Cluster and invalidating via Pub/Sub when a user posts. For write amplification, batch feed updates for users with >10k followers to avoid per‑follower writes. I’d explain trade‑offs: push model gives instant feed but higher write cost; pull model saves writes but increases read latency. Finally, I’d present a simple sequence diagram and discuss future features (AI captions, video reels) and how the architecture would evolve.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
