---
qid: ing_9aa08b44fc__fp__local
question: Compare INT8, FP8, and FP4 for serving. What breaks, and how do you validate
  that a quantized endpoint is "good enough"?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 190
output_tokens: 586
total_tokens: 776
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:34:27-05:00'
sources: []
---

**Why the bit‑width matters**

Serving a neural network is an *optimization* of two opposing forces:  
1) **Throughput/latency** – lower precision means fewer bits per weight and activations, so more can be packed into SIMD lanes or tensor cores.  
2) **Signal fidelity** – each layer’s forward pass must remain within the dynamic range that guarantees convergence of gradients during training, which is why many models are trained in FP32/FP16.

When you drop from 8‑bit integer (INT8) to 4‑bit floating point (FP4), you lose both a full mantissa and a half‑size exponent. The exponent’s reduced range forces the model to *re‑scale* every tensor, which introduces systematic bias. FP8 sits between: it keeps an 8‑bit sign+exponent but only three bits for the significand, so quantization error is roughly one order of magnitude larger than INT8 yet still far below what naïve FP4 would produce.

**What breaks**

| Layer type | INT8 | FP8 | FP4 |
|------------|------|-----|-----|
| Convolution (kernel ≈ 3×3) | bias & weight clipping OK | slight activation saturation | severe under‑flow, dead weights |
| BatchNorm | stable scaling | needs per‑channel recalibration | fails unless fused with ReLU |
| Attention | softmax remains monotonic | logits overflow if exponent too small | loss of sparsity pattern |

In practice, FP4 will “break” whenever the model’s activations have a dynamic range exceeding \(2^8\). INT8 rarely breaks; it only requires careful calibration (scale/zero‑point) and per‑channel quantization.

**Validating “good enough”**

1. **Quantization‑aware training (QAT)**: insert fake‑INT8 nodes during training to expose the model to rounding noise.  
2. **Calibration on a validation set**: compute per‑tensor scales that minimize mean squared error between FP32 and quantized outputs.  
3. **Error budget check**: ensure that relative loss in accuracy (top‑1/top‑5) is below a target threshold, e.g., 0.5 %.  
4. **Statistical test**: run the model on a held‑out set and compute the KL divergence between softmax distributions of FP32 vs quantized versions; keep it < 0.01.

A non‑obvious insight: *the exponent in FP8 is often the bottleneck, not the mantissa.* Even with only 3 bits of precision, keeping a full 5‑bit exponent lets you preserve dynamic range, which is why many practitioners find FP8 surprisingly robust for inference.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
