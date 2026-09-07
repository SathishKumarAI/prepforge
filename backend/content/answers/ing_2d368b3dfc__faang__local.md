---
qid: ing_2d368b3dfc__faang__local
question: 'Explain: Parameter Counts — Transformer Architecture'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 560
total_tokens: 789
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:28:11-05:00'
sources: []
---

**Clarify**  
The interview asks how many learnable parameters a Transformer model contains and why that matters for scaling. We’ll assume the classic *Encoder‑only* or *Encoder‑Decoder* stack (self‑attention + feed‑forward layers) with standard hyperparameters: `d_model`, `n_heads`, `d_ff`, and `L` layers.

**Approach**  
1. Enumerate each component’s parameters.  
2. Sum them across all layers, including embedding & output heads.  
3. Highlight how the counts grow linearly with depth and width.

**Depth**  
| Component | Formula | Notes |
|-----------|---------|-------|
| Token & positional embeddings | `V * d_model` (token vocab) + `T * d_model` (max seq length) | Usually negligible relative to others. |
| Multi‑head QKV projections per layer | `3 * d_model * d_model` | One weight matrix for each of Q, K, V. |
| Attention output projection | `d_model * d_model` | Transforms concatenated heads back to `d_model`. |
| FFN (two linear layers) | `(d_ff + d_model) * d_model + (d_ff + d_model)` | Biases omitted for brevity. |
| LayerNorm biases & weights | `2 * d_model` per sub‑layer | Small but present. |

**Total per layer** ≈  
`4*d_model^2 + 2*d_model*d_ff + O(d_model)`.  
For a 12‑layer BERT‑Base (`d_model=768`, `d_ff=3072`), this yields ~110M parameters; GPT‑3’s 175B model scales linearly with `L` and `d_model`.

**Edge Cases**  
- *Sparse attention* or *factorized QKV* reduces the `3*d_model^2` term.  
- *Weight tying* (e.g., embedding ↔ output) cuts parameters by ~1/4.  
- Very small vocabularies make embeddings a non‑negligible fraction.

**Optimize & Communicate**  
Explain that parameter count directly influences memory footprint, inference latency, and overfitting risk. Discuss trade‑offs: increasing `d_model` boosts expressivity but multiplies quadratic terms; deeper models add linear cost but can be mitigated with efficient attention (e.g., Linformer). Conclude by noting how this analysis guides hyperparameter tuning in production deployments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
