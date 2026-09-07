---
qid: ing_9d91249de0__faang__local
question: 'Explain: Scalability Quiz — Course Introduction | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 572
total_tokens: 806
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:50:31-05:00'
sources: []
---

**Clarify**  
You’re being asked how you would design a scalable system for an online ML‑course platform that serves millions of users, tracks progress, and streams video/interactive content. Key assumptions:  
- Read‑heavy traffic (video streaming, quiz attempts).  
- Write‑heavy writes for user progress, quiz scores.  
- Low latency (<200 ms) for interactive quizzes.  
- High availability across regions.

**Approach**  
1. **Front‑end CDN** for static assets and video segments.  
2. **API Gateway + Load Balancer** to route requests to stateless micro‑services (auth, course catalog, quiz engine).  
3. **Database tier**:  
   - NoSQL (Cassandra/ DynamoDB) for user progress & quiz logs – tunable consistency, linear scalability.  
   - Relational DB (PostgreSQL) for immutable course metadata and content relationships.  
4. **Cache layer** (Redis/Memcached) for hot data (course catalog, video URLs).  
5. **Message queue** (Kafka) to decouple quiz scoring from analytics pipelines.  
6. **Autoscaling policies** on compute nodes; use Kubernetes or serverless functions where appropriate.

**Depth**  
- Video streaming handled by adaptive bitrate HLS/DASH via CDN; origin stores only the highest‑quality source.  
- Quiz service uses optimistic concurrency for score writes; each attempt is an idempotent POST to avoid double submissions.  
- Partition user progress by user ID prefix; use consistent hashing to spread load.  
- Use eventual consistency for analytics, but read‑through cache ensures quiz results appear instantly.  
- Complexity: O(1) API latency, O(log N) writes in NoSQL, linear scaling with shards.

**Edge Cases**  
- Sudden traffic spikes (e.g., new course release): auto‑scale and pre‑warm CDN edge caches.  
- Consistency anomalies when a user logs in from multiple devices: resolve via last‑write‑wins or merge strategy.  
- Video cache miss leading to origin fetch: fallback to origin with graceful degradation.

**Optimize & Communicate**  
- Introduce **CQRS** for separating read/write concerns; keep read replicas for analytics without affecting write performance.  
- Use **rate limiting** per IP/user to mitigate abuse of quiz endpoints.  
- In conversation, emphasize trade‑offs (e.g., NoSQL vs RDBMS) and how the architecture supports future features like real‑time collaboration or AI‑powered tutoring.  
- Conclude with a quick “what if” slide: scaling beyond 10M users → sharding across regions, global CDN, multi‑tenant data isolation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
