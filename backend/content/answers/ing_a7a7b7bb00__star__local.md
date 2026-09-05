---
qid: ing_a7a7b7bb00__star__local
question: 'Explain: thing that we are thinking of differently'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 337
total_tokens: 572
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:08:06-05:00'
sources: []
---

**Situation** – In the summer of 2023 I was leading a fraud‑detection team at a fintech startup. Our production model had a false‑positive rate that kept creeping up to 8 % after we rolled out a new feature for real‑time transaction monitoring, hurting user experience and inflating operational costs.

**Task** – My goal was to reduce the false positives by at least 30 % without compromising detection sensitivity, while keeping latency under 50 ms so the service could stay in the same microservice chain.

**Action** – I re‑examined our feature engineering pipeline. Instead of treating every transaction attribute as equally important, we applied a Shapley‑based importance score to identify features that were actually driving false positives. We then engineered an auxiliary “contextual risk” feature from user device fingerprints and implemented a lightweight gradient‑boosted tree (XGBoost) with early stopping on a validation set. I also added a per‑user adaptive threshold, calibrated using online A/B testing rather than a static global cutoff.

**Result** – The false‑positive rate dropped to 5.3 %—a 33 % improvement—while detection recall stayed above 92 %. Latency remained below 48 ms. I learned that re‑thinking feature relevance through SHAP explanations can reveal hidden biases, and that adaptive thresholds often outperform static ones in dynamic environments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
