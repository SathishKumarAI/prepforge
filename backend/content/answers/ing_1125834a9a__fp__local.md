---
qid: ing_1125834a9a__fp__local
question: 'Q: What is the KV cache and why does it matter for serving?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 396
total_tokens: 570
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:42:25-05:00'
sources: []
---

### The KV Cache in Transformer‑based Serving

When a transformer processes an input sequence, every token’s representation is computed by **self‑attention**: each query vector \(q_t\) attends to all previous key–value pairs \((k_s,v_s)\).  
During inference we generate tokens one at a time. If we recompute the entire hidden state for every new token, we waste the work already done on earlier positions.

The **KV cache** stores those key‑value pairs after they have been computed once. For the next token \(t+1\) we only need to:

1. compute its query \(q_{t+1}\);
2. look up all cached \((k_s,v_s)\) for \(s\le t\).

Thus each new step is *O(1)* in hidden‑state size, rather than *O(t)*.  
Mathematically this reduces the time complexity of a sequence of length \(L\) from \(O(L^2)\) to \(O(L)\), which is critical when serving low‑latency models.

#### Deeper Insight

The cache embodies **data locality**: self‑attention is a linear operator on the cached values. By treating the attention matrix as a sparse, banded structure that only expands with each new token, we avoid recomputing a dense quadratic kernel.  

A non‑obvious consequence is that *the cache size grows linearly with context length*, so memory becomes the bottleneck for long‑form generation. This trade‑off between latency and memory is why modern serving systems often compress or shard KV caches (e.g., rotating buffers, low‑rank approximations).  

In short, the KV cache turns a quadratic‑time self‑attention mechanism into an incremental, linear‑time operation—making real‑time AI feasible.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
