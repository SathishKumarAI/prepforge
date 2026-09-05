---
qid: ing_46fc7a802a__star__local
question: 'Explain: Stripe — Faang Recent Questions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 312
total_tokens: 546
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:50:44-05:00'
sources: []
---

**Situation** – In my last role at a fintech startup, we were building a real‑time fraud detection system for card transactions. Our model’s precision had slipped from 97 % to 91 % after a sudden spike in new merchant categories.

**Task** – I needed to restore precision above 95 % while keeping latency under 50 ms per prediction and ensuring the solution could scale to millions of daily transactions.

**Action** – First, I ran an error‑analysis pipeline that bucketed false positives by feature importance using SHAP values. That revealed a drift in the “merchant category code” embedding due to new categories. I engineered a dynamic embedding layer that updated every 6 hours from streaming Kafka logs and added a small attention mechanism over the last three transaction timestamps to capture temporal patterns. For model training, I switched from a single logistic regression to an ensemble of XGBoost trees (n_estimators=200) trained on a distributed Spark cluster, tuning with Bayesian optimization in Optuna. I also implemented early‑stopping and dropout at inference time via ONNX to keep latency low.

**Result** – Precision rose back to 96 %, false‑positive cost dropped by $12k per month, and inference latency stayed below 48 ms. The project taught me the importance of continuous feature monitoring and how lightweight architectural tweaks can have a big impact on production ML systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
