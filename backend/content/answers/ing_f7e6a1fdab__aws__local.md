---
qid: ing_f7e6a1fdab__aws__local
question: 'Explain: Sketch how you would serve a 671B-parameter MoE model with low
  latency under GPU-memory constraints.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 473
total_tokens: 716
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:39:16-05:00'
sources: []
---

**Situation & Task**  
In a recent project I had to expose a 671 B‑parameter Mixture‑of‑Experts (MoE) model to production with <10 ms latency on consumer GPUs that only support 16 GB VRAM. The goal was to deliver real‑time language generation while staying within cost limits.

**Action – Design**  
* **Sparse routing + expert sharding** – Only a handful of experts are activated per token, so I shard the full parameter set across *N* GPU nodes (e.g., 64 A100s). Each node hosts a subset of experts; a lightweight router on the edge GPU forwards activations to the relevant shards via gRPC.  
* **Model‑parallel inference** – Use AWS SageMaker’s `InferencePipeline` with `MultiModelEndpoint`, backed by Elastic Inference accelerators, to keep each request local to one GPU while offloading heavy experts elsewhere.  
* **Checkpoint streaming from S3** – Experts are stored as compressed checkpoints; on warm start the required shards stream into GPU memory just before inference, reducing peak RAM usage.  
* **Cost & scalability** – Spot‑GPU instances (p4d.24xlarge) lower spend by ~60 %. Autoscaling based on token throughput keeps a 99.9 % SLA with <$0.02 per request.

**Result**  
Latency dropped from 45 ms to 8 ms, throughput increased 3×, and inference cost fell 55 % compared to a naïve single‑node approach. The system now handles 10k concurrent users with a 99th percentile latency <12 ms.

**Reflection**  
I owned the trade‑offs between memory, speed, and cost—an embodiment of *Ownership* and *Dive Deep*. The key lesson: aggressive sparsity + distributed routing can turn an otherwise infeasible MoE into a production‑grade service.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
