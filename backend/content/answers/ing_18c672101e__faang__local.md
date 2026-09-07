---
qid: ing_18c672101e__faang__local
question: Explain speculative decoding. Why is the output provably faithful to the
  target model, and when does it actually help?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 409
total_tokens: 654
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:42:30-05:00'
sources: []
---

**Clarify**  
Speculative decoding is a speed‑up technique for autoregressive language models where an *auxiliary* (fast) model predicts several tokens ahead, and the *target* (accurate but slower) model verifies them. We assume both models share the same token vocabulary and that the target can efficiently score arbitrary prefixes.

**Approach**  
1. Generate a short “speculation” sequence from the fast model.  
2. For each prefix of this speculation, ask the target to compute its log‑probability.  
3. Accept the longest prefix whose probability exceeds a threshold; otherwise fall back to token‑by‑token generation.

**Depth**  
Because the target model’s probabilities are used as a gate, any accepted tokens are guaranteed to be at least as likely under the target distribution as those discarded. The algorithm is *provably faithful* because acceptance only occurs when the target score is above the threshold; otherwise we revert to exact decoding. Complexity: O(k · T) where k is speculation length and T is cost of a target evaluation, versus O(N · T) for naive decoding over N tokens.

**Edge Cases**  
- Very divergent fast model → many rejections, little speed‑up.  
- Threshold too high → fewer accepted prefixes, risk of under‑utilizing the fast model.  
- Sequence length very long → cumulative error if speculation drifts far before a check.

**Optimize & Communicate**  
Tuning k and the acceptance threshold balances throughput vs. fidelity; adaptive thresholds based on recent acceptances can improve stability. In practice, speculative decoding yields 2–4× speedups for large models (e.g., GPT‑3) when the auxiliary is an efficient transformer or a quantized variant. It helps most in latency‑critical inference where a small sacrifice in exactness is acceptable but must be bounded by the target model’s guarantees.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
