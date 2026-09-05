---
qid: ing_3d3dbb04ce__star__local
question: Why is decode latency dominated by memory bandwidth rather than compute,
  and what does that imply for how you optimise a serving system?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 363
total_tokens: 613
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:30:40-05:00'
sources: []
---

**Situation**  
When I joined the inference team at a startup that was deploying a transformer‑based language model to power real‑time chatbots, we noticed our decoding throughput plateaued around 3 ms per token on a GPU cluster, despite scaling the compute tier.

**Task**  
My goal was to identify the bottleneck and reduce decode latency to under 1 ms per token so that we could support 50× more concurrent users without adding expensive GPUs.

**Action**  
I profiled the decoding pipeline with Nsight Systems and discovered that ~70 % of the time was spent transferring intermediate tensors (attention weights, KV caches) between host memory and device DRAM. The compute kernels were already saturated at ~30 % utilization. I re‑engineered the decoder to keep the KV cache resident in shared memory on the GPU by streaming only the necessary heads per step, implemented a zero‑copy DMA path for input tokens, and tuned batch sizes to align with PCIe burst boundaries. We also switched from FP32 to mixed‑precision (FP16) for the attention matmul, which reduced register pressure and allowed larger workgroups without affecting accuracy.

**Result**  
Latency dropped from 3 ms to 0.8 ms per token, boosting throughput by 4× and allowing us to serve 200 concurrent sessions on the same GPU fleet. I learned that in transformer decoding, memory bandwidth—especially KV cache traffic—is often the critical path, so optimizing data movement and cache residency is more effective than adding raw compute power.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
