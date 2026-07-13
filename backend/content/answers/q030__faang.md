---
qid: q030
question: "What is logistic regression and how does it differ from linear regression?"
topic: "Machine Learning"
model: "Claude Code (authored)"
sources: []
---

**Clarify** — I'll assume binary classification and explain how logistic regression adapts the linear model to output probabilities. The key contrast is output space and loss.

**Approach** — Start from the shared linear core, add the sigmoid, then the loss, then enumerate differences.

**Depth** — Logistic regression computes a linear combination `z = Xβ + b`, then passes it through the **sigmoid** `σ(z) = 1/(1+e⁻ᶻ)` to map the real line to (0,1) — a probability. We threshold (e.g., 0.5) for a class decision. It's fit by minimizing **binary cross-entropy** (log loss), a convex objective solved with gradient descent — there's no closed form like OLS. Differences from linear regression: (1) **output** — probability/class vs continuous value; (2) **link** — sigmoid squashes the linear output; (3) **loss** — cross-entropy vs MSE; (4) **interpretation** — coefficients are log-odds, not direct effects on y. Despite "regression" in the name, it's a classifier. It's linear in the *log-odds* (a linear decision boundary).

**Edge cases** — Perfectly separable data makes weights diverge (needs regularization); it can't model non-linear boundaries without feature engineering; class imbalance skews the threshold.

**Optimize & communicate** — Softmax generalizes it to multiclass; add L2 for stability; tune the threshold via the ROC/precision-recall trade-off. Signal: I see it as a linear model with a probabilistic output layer.
