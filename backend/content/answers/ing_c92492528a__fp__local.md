---
qid: ing_c92492528a__fp__local
question: 'Explain: Implement grouped-query attention in PyTorch and explain where
  the KV-cache savings come from, since Qwen relies on GQA for serving efficiency.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 189
output_tokens: 1270
total_tokens: 1459
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:08:44-05:00'
sources: []
---

**Grouped‑Query Attention (GQA)**  
In a standard multi‑head self‑attention every query head attends to *all* key/value pairs.  
Let the number of heads be \(H\) and the sequence length be \(L\). The cost per token is  
\(O(H\,L^2)\). GQA reduces this by letting only a subset \(g \ll H\) of “group” queries attend to *all* keys, while each remaining head attends to a *small* subset of keys (a *local window* or a fixed number of tokens).  
Formally, for head \(h\):

\[
\text{head}_h = 
\begin{cases}
\operatorname{softmax}\!\big(Q_h K^\top / \sqrt{d_k}\big)V & h \in \mathcal G\\[4pt]
\operatorname{softmax}\!\big(Q_h K_{W(h)}^\top / \sqrt{d_k}\big)V_{W(h)} & h \notin \mathcal G
\end{cases}
\]

where \(K_{W(h)}\) denotes the keys in window \(W(h)\).  
Because most heads use a tiny window, the per‑token complexity drops to  
\(O(g\,L^2 + (H-g)\,Lw)\) with \(w \ll L\).

---

### Implementing GQA in PyTorch

```python
import torch, math
from torch.nn import functional as F

class GroupedQueryAttention(torch.nn.Module):
    def __init__(self, d_model, n_heads, n_groups, window_size, causal=True):
        super().__init__()
        self.d_k = d_model // n_heads
        self.n_heads = n_heads
        self.n_groups = n_groups          # heads that attend globally
        self.window_size = window_size
        self.causal   = causal

        # linear projections
        self.qkv = torch.nn.Linear(d_model, 3 * d_model, bias=False)
        self.out = torch.nn.Linear(d_model, d_model)

    def forward(self, x):
        B, L, _ = x.shape
        qkv = self.qkv(x).reshape(B, L, self.n_heads, 3*self.d_k)
        Q, K, V = qkv.unbind(-1)   # each: (B,L,H,dk)

        # scale and reshape for batched matmul
        Q = Q * math.sqrt(self.d_k)**-0.5

        attn_out = []
        for h in range(self.n_heads):
            if h < self.n_groups:                     # global head
                scores = torch.einsum('bld,bmd->blm', Q[:, :, h], K[:, :, h])
                if self.causal:
                    mask = torch.tril(torch.ones(L, L, device=x.device)).unsqueeze(0)
                    scores = scores.masked_fill(mask==0, float('-inf'))
                attn = F.softmax(scores, dim=-1)
            else:                                     # local head
                pad = self.window_size // 2
                K_pad = torch.nn.functional.pad(K[:, :, h], (pad,pad))
                V_pad = torch.nn.functional.pad(V[:, :, h], (pad,pad))
                attn_out_h = []
                for i in range(L):
                    k_slice = K_pad[:, i:i+self.window_size]
                    v_slice = V_pad[:, i:i+self.window_size]
                    scores  = torch.einsum('bld,bmd->blm', Q[:, i, h].unsqueeze(1), k_slice)
                    attn    = F.softmax(scores, dim=-1)
                    attn_out_h.append(torch.einsum('blm,bmd->bld',
                                                   attn, v_slice))
                attn_out_h = torch.stack(attn_out_h, dim=1)   # (B,L,H,dk)
                attn = None
            if h < self.n_groups:
                attn_out.append(torch.einsum('blm,bmd->bld', attn,
                                             V[:, :, h]))
            else:
                attn_out.append(attn_out_h)

        out = torch.cat(attn_out, dim=-1)   # (B,L,H*d_k)
        return self.out(out)
```

*Key points:*  
- `self.n_groups` heads compute a full \(L\times L\) attention matrix.  
- Remaining heads use a sliding window of size `window_size`.  
- The causal mask is applied only to global heads.

---

### KV‑cache savings

During inference, the model repeatedly re‑computes *keys* and *values* for all tokens that have already been generated. In GQA:

1. **Global heads**: Their keys/values are reused exactly as in vanilla attention; they occupy \(O(g\,L)\) memory.
2. **Local heads**: Each head only needs the keys/values of its current window, not the entire past sequence.  
   Therefore we store a *sliding cache* of size `window_size` per local head instead of `L`.  

The total KV‑cache size becomes

\[
\underbrace{g\,L}_{\text{global}} + \underbrace{(H-g)\,\text{window}_\text{size}}_{\text{local}}
\]

which is dramatically smaller when \(w \ll L\).  
Because the cache dominates memory usage for long‑context models, this reduction directly yields faster token generation and lower RAM/VRAM consumption.  

**Non‑obvious insight:** The *only* reason local heads can be cached separately is that their attention patterns are *invariant to the past beyond the window*. Thus, during inference we never need to recompute or store keys for tokens older than `window_size`, making GQA a true *efficient* variant rather than just a computational trick.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
