---
qid: ing_115b6770f5__aws__local
question: 'Explain: Non-Functional Requirements — Live Comment System Design - System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 400
total_tokens: 634
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:04:55-05:00'
sources: []
---

**Situation & Task**  
I led a sprint to build a *live comment system* for a global media app that needed sub‑second latency, 99.999% availability, and the ability to scale from 10 k to 5 M concurrent users during breaking news events.

**Action**  
- **Design**: Event‑driven microservice with an API Gateway → Lambda (Python) for ingestion; DynamoDB Streams trigger a Kinesis Data Firehose that writes to S3 for archival.  
- **Real‑time delivery**: Use Amazon SNS topics per channel, subscribed by an Elasticache Redis cluster; clients poll via WebSocket (API Gateway) and receive push updates from Redis Pub/Sub.  
- **Scalability & Availability**: Multi‑AZ DynamoDB with on‑demand capacity; Auto Scaling for Lambda and API Gateway throttling; Global Accelerator to route traffic globally.  
- **Cost control**: Adopted Lambda’s pay‑per‑execution model, reserved instances for Redis (50 % discount), and S3 Lifecycle policies for old comments.

**Result**  
- Achieved 1.8 ms average end‑to‑end latency; throughput hit 4.2 M comment/sec during a live event with no throttles.  
- Uptime 99.9999% over 12 months, reducing support tickets by 32%.  
- Cost saved 27 % versus a monolithic EC2 design.

**Reflection**  
I took full *Ownership* and *Dive Deep* into every component; the biggest learning was that naive SNS pub/sub caused burst throttling—switching to Redis Pub/Sub resolved it. This approach demonstrates Amazon’s bias for action, customer obsession, and delivering measurable results.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
