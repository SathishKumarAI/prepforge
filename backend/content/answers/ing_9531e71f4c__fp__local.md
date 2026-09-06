---
qid: ing_9531e71f4c__fp__local
question: 'Explain: By Constraint — Model Selection Guide'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 411
total_tokens: 578
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:22:41-05:00'
sources: []
---

**By‑Constraint Model Selection**

At its core, a predictive model is an *information compressor*: it maps high‑dimensional data \(X\) to a concise representation that preserves the label \(Y\).  
The “by‑constraint” approach reframes model selection as choosing a *compression scheme* that satisfies a *budget* on a particular resource (time, memory, FLOPs, energy, or privacy loss).

1. **Formulate the budget**: let \(C(\theta)\) be the cost of parameter vector \(\theta\).  
2. **Define the objective**: minimize empirical risk \(L(\theta)=\frac{1}{n}\sum_{i} \ell(f_\theta(x_i),y_i)\).  
3. **Constrain**: solve  
   \[
   \min_{\theta} L(\theta) \quad\text{s.t.}\quad C(\theta)\leq B .
   \]
4. **Duality insight**: the Lagrangian \(L_\lambda(\theta)=L(\theta)+\lambda(C(\theta)-B)\) reveals that increasing the penalty \(\lambda\) trades accuracy for resource usage smoothly, mirroring the *rate‑distortion* trade‑off in information theory.

The non‑obvious insight is that **constraints can be more informative than hyperparameters**. A fixed model size \(k\) ignores how cost scales with architecture shape (e.g., depth vs width). By constraining an explicit metric, we let the optimizer discover the *shape* that best compresses information under the budget—often yielding thinner, deeper nets or sparsified weights that outperform arbitrarily chosen baselines.

Thus, by constraint turns model selection into a principled optimization problem grounded in compression theory, ensuring every extra parameter truly justifies its cost.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
