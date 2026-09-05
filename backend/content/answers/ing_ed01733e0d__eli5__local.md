---
qid: ing_ed01733e0d__eli5__local
question: 'Explain: Implement scaled dot-product attention with a causal mask in NumPy.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 162
output_tokens: 353
total_tokens: 515
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:50:35-05:00'
sources: []
---

Imagine you’re at a dinner party where each guest (a word) can only talk to the people who came before them, never to those still arriving.  
In **scaled dot‑product attention**, every guest first writes down how much they “pay attention” to every other guest by taking a dot product of their own “key” vector with all others’ “query” vectors.  
We then divide these scores by √(dₖ) (the key dimension) so the numbers stay moderate, and finally apply **softmax** so that each guest’s attentions add up to 1.  
The causal mask is a simple triangular matrix: for any guest i, all positions j > i get set to –∞ before softmax, which turns their attention weight into zero—exactly the “no future” rule.

```python
import numpy as np

def scaled_dot_attention(Q, K, V):
    d_k = Q.shape[-1]
    scores = Q @ K.T / np.sqrt(d_k)          # dot products
    mask = np.tril(np.ones_like(scores))     # causal: 1 for j≤i, 0 otherwise
    scores = np.where(mask==0, -np.inf, scores)
    attn = np.exp(scores) / np.sum(np.exp(scores), axis=-1, keepdims=True)
    return attn @ V
```

Here `Q`, `K`, and `V` are NumPy arrays of shape `(seq_len, d_k)`; the function returns the attended values while respecting the causal mask.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
