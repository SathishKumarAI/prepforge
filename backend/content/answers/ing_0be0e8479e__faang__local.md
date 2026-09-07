---
qid: ing_0be0e8479e__faang__local
question: 'Explain: Where do the parameters and FLOPs actually live in a transformer?
  Walk me through the budget.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 543
total_tokens: 786
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:11:36-05:00'
sources: []
---

**Clarify**  
You’re asking where *model capacity* (parameters) and *compute cost* (FLOPs) reside in a standard transformer architecture—i.e., how the “budget” is distributed across layers, heads, and operations.

Assumptions:  
- We consider a vanilla encoder‑decoder transformer with multi‑head self‑attention.  
- Parameters are trainable weights; FLOPs count arithmetic ops per forward pass.  

**Approach**  
1. Enumerate each module (embedding, attention, MLP, layer norms).  
2. Count parameters for each.  
3. Compute FLOPs per operation using token‑count * head/FFN dimensions.

**Depth**  
| Module | Params | Approx FLOPs per token (B×T) |
|--------|--------|-----------------------------|
| Token & position embeddings | `(V+P)·D` | `≈0` (lookup) |
| Multi‑head self‑attention | `3·H·(D/H)² + H·(D/H)²` | `≈6·B·T²·D` (Q/K/V matmuls + softmax + weighted sum) |
| LayerNorms | `2·D` | negligible |
| Feed‑forward network (MLP) | `4·D·FFN_dim` | `≈8·B·T·(D·FFN_dim)` |
| Residual & skip connections | none |

Total Params ≈ `H*(3*D²/H + D²/H) + 4*D*FFN_dim`  
For a 12‑layer, 768‑dim model: ~85 M params.  
FLOPs per token ≈ `6·T·D + 8·T·(D·FFN_dim)` → dominated by attention (O(T²)) and FFN.

**Edge Cases**  
- Sparse or linearized attention reduces the `T²` term drastically.  
- Quantization or pruning shrinks Params but FLOPs stay similar unless compute‑skipping is enabled.  
- Batch size B scales FLOPs linearly; sequence length T quadratically in self‑attention.

**Optimize & Communicate**  
To lower budget: use fewer heads, smaller `D`, replace attention with linearized variants, or apply dynamic token pruning. I’d explain each trade‑off clearly, quantify the impact on both Params and FLOPs, and present a cost‑benefit table to guide architecture choices.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
