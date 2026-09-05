---
qid: ing_1aa4c6f042__fp__local
question: 'Explain: qk_max and logits ¶ — Paged Attention - vLLM'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 519
total_tokens: 694
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:03:01-05:00'
sources: []
---

**Paged‑Attention in vLLM: why `qk_max` and the “logits” matter**

When a transformer attends to many tokens, we compute  
\(A_{ij}= \exp\!\bigl(\frac{q_i\cdot k_j}{\sqrt d}\bigr)\).  
In *paged* attention the key/value tensors are broken into pages so that only the top‑\(K\) keys per query need be kept. The challenge is to preserve the exact softmax distribution while never materialising all \(Q\times K\) products.

1. **The `qk_max` trick**  
   For each query we maintain `qk_max`, the largest dot product seen so far across all pages.  
   Using the identity  

   \[
   \exp(a)=\exp(a-\max)\,\exp(\max)
   \]

   we can shift every partial score by its current `qk_max`. This keeps numbers in a numerically stable range and lets us accumulate the *unnormalised* attention weights page‑by‑page. The final normalisation factor is simply \(\sum_j\exp(q_i\cdot k_j - qk_{\max})\), multiplied back by \(\exp(qk_{\max})\) at the end.

2. **The “logits”**  
   In practice vLLM stores, per query, a *logit buffer* that holds the exponentiated, shifted scores for the top‑\(K\) keys. These logits are updated incrementally as new pages arrive: we add \(\exp(q_i\cdot k_j - qk_{\max})\) to the buffer and recompute the normalisation constant. This is essentially a streaming softmax.

**Non‑obvious insight:**  
The `qk_max` does **not** just prevent overflow; it guarantees that *the relative ordering of scores is preserved* across pages. Because we subtract the current maximum, any new page’s contribution is always expressed in terms of how much better (or worse) its keys are compared to what we already know. Thus, even if a later page contains an extremely high score, it will be correctly re‑ranked without ever having to revisit earlier pages—exactly the property needed for true paged attention.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
