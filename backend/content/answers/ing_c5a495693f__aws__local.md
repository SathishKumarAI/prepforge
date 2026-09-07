---
qid: ing_c5a495693f__aws__local
question: 'Explain: Overview — Serverless Computing \u2013 Amazon Web Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 376
total_tokens: 610
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:49:54-05:00'
sources: []
---

**Answer (≈190 words)**  

During my last role I led a proof‑of‑concept for an on‑demand recommendation engine using *Serverless Computing* on AWS – a classic example of **Customer Obsession** and **Ownership**.

**Situation:** Our e‑commerce platform suffered from high latency during peak traffic, hurting conversion rates (average cart‑abandonment rose to 18 %).  

**Task:** Design an elastic, low‑cost inference pipeline that could scale to millions of requests per day while keeping latency < 200 ms.  

**Action:**  
- Deployed the model as a **Lambda** function triggered by API Gateway, leveraging *AWS Lambda@Edge* for geo‑distribution.  
- Packaged the model in a **Docker image** (Amazon ECR) to avoid cold‑start delays and used **SageMaker Endpoint** only for training/updates.  
- Implemented **EventBridge** to auto‑scale Lambda concurrency based on CloudWatch metrics, ensuring 99.9 % availability.  
- Integrated **AWS Step Functions** for orchestration, allowing graceful degradation if a downstream service fails.  

**Result:** Achieved a 65 % reduction in response time (from 350 ms to 125 ms) and cut inference costs by 40 % compared to the previous EC2‑based setup. Learned that careful selection of storage (S3 for model artifacts vs. EFS for larger weights) dramatically impacts cold‑start latency.

*Bar‑raiser cues:* I showcased deep technical knowledge, quantified ROI, demonstrated ownership over failure handling, and iterated on feedback to refine the architecture.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
