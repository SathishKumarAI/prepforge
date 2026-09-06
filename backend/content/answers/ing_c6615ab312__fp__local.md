---
qid: ing_c6615ab312__fp__local
question: 'Explain: Q: Explain why transformer attention is O(n²) and what alternatives
  exist.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 563
total_tokens: 740
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:03:20-05:00'
sources: []
---

**Why a transformer’s self‑attention costs \(O(n^{2})\)**  
Self‑attention must compare every token in the sequence with every other token to compute its relevance score. Formally, for an input of length \(n\), we form query, key and value matrices \(\mathbf{Q},\mathbf{K},\mathbf{V}\in\mathbb{R}^{n\times d}\). The attention matrix is  
\[
\mathbf{A}= \operatorname{softmax}\!\left(\frac{\mathbf{Q}\mathbf{K}^{\top}}{\sqrt{d}}\right),
\]
which requires a full \(n\times n\) dot‑product. Each of the \(n^{2}\) entries is then multiplied by a value vector, giving total work proportional to \(n^{2}d\). This quadratic term dominates because \(n\) can be large (e.g., long documents or video frames), while \(d\) stays fixed.

**Alternatives that break the quadratic wall**

| Approach | Core idea | Complexity |
|----------|-----------|------------|
| **Sparse/Local attention** | Restrict each token to attend only a window of size \(k\ll n\). | \(O(nk)\) |
| **Linear‑time transformers** (e.g., Performer, Linear Transformers) | Replace the softmax kernel with a positive random feature map \(\phi(\mathbf{Q})\phi(\mathbf{K})^{\top}\), enabling \(\sum_i \phi(q_i)(\phi(k_i)^{\top}V)\). | \(O(nd)\) |
| **Recurrent or hierarchical attention** | Process tokens in blocks, passing a summary vector between blocks. | \(O(nb)\) with block size \(b\) |
| **Kernel‑based attention** (e.g., Nyström, Low‑rank factorization) | Approximate the full matrix using a subset of landmark columns/rows. | \(O(nm d)\), where \(m \ll n\) |

**Non‑obvious insight:**  
The quadratic cost is not merely due to pairwise comparisons; it stems from *global* information flow. If we constrain attention locally, we lose the ability for distant tokens to influence each other directly, which can be mitigated by *hierarchical* or *recursive* designs that aggregate long‑range context in a multi‑scale fashion—essentially turning a dense graph into a sparse one without sacrificing expressivity.

---

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
