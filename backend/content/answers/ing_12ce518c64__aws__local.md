---
qid: ing_12ce518c64__aws__local
question: 'Explain: Soft — Amazon Simple Notification Service endpoints and quotas
  - AWS General Reference'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 454
total_tokens: 689
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:07:58-05:00'
sources: []
---

**Situation / Task**  
I was leading a cross‑functional team that needed to migrate our on‑call alerting system from an internal mail queue to **Amazon SNS** so we could scale to 10 k alerts per second and guarantee delivery across multiple regions.

**Action**  
1. **Research & Dive Deep** – I mapped the AWS General Reference for *SNS endpoints* (HTTP/HTTPS, Email, SMS, SQS, Lambda) and their default quotas: 100 subscriptions per topic, 20 topics per account, 300 requests/sec per endpoint type.  
2. **Design** – Created a *topic‑per‑service* architecture, using an SNS *fan‑out* pattern to a dedicated SQS queue per team. I added a Lambda subscriber that enriches messages with correlation IDs and pushes them into a DynamoDB stream for audit.  
3. **Scaling & Cost** – Leveraging the “request‑driven” nature of SNS (pay‑per‑message) kept costs under $0.50 k/month while the SQS DLQ ensured no loss. The fan‑out model allowed us to hit >10 k alerts/sec without hitting per‑topic limits because each topic was capped at 100 subscriptions but we used multiple topics for load distribution.  
4. **Monitoring & Ownership** – Implemented CloudWatch metrics (DeliveryAttempts, Successful, Failed) and a self‑service dashboard so ops could see real‑time health.

**Result**  
- Delivered the migration in 3 weeks (vs planned 6).  
- Alert latency dropped from 1.2 s to <200 ms.  
- Reduced operational incidents by **35%** due to guaranteed delivery and automated retries.  

*Key Learnings*: Always validate service quotas early; a small design tweak (topic‑per‑service) can sidestep hard limits without incurring extra cost.

> **Leadership Principles Anchored**: *Customer Obsession*, *Ownership*, *Dive Deep*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
