---
qid: ing_b1e95ee458__aws__local
question: 'Explain: Your fraud dataset is 0.5% positive. Walk me through your strategy
  for handling the imbalance.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 519
total_tokens: 761
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:07:17-05:00'
sources: []
---

**Situation & Task**  
In my last role I built a fraud‑detection model on a transaction log where only **0.5 %** of samples were fraudulent. The goal was to maximize *precision* for the limited fraud‑investigation budget while keeping false positives low enough that we didn’t overload analysts.

**Action – Strategy & Architecture**  
1. **Resampling + Cost‑Sensitive Learning** – I used a two‑stage pipeline:  
   - Stage 1: Random undersample the majority class to 5 % and train a *gradient‑boosted tree* (XGBoost).  
   - Stage 2: Apply *SMOTE* on the minority samples only for the top 10 % of high‑risk candidates, then retrain.  
   This kept the model size small while preserving rare patterns.

2. **Feature Engineering & Enrichment** – Joined with external risk feeds (IP reputation, device fingerprint) and created interaction features (transaction amount × merchant category).  

3. **Model Serving on AWS** – Deployed as a SageMaker endpoint behind an Application Load Balancer, autoscaling from 1 to 10 instances based on request latency (<200 ms).  
   *Cost*: $0.20/h per instance → <$150/month for 30‑day uptime.

4. **Evaluation & Continuous Learning** – Used a rolling window of the last 2 weeks for validation; monitored *precision@k* and *recall*. Automated retraining every Sunday with new data, using SageMaker Pipelines.

5. **Explainability & Compliance** – Integrated SHAP to surface top contributing features; fed explanations into an RDS audit table for compliance review.

**Result**  
- Precision improved from 12 % to **38 %** at the same recall (≈70 %).  
- Analyst workload dropped by **45 %**, freeing capacity for high‑severity cases.  
- Cost per false positive fell from $120 to **$55**.  

**Reflection**  
I owned every phase, from data prep to deployment, and dove deep into sampling techniques that respected the imbalance. The bar‑raiser will note my quantified impact, end‑to‑end ownership, and iterative learning loop—hallmarks of Amazon’s Leadership Principles: *Ownership*, *Dive Deep*, and *Deliver Results*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
