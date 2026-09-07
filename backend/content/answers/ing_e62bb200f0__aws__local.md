---
qid: ing_e62bb200f0__aws__local
question: 'Explain: In-App Notification Processor — Design Notification Service |
  System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 501
total_tokens: 739
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:58:31-05:00'
sources: []
---

**Customer Obsession & Ownership**

*Situation:*  
A fintech app (AlgoMaster) needed an in‑app notification processor that could push personalized alerts to 2 M daily active users without impacting core trading latency.

*Task:*  
Design a scalable, fault‑tolerant service that ingests events, enriches them with user context, and delivers notifications via multiple channels (push, email, SMS).

*Action:*  
1. **Event ingestion** – Amazon Kinesis Data Streams (shards = 4) for high‑throughput, low‑latency capture.  
2. **Processing pipeline** – AWS Lambda functions triggered by the stream, each performing *enrichment* (lookup in DynamoDB for user prefs) and routing logic.  
3. **Routing & delivery** – Use Amazon SNS topics per channel; Lambdas publish to the appropriate topic. For SMS use Pinpoint to batch requests and respect carrier limits.  
4. **Persistence & retry** – Store a *notification log* in DynamoDB (partition key = user_id, sort key = timestamp) for audit and idempotency. Use SQS DLQs for failed deliveries; dead‑letter messages trigger CloudWatch alarms.  
5. **Observability** – CloudWatch metrics (`lambda_duration`, `sns_publish_success`) + X-Ray tracing to pinpoint latency bottlenecks.

*Result:*  
- 99.9 % successful delivery within 200 ms of event generation.  
- Cost reduced by 35 % compared with a monolithic Java service due to serverless compute and auto‑scaling.  
- Reduced engineering time: new notification types added in under 2 days (vs. 3 weeks previously).

**What the bar‑raiser looks for:**  
*Ownership* – I designed the end‑to‑end flow and chose services that minimized vendor lock‑in.  
*Dive Deep* – Detailed latency budgets, retry logic, and cost modeling were presented.  
*Quantified Impact* – 99.9 % success rate, 200 ms SLA, 35 % cost savings.  
*Learning from Failure* – After an early spike in email failures, I introduced per‑channel throttling and adjusted DLQ retention to prevent cascading outages.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
