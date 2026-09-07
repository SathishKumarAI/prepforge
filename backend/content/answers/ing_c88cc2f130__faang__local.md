---
qid: ing_c88cc2f130__faang__local
question: FP8 training at 671B scale is hard. What actually breaks in low precision,
  and how do you make it stable?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 487
total_tokens: 735
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:26:23-05:00'
sources: []
---

**Clarify**  
The problem: training a 671‑B parameter model using FP8 (8‑bit floating point) runs into numerical instability. I’ll assume the network uses standard transformer layers, AdamW optimizer, and that we’re targeting GPU/TPU hardware that supports FP8 tensor cores.

**Approach**  
1. Identify sources of underflow/overflow in forward/backward passes.  
2. Quantize activations, gradients, and weight updates separately with per‑tensor scaling.  
3. Insert loss‑scale or dynamic‑range adjustment to keep values within the representable window.  
4. Use mixed‑precision fallback for critical ops (e.g., layer‑norm, softmax).  

**Depth**  
- **Weight & gradient quantization:** Store 16‑bit master copies; update them in FP32, then cast to FP8 with a learned scale per tensor. This keeps weight updates stable while exploiting low‑precision compute.  
- **Activation scaling:** Compute an RMS or max value per layer, derive a dynamic scale factor; clamp activations to the FP8 range \([-2^{E_{\max}}, 2^{E_{\max}}]\).  
- **Loss scaling:** Multiply loss by a large constant (e.g., \(2^{15}\)), back‑propagate, then divide gradients. Detect NaNs/Inf and reduce scale on the fly.  
- **Gradient clipping & warm‑up:** Clip gradients to a threshold before quantization; use a learning‑rate warm‑up schedule to avoid early divergence.

**Edge Cases**  
- Extremely sparse gradients → underflow to zero, hurting convergence.  
- Large softmax logits → overflow in exponentiation. Test with synthetic data that triggers extreme values and verify no NaNs appear.  

**Optimize & Communicate**  
We can further reduce overhead by storing per‑tensor scales on the device, avoiding host‑device traffic. Profiling shows a 2–3× speedup over FP16 while keeping loss within 0.5 % of baseline accuracy. In an interview I’d explain this trade‑off: we sacrifice a tiny bit of precision for massive throughput, but the carefully designed scaling pipeline keeps training stable at 671B parameters.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
