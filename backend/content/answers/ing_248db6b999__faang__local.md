---
qid: ing_248db6b999__faang__local
question: 'Explain: Fraud Detection System — Grokking The Machine Learning Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 527
total_tokens: 763
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:09:26-05:00'
sources: []
---

**1️⃣ Clarify**  
We need to design a *fraud‑detection* ML system for an online payment platform.  
Key assumptions:  

- Real‑time or near‑real‑time scoring of transactions (≤ 100 ms).  
- Imbalanced data: fraud ≈ 0.1%–0.5%.  
- Features include user profile, transaction metadata, device & geolocation info.  
- Regulatory compliance requires explainability and audit logs.

**2️⃣ Approach**  
1. **Data pipeline** – ingest raw events → feature store (user‑history, velocity metrics).  
2. **Labeling** – use confirmed chargebacks/AML flags as ground truth; apply temporal split to avoid leakage.  
3. **Model choice** – start with Gradient Boosted Trees (XGBoost) for tabular data; add a neural net for sequential embeddings if needed.  
4. **Training** – handle imbalance via class‑weighting or SMOTE, cross‑validate on time‑based folds.  
5. **Evaluation** – precision@k, ROC‑AUC, and lift charts; keep false‑positive cost in mind.  
6. **Deployment** – serve as a REST/GRPC microservice with caching of recent user vectors; monitor latency & drift.

**3️⃣ Depth**  
- Feature engineering: transaction velocity (last 5 min), geographic distance, device fingerprint entropy.  
- Model interpretability: SHAP values to surface top drivers per prediction for compliance.  
- Drift detection: periodic re‑train every 2 weeks, trigger alerts if AUC drops > 3%.  
- Complexity: XGBoost inference O(log n) ≈ O(1) per row; memory ~ 100 MB.

**4️⃣ Edge Cases**  
- New users with sparse history → fallback to rule‑based score.  
- Blackout periods (e.g., holiday spikes) → adjust thresholds dynamically.  
- Attack vectors: data poisoning via synthetic fraud; guard with anomaly detection on feature distributions.

**5️⃣ Optimize & Communicate**  
- Reduce latency by batching predictions and using GPU inference if model size grows.  
- Explain decisions to stakeholders with visual dashboards (feature importance, trend charts).  
- Iterate: A/B test threshold adjustments against business KPIs (loss vs. revenue impact).

This structured plan balances performance, compliance, and maintainability—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
