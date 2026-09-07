---
qid: ing_1fb21af2ac__aws__local
question: 'Explain: How to prepare — Abridge'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 422
total_tokens: 649
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:38:48-05:00'
sources: []
---

**Answer (Amazon Way)**  

During my last role as a Machine‑Learning Engineer at XYZ Corp., I was asked to “abridge” a 10‑hour training pipeline into a single, scalable inference service for the mobile app.

- **Situation:** The model took 8 hrs on a single GPU; latency on phones exceeded 5 s, hurting user engagement (down 12% YoY).  
- **Task:** Reduce training time to <30 min and cut inference latency to <200 ms while keeping cost < $0.02 per request.  
- **Action:**  
  1. **Ownership & Dive Deep** – I profiled the pipeline with AWS X-Ray, discovered data‑shuffle overheads and unnecessary recomputations.  
  2. Re‑architected training using **Amazon SageMaker** distributed training (multi‑node, multi‑GPU). Added a **data pipeline** in **AWS Glue** to cache pre‑processed batches in S3.  
  3. For inference, I deployed the model as a **Lambda@Edge** function behind an **API Gateway**, with model artifacts stored in **Amazon EFS** for low‑latency access.  
  4. Implemented auto‑scaling via **AWS Lambda concurrency** and **SQS throttling** to maintain 99.9% availability.  
- **Result:** Training time dropped from 8 hrs to 25 min (90% reduction). Inference latency fell to 180 ms, increasing daily active users by 18% and saving $15k/month in compute costs.

*Bar‑raiser cues:* I demonstrated clear ownership of the entire ML lifecycle, deep technical dive into bottlenecks, quantified impact on business metrics, and iterated quickly after a failed initial Lambda deployment (learning: cold starts were higher than expected).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
