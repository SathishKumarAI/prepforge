---
qid: ing_a4a9ee0cee__star__local
question: 'Explain: Um it''s, you know, I won''t really — Building Software Systems
  At Google and Lessons Learned'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 289
total_tokens: 535
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:02:41-05:00'
sources: []
---

**Situation:** While leading a cross‑functional team on the Ad‑Prediction engine at Google, we were tasked with deploying a new deep‑learning model that promised a 12% lift in click‑through rate (CTR) but had an inference latency of 350 ms—double our production threshold.

**Task:** My goal was to reduce latency below 150 ms without sacrificing the model’s accuracy and to integrate it into the existing serving infrastructure so that we could roll out A/B tests within two weeks.

**Action:** I first profiled the model with TensorFlow Profiler, identified bottlenecks in the attention layers, and re‑implemented them using XLA compiled kernels. Then I switched from CPU to TPU pods, added a lightweight quantization step (int8), and built a custom prediction service with gRPC that cached frequent feature embeddings. To keep engineers on board, I organized live demos and wrote clear documentation on the new inference pipeline.

**Result:** Latency dropped to 110 ms, accuracy improved by 1.3% CTR, and we launched the A/B test in 10 days—meeting our deadline. The experience taught me that early profiling, hardware‑aware optimizations, and transparent communication are critical when scaling ML at Google’s scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
