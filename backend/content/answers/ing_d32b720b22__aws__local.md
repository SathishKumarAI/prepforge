---
qid: ing_d32b720b22__aws__local
question: 'Explain: Tools you''ll learn — Supervised Machine Learning: Regression
  and Classification  | Coursera'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 407
total_tokens: 645
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:18:05-05:00'
sources: []
---

**Situation / Task**  
While leading a data‑science sprint for the e‑commerce recommendation engine, I had to upskill my team on supervised learning (regression & classification) so we could replace a legacy rule‑based model that was 15 % less accurate and added ~$1M in infra cost annually.

**Action**  
I organized a two‑week internal bootcamp using Coursera’s “Supervised Machine Learning” curriculum.  
* **Design:** Students first built linear regression models on sales‑forecast data, then moved to logistic regression for click‑through prediction.  
* **AWS stack:** I mapped each exercise to real services:  
  * **S3** – raw and processed datasets (≈50 GB).  
  * **Glue** – ETL pipelines that ran nightly with a cost of <$200/month.  
  * **SageMaker Notebooks & Pipelines** – for training, hyper‑parameter tuning, and model registry.  
  * **Lambda + API Gateway** – to expose the deployed models as low‑latency inference endpoints (99.9 % availability).  
* I introduced **Model Monitor** to log drift metrics and set up automated retraining triggers.

**Result**  
Within two months of deployment:  
* Prediction accuracy improved from 82 % to 93 % (+11 pp).  
* Monthly inference cost dropped by 35 % ($200k saved).  
* Team velocity doubled (4 sprints → 2) because models were reusable across products.  

**Reflection**  
I owned the end‑to‑end pipeline, dove deep into data quality issues that surfaced during training, and iterated quickly—bias for action. The bar‑raiser will note my clear ownership, quantitative impact, and learning loop (we now retrain every 30 days based on drift).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
