---
qid: ing_f8ac3b6248__aws__local
question: 'Explain: Machine Learning — Faang Recent Questions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 716
total_tokens: 945
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:40:40-05:00'
sources: []
---

## Coaching Note – “Explain: Machine Learning — FAANG Recent Questions”

### 1️⃣ What the interviewer wants  
- **Customer Obsession** – Show you’re building ML that solves real user pain points.  
- **Dive Deep / Ownership** – Explain your end‑to‑end data pipeline, model choice, and deployment strategy with concrete metrics.

### 2️⃣ Sample STAR answer (≈170 words)

> **S**: At my previous company I led a feature to predict churn for the top 10 % of users.  
> **T**: The goal was to reduce churn by at least 5 % while keeping latency < 100 ms on mobile.  
> **A**:  
> - Collected ~3 M user events, engineered 120 features (engagement, support tickets, NPS).  
> - Trained a LightGBM model (≈10 k trees) in SageMaker; AUC‑ROC = 0.92.  
> - Deployed as a Lambda edge function behind API Gateway, caching the top 1 % predictions in DynamoDB to hit < 50 ms on average.  
> - Implemented automated retraining every week using Step Functions and CloudWatch alarms for drift (> 5 %).  
> **R**: After 6 months we saw a **4.7 % churn reduction** (≈ 12,000 fewer customers), saving $2.3M annually, while keeping SLA > 99.9 %. The model’s precision at 95 % recall was 0.88—meeting product‑owner KPI.

### 3️⃣ What a bar‑raiser listens for  
| Cue | Why it matters |
|-----|----------------|
| **Ownership** – “I built the data lake, trained the model, and set up CI/CD.” | Shows end‑to‑end accountability. |
| **Dive Deep** – Detailed feature list, hyperparameter tuning, cost per inference. | Demonstrates technical depth. |
| **Quantified Impact** – 4.7 % churn reduction, $2.3M saved. | Concrete business value. |
| **Learning from Failure** – “We noticed drift after 3 months; fixed by adding a feature importance monitor.” | Shows resilience and continuous improvement. |

### 4️⃣ Quick Design Skeleton for a FAANG‑style ML service

1. **Data Ingestion**: Kinesis Data Streams → Glue ETL → S3 (raw & curated).  
2. **Feature Store**: SageMaker Feature Store + DynamoDB cache.  
3. **Model Training**: SageMaker training jobs on Spot instances; hyperparameter tuning with Bayesian optimization.  
4. **Inference**: SageMaker Endpoints behind API Gateway; edge Lambda for latency reduction.  
5. **Observability**: CloudWatch metrics (latency, error rate), SageMaker Model Monitor for drift.  
6. **Cost Optimisation**: Use Spot training, autoscaling endpoints, and pay‑per‑invoke inference.

> *Trade‑offs*: Spot instances reduce cost but risk interruptions; edge Lambda adds complexity but cuts latency.  

Use this structure to frame any ML interview question—anchor with a principle, give a data‑rich STAR story, then sketch the architecture while highlighting ownership and learning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
