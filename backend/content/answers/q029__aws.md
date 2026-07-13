---
qid: q029
question: "How does linear regression work and what are its key assumptions?"
topic: "Machine Learning"
model: "Claude Code (authored)"
sources: []
---

I'd explain the mechanics, then stress the assumptions — knowing *when it breaks* is the **Dive Deep** signal. Linear regression fits a weighted sum of features, y = wᵀx + b, by minimizing squared error, solvable in closed form (normal equation) or via gradient descent for large data. The coefficients are interpretable: each is the marginal effect of a feature holding others fixed, which stakeholders love.

Its assumptions are the interview crux: linear relationship between features and target, independent errors, homoscedasticity (constant error variance), normally-distributed residuals, and low multicollinearity. I'd show I check these: "On a pricing model, residual plots showed a fan shape — heteroscedasticity — so I log-transformed the target and added interaction terms, dropping RMSE 12%."

I'd tie it to a real trade-off I owned (**Invent and Simplify**): I often start with linear regression as a transparent, cheap baseline before reaching for gradient boosting, because a model I can explain to auditors beats a marginal accuracy gain I can't defend. On AWS, SageMaker Linear Learner trains this at scale.

A bar-raiser listens for whether I validate assumptions with diagnostics rather than blindly fitting.
