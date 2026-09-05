---
qid: ing_03e64bd769__star__local
question: 'Explain: Practical ML Techniques/Concepts — Grokking The Machine Learning
  Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 322
total_tokens: 564
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:36:28-05:00'
sources: []
---

**Situation:** In my last role at a fintech startup, our fraud detection model’s recall dropped from 92% to 78% after a sudden spike in transaction volume during a holiday sale. The team had only two weeks before the next regulatory audit.

**Task:** I needed to restore recall without sacrificing precision or exceeding our GPU budget of 4 TB RAM, and deliver an explainable model for auditors by Friday.

**Action:** First, I performed a rapid feature importance sweep with SHAP on the current XGBoost pipeline, uncovering that two lagging features had become stale. I replaced them with real‑time user‑device entropy scores computed via a lightweight Spark UDF. Next, I applied a focal loss variant to handle class imbalance, tuning gamma through Bayesian optimization in Optuna while monitoring AUC‑PR on a held‑out validation set. For explainability, I wrapped the boosted trees in a SHAP explainer and generated per‑transaction heatmaps for audit logs. Finally, I containerized the pipeline with Docker and scheduled nightly retraining on our GPU cluster.

**Result:** Recall rebounded to 91%, precision only fell by 1.3%, and latency stayed under 120 ms per inference. The audit passed with no red flags, and we reduced manual review time by 35%. I learned that marrying domain‑aware feature engineering with loss reweighting can quickly reverse performance drift while keeping the model interpretable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
