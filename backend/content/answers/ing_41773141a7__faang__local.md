---
qid: ing_41773141a7__faang__local
question: 'Explain: Implement multi-head self-attention from scratch - no `nn.MultiheadAttention`,
  and make it causal.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 880
total_tokens: 1125
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:16:16-05:00'
sources: []
---

**Clarify**  
We need a PyTorch implementation of *causal* multi‑head self‑attention (MHA) that can be used inside a transformer block, without calling `nn.MultiheadAttention`. Assume we have an input tensor `x ∈ ℝ^{B×T×D}` (`batch`, `seq_len`, `embed_dim`) and a number of heads `h` such that `D % h == 0`. We’ll also confirm that the user wants full‑attention (no masking beyond causality) and that dropout/softmax scaling is optional.

**Approach**  
1. Linear projections for Q, K, V → shape `(B, T, D)` each.  
2. Reshape to `(B, h, T, d_k)` where `d_k = D/h`.  
3. Compute scaled dot‑product: `attn = (Q @ K.transpose(-2,-1)) / sqrt(d_k)`.  
4. Apply causal mask (`triangular_mask`) to zero out future positions.  
5. Softmax over the last axis → `(B, h, T, T)`.  
6. Weighted sum with V: `out = attn @ V` → `(B, h, T, d_k)`.  
7. Concatenate heads and project back to `D`.

**Depth**  
```python
import torch, math

class CausalMHA(torch.nn.Module):
    def __init__(self, embed_dim, num_heads, dropout=0.1):
        super().__init__()
        assert embed_dim % num_heads == 0
        self.d_k = embed_dim // num_heads
        self.num_heads = num_heads
        self.q_proj = torch.nn.Linear(embed_dim, embed_dim)
        self.k_proj = torch.nn.Linear(embed_dim, embed_dim)
        self.v_proj = torch.nn.Linear(embed_dim, embed_dim)
        self.out_proj = torch.nn.Linear(embed_dim, embed_dim)
        self.dropout = torch.nn.Dropout(dropout)

    def forward(self, x):
        B, T, _ = x.size()
        Q = self.q_proj(x).view(B, T, self.num_heads, self.d_k).transpose(1,2)  # (B,h,T,dk)
        K = self.k_proj(x).view(B, T, self.num_heads, self.d_k).transpose(1,2)
        V = self.v_proj(x).view(B, T, self.num_heads, self.d_k).transpose(1,2)

        attn_scores = torch.matmul(Q, K.transpose(-2,-1)) / math.sqrt(self.d_k)  # (B,h,T,T)
        causal_mask = torch.triu(torch.ones(T, T, device=x.device), diagonal=1).bool()
        attn_scores.masked_fill_(causal_mask, float('-inf'))
        attn_probs = torch.softmax(attn_scores, dim=-1)
        attn_probs = self.dropout(attn_probs)

        out = torch.matmul(attn_probs, V)  # (B,h,T,dk)
        out = out.transpose(1,2).contiguous().view(B, T, -1)  # concat heads
        return self.out_proj(out)
```
**Complexity**:  
- Time `O(B * h * T²)` due to the full attention matrix.  
- Space `O(B * h * T²)` for the score tensor; can be reduced with incremental decoding.

**Edge Cases**  
- Small `T` → mask still works (triangular).  
- `d_k` must divide `embed_dim`.  
- When `dropout=0`, layer behaves exactly like vanilla causal MHA.  
- Verify that gradients flow through the mask (`masked_fill_` preserves grad).

**Optimize & Communicate**  
For long sequences, replace full matrix with incremental key/value caching (used in GPT‑style models). Also consider kernel‑level optimizations or FlashAttention if GPU memory permits. Explain to interviewers how this mirrors `nn.MultiheadAttention` but gives control over causality and potential customizations such as relative position bias.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
