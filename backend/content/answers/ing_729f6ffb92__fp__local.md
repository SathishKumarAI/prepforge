---
qid: ing_729f6ffb92__fp__local
question: 'Explain: ── Data models ───────────────────────────────────────────────────────────────'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 440
total_tokens: 615
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:08:10-05:00'
sources: []
---

**Data Models in Machine Learning – a First‑Principles View**

At its core, learning is the problem of *inferring a function* \(f\) that maps inputs \(x\in\mathcal{X}\) to outputs \(y\in\mathcal{Y}\). We never observe \(f\) directly; we only have a finite sample \(\{(x_i,y_i)\}_{i=1}^n\). The **data model** is the mathematical hypothesis space \(\mathcal{H}\subseteq\{\mathbb{R}^{\mathcal{X}}\to\mathbb{R}\}\) we posit to contain a good approximation of \(f\).

Why must \(\mathcal{H}\) exist?  
1. **Statistical consistency**: If the true \(f^\*\in\mathcal{H}\), empirical risk minimization (ERM) guarantees convergence of the learned \(\hat f\to f^\*\).  
2. **Computational tractability**: Infinite‑dimensional spaces are intractable; we restrict to parametric families (linear, neural nets, kernels) whose parameters can be optimized efficiently.

The deeper principle is *bias–variance trade‑off*: a richer \(\mathcal{H}\) reduces bias but inflates variance; a smaller \(\mathcal{H}\) does the opposite. Regularization (e.g., weight decay, early stopping) effectively shrinks \(\mathcal{H}\)’s capacity to balance this trade‑off.

**Non‑obvious insight:**  
The *capacity* of a data model is not merely its parameter count but how its geometry shapes the hypothesis space. Two networks with identical weights can represent vastly different functions because their activation patterns carve distinct decision boundaries. Thus, understanding a model’s **expressive manifold**—the set of all outputs reachable as parameters vary—is crucial for both learning guarantees and architectural design.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
