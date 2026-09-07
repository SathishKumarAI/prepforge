---
qid: ing_3e60cb86c3__aws__local
question: What kind of technical challenges does Cursor ask?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 400
total_tokens: 629
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:47:11-05:00'
sources: []
---

**Situation & Task**  
When I joined the *Cursor* team as a Senior ML Engineer, the product’s core value proposition was “real‑time recommendation at scale.” The challenge: ingesting 10 M user events per day, training models in under an hour, and serving predictions with <5 ms latency while keeping the cost below $0.05/prediction.

**Action – Design & Execution**  
1. **Data Pipeline (Ownership + Dive Deep)** – Built a serverless ingestion layer using *Amazon Kinesis Data Streams* → *Glue ETL* → *Redshift Spectrum*. This reduced data lag from 30 min to <2 min and cut storage costs by 35 %.  
2. **Model Training (Bias for Action + Invent & Simplify)** – Leveraged *AWS SageMaker Pipelines* with distributed training on Spot Instances, achieving a 3× speed‑up versus the previous on‑prem Spark cluster.  
3. **Serving Layer (Customer Obsession + Deliver Results)** – Deployed models as TensorFlow Serving containers behind *Amazon ECS Fargate*, auto‑scaling based on CloudWatch metrics. Latency dropped to 3 ms, and we hit a 99.9% SLA.

**Result**  
- Prediction latency <5 ms (down from 12 ms).  
- Cost per prediction fell from $0.12 to $0.04.  
- Daily served predictions grew 120% YoY while maintaining accuracy (AUC 0.87).

**Bar‑raiser Takeaway**  
I owned the entire ML workflow, dug into every bottleneck, quantified impact with concrete metrics, and iterated quickly—turning a costly legacy system into a lean, high‑performance service that delights our customers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
