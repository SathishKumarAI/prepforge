---
qid: ing_2e1c477e85__star__local
question: 'Explain: Quantization-Aware Training (QAT) — Quantization Deep Dive'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 381
total_tokens: 622
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:00:45-05:00'
sources: []
---

**Situation** – In the summer of 2023 I was part of a team that had built a vision‑model for edge devices at a smart‑factory startup. The baseline floating‑point model achieved 92 % accuracy but required 200 MB of GPU memory, which was too large for our on‑board NPU.  

**Task** – We needed to reduce the model size and inference latency by 70 % while keeping accuracy within 1 % of the original. The only viable path was Quantization‑Aware Training (QAT).  

**Action** – I first added fake‑quantization nodes to the training graph in PyTorch, setting per‑tensor affine quantizers with 8‑bit symmetric ranges. During back‑propagation the fake‑quantized activations were treated as differentiable, so the optimizer could adjust weights to compensate for rounding error. I also introduced a curriculum: starting from 16‑bit precision and gradually tightening the scale until we hit 8‑bit. To guard against overfitting to quantization noise, I used stochastic weight clipping every epoch. Finally, I scripted the model with `torch.quantization.convert` and ran it on our target NPU, measuring latency and memory footprint.  

**Result** – The QAT‑optimized model ran in 28 ms per inference (a 60 % speed‑up) and used only 35 MB of RAM. Accuracy dropped from 92.0 % to 91.2 %, well within our target. I learned that careful scale calibration and a gradual precision schedule are key to preserving performance when quantizing deep nets for edge deployment.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
