---
qid: ing_ed01733e0d__faang__local
question: 'Explain: Implement scaled dot-product attention with a causal mask in NumPy.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 631
total_tokens: 868
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:51:32-05:00'
sources: []
---

**Clarify**  
You want a NumPy implementation of *scaled dot‑product attention* that respects causality (no “future” tokens influence past ones). Assume inputs are `Q, K, V` with shape `(batch, seq_len, d_k)` and that we’ll return an output of the same shape as `V`. Ask: should we support batched multi‑head? For this answer we’ll keep it single‑head to illustrate the core logic.

**Approach**  
1. Compute raw scores `S = Q @ K.T / sqrt(d_k)`.  
2. Apply a causal mask (`-inf` below the diagonal).  
3. Softmax over the last axis → weights `A`.  
4. Weighted sum `O = A @ V`.  

All operations are vectorized in NumPy.

**Depth** (code & complexity)  

```python
import numpy as np

def scaled_dot_product_attention(Q, K, V):
    """
    Q, K, V: shape (batch, seq_len, d_k)
    returns: attention output of shape (batch, seq_len, d_k)
    """
    batch, n, dk = Q.shape
    # 1. raw scores
    S = np.matmul(Q, K.transpose(0, 2, 1)) / np.sqrt(dk)   # (b,n,n)

    # 2. causal mask: lower triangular with zeros on and above diagonal
    mask = np.tril(np.ones((n, n), dtype=bool))
    S = np.where(mask[None, :, :], S, -1e9)                 # broadcast over batch

    # 3. softmax
    exp_S = np.exp(S - np.max(S, axis=-1, keepdims=True))   # stability
    A = exp_S / np.sum(exp_S, axis=-1, keepdims=True)

    # 4. weighted sum
    return np.matmul(A, V)                                   # (b,n,d_k)
```

Complexity: `O(batch * n² * d_k)` time and `O(batch * n²)` memory for the score matrix; acceptable for moderate sequence lengths.

**Edge cases**  
- `seq_len=1` → mask trivial.  
- Numerical overflow when scores are very large; handled by subtracting max per row.  
- Very long sequences may hit memory limits (use chunking or GPU).

**Optimize & communicate**  
For production, replace the NumPy loop with a cuBLAS‑based implementation or JAX/Numba for GPU acceleration. Explain that the mask can be pre‑computed once and reused across batches to save time. In an interview, I’d highlight how this core routine plugs into multi‑head attention, where `Q,K,V` are reshaped per head and concatenated afterward. This keeps the explanation concise while covering algorithmic details, complexity, edge cases, and scalability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
