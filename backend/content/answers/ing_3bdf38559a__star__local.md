---
qid: ing_3bdf38559a__star__local
question: 'Explain: 2.7 System Design: Design a 1-on-1 Chat System'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 385
total_tokens: 629
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:28:20-05:00'
sources: []
---

**Situation:**  
At my previous startup we were building a SaaS product for remote teams and our user growth hit 120k active users per month. The feedback loop from the support team showed that people were abandoning the platform because they couldn’t quickly resolve questions with a live chat feature.

**Task:**  
I was tasked to design an end‑to‑end 1‑on‑1 chat system that could handle 10,000 concurrent conversations, guarantee <200 ms latency for message delivery, and support offline message buffering while keeping infrastructure costs under $5k/month.

**Action:**  
I chose a WebSocket‑based gateway on AWS API Gateway + Lambda to provide real‑time bi‑directional streams. For persistence I used DynamoDB with TTL and an SQS queue for retrying failed messages. To ensure low latency, I deployed the gateway in two AZs and implemented client‑side reconnection logic with exponential backoff. For scalability I added a Redis cache (ElastiCache) to store active session metadata and a background worker pool on ECS to push notifications via SNS when users were offline. I also built an analytics pipeline using Kinesis Data Streams that fed into QuickSight dashboards for message throughput and error rates.

**Result:**  
Within three weeks of launch, the chat feature handled 12k concurrent sessions with average delivery latency of 140 ms, reducing support tickets by 35%. The infrastructure cost stayed at $4.3k/month, meeting our budget. I learned that combining serverless WebSockets with a lightweight cache can deliver real‑time performance without over‑provisioning resources.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
