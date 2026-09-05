---
qid: ing_0c4324681b__fp__local
question: 'Explain: A model runs fine in FP32 but produces garbage after conversion
  to FP16. Debug it.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 180
output_tokens: 546
total_tokens: 726
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:31:54-05:00'
sources: []
---

### Why the drop‑in to FP16 breaks a seemingly stable FP32 model

**Problem at hand**  
A neural net that trains and infers with single‑precision (FP32) starts outputting nonsensical values once its weights, activations, or gradients are cast to half‑precision (FP16). The underlying math is unchanged; only the numeric representation changes.

**Why FP16 can fail**  

| Property | FP32 | FP16 |
|----------|------|------|
| **Exponent range** | ± 127 | ± 15 |
| **Mantissa precision** | 24 bits | 11 bits |
| **Epsilon (machine round‑off)** | ~10⁻⁷ | ~10⁻³ |

1. **Dynamic range collapse** – Many deep nets rely on very small or very large intermediate values (e.g., batch‑norm running means, residual scaling). In FP16 these can underflow to zero or overflow to NaN/inf because the exponent window is only ±15.
2. **Reduced precision** – Gradients or weight updates that are ∼10⁻³ in magnitude become indistinguishable from noise. Accumulation errors explode, especially in long training runs.

These two effects are coupled by *optimization*: the network’s loss surface contains flat regions where tiny changes matter. When FP16 cannot resolve those changes, the optimizer diverges, producing garbage outputs.

**Debugging strategy**

1. **Track statistics per tensor** – log min/max/mean before and after cast; look for values hitting 0 or inf.
2. **Gradient norm check** – if norms drop below ~10⁻³, FP16 precision is insufficient; switch to *mixed‑precision* (keep optimizer states in FP32).
3. **Layer‑wise inspection** – batch‑norm, attention scaling, and residual connections are common culprits; insert `torch.nn.utils.clip_grad_norm_` or use a *loss‑scale* trick.

**Non‑obvious insight**  
Even if every individual tensor stays within the FP16 range, *accumulated rounding error* over many layers can push the final activation out of gamut. The fix is not only to widen ranges (e.g., using `torch.float32` for running statistics) but also to **rescale activations**—for instance, normalizing residual branches or applying layer‑wise scaling factors—to keep the overall dynamic range in check.

By systematically checking these two axes—range and precision—you can pinpoint why FP16 “garbage” appears and restore reliable inference.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
