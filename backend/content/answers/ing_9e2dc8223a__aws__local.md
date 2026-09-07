---
qid: ing_9e2dc8223a__aws__local
question: 'Explain: General & Administrative — Careers | Cognition'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 435
total_tokens: 665
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:22:29-05:00'
sources: []
---

**Situation – Task**  
I was hired by a fintech startup that wanted to replace its manual credit‑risk scoring with an ML model so it could onboard 10× more customers per quarter without increasing default rates.

**Action – Design & Execution**  
1. **Data pipeline** – Built an ingest stack on **Amazon Kinesis Data Streams** → **Glue ETL** → **S3** for raw logs, then a **Redshift Spectrum** layer for fast joins.  
2. **Feature store** – Deployed **AWS SageMaker Feature Store** to centralize 200+ time‑series features; enabled real‑time inference latency < 50 ms via **SageMaker Edge Manager** on the mobile app.  
3. **Model training** – Used **SageMaker Autopilot** for baseline, then fine‑tuned a **XGBoost** model with hyperparameter tuning (Bayesian search) on an 8‑node GPU cluster.  
4. **Deployment & monitoring** – Rolled out via **SageMaker Endpoint** behind **API Gateway**; set up CloudWatch Alarms and SageMaker Model Monitor to flag drift (> 5% AUC change).  
5. **Cost control** – Leveraged spot instances for training (↓ 70%) and reserved RDS for feature store (– 15%).

**Result – Impact**  
- Reduced default rate from 4.2 % to **3.1 %** while increasing approvals by **12,000 customers/month**.  
- Cut processing cost per decision from $0.75 to **$0.25**.  
- Achieved 99.9 % uptime during launch.

**Reflection – Bar‑raiser cues**  
I owned the entire ML lifecycle, dove deep into data quality and drift monitoring, quantified ROI (cost & risk), and iterated on feedback loops—demonstrating *Ownership* and *Dive Deep*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
