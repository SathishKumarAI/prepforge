---
qid: ing_f7cf7a5c00__fp__local
question: What is the KV cache and why does it make generation fast?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 514
total_tokens: 686
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:46:42-05:00'
sources: []
---

**KV Cache in Transformers – a principled speed‑up**

In a transformer, each token \(x_t\) is processed by multi‑head self‑attention:

\[
Q_t = W_Q x_t,\qquad K_i = W_K h_i,\qquad V_i = W_V h_i,
\]

where \(\{h_i\}_{i<t}\) are all previous hidden states.  
The output for \(x_t\) is

\[
y_t = \operatorname{softmax}\!\left(\frac{Q_t K^\top}{\sqrt d}\right)V ,
\]

with \(K=[K_1,\dots,K_{t-1}]\) and \(V=[V_1,\dots,V_{t-1}]\).

**The bottleneck.**  
At step \(t\), we recompute \(K_i, V_i\) for every past token from scratch, even though they never change after their own time‑step. Thus the per‑token cost grows linearly with sequence length.

**KV cache solves this by observing a conservation law.**  
The keys and values are *fixed* functions of the past hidden states; they are not influenced by future tokens. Therefore we can store \(\{K_i, V_i\}\) after their first computation. When generating token \(t+1\), we simply append the new \((K_{t},V_{t})\) to the cached matrices and reuse all older entries unchanged.

**Why it works mathematically.**  
The attention matrix is a bilinear form \(Q_t K^\top\). Caching keeps the factorization intact, so we avoid recomputing the entire product for each prefix. The complexity drops from \(O(t^2)\) to \(O(t)\), matching the linear cost of computing only the new key/value pair.

**Non‑obvious insight.**  
The cache exploits *statelessness* of keys/values relative to future inputs—a property that holds not just for vanilla transformers but any architecture where attention is purely self‑dependent. Thus, in practice, a KV cache is a manifestation of the principle “reuse immutable computations” and can be generalized to other sequence models (e.g., recurrent‑self‑attention or sparse transformers) by identifying components that never change after their own step.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
