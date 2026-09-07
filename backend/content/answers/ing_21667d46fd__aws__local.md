---
qid: ing_21667d46fd__aws__local
question: 'Explain: Horizontal Scalability — Design Notification Service | System
  Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 475
total_tokens: 712
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:42:52-05:00'
sources: []
---

**Situation & Task**  
At my previous company we launched a real‑time notification platform that had to deliver 10 M messages per day while keeping latency <200 ms for the top 5 % of users. The system had to scale horizontally as traffic grew, and fail gracefully without manual intervention.

**Action (Design)**  
1. **Front‑end** – Application servers route events to an *Amazon SNS* topic; each event contains a unique user ID and payload type.  
2. **Queueing & Throttling** – SNS fan‑out to multiple *SQS FIFO queues* partitioned by hash(userID). This gives horizontal scalability (≥ 100 consumers) while preserving ordering per user.  
3. **Processing** – A fleet of *AWS Lambda* functions, triggered by SQS, enrich the payload (lookup in *DynamoDB* for device tokens), and push to *Amazon Pinpoint* or a custom WebSocket endpoint.  
4. **Observability & Scaling** – CloudWatch metrics drive an Auto Scaling policy on the Lambda concurrency limits; dead‑letter queues feed into an SNS topic that triggers alerts.  
5. **Cost/Trade‑offs** – Using serverless removes over‑provisioning and provides 99.9 % availability. We trade a slight increase in cold‑start latency for zero operational overhead.

**Result**  
After deployment, we handled 12 M messages/day with <190 ms median latency during peak hours, achieving a 30 % cost reduction compared to our monolithic broker design. The system automatically scaled from 1 to 200 Lambda instances in under 2 minutes when traffic spiked.

> **Bar‑raiser focus**: Ownership of end‑to‑end flow, deep dive into per‑component latency, quantified impact (latency & cost), and lessons learned—e.g., adding a cache layer for the most active users reduced cold starts by 40 %.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
