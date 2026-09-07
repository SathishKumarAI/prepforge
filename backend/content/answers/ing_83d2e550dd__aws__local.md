---
qid: ing_83d2e550dd__aws__local
question: 'Explain: And there are several popular forecasting models'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 458
total_tokens: 687
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:23:03-05:00'
sources: []
---

**Situation / Task**  
In my last role I led a cross‑functional team that had to deliver an **on‑line demand forecast** for a seasonal e‑commerce catalog. The business required 95 % accuracy at the SKU level, while keeping infra costs under $5k/month.

**Action – Technical Design**  
I scoped the problem as *time‑series forecasting* and evaluated three popular models:  
1. **ARIMA / SARIMAX** – simple, interpretable, but struggles with large feature sets.  
2. **Prophet (Facebook)** – handles seasonality & holidays well; easy to ship to SageMaker endpoints.  
3. **XGBoost + Lag Features** – captures non‑linear patterns and works natively in AWS Glue / SageMaker.

I built a **data pipeline** on Glue that extracts sales, promotion, and weather data, then feeds into an **AWS Lambda** orchestration that triggers a SageMaker training job (using the XGBoost algorithm). The model is deployed behind an **Elastic Load Balancer** with an **Auto Scaling Group** of 3 m5.large instances to ensure 99.9 % availability.

**Result**  
The XGBoost pipeline reduced mean absolute percentage error from **18 % → 8 %**, meeting the 95 % accuracy target. Monthly costs stayed below $4k, and latency for real‑time predictions was <200 ms. I also created a monitoring dashboard in CloudWatch that alerts on drift >10 %, enabling rapid rollback.

**Leadership Principles Reflected**  
- **Customer Obsession** – delivered forecasts that directly boosted conversion by 12 %.  
- **Ownership / Dive Deep** – designed the end‑to‑end pipeline, tuned hyperparameters, and quantified impact.  

**Bar‑raiser takeaway** – Demonstrated ownership, deep technical dive, measurable business outcome, and a learning loop (model drift monitoring).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
