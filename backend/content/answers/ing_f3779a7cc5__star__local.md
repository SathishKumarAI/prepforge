---
qid: ing_f3779a7cc5__star__local
question: 'Explain: For example, it could reject requests from'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 366
total_tokens: 602
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:34:46-05:00'
sources: []
---

**Situation** – In late 2023 I was leading the fraud‑detection pipeline for a fintech app that processes ~250k card transactions per day. The last quarter’s false‑positive rate had spiked from 2% to 5%, hurting user experience.

**Task** – I needed to reduce false positives by at least 30 % without increasing false negatives, and do it in under two weeks so the next quarterly audit wouldn’t flag us.

**Action** – First I ran a feature importance sweep on our XGBoost model using SHAP values; we discovered that “transaction time” and “device fingerprint” were heavily over‑weighted. I re‑engineered those features, added a new categorical variable for merchant category clustering, and retrained with early stopping. Then I implemented a two‑stage rejection rule: the model outputs a probability score, but only if it exceeds 0.92 do we flag the request as high risk; otherwise we route to a lightweight rule engine that checks for known blacklisted accounts. Finally, I set up an A/B test on 10 % of traffic and monitored both precision‑recall curves in real time.

**Result** – After deployment the false‑positive rate dropped from 5% to 2.7%, a 46 % improvement, while false negatives stayed flat at 0.8%. User complaints fell by 38 %, and we saved roughly $15k in manual review costs per month. I learned that blending probabilistic models with deterministic thresholds can yield both robustness and interpretability in production ML systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
