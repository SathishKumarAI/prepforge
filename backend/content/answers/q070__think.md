---
qid: q070
question: "Explain MAE, MSE, RMSE, and R-squared for regression evaluation."
topic: "Data Science"
model: "Claude Code (authored)"
sources: []
---

1. **Clarify first.** Confirm these are *regression* metrics on continuous targets, and that the useful angle is not just formulas but *how each treats errors* and *when to pick which*. Assume you have predictions and ground-truth values.
2. **Mental model.** Split them into two families: absolute-vs-squared error metrics (MAE, MSE, RMSE) that measure size of misses, and R² which measures proportion of variance explained. Squaring is the hinge that changes behavior.
3. **Reason step by step.** MAE = mean |error|, in target units, robust to outliers. MSE = mean squared error, punishes large misses hard, squared units. RMSE = √MSE, back in target units and still outlier-sensitive. R² = 1 − SS_res/SS_tot: 1 is perfect, 0 equals predicting the mean, negative means worse than the mean.
4. **Traps to dodge.** Do not assume RMSE < MAE (RMSE ≥ MAE always). Do not claim R² can't go negative. Do not treat MAE and MSE as same-unit comparables — MSE is squared.
5. **Sanity-check and communicate.** Tie the recommendation to cost of errors: MAE when outliers shouldn't dominate, RMSE/MSE when large errors are especially costly, R² (or adjusted R²) to explain variance to stakeholders. Confirm units line up before quoting a number.
