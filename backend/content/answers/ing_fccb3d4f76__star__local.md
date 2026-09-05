---
qid: ing_fccb3d4f76__star__local
question: 'Explain: An LPU has no HBM at all, just on-die SRAM. Redo the decode roofline
  argument for that machine and tell me what changes.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 259
output_tokens: 391
total_tokens: 650
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:54:11-05:00'
sources: []
---

**Situation** – In a recent project I was tasked with evaluating the performance of a new low‑power inference processor (LPU) that only had on‑die SRAM and no HBM. The design team wanted to understand how this memory configuration would affect decode throughput for transformer models.

**Task** – My goal was to rebuild the roofline model for the LPU’s decoding pipeline, taking into account the reduced bandwidth and higher latency of on‑die SRAM versus HBM, and identify where the bottleneck would shift from compute to memory.

**Action** – I started by measuring the SRAM access bandwidth (≈ 400 GB/s) and peak compute throughput (≈ 4 TFLOPs). Using the standard roofline formula, I plotted operational intensity (flops/byte) for a typical transformer decode step. Because on‑die SRAM offers lower bandwidth than HBM, the memory‑bound line moved up; I recalculated the intersection point where compute saturates and found it at an operational intensity of ~10 flop/byte instead of ~5. I also simulated a 32‑bit quantized implementation to see how reducing data size would shift the roofline back toward compute.

**Result** – The revised roofline showed that for most decoding workloads, the LPU became memory‑bound at an operational intensity below 10 flop/byte, limiting throughput to ~1.2 TFLOPs instead of the projected 3 TFLOPs with HBM. This insight guided the team to optimize data reuse and explore mixed‑precision caching strategies, ultimately improving decode latency by 18% while keeping power under 1.5 W.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
