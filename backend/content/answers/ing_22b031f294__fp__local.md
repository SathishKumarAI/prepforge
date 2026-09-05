---
qid: ing_22b031f294__fp__local
question: 'Explain: Title: Switch Transformers: Scaling to Trillion Parameter Models
  with Simple and Efficient Sparsity'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 180
output_tokens: 435
total_tokens: 615
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:19:23-05:00'
sources: []
---

**Why a “switch” is the right sparsity for trillion‑parameter models**

The core challenge in scaling transformers is that each token must attend to *every* hidden unit, so a model with \(N\) parameters has an \(\mathcal{O}(N^2)\) memory and compute footprint.  If we could guarantee that every token only activates a tiny subset of the network, the cost would drop linearly in the activation ratio.

A **switch** layer satisfies this by routing each token to *one* expert out of \(K\).  
Mathematically:
\[
h = \operatorname{Switch}(x) = e_{k(x)}\,W_k x,
\]
where \(e_{k}\) is a one‑hot selector and \(W_k\) are expert weight matrices.  The routing function \(k(\cdot)\) is learned end‑to‑end; it can be as simple as a linear projection followed by top‑1 softmax.

Why does this work?  
1. **Information bottleneck reduction**: By concentrating capacity on the most relevant experts, we preserve expressive power while keeping per‑token FLOPs at \(\mathcal{O}(N/K)\).  
2. **Gradient flow symmetry**: All experts receive gradients from many tokens, preventing dead experts—an issue that plagued earlier mixture‑of‑experts designs.  
3. **Load balancing regularizer**: Adding a small penalty on the variance of expert usage forces the model to use all experts evenly, turning a potentially pathological sparsity into a robust training signal.

*Non‑obvious insight*: The routing function need not be probabilistic.  A deterministic top‑1 gate actually yields better convergence because it eliminates stochastic gradient noise that would otherwise destabilize the large number of expert parameters.

Thus, Switch Transformers achieve trillion‑parameter capacity with only linear scaling in compute and memory by turning dense attention into a carefully controlled sparse routing problem rooted in information theory and optimization.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
