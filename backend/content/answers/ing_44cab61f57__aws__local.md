---
qid: ing_44cab61f57__aws__local
question: 'Explain: When is a workload compute-bound vs memory-bound on a GPU? Do
  the roofline math for transformer prefill vs decode.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 500
total_tokens: 746
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:01:34-05:00'
sources: []
---

**Situation / Task**  
When I migrated a transformer‑based recommendation engine from CPU to GPU, the team was unsure whether the workload would be compute‑bound or memory‑bound. We needed to decide whether to invest in faster GPUs or larger DRAM.

**Action – Roofline Analysis**  
I calculated the operational intensity (OI) for **prefill** and **decode** phases:

| Phase | FLOPs per token | Bytes transferred per token | OI (FLOP/Byte) |
|-------|-----------------|-----------------------------|----------------|
| Prefill (B×N×d model, batch = B) | 2·B·N·d · log₂(d) | B·(N+1)·d·4 bytes | ~0.5–1 |
| Decode (single token, batch = B) | 2·B·d² | B·(d+1)·4 bytes | ~10–15 |

With a V100 GPU (peak FP32 throughput ≈ 12 TFLOP/s and memory bandwidth ≈ 900 GB/s), the roofline shows:

* **Prefill** sits below the *memory‑roof* → **memory‑bound**.  
* **Decode** is above the *compute‑roof* → **compute‑bound**.

Thus, for prefill I focused on optimizing data layout (e.g., contiguous tensors) and reducing memory traffic; for decode I parallelized matrix multiplications across sub‑layers.

**Result**  
After refactoring, prefill latency dropped from 18 ms to 9 ms per batch, while decode throughput increased from 250 tokens/s to 480 tokens/s. The cost‑benefit analysis confirmed that adding a larger GPU memory pool was unnecessary—our solution stayed within the existing V100 budget.

**Reflection – Leadership Principles**  
* **Ownership**: I took full responsibility for profiling and redesigning both phases.  
* **Dive Deep**: Roofline math revealed hidden bottlenecks that guided targeted optimizations.  

This experience taught me to quantify performance early, preventing costly hardware over‑provisioning and ensuring we deliver results efficiently.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
