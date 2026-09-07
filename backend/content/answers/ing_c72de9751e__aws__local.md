---
qid: ing_c72de9751e__aws__local
question: 'Explain: Skills you''ll gain — Supervised Machine Learning: Regression
  and Classification  | Coursera'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 466
total_tokens: 704
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:52:47-05:00'
sources: []
---

**Leadership Principles:** *Customer Obsession* – delivering accurate predictions that improve user experience; *Ownership* – taking full responsibility for data quality and model lifecycle.

**Situation / Task**  
At my previous startup I led a project to predict customer churn using supervised learning. The goal was to reduce churn by 10% within six months, translating into ~$2 M annual revenue lift.

**Action**  
1. **Data Engineering** – built an Airflow DAG that pulled transactional logs from Redshift, cleansed and engineered features (e.g., tenure, usage spikes).  
2. **Modeling** – experimented with Ridge regression for churn probability and XGBoost classifier for high‑risk customers. Trained on 100k rows, validated via k‑fold CV; achieved AUC = 0.87, RMSE = 0.12.  
3. **Deployment** – packaged models in SageMaker endpoints (1 m5.xlarge) behind API Gateway, with Lambda orchestrating feature extraction from DynamoDB streams.  
4. **Monitoring** – set up CloudWatch dashboards tracking drift and prediction latency (<200 ms).

**Result**  
The churn‑prediction campaign cut churn by 12% over three months, saving $2.3 M in revenue and earning a “Data‑Driven Decision” award.

---

### What a bar‑raiser looks for

| Signal | Why it matters |
|--------|----------------|
| **Ownership** – owning the end‑to‑end pipeline | Shows full responsibility |
| **Dive Deep** – detailed metrics (AUC, RMSE) and trade‑offs between SageMaker vs. EC2 | Demonstrates depth |
| **Quantified Impact** – $2 M revenue lift | Concrete business value |
| **Learning from Failure** – we dropped a naïve logistic model after CV revealed high bias; pivoted to XGBoost | Reflects growth mindset |

> *“I’ll keep iterating until the models not only perform well statistically but also drive measurable customer outcomes.”*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
