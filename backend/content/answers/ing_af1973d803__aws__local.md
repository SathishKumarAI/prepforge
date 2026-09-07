---
qid: ing_af1973d803__aws__local
question: What is a Notification Service? — Design Notification Service | System Design
  Interview | AlgoMaster.io
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 411
total_tokens: 649
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:01:29-05:00'
sources: []
---

**Answer (Amazon style)**  

I once led the design of an internal *Notification Service* for a global SaaS platform that needed to push millions of alerts per day to users across email, SMS, and mobile push.  
**Situation & Task:** The existing ad‑hoc scripts caused 15 % SLA drift and cost overruns ($1.2M/month). I owned the end‑to‑end solution.  

**Action (Design):**  
- **Event ingestion**: Use Amazon Kinesis Data Streams (shard = 50) for low‑latency, auto‑scaling input from microservices.  
- **Processing pipeline**: Lambda functions (cold‑start < 100 ms) transform payloads and route to a DynamoDB table (partition key = user‑id).  
- **Delivery layer**:  
  - Email → Amazon SES with per‑region quotas;  
  - SMS → Amazon SNS (SMS topic);  
  - Push → Amazon Pinpoint for APNs/FCM.  
- **Retry & dead‑letter queue**: SQS DLQ and CloudWatch alarms trigger alerts when >10 % of messages fail.  
- **Observability**: X-Ray traces, CloudWatch metrics (latency, success rate), and a Grafana dashboard.  

**Result:** SLA improved from 85 % to 99.7 %, cost fell by 35 % ($0.8M saved annually). I presented the architecture at AWS re:Invent, receiving an “Innovate & Simplify” award.

**Bar‑raiser notes:**  
- Demonstrated *Ownership* (full lifecycle), *Dive Deep* (latency, retries, failure modes), and quantified impact.  
- Learned that batching messages into 1 MB Kinesis records reduces Lambda invocations by 20 %.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
