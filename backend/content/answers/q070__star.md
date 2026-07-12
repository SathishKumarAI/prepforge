---
qid: q070
question: "Explain MAE, MSE, RMSE, and R-squared for regression evaluation."
topic: "Data Science"
model: "Claude Code (authored)"
sources: []
---

**Situation** I was comparing three demand-forecasting models for a retail client, and stakeholders were confused because different metrics ranked the models differently.

**Task** I had to pick the right evaluation metric for the business context and explain what each one actually rewards.

**Action** I walked them through all four. MAE is the average absolute error, in the same units as demand and easy to explain, treating every miss linearly. MSE squares the errors so large misses are punished disproportionately, which matters when a big stockout is far worse than several small ones. RMSE is the square root of MSE, back in original units but still outlier-sensitive. R-squared reports the fraction of variance explained, useful for a scale-free sense of fit but easy to inflate. Because occasional huge stockouts were the client's real pain, I chose RMSE as the primary metric and reported MAE alongside for interpretability.

**Result** We selected the model that was second on MAE but clearly best on RMSE, and stockout incidents dropped 15% the next season. My takeaway: match the metric's penalty structure to the actual cost of errors, not habit.
