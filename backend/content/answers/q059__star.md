---
qid: q059
question: "What are outliers and how can you detect them?"
topic: "Data Science"
model: "Claude Code (authored)"
sources: []
---

**Situation** A revenue-per-user model I built was producing wild predictions, and tracing it back I found a few accounts with values a thousand times the typical user, some real whales, some clearly data-entry errors.

**Task** I had to identify these outliers and decide, case by case, how to handle them without silently deleting real signal.

**Action** I detected them systematically. I used the IQR rule, flagging points beyond 1.5 times the interquartile range past the quartiles, and cross-checked with z-scores above 3 and a quick boxplot. That separated two groups: the impossible values, like negative revenue, which were genuine errors I corrected or removed, and the legitimate high-rollers, which I kept but capped via winsorizing so they wouldn't dominate the fit.

**Result** After cleaning the errors and winsorizing the real extremes, the model's RMSE dropped about 22% and predictions became sane. The lesson: an outlier isn't automatically wrong, so detect them with IQR or z-scores, then investigate whether each is an error to fix or a real tail to handle carefully.
