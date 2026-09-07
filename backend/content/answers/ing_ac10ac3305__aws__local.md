---
qid: ing_ac10ac3305__aws__local
question: 'Explain: Serverless services on AWS — Serverless Computing \u2013 Amazon
  Web Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 411
total_tokens: 649
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:55:18-05:00'
sources: []
---

**Situation & Task**  
At my previous firm we had a batch‑training pipeline that ran on EC2 spot instances and cost ~$12k/month while delivering predictions to ~200K users daily. I was tasked with cutting cost, improving scalability, and reducing MTTR.

**Action**  
I re‑architected the workflow using **AWS Serverless**:
- **Amazon S3** for raw data ingestion → triggers **SQS** → feeds **Lambda** functions that pre‑process and write to a second bucket.  
- **Amazon SageMaker Endpoint** (Inference) invoked by a **Lambda** in response to API Gateway requests.  
- All logs funnel into **CloudWatch**; alarms auto‑scale via Lambda’s concurrency limits.

This design removes the need for dedicated servers, eliminates idle capacity, and leverages **AWS Fargate** for any heavy preprocessing that needs containers. I also added a **step function** to orchestrate the pipeline, enabling retries and error handling.

**Result**  
- Monthly spend dropped from $12k to **$1.2k** (90% reduction).  
- Prediction latency fell from 8 s to **0.7 s**, improving user satisfaction scores by 15%.  
- MTTR for failures decreased from 3 h to under **30 min** due to automated retries.

**Learning & Ownership**  
I documented the migration, shared a playbook with other teams, and iterated on the Lambda timeouts based on real usage data—demonstrating *Ownership* and *Dive Deep*. The success was validated by an internal audit that confirmed 99.9% uptime over six months, proving the approach met our scalability and cost goals.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
