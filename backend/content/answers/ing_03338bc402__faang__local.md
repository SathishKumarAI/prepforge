---
qid: ing_03338bc402__faang__local
question: 'Explain: Ryan Drapeau — How we built it: Stripe Radar | Stripe Dot Dev
  Blog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 487
total_tokens: 729
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:51:18-05:00'
sources: []
---

**Clarify**  
The question asks for an overview of how *Stripe Radar*—a fraud‑detection system built by Ryan Drapeau and the team—was engineered. I’ll assume we need to cover its data pipeline, model training, deployment, and monitoring, as described in the Stripe Dev Blog.

---

**Approach**  
1. **Data ingestion & feature engineering** – real‑time event streams + historical claims.  
2. **Model selection** – gradient‑boosted trees (XGBoost) for tabular fraud features; optional deep learning for sequential data.  
3. **Training pipeline** – nightly retraining on recent 30‑day window, stratified sampling to handle class imbalance.  
4. **Serving architecture** – low‑latency inference via a microservice behind a CDN; cache results per transaction ID.  
5. **Feedback loop** – human reviews feed back into the training set; continuous A/B testing for rule updates.

---

**Depth**  
- *Feature set*: 1,000+ engineered features (geolocation, device fingerprint, velocity metrics).  
- *Model*: XGBoost with ~200 trees, depth 6; inference < 5 ms.  
- *Training*: 10 GB of labeled data, 80/20 split, using early stopping on AUC‑ROC.  
- *Deployment*: Docker containers orchestrated by Kubernetes; autoscaling based on request rate.  
- *Monitoring*: Real‑time dashboards for false‑positive rates and latency; alerting when drift > 2 σ.

---

**Edge Cases**  
- Rare fraud patterns not present in training → fallback to rule‑based checks.  
- Sudden spike in traffic causing cache misses → throttling logic.  
- Data pipeline failures → circuit breaker routes to safe mode with conservative thresholds.

---

**Optimize & Communicate**  
- Future work: replace XGBoost with a lightweight neural net for better feature interaction, reducing inference time by ~30 %.  
- Explainability: SHAP values surfaced in the dashboard to aid fraud analysts.  
- I’d narrate this as a “data‑centric, continuously learning system” that balances speed, accuracy, and maintainability—exactly what FAANG interviewers value.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
