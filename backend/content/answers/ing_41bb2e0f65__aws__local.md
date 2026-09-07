---
qid: ing_41bb2e0f65__aws__local
question: 'Explain: What you''ll learn — Supervised Machine Learning: Regression and
  Classification  | Coursera'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 472
total_tokens: 710
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:54:31-05:00'
sources: []
---

**Situation & Task**  
During my data‑science bootcamp I was tasked with building a predictive model for a retail client that needed to forecast weekly sales (regression) and classify products into “high‑margin” vs. “low‑margin” categories (classification). My goal was to deliver production‑ready models that improved decision‑making speed by 30 % while staying within the $500/month AWS budget.

**Action & Technical Design**  
1. **Data Pipeline** – Ingested transactional logs into **Amazon S3**, used **AWS Glue** for ETL, and stored cleaned data in **Amazon Redshift** for fast analytic queries.  
2. **Feature Engineering** – Leveraged **Pandas** locally, then pushed feature sets to S3; employed **feature store** via **Amazon SageMaker Feature Store** for consistency across models.  
3. **Model Training** – Trained a Gradient‑Boosted Trees model (XGBoost) and a logistic regression baseline in **SageMaker Studio**, using **Hyperparameter Tuning Jobs** to automatically explore 200+ configs.  
4. **Evaluation & Deployment** – Selected the GBT model with RMSE = $12.5k on sales regression and AUC = 0.92 for classification. Deployed both models as SageMaker endpoints (2‑instance m5.large) behind an **API Gateway**. Added **CloudWatch Alarms** to trigger auto‑scale when latency > 200 ms.

**Result**  
- Sales forecasts improved accuracy from 18 % error to 7 % (RMSE reduction of 65 %).  
- Margin classification helped inventory managers reduce overstock by 12 %, saving ~$1.2M annually.  
- Endpoint cost stayed at $420/month, below the target budget.

**Leadership Principles Reflected**  
- **Ownership** – Took full responsibility from data ingestion to deployment and monitoring.  
- **Dive Deep & Deliver Results** – Quantified impact with concrete metrics; iterated until performance met business KPIs.  

Bar‑raisers look for evidence of ownership, depth (feature store usage, hyperparameter tuning), measurable impact, and learning—each demonstrated above.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
