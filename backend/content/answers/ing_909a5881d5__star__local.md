---
qid: ing_909a5881d5__star__local
question: 'Explain: Design the evaluation for a fraud model at 0.1% prevalence, end
  to end: metrics, thresholding, validation protocol, and monitoring.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 257
output_tokens: 390
total_tokens: 647
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:21:57-05:00'
sources: []
---

**Situation**  
I was leading the rollout of a fraud detection model for an online payments platform where historical data showed only 0.1 % transaction fraud. The client required that any false‑positive cost be less than 5 ¢ per transaction while maintaining at least 95 % recall.

**Task**  
Design a complete evaluation pipeline: choose metrics, set thresholds, build a validation protocol robust to class imbalance, and outline post‑deployment monitoring.

**Action**  
I started by splitting the data using stratified 5‑fold cross‑validation to preserve prevalence. For metrics I used Precision@k (to control cost), ROC‑AUC for ranking quality, and the Cost‑Sensitive F1 that weighted false positives heavily. Thresholds were tuned via a grid search on the validation folds, selecting the point where expected loss (0.05 ¢ × FP + 0.50 $ × FN) was minimized. I added an “early warning” flag for any fold’s AUC dropping below 0.97 to trigger retraining. For monitoring, I set up a drift detector on feature means and a daily recall‑vs‑precision dashboard; alerts were sent if recall fell below 93 % or precision dropped by >10 %.

**Result**  
Post‑deployment, the model achieved 96.5 % recall and 99.2 % precision at the chosen threshold, keeping fraud cost under $0.04 per transaction. The monitoring system flagged a drift within two weeks of launch, prompting a data refresh that restored performance to baseline in 48 h. I learned that coupling domain‑specific loss functions with stratified validation yields thresholds that balance business constraints and model robustness.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
