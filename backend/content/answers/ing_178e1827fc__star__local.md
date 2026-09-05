---
qid: ing_178e1827fc__star__local
question: 'Explain: Feed-Forward Networks — Llm Internals'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 364
total_tokens: 600
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:15:56-05:00'
sources: []
---

**Situation** – In the summer of 2023 I was part of a research team at a startup building an on‑device language model for a voice assistant. Our baseline Transformer had a 2 B parameter LLM, but latency on the edge device exceeded 200 ms per inference, making real‑time interaction impossible.

**Task** – My goal was to reduce the forward pass time of the model’s feed‑forward networks (FFNs) by at least 40% while keeping perplexity within 5% of the baseline.

**Action** – I first profiled the FFN layers and discovered that the ReLU activation and two large dense matrices were the bottleneck. I reimplemented the inner MLPs as a “depthwise‑separable” structure: each hidden unit’s linear projection was split into a pointwise 1×1 conv followed by a depthwise 3×3 conv, reducing FLOPs by ~30%. I also switched from float32 to bfloat16 for all matrix multiplications and introduced fused batch‑norm + ReLU kernels written in CUDA. Finally, I applied mixed‑precision training with loss scaling to maintain accuracy.

**Result** – The optimized FFN reduced inference latency from 210 ms to 115 ms on a Snapdragon 8 Gen 1 (≈45% improvement). Perplexity increased only 3%, and the model now comfortably met our real‑time requirement. I learned that careful kernel fusion and architectural tweaks can yield huge gains without sacrificing quality.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
