---
qid: ing_56944b3536__fp__local
question: 'Q: Why is Tensor Parallelism preferred over Pipeline Parallelism for low-latency
  serving?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 178
output_tokens: 347
total_tokens: 525
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:09:03-05:00'
sources: []
---

**Why tensor parallelism beats pipeline parallelism for low‑latency inference**

The core problem in serving large language models is *reducing end‑to‑end latency* while keeping the memory footprint manageable.  
Pipeline parallelism slices a model into stages and streams tokens through them, which introduces an **initial pipeline fill time** equal to the sum of stage latencies. For a single token this fill dominates; each subsequent token only incurs the longest stage’s cost, but that still requires *inter‑stage communication* at every layer boundary.

Tensor parallelism instead splits each layer’s weight matrices across devices and computes them in lockstep. All devices perform the same forward pass on the same token, so:

1. **No pipeline fill** – latency is simply one forward step per device, proportional to model depth, not width.
2. **Communication locality** – only small all‑reduce messages (gradients or partial activations) are needed; no cross‑stage handoff.
3. **Parallelism granularity matches hardware** – modern GPUs have abundant compute but limited memory; tensor split keeps per‑device memory low while fully utilizing cores.

A non‑obvious insight: *the bottleneck in low‑latency inference is not the total work, but the synchronization overhead.* Tensor parallelism reduces the number of synchronizations from one per layer (pipeline) to a single collective per step, turning an O(L·S) problem into O(1) for S stages. Hence, for real‑time serving where every millisecond counts, tensor parallelism is fundamentally more efficient.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
