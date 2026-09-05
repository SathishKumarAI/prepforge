---
qid: ing_92ed8f1522__star__local
question: 'Explain: Senior ML Engineer – AV Foundation — Uber Engineering \u2014 Where
  the Digital World Meets the Physical One'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 391
total_tokens: 640
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:26:49-05:00'
sources: []
---

**Situation**  
When I joined Uber’s AV Foundation team, we were sprinting to meet a quarterly goal: reduce the end‑to‑end latency of our perception stack from 120 ms to under 90 ms so that the vehicle could react faster than human drivers. The existing pipeline was a mix of TensorFlow models on GPU and hand‑tuned C++ post‑processing, all running in a Docker container on an NVIDIA Jetson platform.

**Task**  
I had to redesign the inference path to shave at least 30 ms off latency while keeping model accuracy within 0.5 % of our baseline. The challenge was to balance compute, memory bandwidth, and real‑time constraints without adding new hardware.

**Action**  
1. I profiled the stack with NVIDIA Nsight Systems and identified a bottleneck in the ROI cropping stage that wasted GPU cycles on unused pixels.  
2. I rewrote that step in CUDA using cuBLAS to perform a single fused crop‑resize operation, cutting memory traffic by 40 %.  
3. I converted our ResNet‑50 detector to TensorRT with INT8 quantization, calibrating with a representative dataset and verifying accuracy loss <0.4 %.  
4. Finally, I orchestrated an asynchronous inference pipeline in C++ that overlapped GPU compute with CPU sensor fusion, using CUDA streams and double buffering.

**Result**  
Latency dropped from 120 ms to 78 ms—a 35 % improvement—while maintaining the same mean‑average‑precision on our test set. The new pipeline ran smoothly on the existing Jetson hardware, eliminating a planned GPU upgrade. I learned that micro‑optimizations in data movement and careful quantization can deliver real performance gains without sacrificing quality, which has guided my approach to every subsequent deployment.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
