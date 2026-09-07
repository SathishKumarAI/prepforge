---
qid: ing_57957aa9f7__faang__local
question: 'Explain: How It Works — Design Instagram | System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 511
total_tokens: 750
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:07:24-05:00'
sources: []
---

**1️⃣ Clarify**  
We’re asked to design a simplified *Instagram* – the core features (photo upload, feed, likes, comments) and the supporting infrastructure.  
Assumptions: • Users ≈ 10M, each uploads ~ 3 photos/day.  
• Feed latency < 2 s, 99th‑percentile ≤ 5 s.  
• We can use managed services (S3/Blob, CDN, NoSQL).  

**2️⃣ Approach**  
1. **Front‑end → API Gateway** – stateless REST/GraphQL.  
2. **Storage** – photos in object store; metadata in a sharded key‑value DB (e.g., DynamoDB).  
3. **Feed generation** – precompute “user feed” tables (push) or on‑demand read‑through of follow lists (pull).  
4. **Engagement** – likes/comments stored in separate tables, increment counters via atomic ops.  
5. **Caching** – CDN for images; Redis for hot feeds and like counts.  

**3️⃣ Depth**  
- *Upload*: client → S3 pre‑signed URL; metadata POST to API; async job (Kinesis) generates thumbnails.  
- *Feed*: pull model: query follows, fetch recent posts sorted by timestamp; use pagination cursors. Push model: fan‑out at upload time – write to each follower’s feed table (costly for heavy follow).  
- *Scalability*: sharding on userID for DB; horizontal scaling of API nodes behind load balancer.  
- *Consistency*: eventual consistency acceptable for likes/comments; use optimistic locking for counters.  

**4️⃣ Edge Cases**  
- Users with > 1M followers → fan‑out throttling or hybrid push/pull.  
- Photo size limits, virus scanning.  
- Deleting posts: cascade delete in feeds and counters.  
- Rate limiting to prevent spam likes/comments.  

**5️⃣ Optimize & Communicate**  
Explain trade‑offs: push gives instant feed but heavy write; pull saves writes but adds read latency. Highlight using CDN + caching to meet SLA, monitoring for hot spots, and automated scaling via serverless functions for bursty uploads. End with a quick sketch of the data flow diagram and key performance metrics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
