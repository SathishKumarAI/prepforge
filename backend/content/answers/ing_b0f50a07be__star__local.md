---
qid: ing_b0f50a07be__star__local
question: 'Explain: Uber — Faang Coding Interview Questions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 336
total_tokens: 571
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:25:49-05:00'
sources: []
---

**Situation** – During my final year at university I interned at a fintech startup that was preparing to launch a new ride‑hailing feature. The product team wanted us to build an ML model that could predict surge pricing in real time, so we’d meet Uber’s interview criteria for a data‑driven engineer.

**Task** – My goal was to design and deploy a lightweight model that ingested live GPS, weather, and event data, ran on edge devices, and updated predictions every minute without exceeding 50 ms latency.

**Action** – I first collected one month of historical trip logs and used feature engineering (time‑of‑day buckets, rolling traffic density) in Python with Pandas. I then trained a LightGBM regressor, tuned hyperparameters via Optuna, and converted the model to ONNX for inference speed. To meet latency constraints I deployed it on AWS Lambda with a containerized runtime, adding a caching layer that stored the last 30 predictions. I also built an automated CI pipeline in GitHub Actions that ran unit tests and a latency benchmark before each merge.

**Result** – The final model achieved a mean absolute error of 12 % on a held‑out test set and maintained 98 % of predictions within the 50 ms window, outperforming Uber’s internal baseline by 20 %. I learned how to balance model accuracy with operational constraints—a key skill in any high‑scale ML interview.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
