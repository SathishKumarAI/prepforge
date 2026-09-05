---
qid: ing_c9f756208e__star__local
question: 'Explain: Plus I''m going to give you plenty — Python Full Course for Beginners'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 313
total_tokens: 554
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:13:02-05:00'
sources: []
---

**Situation:** In my last internship at a fintech startup, we were building a credit‑risk model that had to predict loan defaults in real time. The existing model was 78% accurate and the latency on our API was 350 ms, which was too slow for the mobile app’s user experience.

**Task:** I needed to boost accuracy to at least 85% while cutting inference time below 100 ms, all within a two‑week sprint before the next quarterly release.

**Action:** I started by profiling the pipeline with cProfile and saw that feature extraction (scaling + one‑hot encoding) was consuming most of the time. I replaced the manual preprocessing with `ColumnTransformer` from scikit‑learn, enabling parallel processing across CPU cores. For modeling, I switched from a traditional Random Forest to an XGBoost ensemble because it offered better performance and native GPU support. I tuned hyperparameters using Optuna’s Bayesian search, limiting trials to 50 to stay within the deadline. Finally, I deployed the model with ONNX Runtime on AWS Lambda, which reduced inference latency by 80 %.

**Result:** Accuracy jumped from 78% to 84.7%, and latency dropped from 350 ms to 72 ms—meeting both targets. The exercise taught me how to balance model complexity with deployment constraints, the value of profiling, and the practical benefits of GPU‑accelerated libraries in a production setting.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
