---
qid: ing_eb26c00174__star__local
question: 'Explain: Tensor Parallelism (TP) — Serving Infrastructure'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 368
total_tokens: 604
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:18:41-05:00'
sources: []
---

**Situation**  
When our team launched a real‑time recommendation model for an e‑commerce platform, latency had to stay under 20 ms per request while handling 10k QPS. The model was a 12‑billion‑parameter transformer that couldn’t fit on a single GPU, so we needed a scalable serving stack.

**Task**  
Design and deploy a low‑latency inference pipeline that distributes tensor computations across multiple GPUs using Tensor Parallelism (TP), while keeping the overall response time within SLA and ensuring fault tolerance.

**Action**  
I built a microservice with Triton Inference Server, configuring it to load the model in 8‑GPU TP mode. Each GPU held a shard of the attention matrices; we used NCCL for inter‑GPU all‑reduce operations and added a small “gate” layer on CPU to aggregate outputs quickly. To reduce round‑trip time I wrapped Triton behind an Envoy proxy that performed request coalescing, so bursts of 64 requests were batched per GPU shard. We also instrumented Prometheus metrics for each shard’s throughput and latency, and set up a rolling upgrade pipeline with Kubernetes StatefulSets to avoid downtime.

**Result**  
The TP‑enabled serving achieved an average latency of 18 ms at peak load, exceeding the SLA by 10 %. Throughput rose from 3.5k QPS (single‑GPU inference) to 11.2k QPS across the cluster, a 220 % increase. I learned that careful orchestration of inter‑GPU communication and request batching is critical; even minor serialization overhead can negate TP’s benefits.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
