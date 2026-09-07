---
qid: ing_738c0b80f0__faang__local
question: What is Instagram? — Design Instagram | System Design Interview | AlgoMaster.io
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 457
total_tokens: 695
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:12:49-05:00'
sources: []
---

**Clarify**  
> *“What is Instagram?”* – I’ll interpret this as designing the core Instagram service (photo feed, posting, likes, comments).  
Assumptions:  
- Millions of users, high read/write traffic.  
- Real‑time feed updates.  
- Data must be highly available and scalable.

**Approach**  
1. **API surface** – POST `/photos`, GET `/feed/{user}`, POST `/likes`, etc.  
2. **Storage layers** – User table (SQL), Photo blobs (object store), Feed metadata (NoSQL).  
3. **Feed generation** – Pull‑based (query DB on request) vs push‑based (precompute feeds in cache).  
4. **Consistency & scaling** – Use eventual consistency for likes/comments; sharding by user ID.

**Depth**  
- **Data model:** `User(id, name, followers, following)`, `Photo(id, owner_id, url, timestamp)`.  
- **Feed algorithm:** For each request, fetch recent photos from followed users (SQL join + index). Push‑based: background workers compute “home_feed” per user in Redis.  
- **Scalability:** Horizontal scaling of API servers behind a load balancer; object store for media (S3‑like). Use CDN to cache images.  
- **Complexity:** Pull feed O(k log n) where k=feed size, n=following count; push feed O(1) per request but heavier background writes.

**Edge Cases**  
- Users with >10k followers → cache overflow.  
- Rapid likes/comments could cause write spikes – use message queues (Kafka).  
- Data deletion / GDPR requests – need audit logs and efficient revocation.

**Optimize & Communicate**  
Start simple (pull feed), then add push for cold users, CDN for images, sharding for massive scale. I’d explain trade‑offs: pull is simpler but slower; push requires more compute upfront. This structured walk‑through showcases problem understanding, design choices, and scalability concerns—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
