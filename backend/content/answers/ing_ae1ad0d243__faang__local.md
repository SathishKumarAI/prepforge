---
qid: ing_ae1ad0d243__faang__local
question: 'Explain: Distributed Training and Scaling — Ml Interview Prep'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 481
total_tokens: 714
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:28:18-05:00'
sources: []
---

**Distributed Training & Scaling – FAANG‑style answer**

| Section | Content |
|---------|---------|
| **Clarify** | *Problem:* How do we train a large neural net faster and keep it accurate? I’ll assume: (1) model > GPU memory, (2) multiple GPUs or nodes available, (3) we want near‑linear speedup with minimal accuracy loss. |
| **Approach** | 1️⃣ Partition data → Data Parallelism.<br>2️⃣ Split model layers → Model Parallelism (if needed).<br>3️⃣ Choose sync strategy: synchronous SGD for convergence, async for latency.<br>4️⃣ Use communication primitives (All‑Reduce, NCCL) and parameter servers or sharded weights. |
| **Depth** | *Data parallel:* each worker computes gradients on its shard; gradients are summed via All‑Reduce. Complexity per step: `O(B/N)` compute + `O(P log N)` communication (`P` params). Synchronous SGD guarantees same convergence as single GPU if learning rate scaled by `1/N`. <br>*Model parallel:* split layers across GPUs, forward/backward pass requires halo exchanges; suitable for transformer blocks. <br>Optimizations: overlap sync with compute (non‑blocking), gradient compression (top‑k sparsification), tensor fusion. |
| **Edge Cases** | • Skewed data → load imbalance.<br>• Stragglers → asynchronous updates or fault‑tolerant checkpoints.<br>• Memory limits → sharded optimizer states, activation checkpointing.<br>• Network bottlenecks → use RDMA / InfiniBand. |
| **Optimize & Communicate** | • Start with data parallel; only add model parallel if memory > GPU RAM.<br>• Profile communication vs compute to decide `N` that yields diminishing returns.<br>• Explain trade‑offs: synchronous gives tighter convergence but higher latency; async offers speed but may need larger batch or learning rate schedules. <br>Conclude by highlighting how these choices map to real FAANG pipelines (e.g., TensorFlow DistLib, PyTorch DDP, XGBoost distributed). |

*Word count:* ~190 words.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
