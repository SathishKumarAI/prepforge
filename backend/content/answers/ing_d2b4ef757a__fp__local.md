---
qid: ing_d2b4ef757a__fp__local
question: What is an ensemble method? — What is the difference between Bagging and
  Boosting? | Quantdare
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 182
output_tokens: 561
total_tokens: 743
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:29:03-05:00'
sources: []
---

**Ensemble learning** tackles a core statistical dilemma: *any single predictor is limited by its own bias–variance trade‑off.*  
From the perspective of risk minimization \(R(f)=\mathbb{E}[L(Y,f(X))]\), an ensemble forms a convex combination  

\[
f_{\text{ens}}(x)=\sum_{t=1}^{T}\alpha_t f_t(x),
\]

where each base learner \(f_t\) is trained on the same data but explores different parts of hypothesis space. The convex hull of the base predictors contains models with strictly lower expected loss than any individual member, provided the errors are not perfectly correlated.

---

### Bagging (Bootstrap Aggregating)

* **Mechanism**: Draw \(B\) bootstrap samples \(\{D_b\}\), train a learner on each, then average predictions.
* **Why it works**: The variance of an unbiased estimator shrinks by a factor of \(1/B\) when averaging independent copies. Bootstrapping induces *approximate independence* among the base models, so bagging mainly reduces variance while keeping bias unchanged.
* **Key insight**: Bagging is most effective when the base learner has high variance (e.g., decision trees). If the learner is already low‑variance, bagging offers little gain.

### Boosting

* **Mechanism**: Train sequentially; each learner focuses on instances misclassified by previous ones. The final model is a weighted sum of weak learners.
* **Why it works**: By reweighting the data distribution, boosting iteratively reduces *training error* and, under certain conditions (e.g., margin theory), also improves generalization. It exploits the *bias–variance trade‑off* by first fitting easy patterns (low bias) then correcting residuals (reducing variance).
* **Key insight**: Boosting can be viewed as a gradient descent in function space—each learner is the steepest descent step of an additive model. This geometric view explains why boosting often overfits less than expected: it follows the true loss surface rather than blindly averaging.

---

#### Non‑obvious takeaway

Both methods *shrink* the hypothesis set into a convex hull, but bagging expands the set by sampling data while keeping weights equal; boosting contracts the set by sequentially adding directions that point toward lower loss. Consequently, bagging is robust to outliers (since each bootstrap may omit them), whereas boosting is more sensitive to noisy labels—an insight often overlooked when choosing between them.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
