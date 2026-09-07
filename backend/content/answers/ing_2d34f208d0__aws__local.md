---
qid: ing_2d34f208d0__aws__local
question: 'Q17: What is flow engineering? — Question Bank'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 465
total_tokens: 695
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:07:04-05:00'
sources: []
---

**Answer (Amazon Style)**  

> *“Flow engineering” in the context of AI refers to designing, building, and optimizing data pipelines that move raw data through preprocessing, feature extraction, model training, inference, and post‑processing with minimal latency and maximum reliability.*  

### Situation  
While leading a fraud‑detection team at my previous company, we faced **3 ×** slower batch predictions, causing missed opportunities and eroding customer trust.

### Task  
I was tasked to rebuild the end‑to‑end pipeline so that real‑time scoring stayed under 50 ms per transaction while scaling to 10M daily events.

### Action  
1. **Customer Obsession & Ownership** – I mapped the entire user journey, identifying pain points for merchants and customers.  
2. **Dive Deep** – Instrumented each stage with CloudWatch metrics; discovered that data shuffling on EMR caused bottlenecks.  
3. **Design** – Re‑architected using:
   * **Amazon Kinesis Data Streams** (ingestion) → **AWS Lambda** (lightweight preprocessing) → **SageMaker Endpoint** (real‑time inference) → **DynamoDB Streams** (post‑processing).  
4. **Scalability & Availability** – Enabled auto‑scaling on Lambda and multi‑AZ deployment of SageMaker; set up CloudFront for low‑latency edge caching.  
5. **Cost Trade‑off** – Switched from on‑prem Spark clusters to serverless services, reducing infra spend by 40 %.

### Result  
- Prediction latency dropped from **250 ms** to **35 ms** (≈ 92 % improvement).  
- Throughput increased to **10M events/day** with <1 % error rate.  
- Operational cost fell by **$120k/year**, freeing budget for new features.

*Bar‑raiser takeaway:* I demonstrated full ownership, deep technical insight, quantifiable impact, and a lesson learned—initially underestimating the shuffle overhead, which led me to adopt serverless streaming early on.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
