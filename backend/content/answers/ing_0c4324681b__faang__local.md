---
qid: ing_0c4324681b__faang__local
question: 'Explain: A model runs fine in FP32 but produces garbage after conversion
  to FP16. Debug it.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 527
total_tokens: 770
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:12:34-05:00'
sources: []
---

**Clarify**

> *Problem:* An ML model works correctly with 32‑bit floats (FP32) but, once cast to 16‑bit floats (FP16), its outputs become nonsensical.  
> *Assumptions to confirm:* the architecture, training data, and inference pipeline are unchanged; only the numerical precision differs; GPU/accelerator supports FP16; no mixed‑precision tricks were applied.

**Approach**

1. **Reproduce in isolation** – run a small deterministic batch through both precisions.  
2. **Check for NaNs/Infs** – log tensors after each op.  
3. **Identify vulnerable ops** – high dynamic range, division by small numbers, softmax exponentials.  
4. **Inspect layer statistics** – weights/biases magnitude, activation ranges.  
5. **Apply mitigation** – gradient scaling, cast‑safe operations, per‑tensor rescaling.

**Depth**

- FP16 has ~1 e⁻³⁵ dynamic range vs 1 e⁻³⁸ in FP32; values that saturate (≈65504) or underflow (<6.10 × 10⁻⁵) will collapse.  
- Operations like `log`, `exp`, and softmax can overflow/under‑scale quickly.  
- Weight initialization may produce large norms; bias terms might be too small, causing activations to hit the lower bound.  
- Typical fixes:  
  - **Rescale weights/biases** (e.g., divide by 2ⁿ) so that forward passes stay in safe FP16 range.  
  - **Use `torch.nn.functional.softmax` with `dim=-1` and clamp logits before exponentiation.**  
  - **Gradient scaling** during training to prevent underflow in back‑prop.  

**Edge Cases**

- Very deep nets: accumulation of rounding errors.  
- BatchNorm/LayerNorm: variance can shrink → zeros → NaNs.  
- Custom ops lacking FP16 kernels may fallback to FP32 internally, causing mismatch.

**Optimize & Communicate**

Explain that the root cause is *dynamic‑range mismatch* rather than a bug in the model logic. Suggest an automated validation step that checks tensor ranges after precision conversion and automatically applies per‑layer scaling or mixed‑precision where needed. Highlight that this keeps inference fast (FP16) while preserving numerical fidelity, a trade‑off valued by FAANG teams.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
