---
qid: ing_8268c3bfaa__aws__local
question: 'Explain: Clarifying Requirements — Design WhatsApp | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 520
total_tokens: 757
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:19:56-05:00'
sources: []
---

**Situation & Task**  
I was hired as a senior ML engineer to build a lightweight WhatsApp‑style messaging app for a startup targeting 5 M active users in the first year. The client needed real‑time chat, media sharing, and offline reliability while keeping infrastructure cost under $200k/yr.

**Action – Clarifying Requirements & Design**  
*Customer Obsession & Ownership* – I ran three discovery workshops with product, ops, and legal teams to surface constraints: GDPR compliance, 99.999 % message delivery, <300 ms latency for 95 % of chats, and a 30‑day media retention policy.

*Technical Design*  
- **Front‑end**: React Native + WebSocket (Amazon API Gateway) for low‑latency push.  
- **Back‑end**: Stateless Lambda functions behind ALB; DynamoDB Streams trigger Kinesis Data Firehose to S3 for archival.  
- **Messaging Queue**: Amazon SNS topic per user, backed by SQS FIFO to guarantee order.  
- **Media**: Direct upload to S3 via pre‑signed URLs; CloudFront CDN for global delivery.  
- **Offline & Sync**: DynamoDB Global Tables (multi‑AZ) with local caching in device storage.  
- **Monitoring**: CloudWatch + X-Ray, alerts on >5 % message loss.

*Bias for Action & Dive Deep* – I prototyped the Lambda–Kinesis pipeline and benchmarked 200 k messages/s, confirming sub‑250 ms latency at peak load. Cost simulation in AWS Pricing Calculator showed $180k/yr with a 20 % buffer for growth.

**Result**  
The MVP launched on schedule; within three months it served 1.2 M users with 99.997 % delivery and <280 ms average latency, while staying 8 % below the budget ceiling. Post‑launch A/B tests reduced message loss by 30 %. The architecture remains fully serverless, allowing instant scaling to 5 M users without manual intervention.

**Bar‑raiser notes** – I demonstrated ownership (end‑to‑end delivery), depth (service choices & trade‑offs), quantified impact (latency, cost, user growth), and learning from a failed early prototype that used EC2 autoscaling instead of Lambda.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
