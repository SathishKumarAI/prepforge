---
qid: ing_c88cc2f130__fp__local
question: FP8 training at 671B scale is hard. What actually breaks in low precision,
  and how do you make it stable?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 185
output_tokens: 631
total_tokens: 816
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:07:29-05:00'
sources: []
---

**Why FP8 collapses in a 671 B‑scale training run**

At its core, training a transformer is an *optimization* problem that relies on repeatedly moving parameters along the true gradient direction.  
FP8 gives only **≈4 bits for mantissa and 3 bits for exponent**, so:

1. **Dynamic‑range mismatch** – Activations in deep layers span from ‑10⁻³ to 10⁶; an 8‑bit exponent can represent only a few decades. When the exponent saturates, gradients either explode or vanish.
2. **Quantization noise dominates** – The relative error per operation is ~1/2²⁴ ≈ 6×10⁻⁸ in FP32, but in FP8 it jumps to 0.1–0.5. This noise accumulates over billions of updates and corrupts the *momentum* terms that drive convergence.
3. **Loss‑scale dependence** – The back‑propagated loss is multiplied by a scale factor before rounding. In FP8, an inappropriate scale turns small gradients into zero or large ones into NaNs.

**Stabilisation tricks**

| Technique | What it fixes | How |
|-----------|---------------|-----|
| **Per‑layer exponent scaling (power‑of‑two)** | Keeps activations in range | Store a learnable *scale* per tensor; multiply by 2ᵏ before quantising. |
| **Stochastic rounding** | Reduces bias of quantisation noise | Replace deterministic truncation with random rounding proportional to fractional part. |
| **Dynamic loss scaling + gradient clipping** | Prevents under‑/overflow in backward pass | Adaptively grow the scale until gradients are non‑zero; clip gradients before update. |
| **Hybrid precision (FP8 for activations, FP16 for weight updates)** | Keeps optimizer state accurate | Only store weights and momentum in 16 bit, compute with 8 bit to save memory. |

**Non‑obvious insight**

The *optimizer’s momentum* amplifies quantisation noise more than the gradient itself. A small random error in a single step is multiplied by the momentum term (≈0.9), propagating it forward and biasing subsequent updates. Thus, even if individual gradients look fine, the accumulated effect can derail training. Designing schemes that explicitly control *momentum‑noise*—for example, applying noise‑aware clipping or resetting momentum periodically—is often more effective than merely tightening loss scaling.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
