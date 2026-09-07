---
qid: ing_38a3ffcce6__aws__local
question: 'Explain: See also — HTTP response status codes - HTTP | MDN'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 425
total_tokens: 659
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:32:56-05:00'
sources: []
---

**Customer Obsession & Ownership**

*Situation*: A SaaS analytics platform was receiving a spike in “502 Bad Gateway” errors during peak reporting periods. The support team escalated the issue to my squad.

*Task*: I needed to identify why the gateway failed, fix it, and prevent recurrence while keeping costs low.

*Action*:  
1. **Dive Deep** – Collected CloudWatch logs from ALB, API‑Gateway, and Lambda invocations. Mapped 502s to downstream EC2 autoscaling groups that were hitting CPU limits.  
2. **Design** – Replaced the monolithic backend with a *Serverless* microservice architecture:  
   - **API Gateway** (REST) → **Lambda@Edge** for request routing, adding `CacheControl` headers.  
   - **AWS Lambda** functions behind an **Application Load Balancer** (ALB).  
   - **Amazon DynamoDB** for session state, eliminating the need for a dedicated RDS instance.  
3. **Cost & Scalability** – Serverless removes idle‑instance charges; ALB’s target groups auto‑scale based on request latency, guaranteeing <1 % 502s even at 10k RPS.  
4. **Monitoring** – Implemented CloudWatch dashboards and an SNS alert for >5 % error rate.

*Result*: Reduced 502 errors from 12 % to <0.2 %, cut infrastructure spend by 35 %, and improved SLA from 99.6 % to 99.99 %.  
**Learning**: Early instrumentation of response codes and a clear mapping between HTTP status semantics (e.g., 4xx vs 5xx) and underlying AWS services is critical for rapid incident resolution.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
