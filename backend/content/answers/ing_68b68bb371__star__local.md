---
qid: ing_68b68bb371__star__local
question: 'Explain: Red flags interviewers watch for — Inference And Production'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 320
total_tokens: 558
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:56:42-05:00'
sources: []
---

**Situation** – While leading the rollout of a real‑time recommendation engine at a streaming startup, we hit a critical production issue just before launch: latency spiked from 20 ms to 300 ms on the inference API.

**Task** – I had to identify and eliminate hidden performance bottlenecks in the model serving pipeline without delaying the release schedule.

**Action** – First, I instrumented the GPU kernel launches with NVIDIA Nsight Systems and discovered that a custom CUDA layer was serializing tensor copies between CPU and GPU. I rewrote that layer using cuBLAS streams to overlap data transfer with computation. Next, I replaced the monolithic ONNX runtime session with an ensemble of TensorRT engines, each optimized for a specific batch size, and introduced a lightweight request‑coalescing queue in Go to reduce context switches. Finally, I set up Prometheus alerts on per‑stage latency percentiles and added a chaos‑engineering test that injected 10 % CPU spikes to validate resilience.

**Result** – Latency dropped back to 18 ms on average, with the 99th percentile under 35 ms, cutting churned user sessions by 12 %. The exercise taught me to treat inference as an engineering discipline: profile aggressively, modularize for scaling, and embed observability from day one.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
