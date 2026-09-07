---
qid: ing_8ae27a9a0a__aws__local
question: 'Explain: Google — Faang Recent Questions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 426
total_tokens: 654
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:39:38-05:00'
sources: []
---

**Situation & Task**  
While leading a cross‑functional team at my previous company, we were asked to replace an on‑premises recommendation engine that was 12 % slower and had a 3 % higher churn rate than our target. The goal was to build a real‑time ML pipeline on AWS that would reduce latency by ≥20 % and cut churn by ≥2 %.  

**Action (Dive Deep + Ownership)**  
1. **Data & Feature Engineering** – Extracted clickstream logs from S3, cleaned with Glue, and engineered time‑based features in Spark.  
2. **Modeling** – Trained a LightGBM model on SageMaker Studio, tuning hyperparameters via Bayesian optimization (≈4 h compute).  
3. **Serving** – Deployed the model as an endpoint in SageMaker RealTimeInference with autoscaling policies; used API Gateway + Lambda for request routing to keep cold‑start latency <100 ms.  
4. **Observability** – Instrumented CloudWatch metrics and X-Ray traces; set up automated retraining via EventBridge on a 24‑hour data window.  

**Result (Deliver Results)**  
- Latency dropped from 250 ms to 190 ms (≈20 % improvement).  
- Churn decreased from 3.2 % to 1.7 % within two months, surpassing the 2 % target by 0.5 %.  
- Cost reduced by $12K/month compared to the legacy Hadoop stack.  

**Learning & Bar‑Raiser Checkpoints**  
I took full ownership of the end‑to‑end pipeline, performed a deep dive into feature importance and model drift, quantified impact with A/B testing, and iterated quickly after a failed first deployment (which exposed data leakage). This aligns with Amazon’s **Customer Obsession**, **Ownership**, and **Bias for Action** principles.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
