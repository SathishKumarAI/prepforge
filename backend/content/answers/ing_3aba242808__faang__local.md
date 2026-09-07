---
qid: ing_3aba242808__faang__local
question: 'Explain: 1.1.4. Multi-task Lasso — 1.1. Linear Models \u2014 scikit-learn
  1.9.0 documentation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 259
output_tokens: 587
total_tokens: 846
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:00:58-05:00'
sources: []
---

**Clarify**  
You’re asking about *Multi‑Task Lasso* in the context of scikit‑learn’s linear models (v1.9.0). I’ll assume you want a concise explanation of what it is, why we use it, and how it differs from ordinary Lasso or Ridge.

---

### Approach
1. Define the problem: multiple related regression tasks sharing predictors.  
2. Explain the objective function.  
3. Highlight key hyper‑parameters (`alpha`, `selection`).  
4. Mention implementation details (solver, convergence).  
5. Summarize use‑cases and trade‑offs.

---

### Depth  

| Item | Detail |
|------|--------|
| **Goal** | Simultaneously learn weight matrices \(W \in \mathbb{R}^{p\times T}\) for \(T\) tasks while encouraging shared sparsity across tasks. |
| **Objective** | \(\min_W \frac{1}{2n} \sum_{t=1}^T \|X_tw_t - y_t\|_2^2 + \alpha \sum_{j=1}^p \|W_j\|_2\). The ℓ₂‑norm over columns induces *group* sparsity: either all tasks use a feature or none. |
| **Hyper‑parameters** | `alpha` (regularization strength), `selection` (`'cyclic'` or `'random'`) for coordinate descent, `max_iter`, `tol`. |
| **Solver** | Coordinate descent with block updates; uses warm starts and screening rules to prune inactive features. |
| **Complexity** | Roughly \(O(n p T)\) per iteration; converges in ~\(O(\log(1/\varepsilon))\). |

---

### Edge Cases  

* **Highly correlated predictors** → may cause unstable feature selection.  
* **Small sample size vs many tasks** → risk of over‑regularization.  
* **Missing data** → scikit‑learn requires complete matrices; impute first.

---

### Optimize & Communicate  

- **Improvement:** Use `saga` solver (stochastic) for very large \(n\).  
- **Narrative tip:** Emphasize that Multi‑Task Lasso is the “group‑lasso” variant tailored to regressions, not classification.  
- **Result interpretation:** Non‑zero rows in \(W\) identify features useful across tasks; zero rows mean the feature is dropped globally.

---

**Bottom line:** Multi‑Task Lasso lets you borrow strength across related regression problems while keeping a clean, shared sparsity pattern—perfect when predictors are expensive to measure but you have many related outputs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
