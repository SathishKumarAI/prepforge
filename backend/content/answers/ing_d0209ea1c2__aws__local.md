---
qid: ing_d0209ea1c2__aws__local
question: 'Explain: Plan — Sendsmsmessageapitwillo'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 369
total_tokens: 599
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:11:32-05:00'
sources: []
---

**Situation & Task**  
At my previous role I led a project to replace the legacy “SendSMS” micro‑service that sent transactional messages via a third‑party gateway. The existing API was slow (average 1.2 s latency) and cost‑driven, with an error rate of 3 % during peak hours.

**Action & Design**  
I adopted **Customer Obsession** and **Dive Deep** to rebuild the workflow using **Amazon SNS** for SMS delivery, a **Lambda** function as the API entry point, and **API Gateway** for throttling. The Lambda parses the request, validates phone numbers with **DynamoDB** (caching recent lookups), and publishes to an SNS topic that routes messages through multiple providers (Twilio, Vonage) in parallel—an *anycast* pattern that guarantees 99.95 % availability. I added a CloudWatch alarm on publish failures and an SQS dead‑letter queue for retries.

**Result**  
- Latency dropped from 1.2 s to **<200 ms** (average).  
- Cost per message fell by **35 %** due to SNS’s pay‑per‑message pricing.  
- Error rate reduced to **0.4 %**, and the system handled a 5× traffic surge during a promotional campaign without degradation.

**Bar‑raiser takeaways**  
I demonstrated full ownership (from design to deployment), deep technical dive into AWS services, quantified impact on latency/cost/error, and learned that parallel provider routing balances reliability with cost.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
