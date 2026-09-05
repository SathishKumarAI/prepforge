---
qid: ing_3ac8b65757__star__local
question: What is prefill/decode disaggregation, and why do large-scale deployments
  separate the two?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 371
total_tokens: 615
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:26:17-05:00'
sources: []
---

**Situation** – I was leading the rollout of a real‑time recommendation engine for a streaming platform that had to serve 10 million concurrent users while keeping per‑request latency under 50 ms. The model was a transformer with 1.2 B parameters, and our initial monolithic inference pipeline hit GPU memory limits and jittered at peak traffic.

**Task** – Separate the prefill (context embedding) from the decode (token generation) stages so we could cache expensive computations, reduce memory footprint, and meet the latency SLA without sacrificing recommendation quality.

**Action** – I redesigned the pipeline into two micro‑services: a “prefill” service that runs once per user session on high‑capacity GPUs, storing the hidden state in a distributed KV store (Redis), and a lightweight “decode” service that fetches this state and performs token sampling on low‑latency edge GPUs. We used ONNX Runtime for both services but tuned kernel fusion only in prefill, while decode leveraged TensorRT’s INT8 optimizations. I also added a fallback path to recompute the hidden state if cache miss occurred.

**Result** – The split reduced average inference latency from 68 ms to 42 ms and cut GPU memory usage by 35%, allowing us to scale to 20 million users with only a 1.8 % drop in recommendation precision. I learned that separating prefill and decode lets you trade compute for storage, enabling cost‑effective, low‑latency deployments at massive scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
