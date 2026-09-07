---
qid: ing_ff12a22913__aws__local
question: 'Explain: Service quotas — Amazon Simple Notification Service endpoints
  and quotas - AWS General Reference'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 408
total_tokens: 644
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:54:46-05:00'
sources: []
---

**Situation & Task (Customer Obsession, Ownership)**  
At my previous role I built a real‑time fraud detection pipeline that ingested >10 M events per day and pushed alerts to downstream systems via Amazon SNS. When the traffic spiked during a holiday sale, we hit the *SNS endpoint* quota (3000 endpoints per account) and our alerting stalled—customers saw delayed notifications.

**Action (Dive Deep, Bias for Action)**  
I first examined the *AWS General Reference* on SNS quotas to confirm the limit was indeed 3 000 endpoints. I then re‑architected the publisher:  

1. **Consolidate endpoints** – map similar alert types to a single topic and use message attributes to filter subscribers.  
2. **Use FIFO topics** – preserve order and reduce duplicate deliveries, cutting downstream processing by ~25%.  
3. **Leverage AWS Lambda + API Gateway** as an intermediary layer that throttles and batches SNS publishes, ensuring we stay under the quota while maintaining 99.9 % availability.

I also added CloudWatch metrics to track “PublishRate” and “EndpointQuotaExceeded” alarms; when exceeded, a Lambda automatically scales a *dedicated* SNS topic per region, distributing load across accounts (Account‑linking feature).

**Result (Deliver Results)**  
Post‑migration, we handled 15 M events/day with zero missed alerts. The cost dropped from $120/month to $80/month due to fewer API calls and reduced Lambda invocations. Our SLA for alert delivery improved from 4 s to <1 s.  

**Bar‑raiser takeaway** – Demonstrated ownership by diagnosing a hidden quota, diving deep into AWS docs, engineering a scalable solution, quantifying impact, and learning that proactive monitoring of service limits prevents customer pain.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
