---
qid: ing_82b6caa7a4__star__local
question: 'Explain: What we are looking for — Careers \\ Anthropic'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 359
total_tokens: 597
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:54:47-05:00'
sources: []
---

**Situation** – In my last role at a fintech startup, we were building a fraud‑prediction engine for credit card transactions. The data scientist team had already trained several classifiers, but the model’s precision was hovering around 78 %, and our compliance team required at least 85 % to meet regulatory thresholds.

**Task** – I was tasked with identifying what characteristics we needed in a model: higher precision without sacrificing too much recall, faster inference time for real‑time routing, and explainability for auditors. The goal was to deliver a production‑ready pipeline that could be deployed within two weeks.

**Action** – First, I mapped the feature importance using SHAP values to pinpoint which variables contributed most to false positives. Then I engineered new interaction terms between merchant category codes and transaction velocity, reducing noise. Next, I switched from a standard XGBoost implementation to a LightGBM model tuned with Bayesian optimization, specifically targeting a higher precision‑recall trade‑off by adjusting the `scale_pos_weight` parameter. Finally, I wrapped the model in an ONNX runtime for sub‑10 ms inference and added a rule‑based fallback layer for edge cases.

**Result** – The new pipeline achieved 87 % precision and 82 % recall on the holdout set, exceeding compliance requirements while keeping latency under 8 ms. Deployment went live without a single rollback, and I learned that balancing statistical metrics with operational constraints is key to delivering real‑world ML solutions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
