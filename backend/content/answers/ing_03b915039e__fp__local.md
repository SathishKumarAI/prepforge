---
qid: ing_03b915039e__fp__local
question: 'Explain: Implement causal multi-head attention in PyTorch, then convert
  it to grouped-query attention.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 178
output_tokens: 783
total_tokens: 961
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:13:19-05:00'
sources: []
---

**Why causal attention matters**

In autoregressive language modeling we must never let a token peek at future tokens; otherwise the model would cheat during training and inference. The *causal mask* enforces this by zeroing out all entries \(K_{i,j}\) where \(j>i\). Mathematically, for each query position \(i\),

\[
\operatorname{softmax}_j \bigl( Q_i K_j^\top / \sqrt{d_k} + M_{ij}\bigr),\qquad
M_{ij}=0\,\text{if } j\le i,\; -\infty \text{ otherwise}.
\]

This preserves the Markov property of the output distribution.

**Implementing causal multi‑head attention in PyTorch**

```python
class CausalMultiHead(torch.nn.Module):
    def __init__(self, d_model, heads):
        super().__init__()
        self.heads = heads
        self.d_k   = d_model // heads
        self.qkv   = torch.nn.Linear(d_model, 3*d_model, bias=False)
        self.out   = torch.nn.Linear(d_model, d_model)

    def forward(self, x):          # (B,T,d_model)
        B,T,_ = x.shape
        qkv = self.qkv(x).reshape(B,T,self.heads,3*self.d_k)
        q,k,v = qkv.chunk(3,-1)     # each (B,T,h,d_k)

        attn = (q @ k.transpose(-2,-1)) / math.sqrt(self.d_k)   # (B,T,T,h)
        mask = torch.tril(torch.ones(T, T, device=x.device)).unsqueeze(0).unsqueeze(-1)
        attn = attn.masked_fill(mask==0, float('-inf'))
        attn = F.softmax(attn, dim=-2)

        out = (attn @ v).transpose(1,2).reshape(B,T,self.heads*self.d_k)
        return self.out(out)
```

**From multi‑head to grouped‑query attention**

Grouped‑query attention (GQA) replaces the per‑head projection of queries with *grouped* projections: each group shares a query matrix while keys/values remain head‑wise. Concretely, for \(g\) groups we set

\[
Q^{(g)} = X W_Q^{(g)}, \quad K^{(h)} = X W_K^{(h)}, \quad V^{(h)}=X W_V^{(h)},
\]

and compute attention per group‑head pair:

\[
A_{gh} = \operatorname{softmax}\!\left(\frac{Q^{(g)} (K^{(h)})^\top}{\sqrt{d_k}}\right).
\]

In code, we replace the `qkv` linear with three separate lin­ears: one for queries of shape `(B,T,g,d_k)` and two for keys/values each of shape `(B,T,h,d_k)`. The causal mask is applied to each group‑head matrix as before. This reduces parameter count by a factor \(h/g\) while retaining expressive power.

**Non‑obvious insight**

The *causal* constraint can be enforced at the level of *attention logits*, not just the final output. By applying the lower‑triangular mask directly to the unnormalized scores, we avoid numerical instability and keep the softmax differentiable—crucial for training stability when moving from multi‑head to grouped queries.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
