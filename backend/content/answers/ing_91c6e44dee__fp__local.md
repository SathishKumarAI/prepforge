---
qid: ing_91c6e44dee__fp__local
question: 'Explain: Stop stuffing the context window. (Newsletter partner).'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 463
total_tokens: 635
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:15:06-05:00'
sources: []
---

**Why “stop stuffing the context window” is a design principle, not a suggestion**

1. **Fundamental problem: bounded memory**  
   A language model’s transformer encoder has a fixed‑size positional embedding matrix \(E\in\mathbb{R}^{L\times d}\). Each token consumes one row of \(E\) and one column of the self‑attention matrix \(\mathbf{A}\in\mathbb{R}^{L\times L}\). The computational cost scales as \(O(L^2d)\); memory grows quadratically with sequence length. If you pack more tokens than the hardware can hold, gradients vanish or training stalls because the attention weights cannot be computed for all pairs.

2. **Why it must work this way**  
   - *Optimization*: Backpropagation requires storing intermediate activations for every token pair. Exceeding \(L_{\max}\) forces truncation or swapping, which introduces noise and degrades convergence.
   - *Information theory*: The model’s capacity to represent dependencies is limited by the number of attention heads and hidden dimensions. Over‑packing dilutes signal: each head must attend over a larger set, reducing effective context per token.
   - *Geometry*: Positional encodings become less discriminative as \(L\) grows; two distant tokens may receive similar phase patterns, leading to aliasing in the Fourier domain of positional embeddings.

3. **Non‑obvious insight**  
   Even when hardware can technically accommodate a longer window, *effective* context is bounded by the model’s learned attention distribution. Empirical studies show that beyond ~2–4× the pre‑training window, perplexity plateaus: the model simply stops using extra tokens because its self‑attention cannot resolve fine‑grained dependencies over such long spans.

**Bottom line:** A transformer’s context window is not an arbitrary limit; it reflects the interplay of quadratic compute, finite representational capacity, and positional encoding geometry. Exceeding it breaks training dynamics, so “stop stuffing” is a rule rooted in the physics of attention itself.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
