---
qid: ing_125d50ba4b__aws__local
question: 'Explain: How we leverage machine learning to predict repairs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 425
total_tokens: 655
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:07:07-05:00'
sources: []
---

**Situation & Task**  
At my previous role I led a team that needed to reduce unplanned vehicle downtime for our fleet‑management platform. The goal was to predict which components would fail in the next 48 hrs so we could schedule proactive repairs and cut spare‑parts inventory by 20 %.  

**Action**  
1. **Data & Feature Engineering** – Collected telemetry (vibration, temperature, mileage) from ~10k vehicles over 12 months into an Amazon Redshift warehouse. Used AWS Glue to clean, enrich, and store time‑series features in S3.  
2. **Model Development** – Built a Gradient‑Boosted Trees model with SageMaker’s built‑in XGBoost estimator. Trained on 80/20 split; achieved **AUC = 0.87**, outperforming the rule‑based baseline (AUC = 0.68).  
3. **Deployment & Scaling** – Deployed via SageMaker Real‑Time Endpoint behind an Application Load Balancer, auto‑scaling to 100 requests/second with <1 ms latency.  
4. **Observability** – Instrumented CloudWatch metrics and integrated SageMaker Model Monitor for drift detection; retrained weekly on new data.

**Result**  
- Reduced unplanned downtime by **32 %** (from 5.2 hrs to 3.6 hrs per vehicle).  
- Cut spare‑parts inventory costs by **18 %** ($1.2M annually).  
- Achieved >99.9 % availability with a cost of $0.05/endpoint‑hour.

**Learning & Ownership**  
I owned the end‑to‑end pipeline, iterated on feature importance after each deployment, and documented failure modes (e.g., sensor outages) to improve resilience—illustrating *Ownership* and *Dive Deep*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
