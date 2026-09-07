---
qid: ing_a158e51fcf__faang__local
question: 'Explain: What Interviewers Look For (& Mental Model You Need)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 345
total_tokens: 581
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:59:49-05:00'
sources: []
---

**Clarify**  
Interviewers ask this to gauge how you frame ML problems and communicate decisions. Assume they want a concise mental‑model that ties data → model → deployment.

**Approach**  
1. Restate the goal (e.g., predict churn).  
2. List key criteria: *accuracy, interpretability, scalability, robustness*.  
3. Show the decision tree: data quality → feature engineering → algorithm choice → evaluation → production concerns.

**Depth**  
- **Data sanity:** missingness, class imbalance, drift.  
- **Feature space:** domain knowledge + automated selection (e.g., L1).  
- **Modeling trade‑offs:** complex ensembles vs linear models for interpretability; tree depth vs overfitting.  
- **Evaluation:** cross‑validation, proper metrics (AUC, F1), calibration.  
- **Deployment:** inference latency, batch vs real‑time, monitoring drift, retraining cadence.

**Edge Cases**  
- Extremely sparse data → use embeddings or Bayesian methods.  
- Real‑time constraints → quantize models, distill ensembles.  
- Regulatory limits → favor interpretable models or provide explainability modules.

**Optimize & Communicate**  
Explain why you chose a particular algorithm (e.g., XGBoost for tabular + feature importance). Discuss potential biases and mitigation. End with a “next‑steps” plan: collect more data, prototype in a cloud notebook, set up A/B testing. This shows end‑to‑end ownership and readiness to iterate—exactly what FAANG interviewers reward.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
