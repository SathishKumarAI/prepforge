---
qid: ing_f7153ea5dd__star__local
question: 'Explain: Real-time performance without cost runaway'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 299
total_tokens: 533
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:42:39-05:00'
sources: []
---

**Situation:**  
At my previous company we launched a fraud‑detection service that needed sub‑100 ms inference latency for every transaction, while staying under a $5 k/month cloud budget during peak load.

**Task:**  
Deliver a real‑time model pipeline that met the latency target and capped monthly spend even when traffic spiked 4× in a few hours.

**Action:**  
I first pruned the feature set to the top 20 features via SHAP importance, cutting preprocessing time. I then distilled a heavy XGBoost ensemble into a single LightGBM model and exported it as ONNX for GPU inference on AWS Inferentia. To keep costs in check, I implemented an autoscaling rule that spun up only enough inference endpoints to serve the current queue depth, using spot instances with a 30 % discount. For cold‑start mitigation, I kept one warmed instance idle during low traffic periods and queued requests when all nodes were busy.

**Result:**  
Inference latency dropped from 350 ms to 78 ms average, meeting the SLA. Monthly spend stayed below $4 200 even during a 24‑hour spike, saving 16% compared with the baseline. I learned that careful feature selection, model distillation, and dynamic scaling can jointly deliver low latency without breaking the budget.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
