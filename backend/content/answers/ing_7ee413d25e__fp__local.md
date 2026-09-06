---
qid: ing_7ee413d25e__fp__local
question: 'Explain: Learning Objectives — Ridge and Lasso Regression in Python - Analytics
  Vidhya'
topic: Data Analytics
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 612
total_tokens: 789
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:35:17-05:00'
sources: []
---

**Why Ridge & Lasso?**  
At its core, linear regression seeks a weight vector **w** that minimizes the sum of squared residuals  
\(L(\mathbf{w})=\|\mathbf{y}-X\mathbf{w}\|^{2}_{2}\).  
When predictors are collinear or outnumber observations, \(X^{T}X\) becomes ill‑conditioned and the ordinary least‑squares (OLS) solution explodes. Regularisation adds a penalty term to the loss:  

* **Ridge**: \(L_{\text{ridge}}(\mathbf{w})=L(\mathbf{w})+\lambda \|\mathbf{w}\|^{2}_{2}\).  
* **Lasso**: \(L_{\text{lasso}}(\mathbf{w})=L(\mathbf{w})+\lambda \|\mathbf{w}\|_{1}\).

Both are *convex*, guaranteeing a unique global optimum, but they act differently. Ridge shrinks coefficients toward zero uniformly—geometrically the ℓ₂ ball is round, so the optimal point lies on its surface. Lasso’s ℓ₁ ball has sharp corners; the optimizer often lands exactly on a corner, forcing some weights to be *exactly* zero—hence automatic feature selection.

**Learning Objectives in Python**

1. **Derive the closed‑form solution for Ridge** (solve \((X^{T}X+\lambda I)\mathbf{w}=X^{T}\mathbf{y}\)) and implement it with `numpy`.  
2. **Implement Lasso via coordinate descent**, understanding why the soft‑thresholding operator appears in the update step.  
3. **Use scikit‑learn’s `Ridge` and `Lasso`** to compare cross‑validated performance, learning how to tune λ (α) with `GridSearchCV`.  
4. **Visualise bias–variance trade‑off**: plot training vs. validation error as λ varies, interpreting the elbow point.  
5. **Interpret model sparsity**: extract non‑zero coefficients and relate them back to domain knowledge.

**Non‑obvious insight:**  
While Ridge reduces variance by shrinking all weights, it never eliminates irrelevant features. Lasso’s *exact* zeros are a consequence of the ℓ₁ norm’s geometry; however, when predictors are highly correlated, Lasso arbitrarily selects one and discards others—leading to instability. The Elastic Net (mixing ℓ₁ and ℓ₂) mitigates this by combining Ridge’s grouping effect with Lasso’s sparsity. Understanding this subtle interplay is crucial for robust feature selection in high‑dimensional data.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
