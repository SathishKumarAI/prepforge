---
qid: ing_126fd838fa__faang__local
question: 'Explain: Deep dive links — Scalability'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 563
total_tokens: 794
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:26:34-05:00'
sources: []
---

**1️⃣ Clarify**  
*Question:* “Explain how deep‑learning models scale.”  
Assumptions I’d confirm: (a) you mean horizontal/vertical scaling of training and inference, not just model size; (b) the environment is a typical cloud data‑center with GPUs/TPUs; (c) we care about latency, throughput, cost, and model accuracy.

**2️⃣ Approach**  
Outline the scaling pipeline:  
1. **Data & preprocessing** – sharding, caching, streaming.  
2. **Model parallelism** – split layers across devices (pipeline or tensor).  
3. **Distributed training** – data‑parallel with synchronous/asynchronous SGD, gradient accumulation.  
4. **Inference** – model partitioning, batching, edge offloading.  

Then dive into each step.

**3️⃣ Depth**  
- *Data sharding:* Use a distributed file system (S3/FSx) and read‑ahead to avoid I/O stalls.  
- *Model parallelism:* Pipeline parallelism splits the forward/backward pass across GPUs; tensor parallelism distributes weight tensors for very large layers (e.g., transformer heads).  
- *Training:* Synchronous SGD keeps replicas in sync, but communication cost grows with GPU count → use NCCL collectives, gradient compression or ZeRO‑stage optimizers.  
- *Inference:* Batch size trade‑off: larger batches improve throughput but increase latency; techniques like TensorRT or ONNX Runtime can fuse ops and reduce kernel launch overhead.  
- *Cost/latency:* Use spot instances for training, autoscaling inference clusters based on request rates, and multi‑region deployments for global latency.

**4️⃣ Edge Cases**  
- Skewed data shards → load imbalance; fix with dynamic rebalancing.  
- Straggler GPUs in synchronous SGD → use fault tolerance or asynchronous updates.  
- Model size exceeding device memory → swap to host RAM or sharded checkpointing.  
- Non‑deterministic ops causing divergent training runs.

**5️⃣ Optimize & Communicate**  
Start by profiling a single node (CPU, GPU, I/O). Then iteratively add parallelism layers while monitoring communication overhead vs compute gain. Explain the “weak scaling” curve: throughput ∝ #GPUs until communication dominates. Conclude with a quick sanity check: if latency is >100 ms for inference, consider edge caching or model distillation.

*Key takeaway:* Scalability in deep learning is a multi‑layer optimization problem—efficient data pipelines, smart parallelism, and cost‑aware resource orchestration—all balanced against the target latency/accuracy budget.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
