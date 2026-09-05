---
qid: ing_8ae27a9a0a__star__local
question: 'Explain: Google — Faang Recent Questions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 359
total_tokens: 593
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:10:17-05:00'
sources: []
---

**Situation:**  
During a summer internship at a fintech startup, we were tasked with building an anomaly‑detection model to flag fraudulent credit‑card transactions in real time. Our internal pipeline was lagging; the model’s latency exceeded 500 ms, which would break our SLA of 200 ms for user notifications.

**Task:**  
I had to redesign the inference engine so that it met the latency requirement while maintaining at least a 95% true‑positive rate on our validation set. The solution also needed to be deployable on our existing Kubernetes cluster with limited GPU resources.

**Action:**  
First, I profiled the current TensorFlow Serving setup and identified that the heavy bottleneck was the batch size of 64 during inference. I switched to a lightweight ONNX Runtime model, quantized it to int8, and introduced a custom batching layer that processed requests in micro‑batches of 16 with asynchronous callbacks. To keep accuracy high, I added a secondary lightweight logistic regression filter on the raw features to catch edge cases before passing them to the neural net. Finally, I containerised the new pipeline with Docker, set resource limits, and used Prometheus for real‑time latency monitoring.

**Result:**  
Latency dropped from 520 ms to 140 ms, comfortably under our SLA, while precision stayed at 96% and recall at 94%. The deployment was rolled out in two days, reducing the fraud‑related chargebacks by 18% over the next quarter. I learned that careful profiling, model quantization, and a hybrid inference strategy can dramatically improve performance without sacrificing accuracy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
