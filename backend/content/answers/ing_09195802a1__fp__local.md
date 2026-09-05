---
qid: ing_09195802a1__fp__local
question: Mistral 7B shipped with grouped-query attention and sliding-window attention.
  What does each buy you, and what does each cost?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 187
output_tokens: 600
total_tokens: 787
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:25:15-05:00'
sources: []
---

### Grouped‑Query Attention (GQA)

**What it buys you**

- **Reduced head‑to‑head interaction**: By clustering the Q‑keys into *g* groups, each query only attends to a subset of keys per group instead of all heads.  
- **Lower memory footprint**: The attention matrix shrinks from \(H\times H\) (full‑head cross‑attention) to \((H/g)\times(H/g)\) per group, cutting the quadratic cost roughly by a factor of \(g^2\).  
- **Faster kernels on GPUs/TPUs**: Smaller matrices fit better in shared memory and allow more parallelism, giving ~20–30 % speed‑up for long‑sequence workloads.

**What it costs**

- **Approximation error**: Queries miss cross‑group interactions that could encode subtle long‑range dependencies.  
- **Hyperparameter tuning**: Choosing *g* is problem‑specific; too many groups hurt accuracy, too few negate the speed benefit.  
- **Potential instability**: The grouping mask can amplify variance in attention weights if not regularised.

---

### Sliding‑Window Attention (SWA)

**What it buys you**

- **Linear‑time complexity**: Each token attends only to a fixed window of size *w*, reducing the per‑layer cost from \(O(L^2)\) to \(O(L\,w)\).  
- **Memory savings**: The attention map becomes sparse and can be stored as a banded matrix, cutting RAM usage by roughly \((L-w)/L\).  
- **Stronger locality bias**: For tasks where nearby tokens are most informative (e.g., language modeling), SWA preserves the dominant interactions while discarding far‑away noise.

**What it costs**

- **Limited receptive field**: Long‑range dependencies beyond *w* must be captured indirectly through stacking layers, which can slow convergence and degrade performance on tasks needing global context.  
- **Edge effects**: Tokens near sequence boundaries attend fewer keys unless padding or reflection is used, potentially biasing predictions.  
- **Hyperparameter sensitivity**: Window size *w* trades off between speed and expressivity; a poor choice can cripple the model.

---

#### Non‑obvious insight

Both GQA and SWA are **controlled sparsification strategies** that turn the quadratic attention into *structured sparsity*. The key is that they preserve *critical subspaces* (groups or windows) where information flow is most dense, while discarding low‑impact interactions. This mirrors optimal transport: we concentrate capacity on the “high‑mass” paths and let the model learn to propagate long‑range signals through a chain of local hops. Consequently, a modest increase in depth can recover much of the lost expressivity without reintroducing quadratic costs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
