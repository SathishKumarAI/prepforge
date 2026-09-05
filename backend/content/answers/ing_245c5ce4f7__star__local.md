---
qid: ing_245c5ce4f7__star__local
question: 'Explain: Using these libraries, you can perform a'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 379
total_tokens: 615
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:42:05-05:00'
sources: []
---

**Situation:**  
In the summer of 2023 I was leading a fraud‑detection pilot for our payment gateway. The model had to flag suspicious transactions in real time, but our existing rule‑based system missed ~30 % of high‑risk cases and produced a lot of false positives.

**Task:**  
I needed to build a lightweight supervised classifier that could be deployed on our edge servers with <200 ms latency, while keeping the model size under 5 MB. The goal was to boost true‑positive rate by at least 15 % without increasing false alarms beyond 2 %.

**Action:**  
I chose **scikit‑learn** for its fast preprocessing and tree‑based models, combined with **ONNX Runtime** to convert the trained XGBoost model into a portable format. I engineered features from raw logs (IP entropy, time‑of‑day patterns) using `pandas` and `numpy`, then split data with `train_test_split`. After hyperparameter tuning via `GridSearchCV`, I trained an XGBoost classifier (`n_estimators=200`, `max_depth=6`). To meet latency constraints, I exported the model to ONNX and loaded it in C++ using ONNX Runtime, benchmarking inference at 180 ms on a single CPU core.

**Result:**  
The deployed model raised true‑positive detection from 67 % to 83 %, a 16 % improvement, while false positives dropped from 5.4 % to 3.1 %. Deployment cost was <10 % of the previous rule engine’s compute budget. I learned that coupling fast libraries with an efficient inference runtime can deliver near‑real‑time ML at scale without sacrificing accuracy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
