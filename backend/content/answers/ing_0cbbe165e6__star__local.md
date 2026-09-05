---
qid: ing_0cbbe165e6__star__local
question: 'Explain: Metrics — Reliability'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 334
total_tokens: 564
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:53:58-05:00'
sources: []
---

**Situation** – At my last company I led a fraud‑detection model that had to run on our e‑commerce platform during high‑traffic holiday seasons. The engineering team noticed the false‑positive rate spiked from 1.2 % to 3.5 % during peak traffic, causing legitimate orders to be flagged and customer complaints to rise.

**Task** – I needed to restore the model’s reliability by reducing the false‑positive rate below 1.5 % while keeping latency under 150 ms so the checkout flow wouldn’t slow down.

**Action** – First, I set up a monitoring dashboard that tracked per‑feature drift and prediction confidence in real time. Using TensorFlow Model Analysis I ran an A/B test on two candidate models: a gradient‑boosted tree with feature selection tuned by SHAP values, and a lightweight neural network trained with focal loss to handle class imbalance. I also implemented a rolling‑window ensemble that weighted predictions based on recent accuracy. Finally, I added an online calibration step using Platt scaling so the output probabilities matched observed fraud rates.

**Result** – After deploying the calibrated ensemble, the false‑positive rate dropped to 0.9 % and overall model latency stayed at 120 ms. Customer complaints fell by 42 %, and we saved roughly $1.2 M in lost revenue per holiday season. I learned that continuous metric monitoring and lightweight calibration can dramatically improve AI reliability without sacrificing performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
