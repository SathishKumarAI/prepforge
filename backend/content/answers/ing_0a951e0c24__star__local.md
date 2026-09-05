---
qid: ing_0a951e0c24__star__local
question: 'Explain: Performance Metrics — Inference Fundamentals'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 341
total_tokens: 574
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:49:57-05:00'
sources: []
---

**Situation**  
During a quarterly rollout for our AI‑driven recommendation engine at an e‑commerce client, the real‑time inference latency had slipped from 120 ms to 350 ms on the edge devices, causing user drop‑off spikes during peak traffic.

**Task**  
I needed to bring average latency back below 150 ms while keeping throughput above 10 k requests per second and ensuring the model’s AUC stayed >0.78.

**Action**  
First, I profiled the pipeline with NVIDIA Nsight and identified that the batch size of 32 was a bottleneck on our GPU‑less edge CPUs. I rewrote the inference loop to use ONNX Runtime with TensorRT optimizations, switching to FP16 precision where accuracy trade‑offs were acceptable. Then, I introduced dynamic batching—collecting up to 8 concurrent requests before dispatch—to amortize startup costs. Finally, I added a lightweight caching layer for frequently requested items and tuned the model quantization parameters using Post‑Training Quantization, monitoring MAE against validation data.

**Result**  
Latency dropped to an average of 110 ms, throughput increased to 12 k req/s, and AUC remained at 0.79. The client reported a 25 % reduction in cart abandonment during peak hours. I learned that balancing precision, batching strategy, and hardware capabilities is key to meeting strict inference SLAs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
