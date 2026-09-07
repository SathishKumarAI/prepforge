---
qid: ing_9eecb0b937__aws__local
question: 'Explain: Inference Optimization & MLOps <a name="mlops"></a>'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 364
total_tokens: 601
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:24:00-05:00'
sources: []
---

**Inference Optimization & MLOps – My Approach**

During my last role as a ML Engineer for a video‑analytics startup, I led the migration of our on‑prem inference pipeline to AWS (Customer Obsession, Ownership).  
**Situation:** Our model served 200 k requests/day; latency averaged 350 ms, costing us $12K/month in EC2 and hurting user retention.  
**Task:** Reduce inference latency to <100 ms while cutting costs by 40%.  
**Action:** I implemented **SageMaker Endpoint Auto‑Scaling** with a **GPU/CPU mix** (P3 + C5 instances) and added **TensorRT** optimizations for our ResNet model, reducing batch size overhead. For MLOps, I set up a **CI/CD pipeline** using **AWS CodePipeline**, **CodeBuild**, and **SageMaker Pipelines** to automatically retrain on new data every 24 h, version models in S3, and push artifacts to ECR for containerized deployment.  
**Result:** Latency dropped to 85 ms (‑76%), cost fell to $7K/month (‑42%), and the model’s precision improved by 2% due to continuous retraining.  

I continuously **dive deep** into CloudWatch metrics, iterating on instance types and batch sizes; failures taught me to add a “warm‑up” step for GPU initialization. This cycle of ownership and data‑driven refinement embodies Amazon’s *Bias for Action* and *Deliver Results*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
