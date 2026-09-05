---
qid: ing_b64304e441__star__local
question: 'Explain: Step 4: Bottlenecks, Scale, and Reliability'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 342
total_tokens: 582
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:35:48-05:00'
sources: []
---

**Situation:**  
At my last company we built a real‑time fraud detection model that processed ~10 M transactions per day. In production the latency spiked to 1.2 s during peak hours, causing alerts to miss their SLA and our risk team to lose trust.

**Task:**  
I had to identify bottlenecks, scale the inference pipeline, and harden reliability so that the end‑to‑end latency stayed below 300 ms with 99.9% uptime.

**Action:**  
First, I profiled the entire stack (Python Flask → ONNX runtime → Redis queue). The CPU was maxing out on the feature extraction step; GPU inference was idle because we were still using a single worker per pod. I refactored the feature pipeline into async Rust micro‑services and moved model serving to Triton Inference Server, exposing it via gRPC. To handle spikes, I implemented auto‑scaling based on CPU queue depth and added a circuit breaker that throttles traffic when latency > 200 ms. Finally, I set up Prometheus alerts and an automated rollback in case of degraded performance.

**Result:**  
Latency dropped from 1.2 s to 220 ms during peak load, throughput increased by 4×, and uptime rose to 99.97%. I learned that micro‑service isolation, proper profiling, and dynamic scaling are critical for ML reliability at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
