---
qid: ing_03b915039e__faang__local
question: 'Explain: Implement causal multi-head attention in PyTorch, then convert
  it to grouped-query attention.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 800
total_tokens: 1041
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:52:52-05:00'
sources: []
---

**Clarify**

> *“Implement causal multi‑head attention in PyTorch and then convert it to grouped‑query attention.”*  
Assumptions:  
1. Input tensors are `(B, T, D)` where `T` is the sequence length.  
2. We want strictly left‑to‑right masking (no future tokens).  
3. Grouped‑query attention partitions heads into *G* groups; each group shares a query matrix.

**Approach**

1. **Causal MHA** – standard scaled dot‑product with causal mask.  
2. **Grouped‑Query Attention (GQA)** – replace per‑head queries by per‑group queries, then broadcast to all heads in the group.  
3. Reuse PyTorch ops for efficiency: `torch.nn.functional.scaled_dot_product_attention`.

**Depth**

```python
import torch, math

def causal_mha(x, num_heads=8):
    B,T,D = x.shape
    H   = num_heads
    head_dim = D // H
    scale  = head_dim ** -0.5

    # linear projections
    qkv = torch.nn.functional.linear(x, weight=torch.randn(3*D, D))
    q,k,v = qkv.chunk(3, dim=-1).view(B,T,H,-1)   # (B,T,H,hd)

    # causal mask: lower‑triangular 0/−inf
    mask = torch.triu(torch.full((T,T), float('-inf')), diagonal=1)
    attn = torch.nn.functional.scaled_dot_product_attention(
        q, k, v, attn_mask=mask, is_causal=False, scale=scale
    )
    return attn.reshape(B,T,D)

def gqa(x, num_heads=8, groups=2):
    B,T,D = x.shape
    H   = num_heads
    G   = groups
    hd  = D // H
    assert H % G == 0, "Heads must be divisible by groups"
    h_per_g = H//G

    # shared query per group
    qg = torch.nn.functional.linear(x, weight=torch.randn(G*hd, D))
    k  = torch.nn.functional.linear(x, weight=torch.randn(H*hd, D)).view(B,T,H,-1)
    v  = torch.nn.functional.linear(x, weight=torch.randn(H*hd, D)).view(B,T,H,-1)

    qg = qg.view(B,T,G,hd).repeat_interleave(h_per_g, dim=2)   # (B,T,H,hd)
    mask = torch.triu(torch.full((T,T), float('-inf')), diagonal=1)

    attn = torch.nn.functional.scaled_dot_product_attention(
        qg, k, v, attn_mask=mask, is_causal=False, scale=hd**-0.5
    )
    return attn.reshape(B,T,D)
```

*Complexity*: both `O(B·T²·H)` time; GQA saves `O(G)` query projections but still `O(H)` key/value ops.

**Edge Cases**

- Non‑divisible heads → error.  
- Very long sequences may exceed GPU memory for the causal mask; use chunking or `torch.triu` with `device`.  
- Test on small synthetic data to confirm that GQA outputs equal to MHA when `groups=H`.

**Optimize & Communicate**

- Broadcast queries via `repeat_interleave` to avoid loops.  
- Use fused `scaled_dot_product_attention` for speed and numerical stability.  
- Explain that GQA reduces parameters by sharing queries, which empirically improves efficiency on long‑sequence workloads while preserving causal behavior.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
