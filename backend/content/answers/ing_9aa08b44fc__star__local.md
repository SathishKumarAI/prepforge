---
qid: ing_9aa08b44fc__star__local
question: Compare INT8, FP8, and FP4 for serving. What breaks, and how do you validate
  that a quantized endpoint is "good enough"?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 256
output_tokens: 375
total_tokens: 631
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:41:40-05:00'
sources: []
---

**Situation:**  
In my last role at a fintech startup we were rolling out a real‑time fraud detection model to production. The original model ran in FP32, but latency on our edge servers was too high for the 20 ms SLA we promised merchants.

**Task:**  
I had to quantize the network to INT8 or lower precision (FP8/FP4) while keeping the false‑positive rate below 1% and ensuring that inference time dropped by at least 60%.

**Action:**  
First, I benchmarked the FP32 baseline on our GPU cluster: 120 µs per request. Then I applied post‑training quantization with a calibration set of 50k transaction samples, experimenting with INT8, FP8, and FP4 in TensorRT. For each precision I monitored the mean absolute error (MAE) of logits versus FP32 and ran unit tests on edge devices to catch NaNs or overflow. I also introduced a confidence‑based fallback: if the quantized output’s softmax score was below 0.7, we re‑run in FP32. Finally, I automated A/B testing with live traffic and logged precision‑specific metrics (latency, accuracy, CPU usage).

**Result:**  
INT8 achieved 70 µs latency and a 0.8% false‑positive rate—meeting our SLA while cutting inference cost by 55%. FP8 drifted to 1.2% error and introduced occasional NaNs, so we discarded it. FP4 was too aggressive; the model failed on 18% of samples. The key lesson: validation must combine statistical error metrics with real‑world latency tests and a graceful fallback strategy to guarantee “good enough” quality in production.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
