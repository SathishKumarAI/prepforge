---
qid: ing_c29d7795c1__fp__local
question: 'Explain: The Contiguous Memory Problem — Paged Attention'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 443
total_tokens: 613
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:55:54-05:00'
sources: []
---

### The Contiguous‑Memory Problem in Paged Attention

When a transformer attends over a long sequence \(x_{1:N}\), the naïve self‑attention matrix has size \(\mathcal{O}(N^2)\). To reduce this, **paged attention** partitions the key/value set into *pages* of fixed width \(w\) and lets each query attend only to its relevant page. The problem is that a query’s “relevant” region may straddle two adjacent pages; if we restrict it to one page, we lose information—hence the **contiguous‑memory problem**.

From an optimization viewpoint, attention can be seen as solving
\[
\max_{q} \sum_{i=1}^{N}\alpha_i\,k_i
\quad\text{s.t.}\;\;\sum_i\alpha_i=1,\;\alpha_i\ge0,
\]
where the weights \(\alpha_i=\operatorname{softmax}(q^\top k_i)\) concentrate on a contiguous interval of keys (the true relevance region). Paged attention forces \(\alpha_i=0\) outside a page, which is a *hard constraint* that may cut off part of the optimum. The cost is an extra **constraint violation term** in the dual problem: the Lagrange multiplier penalizes missing keys, and its magnitude grows with the page size \(w\). Thus, smaller pages mean tighter constraints but more frequent violations.

A non‑obvious insight is that *the optimal page boundaries are not static*: they should be learned jointly with queries so that each page’s content aligns with the distribution of relevance windows. In practice this means training a lightweight “page selector” that predicts which two adjacent pages a query will need, then fusing their outputs (e.g., via a small attention over the concatenated keys). This dynamic paging preserves contiguity while keeping memory usage linear in \(N\), reconciling efficiency with optimality.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
