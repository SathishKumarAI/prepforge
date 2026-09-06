---
qid: ing_a114b2badb__think__local
question: 'Explain: Your model hits 0.87 AUC offline, you launch it, and the business
  metric doesn''t move. Debug it.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 205
output_tokens: 551
total_tokens: 756
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T11:43:43-05:00'
sources: []
---

**1️⃣ Clarify & Assume**  
- *What is “business metric”?* Sales lift, churn reduction, revenue per user?  
- *Data split*: Offline AUC 0.87 on a hold‑out set that may not reflect production traffic.  
- *Deployment context*: Is the model serving in real‑time or batch? Are predictions being logged and acted upon?  

**2️⃣ Mental Model: “Offline ≠ Online”**  
Treat the problem as an **offline‑to‑online drift** issue.  
1. Data distribution shift (feature values, missingness).  
2. Target shift (label definition changes).  
3. Feature leakage or recoding differences.  
4. Inference pipeline errors (serialization, scaling, version mismatch).  

**3️⃣ Step‑by‑Step Reasoning**  
a. **Verify the inference path** – check that the same preprocessing, feature mapping, and model weights are used in production.  
b. **Audit feature values** – compare histograms of key predictors between offline test set and live traffic. Look for NaNs or outliers.  
c. **Check label alignment** – ensure the business metric uses the same definition as the training target (e.g., click vs. conversion).  
d. **Measure online performance** – compute AUC, precision@k, etc., on a small sample of live predictions with known outcomes to see if the model still performs.  
e. **Monitor post‑processing** – thresholding, ranking, or business rules might be neutralizing the signal.  

If the model’s online metrics drop, identify which feature(s) changed most and whether the business logic still uses the prediction.  

**4️⃣ Common Traps to Avoid**  
- Assuming *AUC* alone guarantees a business impact; ignore downstream KPI conversion.  
- Ignoring *label noise* in production data that wasn’t present offline.  
- Overlooking *feature drift* caused by new user segments or A/B tests.  
- Failing to test the inference pipeline end‑to‑end before full rollout.

**5️⃣ Sanity Check & Communicate**  
Run a quick “shadow” mode: let the model predict but don’t act on it; log predictions and compare against real outcomes. Present findings as:  
1. Offline AUC 0.87 → **but** online feature drift + pipeline mismatch = effective AUC ~0.55 → no KPI lift.  
2. Fixes: update preprocessing, retrain with recent data, adjust business rules.

This structured debugging loop keeps the explanation clear and actionable for stakeholders.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
