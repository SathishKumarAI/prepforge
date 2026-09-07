---
qid: ing_e271bd3193__faang__local
question: 'Explain: How we’ve automated fleet-level root cause analysis'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 511
total_tokens: 745
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:25:48-05:00'
sources: []
---

**Clarify**  
We’re asked to describe how an organization can automatically discover *why* a fleet of devices (e.g., IoT sensors, edge servers) fails or degrades—i.e., perform root‑cause analysis at scale.  
Assumptions:  
- Devices stream telemetry and logs continuously.  
- A central data lake ingests these streams.  
- We have a small set of known failure modes but many latent ones.

**Approach**  
1. **Data ingestion & labeling** – Ingest metrics, logs, and incident tickets; label events with severity.  
2. **Feature engineering** – Aggregate per‑device time series (mean, variance, trend), extract log n‑grams, encode categorical configs.  
3. **Unsupervised anomaly detection** – Use Autoencoders or Isolation Forests to flag abnormal patterns before failure.  
4. **Temporal causal inference** – Apply Granger‑Causality or Bayesian networks over lagged features to surface likely causes.  
5. **Explainable ML** – Use SHAP/TreeExplainer on a supervised model (e.g., RandomForest) trained on labeled incidents to rank feature importance per failure type.  
6. **Feedback loop** – Operators validate explanations; corrections retrain the model nightly.

**Depth**  
- Autoencoder: latent size 32, MSE threshold tuned via ROC. Complexity O(N·T).  
- Bayesian network: learned structure with PC algorithm (O(d³) for d features).  
- SHAP values computed per incident in ~O(n log n) where n is tree depth.  
Trade‑offs: Unsupervised methods catch unknown faults but lack interpretability; supervised models give precise causes but need labeled data.

**Edge Cases**  
- Sudden configuration drift → false positives; handle with drift detection (ADWIN).  
- Sparse logs for new devices → fall back to metric‑only analysis.  
- Correlated failures across fleets → ensure independence assumption is relaxed in Bayesian model.

**Optimize & Communicate**  
Start with a lightweight rule‑based baseline, then layer ML models incrementally. Monitor precision/recall of root‑cause suggestions; aim >85% operator approval. Present the pipeline as “data → anomaly detection → causal inference → explainable model → human validation.” This narrative shows clear problem framing, technical depth, and iterative improvement—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
