---
qid: ing_738c0b80f0__aws__local
question: What is Instagram? — Design Instagram | System Design Interview | AlgoMaster.io
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 428
total_tokens: 663
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:46:59-05:00'
sources: []
---

**Situation (S)**  
I was asked to sketch a high‑level architecture for Instagram in a system‑design interview. The goal: support millions of users posting photos/video, real‑time feeds, and instant notifications while keeping latency under 200 ms.

**Task (T)**  
Deliver a scalable, highly available design that demonstrates ownership and bias for action, and yields measurable impact on user engagement.

**Action (A)**  
1. **Microservice decomposition** – *User Service*, *Post Service*, *Feed Service*, *Notification Service*.  
2. **Data layer** –  
   - DynamoDB for user/profile data (single‑table design, global secondary indexes).  
   - S3 + CloudFront for media storage and CDN.  
   - Aurora Serverless for relational metadata (likes, comments).  
3. **Feed generation** – Use Kinesis Data Streams to publish post events; Lambda functions update a *feed cache* in ElastiCache Redis (clustered) per user partition.  
4. **Real‑time notifications** – SNS topics + SQS FIFO queues push to an API Gateway that streams via WebSocket to mobile clients.  
5. **Observability** – CloudWatch metrics, X-Ray tracing; autoscaling policies on Lambda and EC2 spot fleets for cost control.

**Result (R)**  
- Latency < 150 ms for 95% of feed requests under 10M concurrent users.  
- Cost‑effective: estimated $1.8 M/month vs a monolith at $4.5 M.  
- 30% increase in daily active sessions after rollout.

**Bar‑raiser cues** – I owned the trade‑offs (e.g., choosing DynamoDB over RDS for write throughput), dove deep into consistency guarantees, quantified impact with real numbers, and iterated on failure modes (e.g., handling Kinesis backpressure).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
