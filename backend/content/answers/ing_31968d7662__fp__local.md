---
qid: ing_31968d7662__fp__local
question: 'Explain: Tensor-first compute and explicit data movement'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 443
total_tokens: 612
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:50:12-05:00'
sources: []
---

**Tensor‑first compute + explicit data movement**

At its core, a machine‑learning workload is a chain of *tensor* (multi‑dimensional array) operations: matrix multiplications, convolutions, reductions, etc. The “tensor‑first” paradigm treats each operation as an autonomous computation kernel that owns its inputs and produces its outputs without any hidden buffering or implicit data reshuffling.

Why this matters?  
1. **Memory hierarchy** – GPUs expose a tiny, fast L1/L2 cache but have a huge DRAM with high latency. If a kernel blindly reads from global memory for every element of an input tensor, it incurs *O(n)* traffic that dwarfs the arithmetic work (≈ 10×‑100× slower).  
2. **Data locality** – By structuring kernels to read contiguous blocks and write results directly into their destination tensors, you can exploit cache lines and avoid cache thrashing.  
3. **Parallelism granularity** – A kernel that operates on a whole tensor can launch many independent work items (threads), each handling a sub‑tile, thereby saturating the GPU’s SIMD units.

Explicit data movement is the *opposite* of implicit shuffling: you decide when and how to copy or transform tensors—e.g., via a dedicated “transpose” kernel—rather than letting the compiler reorder memory accesses behind your back. This gives you deterministic performance bounds (you can calculate bandwidth usage) and allows you to fuse operations only when it truly saves traffic.

**Non‑obvious insight:**  
Fusing two tensor ops *does not* always reduce total memory traffic; if the intermediate result is larger than the final output, a fused kernel may actually increase DRAM bandwidth. Thus, the optimal strategy is to fuse only when the *output-to-input size ratio* of the subsequent op is < 1 (i.e., it shrinks data). This subtle trade‑off between arithmetic intensity and memory footprint is often overlooked in high‑level frameworks that blindly fuse layers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
