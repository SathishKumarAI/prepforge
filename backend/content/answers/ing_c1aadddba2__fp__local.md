---
qid: ing_c1aadddba2__fp__local
question: Walk me through deploying a 70B open-weight model to production on Kubernetes.
  What breaks?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 178
output_tokens: 412
total_tokens: 590
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:53:58-05:00'
sources: []
---

Deploying a 70 billion‑parameter open‑weight model onto a Kubernetes cluster is an exercise in *resource matching* and *communication efficiency*.  
At its core the problem is: **the model’s compute graph must be executed faster than the latency budget, while keeping memory usage below node limits**. The model itself is just a massive tensor network; each forward pass is a sequence of matrix multiplications that can be parallelised only as far as the GPU interconnect allows.

1. **GPU‑memory footprint** – A 70 B model needs ~280 GB in FP16. Even with sharded checkpoints, each replica must hold at least one shard plus activation buffers (~50 % overhead). Most nodes fall short; you’ll be forced to run *tensor‑parallel* shards across many GPUs.  
2. **Communication bottleneck** – Tensor‑parallelism requires all‑reduce over the entire parameter set for every layer. If the cluster interconnect is 10 Gbps, the round‑trip latency dominates (≈30 ms per layer), breaking any sub‑second inference SLA.  
3. **Serialization overhead** – Packaging a request into a batched input and unbatching the response introduces CPU work that scales poorly with batch size; Kubernetes’ default scheduler can’t guarantee co‑location of GPUs for the same request, leading to context switches.

**Non‑obvious insight:** The *effective* parallelism is limited by the **reduction tree depth**, not just GPU count. Optimising the reduction topology (e.g., using a butterfly pattern) can cut latency by 30 % without additional hardware, but requires custom communication kernels that Kubernetes’ standard device plugins don’t expose.

In short, what “breaks” is not the model’s arithmetic but the *communication‑compute imbalance* imposed by conventional GPU networking and Kubernetes scheduling.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
