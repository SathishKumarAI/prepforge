---
qid: ing_43463baa5e__faang__local
question: How do you detect and handle model drift in production?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 453
total_tokens: 686
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:20:39-05:00'
sources: []
---

**Clarify**  
We’re monitoring a deployed ML model that predicts user churn. The goal is to spot when its predictions degrade (model drift) and react before revenue loss.

*Assumptions to confirm*:  
1. We have labeled feedback (e.g., post‑prediction churn events).  
2. Streaming metrics are available (predictions, features, ground truth).  
3. Deployment pipeline supports A/B testing or shadow mode for rollbacks.

**Approach**  
1. **Baseline drift detection** – monitor statistical properties of input features (mean, variance) and output scores over sliding windows.  
2. **Performance monitoring** – compute metrics (AUC‑ROC, F1) on recent labeled data vs. historic baseline.  
3. **Alerting & validation** – trigger an alert when performance drops beyond a threshold; spin up a shadow model to confirm.  
4. **Remediation loop** – if confirmed, retrain with the newest window or apply online learning; otherwise, continue monitoring.

**Depth**  
- Feature drift: use KS test or Wasserstein distance per feature, aggregated via weighted sum.  
- Concept drift: use sliding‑window ROC and compute ΔAUC; threshold 0.02 (2%) is typical.  
- Complexity: O(n) per window for metrics; retraining cost depends on model size but can be scheduled nightly.

**Edge Cases**  
- Sparse labels → use semi‑supervised or proxy signals (e.g., subscription cancellations).  
- Sudden spikes due to external events → differentiate via change‑point detection.  
- Feature distribution shift that actually improves performance → avoid over‑reacting by cross‑validating on holdout.

**Optimize & Communicate**  
Explain trade‑offs: tighter windows increase sensitivity but raise false positives; larger windows reduce noise but delay response. Propose a two‑tier alert system (soft vs hard). Summarize in a concise slide, then walk through the pipeline diagram to show end‑to‑end flow. This keeps interviewers engaged and demonstrates clear, actionable thinking.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
