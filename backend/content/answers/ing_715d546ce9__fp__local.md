---
qid: ing_715d546ce9__fp__local
question: 'Explain: GPU Scaling for Self-Hosted — Llm Infrastructure'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 539
total_tokens: 710
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:05:33-05:00'
sources: []
---

**GPU scaling for a self‑hosted LLM stack is an exercise in *parallelizable compute versus memory bandwidth*—the same trade‑off that governs any data‑center GPU deployment, but with the twist of model size and inference latency.**

1. **Fundamental problem:** A transformer layer processes \(N\) tokens by multiplying a weight matrix \(\mathbf{W}\in\mathbb{R}^{d\times d}\) (with \(d=12k–48k\)) with an activations tensor \(\mathbf{X}\in\mathbb{R}^{B\times N\times d}\). The cost is \(\Theta(BNd^2)\).  
   *Why it must work this way:* Each token’s representation depends on all others, so you cannot avoid the \(d^2\) matrix–matrix multiply; only parallelism can reduce wall‑clock time.

2. **GPU choice:** Modern GPUs expose thousands of CUDA cores and large L1/L2 caches but limited VRAM (e.g., 24 GB). Scaling is thus a two‑step optimization:
   * **Compute scaling** – assign more GPU kernels to different attention heads or layers; this works linearly until memory stalls.
   * **Memory scaling** – split the model across GPUs using tensor parallelism (splitting \(\mathbf{W}\) column‑wise) or pipeline parallelism (sharding layers). The deeper the shard, the less each GPU needs to hold.

3. **Non‑obvious insight:** **Batch size is a *latent variable* that can be traded against model parallelism**. Inference often runs with \(B=1\), but by batching multiple prompts you amortize kernel launch overhead and improve utilization, allowing you to keep the same number of GPUs while increasing throughput—provided you don’t exceed VRAM.

4. **Practical rule of thumb:** For a 70‑billion‑parameter model on a single RTX 4090 (24 GB), tensor parallelism across 8 GPUs keeps each shard <3 GB, leaving ~20 GB for activations and runtime buffers—maximizing GPU occupancy without oversubscription.

In short, GPU scaling is the art of balancing *parallelizable multiply‑add* operations against the *finite memory graph* that ties them together. The optimal point lies where every CUDA core is busy, no VRAM stalls occur, and latency remains within user expectations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
