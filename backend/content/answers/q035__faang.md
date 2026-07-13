---
qid: q035
question: "Explain the bias-variance trade-off."
topic: "Machine Learning"
model: "Claude Code (authored)"
sources: []
---

**Clarify** — I'll decompose expected test error into bias, variance, and irreducible noise, then explain the tension and how to navigate it. Confirm we want intuition plus the practical dial.

**Approach** — Define each term, show the decomposition, then map complexity to the two failure modes.

**Depth** — Expected generalization error decomposes as **bias² + variance + irreducible error**. **Bias** is error from overly simplistic assumptions — the model can't capture the true pattern (underfitting); e.g., linear model on curved data. **Variance** is sensitivity to the specific training sample — the model changes a lot with different data (overfitting); e.g., a deep unpruned tree. **Irreducible error** is inherent noise no model removes. The trade-off: increasing model complexity lowers bias but raises variance, and vice versa. The goal is the **sweet spot** minimizing total error, typically found where validation error bottoms out.

**Edge cases** — High bias *and* high variance is possible (bad model + bad data). Modern over-parameterized deep nets show "double descent," where error drops again past the interpolation point — complicating the classic U-curve.

**Optimize & communicate** — I'd diagnose via learning curves: high bias shows both errors high and close; high variance shows a wide train-validation gap. Fix bias with more complexity/features; fix variance with regularization, more data, or ensembling. Signal: I use the decomposition to *diagnose*, not just recite.
