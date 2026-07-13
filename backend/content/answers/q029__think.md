---
qid: q029
question: "How does linear regression work and what are its key assumptions?"
topic: "Machine Learning"
model: "Claude Code (authored)"
sources: []
---

1. **Clarify first.** Split the question into two halves - the mechanism and the assumptions - and say you'll cover both. Assume they want ordinary least squares and why the assumptions matter for inference.

2. **Mental model.** Picture fitting the line/hyperplane that minimizes total squared vertical distance to the points. Coefficients are interpretable slopes; assumptions are the conditions under which that fit and its confidence intervals are trustworthy.

3. **Reason step by step.** The model is y-hat = b0 + b1x1 + ... + bnxn, fit by minimizing the sum of squared residuals (OLS), solvable in closed form or via gradient descent. Then list assumptions: linearity, independence of errors, homoscedasticity (constant error variance), normality of residuals (mainly for inference), and low multicollinearity. Explain each coefficient is the expected change in y per unit x, holding others fixed.

4. **Traps to avoid.** Don't say it needs no assumptions, and don't confuse it with margin-maximizing (SVM) or decision boundaries (classification). Note violations bias estimates or invalidate p-values, not always predictions.

5. **Sanity-check.** For each assumption, name the diagnostic (residual plot for homoscedasticity, VIF for multicollinearity) so the interviewer sees you could actually verify them in practice.
