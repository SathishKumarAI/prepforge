---
qid: ing_9a1a043168__fp__local
question: 'Explain: Design the training setup for a model that doesn''t fit on one
  accelerator - say 70B parameters on a pod of accelerators.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 187
output_tokens: 536
total_tokens: 723
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:33:48-05:00'
sources: []
---

### Why a single accelerator fails

A *70 B* parameter transformer stores its weights in ≈280 GB (4 bytes per weight).  
Even the most powerful GPUs hold <80 GB, so the model must be **sharded** across many devices.  
The sharding has to preserve two facts:

1. **Gradient flow** – every weight receives a gradient during back‑propagation.  
2. **Parameter update locality** – each device should perform its own optimizer step with minimal inter‑device traffic.

### The core solution: *tensor + pipeline parallelism*

*Tensor parallelism* splits the hidden‑state tensors across devices (e.g., split Q, K, V matrices).  
Because each device only sees a fraction of the matrix, memory drops to ≈(1/N)×280 GB for *N* accelerators.  

*Pipeline parallelism* partitions the transformer layers into stages that run on disjoint sets of GPUs.  
During training, micro‑batches flow through the pipeline; while stage i processes batch k, stage i+1 works on batch k–1.  
This overlap hides communication latency: the gradient for layer *i* is sent to the same device that holds its parameters.

### Non‑obvious insight

The bottleneck is **all‑reduce** of gradients, not weight transfer.  
By fusing the all‑reduce into the backward pass (gradient accumulation per micro‑batch) and using *tensor sharding* with *parameter server–like local optimizers*, we reduce the number of synchronization points to *O(1)* per step, keeping the effective bandwidth well below the theoretical peak.

### Putting it together

1. **Shard weights**: 8× tensor parallelism on each node (≈35 GB per node).  
2. **Pipeline stages**: 16 layers per stage → 4 stages total.  
3. **Micro‑batching**: 32 micro‑batches, overlapped with communication.  
4. **Gradient accumulation + fused all‑reduce** across nodes.  

This architecture lets a 70 B model train on a pod of accelerators while keeping each device’s memory footprint manageable and the training throughput near linear scaling.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
