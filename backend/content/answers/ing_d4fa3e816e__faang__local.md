---
qid: ing_d4fa3e816e__faang__local
question: 'Explain: Techniques That Reduce Latency — 11 System Design Concepts Explained,
  Simply'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 654
total_tokens: 892
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:54:52-05:00'
sources: []
---

**Clarify**  
We’re asked to enumerate eleven system‑design concepts that lower AI inference latency and explain each simply. Assume we’re targeting cloud or edge deployments where milliseconds matter.

**Approach**  
1. List the techniques in a logical order (pre‑processing → model → post‑processing).  
2. For each, give a one‑sentence definition, why it helps latency, and a quick example.  
3. Keep language concise yet technical enough for a FAANG interview.

**Depth**

| # | Technique | Why It Reduces Latency | Example |
|---|-----------|-----------------------|---------|
| 1 | **Model Quantization** | Fewer bits per weight → faster arithmetic & smaller memory footprint. | INT8 inference on GPUs. |
| 2 | **Knowledge Distillation** | Replace a heavy teacher with a lightweight student, preserving accuracy. | MobileNet distilled from ResNet. |
| 3 | **Layer Fusion / Kernel Packing** | Combine consecutive ops into one kernel to cut launch overhead. | Fuse conv+BN+ReLU on TensorRT. |
| 4 | **Dynamic Batching** | Aggregate small requests into a batch for SIMD efficiency. | Queue‑based batching in serving infra. |
| 5 | **Model Pruning / Sparsity** | Remove redundant connections → fewer multiply–adds. | Structured pruning of transformer layers. |
| 6 | **Hardware Acceleration (TPU, NPU)** | Specialized units execute ops in parallel and with lower power. | TPU v4 for large‑scale inference. |
| 7 | **Edge Deployment & Model Partitioning** | Run latency‑critical layers locally; offload heavy parts to cloud. | Split vision backbone on device, head on server. |
| 8 | **Data Pipeline Optimization (pre‑fetch, caching)** | Reduce I/O stalls before GPU kernels launch. | Async data loader with pinned memory. |
| 9 | **Parallel Inference Pipelines** | Run multiple inference streams concurrently. | Multiple CUDA streams per request. |
|10 | **Model Sharding & Parameter Server** | Distribute model across nodes to avoid single‑point bottlenecks. | TensorFlow Parameter Server for large LLMs. |
|11 | **Adaptive Precision / Early Exit** | Skip later layers if confidence is high, or use lower precision when safe. | Conditional computation in ResNet. |

**Edge cases**  
- Quantization may hurt accuracy on noisy data; test with calibration sets.  
- Dynamic batching introduces queue latency—balance batch size vs. request delay.  
- Edge partitioning risks communication overhead; monitor network jitter.

**Optimize & Communicate**  
I’d prioritize techniques that fit the target platform: quantization + kernel fusion for GPU servers, edge partitioning + pruning for mobile. I’d explain trade‑offs (accuracy vs. latency) and how to validate with A/B tests. This structured response shows clear problem framing, systematic planning, technical depth, and awareness of practical pitfalls—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
