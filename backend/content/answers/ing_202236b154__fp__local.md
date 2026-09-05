---
qid: ing_202236b154__fp__local
question: Attention is O(n²) in sequence length. Where does that actually bite in
  practice - prefill vs decode?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 182
output_tokens: 556
total_tokens: 738
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:14:26-05:00'
sources: []
---

**Why the \(O(n^{2})\) term is inevitable**

Attention must compare every query token to every key token.  
If we write the attention matrix as \(A_{ij}=q_iK_j^\top / \sqrt{d}\), computing all
\(n^2\) entries requires a dot‑product for each pair, i.e., \(O(nd)\) work per row and \(O(n^{2}d)\) total.  
This quadratic cost is unavoidable because the information flow is *fully connected*; no sparsity assumption has been made.

**Where it hurts**

| Stage | Operation | Cost |
|-------|-----------|------|
| **Prefill (encoder‑only, e.g., BERT)** | One pass over all \(n\) tokens | \(\Theta(n^{2})\) FLOPs, done once |
| **Autoregressive decode (GPT‑style)** | At step \(t\): compute attention of the new token against *all* previous \(t-1\) keys | \(\Theta(t d)\) per step → cumulative \(\Theta(n^{2}d/2)\) over a full sentence, but *in practice* we reuse cached key/value tensors so each step costs only \(\Theta(nd)\), not \(\Theta(n^{2})\). |

Thus **prefill** suffers the quadratic penalty in wall‑clock time because all pairs are evaluated simultaneously.  
In **decode**, the cost is spread over \(n\) sequential steps; parallelism cannot be applied to the growing context, so latency grows linearly with length even though the total FLOPs are similar.

**Non‑obvious insight**

The *bottleneck* in practice is often **memory bandwidth**, not compute.  
During decode, each step reads a large key/value matrix from cache; if memory traffic dominates, the apparent cost becomes linear in \(n\) rather than quadratic.  
Consequently, optimising attention for inference focuses on reducing the size of keys/values (e.g., rotary embeddings, sparse kernels) to lower bandwidth, not just arithmetic operations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
