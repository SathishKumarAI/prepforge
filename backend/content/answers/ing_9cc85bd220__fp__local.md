---
qid: ing_9cc85bd220__fp__local
question: 'Explain: Implement single-step decode with a KV cache in PyTorch, for causal
  multi-head attention. Then say what changes for a long-context serving system.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 190
output_tokens: 636
total_tokens: 826
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:38:38-05:00'
sources: []
---

### From the ground up

Causal multi‑head attention computes, for a query \(q_t\in\mathbb R^{d}\),

\[
\text{attn}(q_t)=\frac{\exp(q_tK^\top / \sqrt d)}{Z}V ,
\]

where \(K,V\) are the key/value matrices of all past tokens.  
During **single‑step decoding** we only add a new token at step \(t\).  Instead of recomputing
\(K_{1:t}\) and \(V_{1:t}\) from scratch, we keep a **KV cache**:

```python
# cache: (batch, heads, seq_len, d_head)
cache_k, cache_v = torch.zeros(batch, heads, 0, d_head).to(device)

def step(x_new):
    # x_new: (batch, 1, d_model)
    k_new, v_new = linear_key(x_new), linear_value(x_new)   # (b,1,h,d_h)
    cache_k = torch.cat([cache_k, k_new], dim=2)            # append along seq_len
    cache_v = torch.cat([cache_v, v_new], dim=2)

    attn_logits = torch.einsum('bhqk,bhkd->bhqd', q_new, cache_k) / sqrt(d_h)
    attn_scores = torch.softmax(attn_logits, dim=-1)
    return (attn_scores @ cache_v).reshape(batch, 1, d_model)
```

The cost drops from \(O(t^2)\) to **\(O(t)\)** per step because we never recompute the old keys/values.

### Long‑context serving

When the sequence exceeds a practical window (e.g., > 8 k tokens), a naïve cache still grows linearly, choking memory and latency.  
Two principled remedies:

1. **Sliding‑window KV** – keep only the last \(L\) keys/values; older ones are discarded.  This preserves causal structure while bounding memory to \(O(L)\).
2. **Compressed memory bank** – project older K/V blocks into a smaller “memory” using attention or pooling, then use them as additional context with a reduced dimensionality.

Non‑obvious insight: *the cache itself is an implicit data structure that turns quadratic self‑attention into linear incremental inference; however, its effectiveness hinges on the assumption that past tokens are needed in full detail. Compressing or windowing alters the information geometry of the model and can be viewed as a form of **structured regularization** that trades off exactness for scalability.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
