---
qid: ing_d3ce646ef8__fp__local
question: What are the three types of data models?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 417
total_tokens: 586
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:31:31-05:00'
sources: []
---

### Why we talk about “data models”

At its core, machine learning is an optimization problem: *find a function that maps inputs \(x\) to outputs \(y\) while minimizing expected loss*.  
The **model** supplies the hypothesis space \(\mathcal{H}\).  Its shape determines what functions can be represented and how the optimizer navigates that space.  Three canonical families arise from different inductive biases:

| Type | Inductive bias | Geometry of \(\mathcal{H}\) | Typical use |
|------|----------------|-----------------------------|-------------|
| **Linear** | *Additivity* – outputs are weighted sums of features | Hyperplanes in \(\mathbb{R}^d\) | Regression, logistic classification, fast baseline |
| **Non‑linear (kernel/implicit)** | *Similarity* via a reproducing kernel | Infinite‑dimensional RKHS; convex duality | SVMs, Gaussian processes, spectral methods |
| **Deep neural** | *Hierarchical compositionality* – layers of non‑linearities | Non‑convex, highly expressive manifolds | Vision, language, reinforcement learning |

### A subtle insight

Most people equate the “deep” family with merely more parameters.  In fact, the key advantage is **parameter sharing across layers**: each layer learns a transformation that can be reused at multiple depths, yielding far fewer degrees of freedom than an equivalent flat model.  This structure reduces sample complexity and aligns the hypothesis space with natural hierarchical data (e.g., pixels → edges → objects).  Without such sharing, the network would need an exponential number of parameters to capture the same compositional patterns.

Thus, from the optimization viewpoint, each data‑model type defines a different *geometry* for \(\mathcal{H}\), shaping both what can be learned and how efficiently it can be optimized.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
