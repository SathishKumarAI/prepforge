---
qid: ing_44cab61f57__star__local
question: 'Explain: When is a workload compute-bound vs memory-bound on a GPU? Do
  the roofline math for transformer prefill vs decode.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 252
output_tokens: 386
total_tokens: 638
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:46:31-05:00'
sources: []
---

**Situation:** I was optimizing a real‑time transformer inference pipeline for a chatbot that served 10k concurrent users. The GPU usage spiked during the initial prefill stage, while decode requests were often idling on memory traffic.

**Task:** Determine whether each phase was compute‑bound or memory‑bound and adjust kernel fusion/tiling to reduce latency.

**Action:** I applied the roofline model:  
- For prefill (full‑attention matrix multiplication), the arithmetic intensity \(AI = \frac{2HW}{4(H+W)}\) ≈ 16 FLOP/Byte, far above the GPU’s memory bandwidth ceiling (~400 GB/s). The compute throughput (~10 TFLOP/s) was the bottleneck. I fused softmax and layer‑norm into a single kernel and used mixed‑precision to cut FLOPs by ~30%.  
- For decode (token‑by‑token attention), \(AI ≈ 1\) FLOP/Byte, below the memory bandwidth limit. Here I restructured data layout to achieve coalesced loads, increased cache reuse, and reduced global traffic by 40%.

**Result:** Prefill latency dropped from 8 ms to 5.2 ms (35% speed‑up), while decode latency fell from 4 ms to 3.1 ms (22% speed‑up). I learned that the roofline analysis not only tells you which resource dominates but also guides concrete kernel optimizations tailored to each workload phase.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
