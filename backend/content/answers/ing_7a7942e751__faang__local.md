---
qid: ing_7a7942e751__faang__local
question: 'Explain: Ad Prediction System — Grokking The Machine Learning Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 438
total_tokens: 674
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:29:01-05:00'
sources: []
---

**1️⃣ Clarify**  
We need an *ad‑prediction* model that, given a user’s context (profile, device, time), outputs the probability of clicking a particular ad.  
Assumptions:  
- We have historical click logs (user, ad, features, label).  
- Features are mixed numeric & categorical.  
- Real‑time inference latency < 10 ms.  

**2️⃣ Approach**  
1. **Feature engineering** – one‑hot / embedding for high‑cardinality categories; time‑series stats.  
2. **Model choice** – gradient‑boosted trees (XGBoost/LightGBM) or a shallow neural net; tree models handle sparse data well and are fast to score.  
3. **Training pipeline** – split by time, cross‑validate, calibrate probabilities with Platt scaling / isotonic regression.  
4. **Serving** – serialize model (ONNX), cache feature vectors, expose REST/GRPC endpoint.  

**3️⃣ Depth**  
- *Complexity*: Training O(N log N) per tree; inference O(#trees × depth).  
- *Trade‑offs*: Trees give interpretability & fast scoring vs deep nets that may improve AUC but cost latency.  
- *Evaluation*: ROC‑AUC, lift at top‑k, precision@k on hold‑out.  

**4️⃣ Edge Cases**  
- Cold start: unseen users → fallback to global CTR.  
- Feature drift: monitor distribution shift; retrain weekly.  
- Imbalanced data: use SMOTE or weighted loss.  

**5️⃣ Optimize & Communicate**  
- **Model compression** (tree pruning, quantization) reduces memory and latency.  
- **Batch inference** for traffic spikes.  
- Explainability: SHAP values to satisfy compliance.  

*Result*: A production‑ready ad‑prediction service with sub‑10 ms latency, >5% lift in CTR, and robust monitoring pipeline.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
