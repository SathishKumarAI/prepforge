---
qid: ing_41773141a7__think__local
question: 'Explain: Implement multi-head self-attention from scratch - no `nn.MultiheadAttention`,
  and make it causal.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 201
output_tokens: 562
total_tokens: 763
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T06:03:07-05:00'
sources: []
---

**1️⃣ Clarify the goal & assumptions**  
- *What* you’re building: a causal (auto‑regressive) multi‑head self‑attention layer from scratch in PyTorch.  
- *Assumptions*: input shape `(seq_len, batch, d_model)` (or `(batch, seq_len, d_model)`), `num_heads` divides `d_model`, no external `nn.MultiheadAttention`.  

**2️⃣ Mental model / framework**  
Treat the module as a mini‑Transformer encoder layer:  
1. Linear projections → queries, keys, values (`Q,K,V`).  
2. Split each into `h` heads (shape `(batch, h, seq_len, d_k)`).  
3. Scale, mask for causality, softmax → attention weights.  
4. Weighted sum of `V`, merge heads, final linear output.  

**3️⃣ Step‑by‑step reasoning**  
- Compute `Q,K,V` with separate `nn.Linear`.  
- Reshape to `(batch, h, seq_len, d_k)` using `view/transpose`.  
- Scale by `1/sqrt(d_k)`.  
- Create a causal mask: upper‑triangular matrix of `-inf` (or large negative). Broadcast it to match `(batch, h, seq_len, seq_len)`.  
- Add mask to scaled scores → `scores = Q @ K.transpose(-2,-1) + mask`.  
- Softmax over last dim (`dim=-1`).  
- Multiply by `V`: `attn_output = attn_weights @ V`.  
- Concatenate heads: reshape back to `(batch, seq_len, d_model)` and apply output linear.  

**4️⃣ Common traps to avoid**  
- Forgetting that the mask must be on the *same device* as tensors.  
- Mixing up batch/sequence order; ensure consistency with PyTorch’s defaults.  
- Not dividing `d_model` evenly by `num_heads`.  
- Using `torch.softmax` without specifying `dim`, leading to wrong axis.  

**5️⃣ Sanity‑check & verbalize**  
- Verify shapes after each operation (print or assert).  
- Check that for position `t`, the attention weights for positions > `t` are zero.  
- Run a small random tensor through your module and compare outputs with a reference implementation (e.g., HuggingFace’s causal transformer layer) to confirm correctness.  

By following this structured plan, you’ll build a correct, efficient, and testable causal multi‑head self‑attention from scratch.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
