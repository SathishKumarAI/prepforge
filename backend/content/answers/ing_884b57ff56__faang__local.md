---
qid: ing_884b57ff56__faang__local
question: 'Explain: 5.4 Get a Post by ID — Design Instagram | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 495
total_tokens: 740
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:00:59-05:00'
sources: []
---

**1️⃣ Clarify**

> “Design a service that retrieves an Instagram‑style post given its unique ID.”  
Assumptions to confirm:  
- The post includes media (photo/video), caption, metadata (likes, comments count).  
- Reads are far more frequent than writes.  
- We need low latency (< 100 ms) and high availability across regions.

**2️⃣ Approach**

1. **API layer** – REST/GRPC endpoint `GET /posts/{id}`.  
2. **Cache tier** – CDN + in‑memory cache (Redis/Memcached).  
3. **Database tier** – NoSQL (Cassandra) for horizontal scalability; materialized view per post.  
4. **Storage tier** – Object store (S3/MinIO) for media blobs, referenced by URL.  
5. **Metadata service** – Separate microservice for likes/comments counts to avoid heavy joins.

**3️⃣ Depth**

- *Read path*: API → cache → DB → storage URLs → response.  
- Cache hit: 1–2 ms; miss: 30–50 ms (DB read).  
- Write path: Post creation updates DB and invalidates cache.  
- Consistency: Eventual consistency for counts, strong consistency for media URL via ACID transaction in the write service.  
- Complexity: O(1) read latency, O(log N) writes for Cassandra.

**4️⃣ Edge Cases**

- Missing post → 404 with graceful message.  
- Media not yet propagated to CDN → return placeholder or stream from origin.  
- High traffic burst → cache warm‑up + rate limiting.  
- Data corruption → retry logic and checksum verification on storage read.

**5️⃣ Optimize & Communicate**

- **Cache partitioning** by region to reduce latency.  
- **Prefetch related data** (e.g., next post in a feed) using asynchronous workers.  
- **Observability**: metrics for cache hit ratio, DB latency, error rates; alert on anomalies.  

Explain trade‑offs: stronger consistency would hurt read speed; eventual counts are acceptable for social feeds. Highlight that this design scales horizontally and meets the low‑latency requirement while keeping storage costs manageable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
