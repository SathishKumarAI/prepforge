---
qid: q029
question: "How does linear regression work and what are its key assumptions?"
topic: "Machine Learning"
model: "Claude Code (authored)"
sources: []
---

**Clarify** — I'll assume ordinary least squares for a continuous target and cover the model, fitting, and the classical assumptions. Confirm we want both mechanics and the assumptions that make inference valid.

**Approach** — Present the hypothesis, the loss and how it's minimized, then list assumptions and why each matters.

**Depth** — Linear regression models the target as a weighted sum of features plus intercept: `ŷ = Xβ + b`. Fitting minimizes the sum of squared residuals. This has a **closed-form solution**, `β = (XᵀX)⁻¹Xᵀy` (the normal equations), or is solved iteratively via gradient descent for large/high-dimensional data. Key assumptions: **linearity** (target is linear in parameters), **independence** of errors, **homoscedasticity** (constant error variance), **normally distributed errors** (for valid confidence intervals/p-values), and **no perfect multicollinearity** (so XᵀX is invertible). Complexity of the closed form is O(n·d²) dominated by the matrix inversion.

**Edge cases** — Outliers dominate squared loss; multicollinearity inflates coefficient variance; non-linear relationships need feature transforms or polynomial terms; heteroscedasticity breaks inference.

**Optimize & communicate** — I'd add regularization (ridge/lasso) when d is large or features correlate, and check residual plots to validate assumptions. Signal: I distinguish assumptions needed for *prediction* from those needed for *statistical inference*, and I know when the closed form is impractical.
