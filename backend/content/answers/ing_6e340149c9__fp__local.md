---
qid: ing_6e340149c9__fp__local
question: 'Explain: 1.11.1.1.5. Monotonic Constraints — 1.11. Ensembles: Gradient
  boosting, random forests, bagging, voting, stacking \u2014 scikit-learn 1.9.0 documentation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 213
output_tokens: 796
total_tokens: 1009
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:58:56-05:00'
sources: []
---

**Monotonic Constraints (scikit‑learn 1.11.1.1.5)**  
The core problem: many domains require a *predictor* that respects an ordering on certain features—e.g., higher income should never lower credit risk. A model \(f(\mathbf{x})\) is **monotone** in feature \(j\) if
\[
x_j \le y_j \;\Rightarrow\; f(x_1,\dots,x_j,\dots,x_p)\le f(x_1,\dots,y_j,\dots,x_p).
\]
Enforcing this property is an *optimization* over a function class: we minimize loss while constraining the partial derivatives (or finite differences) to be non‑negative. In tree ensembles, each split on \(j\) must preserve the ordering of leaf values; thus leaf scores are sorted by the feature value. The algorithm learns leaf predictions via constrained linear programming or isotonic regression, guaranteeing global monotonicity without sacrificing expressiveness.

*Non‑obvious insight*: Monotonicity is **not** a local property—changing one split can ripple through the entire tree because subsequent splits depend on ancestor decisions. Therefore, enforcing constraints at each node separately yields only *local* monotonicity; full compliance requires solving a global ordering problem across all leaves.

---

**Ensemble Methods (scikit‑learn 1.9.0)**  
All ensembles are built from a **base learner** \(h\) applied repeatedly on transformed data or model outputs:

| Method | Transformation | Aggregation |
|--------|----------------|-------------|
| **Bagging** | Bootstrap samples of the training set; each \(h_i\) sees a different subset. | Majority vote (classification) / mean (regression). |
| **Random Forests** | Bagging + random feature sub‑spaces at each split. | Same as bagging, but reduces correlation among trees, improving variance reduction. |
| **Gradient Boosting** | Sequentially fit \(h_i\) to the *negative gradient* of a loss function (pseudo‑residual). | Additive model \(\hat{y} = \sum_{i=1}^{T}\alpha_i h_i(x)\); learns residuals, thus minimizing an arbitrary convex loss. |
| **Voting** | Train diverse models \(h_1,\dots,h_k\) on the same data; each predicts independently. | Combine via hard or soft voting (average probabilities). |
| **Stacking** | Use predictions of base learners as features for a *meta‑learner* trained to correct systematic errors. | Learns optimal linear/nonlinear combination, effectively performing bias–variance trade‑off across heterogeneous models. |

Underlying principle: **bias–variance decomposition**—each method manipulates either the bias (e.g., boosting reduces bias by fitting residuals) or variance (bagging/forest decorrelate trees). The ensemble’s prediction error \(E[(\hat{f}-f)^2]\) can be expressed as:
\[
\text{Bias}^2 + \frac{\sigma^2}{T}\,,
\]
where \(\sigma^2\) is the average variance of base learners and \(T\) their number; correlation among learners inflates \(\sigma^2\). Hence random forests’ feature sub‑space strategy explicitly reduces this term.

*Non‑obvious insight*: In **stacking**, the meta‑learner often learns *negative correlations* between base models, effectively performing a form of *error cancellation*. This is why stacking can outperform weighted averaging even when base learners are individually strong—because it systematically exploits complementary errors rather than just combining predictions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
