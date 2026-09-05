---
qid: ing_3aba242808__think__local
question: 'Explain: 1.1.4. Multi-task Lasso — 1.1. Linear Models \u2014 scikit-learn
  1.9.0 documentation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 215
output_tokens: 574
total_tokens: 789
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:44:22-05:00'
sources: []
---

**1. Clarify the scope & assumptions**  
   - Identify what “Multi‑task Lasso” means: a linear regression with ℓ₁/ℓ₂ regularisation that couples multiple output tasks.  
   - Assume the reader knows basic scikit‑learn API conventions (estimator, `fit`, `predict`).  
   - Note that we’re discussing version 1.9.0 of the docs.

**2. Adopt a mental model**  
   - Treat it as an extension of the standard Lasso (`LinearRegression` + `Lasso`) but with a *group‑wise* penalty: coefficients are shared across tasks, encouraging sparsity at the feature level while allowing task‑specific weights.  
   - Visualise the objective function: data fidelity term + λ ∑₍j₎‖βⱼ‖₂.

**3. Step‑by‑step reasoning**  
   1. **Explain the estimator class** (`MultiTaskLasso`), its parent classes, and why it inherits from `BaseEstimator`.  
   2. **List key parameters** (`alpha`, `max_iter`, `tol`, etc.) and their roles in controlling sparsity and convergence.  
   3. **Describe the fitting procedure**: coordinate descent over tasks, update rule for each feature’s coefficient vector, convergence criterion.  
   4. **Show usage patterns** with a toy dataset (X shape `(n_samples, n_features)`, Y shape `(n_samples, n_tasks)`), calling `fit` and `predict`.  
   5. **Highlight practical tips**: scaling X/Y, cross‑validation (`MultiTaskLassoCV`), interpreting the coefficient matrix.

**4. Common pitfalls to avoid**  
   - Confusing ℓ₁/ℓ₂ penalty with pure Lasso (which uses only ℓ₁).  
   - Forgetting that Y must be 2‑D; a single task is still acceptable but will be treated as a 1‑column array.  
   - Ignoring the need to standardise features before fitting for meaningful sparsity.

**5. Sanity‑check & verbalise**  
   - Verify dimensions: coefficients shape `(n_features, n_tasks)`.  
   - Explain that zero rows in this matrix mean the corresponding feature is excluded from *all* tasks.  
   - Summarise how Multi‑Task Lasso trades off model complexity across tasks and why it’s useful when tasks are related (e.g., multi‑output regression).  

By following these numbered thoughts, you can construct a clear, accurate explanation that mirrors the scikit‑learn 1.9.0 documentation style.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
