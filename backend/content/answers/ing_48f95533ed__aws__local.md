---
qid: ing_48f95533ed__aws__local
question: 'Explain: We have null values. So in a — Python Full Course for Beginners'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 409
total_tokens: 645
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:10:41-05:00'
sources: []
---

**Situation & Task**  
During my internship at a fintech startup I built a churn‑prediction model using the customer transaction dataset that had 28 % missing values across several features (age, income, device type). The business required a production‑ready pipeline that could ingest new data nightly without manual intervention.  

**Action**  
1. **Data‑driven cleaning strategy** – I calculated feature‑wise missingness and correlation with the target to decide on imputation. For continuous columns I used *KNN imputer* (scikit‑learn) because it preserves local structure; for categorical columns I applied a frequency encoder.  
2. **Automated pipeline** – Leveraged AWS Glue (Python shell job) to run the ETL, storing cleaned data in Amazon S3 (Parquet).  
3. **Model training & inference** – Trained an XGBoost model on SageMaker Studio notebooks and deployed it as a real‑time endpoint (SageMaker Hosting Service). The endpoint was auto‑scaled using *Endpoint Config* with 2 min warm pool to keep latency <30 ms.  
4. **Monitoring** – Set up CloudWatch metrics for missingness drift; if >10 % increase triggered an SNS alert and retraining job.

**Result**  
The cleaned pipeline reduced model bias by 12 %, increased AUC from .71 to .83, and cut inference cost by 18 % (S3 storage vs raw CSV).  

**Leadership Principles**  
- **Ownership** – I owned the end‑to‑end data quality process and drove it to production.  
- **Dive Deep** – I performed statistical tests to justify imputation choices and tuned hyperparameters for optimal performance.

**Bar‑raiser takeaway** – Showed deep technical depth, quantified impact, and built a self‑healing system that learns from data drift.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
