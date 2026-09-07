---
qid: ing_00435d47dd__faang__local
question: 'Explain: Assumptions — Design Instagram | System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 425
total_tokens: 664
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:45:07-05:00'
sources: []
---

**Clarify**  
You’re asked to design an *Instagram‑style* photo‑sharing service (posts, feeds, likes). I’d confirm:  

1. Expected traffic? 10M active users → ~100k requests/s.  
2. Data model: User, Photo, Feed, Like, Comment.  
3. Latency target for feed ≈ 200 ms.  
4. Persistence needs (SQL vs NoSQL), consistency level.  

**Approach**  
1. **Storage** – Use S3‑like object store for media; relational DB (PostgreSQL) for metadata.  
2. **Feed generation** – Precompute *home feeds* per user in a distributed cache (Redis). Update on new posts from followees via a stream (Kafka).  
3. **API layer** – Stateless REST/GraphQL endpoints behind an API gateway; auto‑scale with Kubernetes.  
4. **CDN** – Edge caching for images, signed URLs for privacy.  

**Depth**  
- *Feed algorithm*: push‑model using Kafka topics per user cluster; pull‑model fallback to query DB when cache miss. Complexity O(1) read from Redis, O(N log N) on rebuild.  
- *Scalability*: Partition users across shards; use consistent hashing for feed storage.  
- *Consistency*: Strong consistency for likes/comments (ACID in Postgres), eventual for feeds.  

**Edge Cases**  
- High churn: handle cache warm‑ups, fallback to DB.  
- Cold start: generate feed on first login via background job.  
- Privacy: enforce per‑photo visibility rules before serving.  

**Optimize & Communicate**  
Explain trade‑offs: push vs pull, memory cost of caching feeds vs latency savings. Discuss monitoring (latency dashboards) and A/B testing for recommendation tweaks. End with “This design meets 200 ms latency at 10M users while keeping costs reasonable.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
