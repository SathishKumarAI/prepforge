---
qid: ing_a1c7adf6f3__faang__local
question: 'Explain: Walk me through what happens inside a single transformer decoder
  block.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 577
total_tokens: 813
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:00:40-05:00'
sources: []
---

**Clarify**  
The interviewer wants a step‑by‑step walkthrough of the computation inside one Transformer **decoder** layer (self‑attention → cross‑attention → feed‑forward), assuming standard multi‑head attention, residuals and LayerNorm, and no positional encoding details.

**Approach**  
1. Token embeddings + positional encodings are summed.  
2. Self‑attention with causal masking.  
3. Residual + LayerNorm.  
4. Cross‑attention over encoder outputs.  
5. Residual + LayerNorm.  
6. Position‑wise feed‑forward network (FFN).  
7. Final residual + LayerNorm.

**Depth**  

| Step | Operation | Formula / Note |
|------|-----------|----------------|
| 1 | **Input prep** | `x_t = Embedding(t) + PosEnc(t)` |
| 2 | **Masked self‑attn** | For each head: `Q= xW_Q, K=xW_K, V=xW_V`; attention weights `α = softmax((QKᵀ)/√d_k)` with mask; output `O_sa = Σ αV`. |
| 3 | **Add & norm** | `x' = LayerNorm(x + O_sa)` |
| 4 | **Cross‑attn** | `Q=x'W_Q, K=enc_outW_K, V=enc_outW_V`; weights `β = softmax((QKᵀ)/√d_k)`; `O_ca = Σ βV`. |
| 5 | **Add & norm** | `x'' = LayerNorm(x' + O_ca)` |
| 6 | **FFN** | `F(x'') = ReLU(x''W_1 + b_1)W_2 + b_2` (typically 4× d_model). |
| 7 | **Add & norm** | `y = LayerNorm(x'' + F(x''))` → output of the block. |

*Complexity*: Each attention is `O(n²·d_k)`; FFN is `O(n·d_ff)`.  

**Edge Cases**  
- Causal mask must be correctly applied to prevent future token leakage.  
- Numerical stability in softmax (add large negative for masked positions).  
- Dimension mismatches if `d_model` ≠ `d_k * num_heads`.

**Optimize & Communicate**  
Explain that parallelizing heads speeds computation, and that fused kernels reduce memory traffic. Clarify that the residuals preserve gradient flow, while LayerNorm stabilizes training. Conclude by noting how stacking multiple such blocks builds deep context‑aware representations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
