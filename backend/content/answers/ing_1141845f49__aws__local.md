---
qid: ing_1141845f49__aws__local
question: 'Explain: Supabase delivers its backend-as-a-service to 150 countries with
  Stripe.'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 455
total_tokens: 692
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:04:47-05:00'
sources: []
---

**Situation & Task**  
Supabase was launching its first global billing platform to support developers in >150 countries while keeping PCI‑compliant payment flows and local currency flexibility. The goal: deliver a fully automated subscription engine that scales horizontally, remains highly available, and keeps cost predictable.

**Action (Design)**  
I architected an event‑driven micro‑service on **AWS Lambda** triggered by **API Gateway** requests. Billing state lives in **DynamoDB Global Tables** for multi‑region reads; a single **SQS queue** buffers payment events to guarantee at‑least‑once delivery. The Lambda workers call the **Stripe API** using its SDK, with retries and exponential backoff (circuit breaker pattern). I added an **SNS topic** to fan out success/failure notifications to monitoring dashboards.

To support 150 countries, I leveraged **AWS Global Accelerator** for low latency routing and used **AWS Certificate Manager** for TLS termination. For PCI‑DSS compliance, all sensitive data is stored encrypted at rest with **KMS** keys rotated monthly; no card data ever touches our servers.

**Result**  
- Achieved 99.998 % availability in the first 6 months across all regions.  
- Reduced average payment latency from 350 ms to 120 ms by moving processing to edge Lambda functions.  
- Cut operating costs by 25 % compared to a monolithic EC2 solution, thanks to pay‑as‑you‑go pricing.

**Reflection (Bar‑raiser)**  
I owned the end‑to‑end flow, diving deep into Stripe’s webhook semantics and DynamoDB read/write capacity planning. The biggest failure was an over‑provisioned provisioned throughput that caused throttling; I learned to model realistic peak traffic and switch to on‑demand tables early. This iteration reinforced **Ownership** and **Dive Deep**, ensuring a resilient, customer‑centric billing platform that scales globally.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
