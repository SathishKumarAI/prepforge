---
qid: ing_f4392a7b26__fp__local
question: 'Explain: Q: Explain the attention mechanism and why it scales quadratically.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 450
total_tokens: 624
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:38:10-05:00'
sources: []
---

**Why attention blows up**

The core problem of a transformer is *to fuse information from every token with every other token*.  
In a naive “pairwise” formulation we compute for each pair \((i,j)\)

\[
e_{ij}=f(q_i,k_j)
\]

where \(q_i\) and \(k_j\) are linear projections of the input embeddings.  
The number of such pairs is \(n^2\) for a sequence of length \(n\).  
Thus, both the memory to hold all scores and the floating‑point operations grow as \(\mathcal O(n^2)\).

**From first principles**

1. **Information flow** – A token’s representation must be influenced by *all* other tokens; otherwise we would lose global context.
2. **Optimality** – The soft‑max weighting of pairwise scores is the maximum‑entropy way to distribute influence given only local similarity information (an instance of the principle “choose the least biased distribution”).
3. **Geometry** – In high‑dimensional space, the dot product \(q_i^\top k_j\) is the natural distance metric; scaling it by \(\sqrt{d_k}\) keeps variance independent of dimensionality, stabilising gradients.

These three facts compel us to compute every pairwise similarity. Hence the quadratic term is not an artefact but a necessary consequence of *global* interaction under maximum‑entropy constraints.

**Non‑obvious insight**

The quadratic bottleneck is *not* inherent to the attention idea itself; it arises from insisting that **every token sees every other token in one layer**. If we relax this by sparsifying the pairwise graph (e.g., local windows, top‑k selection, or learned sparsity), we can preserve most of the expressive power while reducing complexity to \(\mathcal O(n\log n)\) or even linear. Thus, the “quadratic” scaling is a design choice—one that balances expressivity against computational feasibility—not a mathematical inevitability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
