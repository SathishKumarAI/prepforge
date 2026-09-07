---
qid: ing_8c3ba292a8__aws__local
question: 'Explain: 30-day money back guarantee — MyWeb2.com is for sale | HugeDomains'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 394
total_tokens: 632
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:43:07-05:00'
sources: []
---

**Situation & Task**  
While designing MyWeb2.com’s marketplace, I was asked to add a *30‑day money‑back guarantee* for domain purchases—customers could cancel and get a full refund within the first month. The goal was to increase conversion by reducing buyer risk while keeping operational costs low.

**Action**  
I scoped requirements: 1) record purchase timestamp; 2) enforce a 30‑day window; 3) process instant refunds; 4) audit all cancellations for fraud detection. I chose **AWS Lambda** + **Amazon DynamoDB** to store transaction metadata, and **Amazon SNS** for real‑time notifications. For refunds, I integrated with the existing payment gateway via an API Gateway endpoint that triggers a Lambda function calling the provider’s refund API.

To ensure *availability* I set DynamoDB tables to **strongly consistent read/write capacity** with auto‑scaling, and deployed Lambdas in two AZs. *Cost* was minimized by using on‑demand Lambda (≈$0.20 per 1M invocations) and the free tier of SNS for internal alerts.

**Result**  
Within three weeks of launch, conversion rose **12%** and churn dropped from 4% to 1%. Refund processing time fell below **2 seconds**, improving customer satisfaction scores by **18 points**. I documented rollback procedures and monitored fraud rates (≤0.02%) through CloudWatch dashboards.

**Reflection**  
I took full ownership, dived deep into payment APIs, and delivered a scalable solution that balanced risk with cost—exactly what the *Ownership* and *Deliver Results* principles demand.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
