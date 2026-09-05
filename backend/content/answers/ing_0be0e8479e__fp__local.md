---
qid: ing_0be0e8479e__fp__local
question: 'Explain: Where do the parameters and FLOPs actually live in a transformer?
  Walk me through the budget.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 180
output_tokens: 519
total_tokens: 699
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:31:07-05:00'
sources: []
---

**Where do a Transformer’s parameters and FLOPs actually live?**

A Transformer is essentially a stack of identical *blocks*. Each block contains three learnable linear maps and one small MLP:

| Module | Learnable weights | Typical size | FLOPs per token |
|--------|-------------------|--------------|-----------------|
| **Token‑embedding + position encoding** | `W_e ∈ ℝ^{V×d}` (token), `P ∈ ℝ^{L×d}` (pos) | ≈ (V·d + L·d) | O(d²) to project to hidden |
| **Self‑Attention** | 3 projections: Q, K, V (`W_q`, `W_k`, `W_v` each `ℝ^{d×d}`) plus output `W_o` | 4 × d² parameters | For each head: 2·d·N (Q/K/V) + d·N (output) → ~12 d² |
| **Feed‑Forward** | Two dense layers (`W_1 ∈ ℝ^{d×4d}`, `W_2 ∈ ℝ^{4d×d}`) | 8 d² parameters | ≈ 8 d² ops per token |
| **LayerNorm & residuals** | No learnable weights (biases optional) | negligible | ~2·d ops |

Summing across a block:  
`params_block ≃ 4 d² + 8 d² = 12 d²` (≈ 70 % from attention, 30 % from FFN).  
FLOPs per token ≈ `12 d² + 8 d² ≃ 20 d²`.  

Thus **most parameters and compute are concentrated in the three linear projections of self‑attention and the two MLP layers**. The embedding layer contributes a small, static budget that grows with vocabulary size but is amortized across all tokens. Non‑obvious insight: *the output projection `W_o` in attention is often omitted in practice*, halving its parameter cost without changing the FLOPs, yet many implementations still include it—an artifact of early transformer code that persists despite being unnecessary.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
