---
qid: ing_e8f1115012__fp__local
question: 'Explain: exp_sum ¶ — Paged Attention - vLLM'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 429
total_tokens: 601
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:14:08-05:00'
sources: []
---

### `exp_sum` in Paged‑Attention (vLLM)

When a transformer queries a key–value pair, the attention weight for token *i* over key *j* is  

\[
\alpha_{ij}=\frac{e^{s_{ij}}}{\sum_k e^{s_{ik}}},
\qquad s_{ij}= \frac{q_i^\top k_j}{\sqrt d}.
\]

In **paged‑attention** the KV tensors are broken into *pages* (blocks of contiguous keys). For each page we need only the local numerator \(e^{s_{ij}}\) and a running denominator.  
`exp_sum` is that running denominator:

1. **Initialization** – start with 0 for every query.
2. **Per‑page update** – for each key in the current page, compute `score = (q·k)/√d`, exponentiate it, add to the *local* sum, and also accumulate into the global `exp_sum`.
3. **Final division** – after all pages are processed, divide each output vector by its corresponding `exp_sum` to obtain the normalized attention.

Why this works:  
- The denominator is a linear functional of the exponentials; summing over disjoint page subsets preserves additivity.
- By keeping `exp_sum` in fast shared memory (or registers) we avoid costly reductions across the whole KV matrix, which would otherwise require an all‑reduce per query.

**Non‑obvious insight:**  
Because the softmax denominator is *global* but *additive*, you can compute it incrementally **without ever materializing the full attention map**. This turns a \(O(NQ)\) memory operation into a streaming one, enabling sub‑millisecond inference even for 10k‑token contexts while still guaranteeing exact normalization.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
