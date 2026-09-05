---
qid: ing_d95bf7de39__star__local
question: 'Explain: Applied AI — Jobs \\ Anthropic'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 379
total_tokens: 614
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:43:26-05:00'
sources: []
---

**Situation:**  
While working on a startup’s recommendation engine, we hit a plateau: our model accuracy was stuck at 85 % and the latency exceeded 200 ms, making real‑time suggestions impossible for mobile users.

**Task:**  
I needed to redesign the inference pipeline so that it could run on edge devices without sacrificing more than 2 % of accuracy. The goal was to reduce latency to under 50 ms while keeping the model size below 10 MB.

**Action:**  
First, I profiled the current TensorFlow Serving stack with Py-Profiler and identified matrix‑multiplication as the bottleneck. I switched from a dense fully‑connected layer to a *quantized* depthwise separable convolution using TFLite’s Post‑Training Quantization. Then I implemented knowledge distillation: a teacher ResNet‑50 on GPU distilled its logits into a lightweight MobileNetV2, preserving 84 % of the original accuracy. Finally, I wrapped the model in a FastAPI microservice and deployed it to AWS Lambda with the *AWS Inferentia* runtime, leveraging batch inference to hit the latency target.

**Result:**  
Latency dropped from 200 ms to 35 ms, and the model size shrank to 8.7 MB. Accuracy only fell by 1.2 %, keeping our recommendation quality above the industry benchmark. I learned that careful profiling combined with quantization and distillation can bridge the gap between high‑performance models and edge deployment constraints—exactly what Anthropic’s Applied AI team focuses on when scaling responsible AI systems at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
