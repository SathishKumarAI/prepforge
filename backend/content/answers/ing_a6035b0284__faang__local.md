---
qid: ing_a6035b0284__faang__local
question: 'Explain: Design Instagram — Grokking System Design Interview: Patterns
  & Mock Interviews'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 495
total_tokens: 734
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:10:56-05:00'
sources: []
---

**Clarify**  
We’re asked to sketch a high‑level design for an Instagram‑style photo‑sharing platform (Grokking System Design). Key questions:  
• What core features must we support? (upload, feed, likes/comments, notifications, search)  
• Expected scale (millions of users, billions of posts per day)?  
• Latency targets (feed < 200 ms, upload < 5 s)?  

**Approach**  
1. **Client → API Gateway → Load Balancer → Stateless App Servers** for business logic.  
2. **Storage** – use a CDN‑backed object store (S3/Blob) for media; PostgreSQL/MySQL for relational data; NoSQL (Cassandra/DynamoDB) for feeds and likes.  
3. **Feed** – precompute using a fan‑out‑write pattern into a per‑user feed table; fallback to on‑demand merge of recent posts.  
4. **Search** – ElasticSearch indexing tags, captions, users.  
5. **Notifications** – Kafka for event streaming → consumer services update push queues (FCM/APNs).  

**Depth**  
- *Upload*: multipart upload to CDN, async transcoding job stored in a queue; metadata written atomically to DB.  
- *Feed latency*: read‑optimized NoSQL with LRU cache (Redis) for hot posts; eventual consistency acceptable for likes/comments.  
- *Scaling*: auto‑scaling groups, sharding by user hash; data partitioning across regions. Complexity: O(1) per request for feed reads; write amplification for fan‑out but bounded by follower count.

**Edge Cases**  
- Users with 10M followers → batch writes + rate limiting.  
- Large media (> 20 MB) → chunked upload, resumable.  
- Network partitions → use idempotent writes and conflict resolution in NoSQL.

**Optimize & Communicate**  
Explain trade‑offs: fan‑out write vs read‑time merge; choice of relational vs NoSQL; CDN for global latency. Conclude with monitoring (latency dashboards), disaster recovery, and a brief cost estimate. This narrative shows structured thinking, depth, and clear communication—key FAANG signals.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
