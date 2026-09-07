---
qid: ing_41e5a49171__aws__local
question: 'Explain: 4.1 Requirement 1: Real-time One-on-One Messaging'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 501
total_tokens: 737
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:54:55-05:00'
sources: []
---

**Situation (S)** – In a new AI‑driven tutoring platform, we were asked to add *real‑time one‑on‑one messaging* between students and tutors so that they could discuss code snippets instantly while the model was training on their inputs.

**Task (T)** – Build a low‑latency, highly available messaging service that scales to 10 M concurrent users, supports message persistence for audit, and integrates with our ML inference pipeline.

**Action (A)**  
1. **Architecture** – Use **Amazon API Gateway + Lambda** for the REST endpoint (`/chat/send`).  
2. **Real‑time transport** – Spin up a **WebSocket API** in API Gateway; each connection is authenticated via Cognito and mapped to a *Channel* stored in **DynamoDB** (partition key: `UserID`, sort key: `Timestamp`).  
3. **Message delivery** – Lambda writes the message to DynamoDB, then publishes to an **SNS topic** per channel. SNS triggers another Lambda that pushes the payload via API Gateway WebSocket (`$connect`) to the recipient.  
4. **Durability & audit** – Every message is also appended to a **Kinesis Data Firehose** stream that lands in S3 (partitioned by day) for long‑term storage and compliance.  
5. **Scaling** – DynamoDB autoscaling + provisioned throughput (10 M RCU/WCU). API Gateway websockets handle 1 M concurrent connections with minimal cold start latency (<200 ms).  
6. **Cost & trade‑offs** – Serverless eliminates ops overhead; the only major cost is Lambda invocations (~$0.20/1M messages) and DynamoDB writes (~$0.25/100k items). We accept a slight 50 ms extra latency over a dedicated TCP service for the benefit of rapid scaling and zero‑maintenance.

**Result (R)** – Deployed in 3 weeks; first month saw 2 M messages, 99.9% availability, and <250 ms average round‑trip time. User satisfaction score rose from 4.1 to 4.7/5. **Leadership Principles:** *Customer Obsession* (fast, reliable chat), *Ownership* (full responsibility for uptime), *Dive Deep* (profiling Lambda to shave 30 ms).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
