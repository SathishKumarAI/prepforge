---
qid: ing_a5e8493377__star__local
question: 'Explain: Explainers — Think Topics | IBM'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 268
total_tokens: 503
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:04:52-05:00'
sources: []
---

**Situation:** At my last company we launched a credit‑risk model that was flagged by regulators for lack of transparency. The audit required us to provide clear, actionable explanations for each decision.

**Task:** I had to design an explainer framework that would translate the complex ensemble into human‑readable insights while keeping latency under 200 ms per prediction.

**Action:** I chose SHAP as our core algorithm because it offers additive feature attributions and is model‑agnostic. I wrapped the XGBoost pipeline in a custom Flask microservice, precomputing background samples to speed up the kernel SHAP calculations. To reduce dimensionality, I applied PCA on the raw features before feeding them into SHAP; this cut the explain computation time by 40 % without losing >95 % of explained variance. For visualization, I built a lightweight D3 dashboard that highlighted top‑contributing variables per loan and allowed regulators to drill down into counterfactual scenarios.

**Result:** The explainer reduced audit turnaround from weeks to days, met the latency requirement, and increased model adoption by 35 %. I learned how choosing the right SHAP mode (tree vs. kernel) and preprocessing can dramatically affect performance in production.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
