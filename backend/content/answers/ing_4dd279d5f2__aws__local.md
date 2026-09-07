---
qid: ing_4dd279d5f2__aws__local
question: 'Explain: Output Distillation (Standard) — Knowledge Distillation'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 446
total_tokens: 677
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:21:29-05:00'
sources: []
---

**Situation & Task**  
At a previous role I led the migration of a 200‑model inference stack from on‑prem GPUs to an Amazon SageMaker endpoint that had to serve < 1 ms latency for 10k concurrent users. The models were too large for real‑time inference, so we needed a *knowledge distillation* pipeline that would preserve accuracy while reducing size by > 70 %.  

**Action**  
I designed a **Standard Output Distillation** workflow in SageMaker Pipelines:  
1. **Teacher model training** on EC2 GPU instances (p3.8xlarge).  
2. Generate soft‑label logits for the entire production dataset and store them in S3.  
3. Train a lightweight *student* network on an **SageMaker Processing job** using `sagemaker.tensorflow.processing.TensorFlowProcessor`, feeding both hard labels and teacher logits (temperature = 4).  
4. Evaluate student vs. teacher with a custom metric (`accuracy - 0.002` drop) on a hold‑out set.  
5. Deploy the student to a **SageMaker Endpoint** behind an Application Load Balancer, auto‑scaling based on CloudWatch metrics.  

**Result**  
- Model size dropped from 4 GB → 600 MB (≈ 80 % savings).  
- Latency improved from 12 ms → 3 ms, meeting SLAs for 99.9 % of requests.  
- Cost per inference fell by **$0.0008** (~35 % reduction), translating to ~$120k annually.  

**Reflection (Bar‑raiser notes)**  
I took full *ownership* of the pipeline, *dived deep* into temperature tuning, and quantified impact with clear metrics. The failure point was an initial student underfitting; I learned that incorporating a small *label smoothing* term mitigates this in future distillations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
