---
qid: q070
question: "Explain MAE, MSE, RMSE, and R-squared for regression evaluation."
topic: "Data Science"
model: "Claude Code (authored)"
sources: []
---

**Clarify** — Confirm we're evaluating a regression model's predictions against actuals, and that the interviewer wants both formulas and when to prefer each metric.

**Approach** — Define each, note units and sensitivity to outliers, then compare.

**Depth** — **MAE** (mean absolute error) averages `|y − ŷ|`; it's in the target's units and treats all errors linearly, so it's robust to outliers. **MSE** (mean squared error) averages `(y − ŷ)²`; squaring penalizes large errors heavily, so it's outlier-sensitive, and its units are squared. **RMSE** is √MSE, restoring the original units while keeping the outlier sensitivity — the most common headline metric. **R²** (coefficient of determination) = `1 − SS_res/SS_tot`; it's the fraction of variance explained, unitless, where 1 is perfect and 0 matches predicting the mean.

**Edge cases** — R² can be negative for a model worse than the mean, and it inflates as you add features (use adjusted R²). RMSE/MSE are dominated by a few large errors. MAE's gradient is undefined at zero.

**Optimize & communicate** — Pick MAE when outliers are noise you want to ignore, RMSE when large errors are costly, and report R² for stakeholder-friendly variance explained. Narrate: "I'd lead with RMSE plus R², and check MAE to see if outliers drive the error." That framing signals metric fluency.
