---
qid: ing_01ecc9867a__star__local
question: 'Explain: So firstly, you''re seeing that there''s a'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 346
total_tokens: 582
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:32:11-05:00'
sources: []
---

**Situation:**  
In my last role I was tasked with improving the click‑through rate (CTR) prediction for a display ad platform that had been stuck at 3.8 % for months. The data pipeline delivered about 2 million labeled instances daily, but when we trained our baseline XGBoost model it overfitted and performed poorly on fresh test sets.

**Task:**  
I needed to reduce the generalization error by at least 0.5 pp while keeping inference latency under 20 ms per request.

**Action:**  
First I added a feature‑engineering step: hashed categorical fields into 10,000 buckets and applied target encoding with leave‑one‑out smoothing to mitigate leakage. Next, I switched from XGBoost to a shallow neural net (2 hidden layers of 128 units) and trained it using early stopping on a held‑out validation set. I also implemented dropout (p=0.3) and L2 regularization to curb overfitting. Finally, I wrapped the model in ONNX and deployed it behind a GPUless inference cluster, ensuring latency stayed below our target.

**Result:**  
The new pipeline raised CTR from 3.8 % to 4.4 %, a 15 pp lift, while inference time dropped from 35 ms to 18 ms. I learned that careful feature smoothing combined with lightweight neural nets can outperform heavy tree models in production latency‑sensitive settings.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
