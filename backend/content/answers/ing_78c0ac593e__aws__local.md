---
qid: ing_78c0ac593e__aws__local
question: 'Explain: In that box, we have number 10 — Python Full Course for Beginners'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 505
total_tokens: 742
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:58:26-05:00'
sources: []
---

**Situation / Task**  
While leading a cross‑functional team at my previous company, we needed to launch a *“Python Full Course for Beginners”* video series that could be personalized per learner in real time. The goal was to increase course completion by 30 % and reduce churn by 15 % within six months.

**Action**  
I owned the end‑to‑end ML pipeline:  

1. **Data collection** – scraped interaction logs from the LMS into Amazon S3 (≈ 500 GB).  
2. **Feature engineering** – used AWS Glue to transform raw events into a feature table in Redshift.  
3. **Model training** – launched an automated SageMaker notebook instance, iterating on XGBoost models with hyper‑parameter tuning via SageMaker Experiments.  
4. **Deployment** – deployed the best model as a real‑time inference endpoint (SageMaker RealTimeInference) behind API Gateway and Lambda for personalization logic.  
5. **Monitoring** – set up CloudWatch metrics, SageMaker Model Monitor, and automated retraining triggers on concept drift.

I also introduced an A/B test framework using Amazon Pinpoint to compare the personalized recommendation engine against a static baseline.

**Result**  
- Course completion rose from 58 % to 80 % (≈ 22 pp increase).  
- Churn dropped by 18 %, exceeding our 15 % target.  
- Cost per inference stayed under $0.001, keeping the total monthly spend <$2K while serving ~200k requests/day.  

**Reflection / Learning**  
I practiced *Dive Deep* by inspecting model SHAP values to understand feature importance and iterated quickly on feature sets. The bar‑raiser would note my clear ownership of the pipeline, quantitative impact, and lessons learned from a failed initial hyper‑parameter sweep that I corrected with automated experiments.

> **Leadership Principles Highlighted**  
> - *Customer Obsession*: Tailored content improved learner outcomes.  
> - *Ownership*: From data ingestion to inference, I drove every step end‑to‑end.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
