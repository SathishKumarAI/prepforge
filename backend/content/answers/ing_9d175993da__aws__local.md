---
qid: ing_9d175993da__aws__local
question: 'Explain: Week 3: Classification — Supervised Machine Learning: Regression
  and Classification  | Coursera'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 489
total_tokens: 729
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:20:04-05:00'
sources: []
---

**Situation (S)**  
While leading a data‑science sprint for an e‑commerce platform, we needed to predict whether a visitor would convert (binary classification) or estimate the amount they’d spend (regression). The goal was to feed these predictions into our recommendation engine and budget allocation.

**Task (T)**  
Build a robust supervised learning pipeline that could handle 10M daily records, provide real‑time inference with <50 ms latency, and be cost‑effective for future scaling.

**Action (A)**  

| Step | Technical choice | AWS services | Rationale |
|------|------------------|--------------|-----------|
| Feature engineering | One‑hot encode categorical tags; log‑scale price fields | **S3 + Glue** | Keeps raw data immutable, supports incremental ETL. |
| Model selection | Gradient Boosting (XGBoost) for classification; Linear Regression with regularization for regression | **Amazon SageMaker** | Managed training, hyperparameter tuning, and automatic scaling. |
| Deployment | SageMaker Endpoint (Multi‑model endpoint) | **SageMaker Runtime + Lambda** | Low latency inference, auto‑scaling, cost isolation per model. |
| Monitoring | CloudWatch metrics + SageMaker Model Monitor | Continuous drift detection; alerts trigger retraining. |

I added an **end‑to‑end CI/CD pipeline** (CodePipeline + CodeBuild) to automate training on new data weekly.

**Result (R)**  
- Classification AUC rose from 0.78 → **0.87** (12 % lift).  
- Regression MSE decreased by **35 %**, increasing average order value predictions accuracy.  
- Real‑time inference cost dropped from $1.20/hr to **$0.45/hr** thanks to multi‑model endpoints, saving ~70 % annually.

**Leadership Principles Highlighted**  
- *Customer Obsession*: Delivering more accurate spend estimates directly improved upsell opportunities.  
- *Ownership & Dive Deep*: I championed the entire pipeline from data ingestion to monitoring, uncovering hidden feature biases that cost us 10 % of conversions.  

*Bar‑raiser takeaway:* Demonstrated deep technical knowledge, quantified business impact, and continuous learning through automated drift detection.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
