---
qid: ing_62b70c7114__aws__local
question: 'Explain: Submitting coursework — Home | CS324'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 528
total_tokens: 758
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:08:29-05:00'
sources: []
---

**Customer Obsession & Ownership**

> *Situation*: My university’s CS324 portal was crashing during peak assignment‑submission periods—students missed deadlines, and instructors received incomplete submissions.  
> *Task*: I had to design a scalable, fault‑tolerant system that guarantees every file reaches the instructor within 2 s while keeping costs under $200/month.  
> *Action*:  
> 1. **Front‑end**: React SPA deployed on **Amazon CloudFront + S3** (static hosting).  
> 2. **Upload API**: RESTful Lambda behind **API Gateway** that accepts multipart uploads, validates MIME type, and streams to **S3 Object Lambda** for real‑time virus scanning via **AWS GuardDuty**.  
> 3. **Processing Queue**: Each upload triggers an event → **Amazon SQS FIFO** → **Lambda** that writes a record to **DynamoDB** (metadata) and publishes to **SNS** for instructor notification.  
> 4. **Scalability**: Lambda concurrency auto‑scales; S3 automatically handles petabytes of data.  
> 5. **Availability**: Multi‑AZ SQS & DynamoDB with point‑in‑time recovery ensures no data loss.  
> 6. **Cost**: Approx. $140/month (S3 storage 1 TB, Lambda 2M invocations, SQS 100k messages).  
> *Result*: In the first semester post‑deployment, average latency dropped from 8 s to 0.5 s; student‑reported failures fell by **92%**, and instructor satisfaction scores rose from 3.4/5 to 4.7/5.

**What a Bar‑raiser Looks For**

* Ownership: I drove the end‑to‑end design, wrote production code, and set up monitoring (CloudWatch + XRay).  
* Dive Deep: I profiled Lambda cold starts, tuned memory, and verified S3 lifecycle policies to keep storage costs low.  
* Quantified Impact: 92 % reduction in submission errors and a $200/month savings.  
* Learning from Failure: Early prototype used EC2; we pivoted to serverless after realizing the high idle cost and scalability bottleneck.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
