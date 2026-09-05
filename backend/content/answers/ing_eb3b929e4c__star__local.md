---
qid: ing_eb3b929e4c__star__local
question: 'Explain: Binary (5 Problems) — Blind 75'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 351
total_tokens: 588
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:18:47-05:00'
sources: []
---

**Situation**  
During my internship at a fintech startup, we were building an automated fraud‑detection system. Our model’s precision dropped from 92 % to 85 % after a new payment gateway was integrated, and the engineering team had only two weeks before the next quarterly audit.

**Task**  
I needed to rebuild the binary classifier pipeline—covering feature selection, preprocessing, model training, hyper‑parameter tuning, and evaluation—to regain at least 90 % precision while keeping latency under 200 ms per transaction.

**Action**  
I started by profiling the data with *pandas* and visualizing class imbalance using *matplotlib*. I engineered interaction features (e.g., time‑of‑day × merchant category) and applied SMOTE for oversampling. For modeling, I compared a gradient‑boosted tree (*XGBoost*) against a deep neural net (*PyTorch*), tuning with Optuna on a GPU cluster. I wrapped the final model in *ONNX* to ensure 200 ms inference on edge devices. Throughout, I used *MLflow* for experiment tracking and automated unit tests with *pytest* to guard against regressions.

**Result**  
The tuned XGBoost model achieved 91.3 % precision and 88.5 % recall, meeting the audit requirement. Inference latency averaged 180 ms, a 10 % improvement over the legacy system. I learned that systematic profiling, targeted feature engineering, and rigorous experiment tracking are critical when iterating fast on binary classification problems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
