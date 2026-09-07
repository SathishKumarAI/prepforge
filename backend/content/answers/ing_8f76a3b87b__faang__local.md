---
qid: ing_8f76a3b87b__faang__local
question: 'Explain: Precision: FP8 vs BF16 — Pretraining Basics'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 621
total_tokens: 856
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:18:06-05:00'
sources: []
---

**Clarify**  
We’re comparing two low‑precision formats—FP8 (8‑bit floating point) and BF16 (bfloat16)—for the *pre‑training* phase of a transformer model. I’ll assume we’re training on GPU/TPU clusters, using standard AdamW, and that the goal is to keep accuracy within 0.1 % of full‑precision while reducing memory bandwidth.

**Approach**  
1. **Quantify numeric ranges**: BF16 keeps the same exponent width as FP32 (8 bits) but only 7 mantissa bits; FP8 has a smaller exponent (4 bits) and fewer mantissa bits (3–5).  
2. **Profile gradient statistics** during early epochs to see how often values fall outside FP8’s dynamic range.  
3. **Implement mixed‑precision**: store activations in the chosen format, keep master weights in FP32, use loss scaling for FP8.

**Depth**  
- *BF16*: preserves exponent, so gradients and activations that span several orders of magnitude stay representable. Training loss curves match FP32 closely; only a 0.05 % drop in validation perplexity is typical. Memory savings ≈ 2× over FP32.  
- *FP8*: With its limited exponent, many intermediate values overflow to ±∞ or underflow to zero unless we apply **dynamic range scaling** (e.g., per‑layer rescaling). Even then, the 3–5 mantissa bits lead to higher quantization noise: loss curves can diverge after ~10 k steps, and validation perplexity may worsen by 1–2 %. FP8’s memory advantage is larger (~4×), but only if we add a *dynamic scaling* loop or use *group‑wise* exponent sharing.

**Edge Cases**  
- Small‑gradient regimes (e.g., near convergence) where FP8 underflow kills weight updates.  
- Layers with very large activations (LayerNorm, softmax) that exceed FP8’s exponent range even after rescaling.  
- Mixed‑precision libraries may not expose per‑layer scaling knobs for FP8.

**Optimize & Communicate**  
If the target is strict memory budget, start with BF16—simple API support on GPUs/TPUs and minimal accuracy loss. If you must squeeze more savings, prototype FP8 with a *dynamic exponent* scheme: maintain a global scale factor per layer, update it every few steps based on observed max/min, and clip outliers. Document the trade‑off: 2× memory → <0.1 % accuracy loss (BF16) vs 4× memory → ~1–2 % loss (FP8). This structured reasoning shows I can balance engineering constraints with ML fidelity—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
