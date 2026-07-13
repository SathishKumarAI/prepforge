---
qid: q026
question: "What is the difference between classification and regression?"
topic: "Machine Learning"
model: "Claude Code (authored)"
sources: []
---

**Clarify** — Both are supervised learning; the distinction is the *output type*. I'll assume the interviewer wants the core difference plus how it ripples into losses and metrics.

**Approach** — Contrast output space, then the downstream consequences: loss functions, metrics, and typical algorithms.

**Depth** — *Classification* predicts a discrete label from a finite set — binary (spam/not) or multiclass (digit 0–9). Outputs are categories, often via predicted class probabilities. Typical loss: cross-entropy. Metrics: accuracy, precision, recall, F1, AUC. *Regression* predicts a continuous numeric value — house price, temperature. Loss: mean squared error or mean absolute error. Metrics: RMSE, MAE, R². Many algorithms span both (decision trees, neural nets, gradient boosting) by swapping the output layer and loss; logistic regression is classification despite the name, because it maps to probabilities via the sigmoid.

**Edge cases** — Ordinal targets (ratings 1–5) blur the line; you can threshold a regression output into classes, or treat counts with Poisson regression. Class imbalance breaks accuracy in classification.

**Optimize & communicate** — I'd stress that framing the problem correctly matters: predicting *how many* days until churn (regression) versus *whether* a user churns (classification) changes the whole pipeline. Signal: I connect output type to loss, metric, and problem framing rather than reciting definitions.
