---
qid: q070
question: "Explain MAE, MSE, RMSE, and R-squared for regression evaluation."
topic: "Data Science"
model: "Claude Code (authored)"
sources: []
---

I'd tie this to **Deliver Results**: the metric must match how errors actually cost the business. **MAE** is the mean absolute error, in the target's units, robust to outliers, and treats all errors linearly. **MSE** squares errors, penalizing large misses heavily, but its units are squared. **RMSE** is MSE's square root, back in original units and the most common single number, but it's outlier-sensitive. **R-squared** is the proportion of variance explained, a unitless 0-to-1 goodness-of-fit that's easy to communicate but can mislead, it never decreases as you add features, so I use adjusted R-squared.

The judgment I signal is choosing by cost structure. I'd give a concrete example: for a demand-forecasting model, large stockout errors were far costlier than small ones, so I optimized and reported RMSE; but for a latency SLA where one huge miss shouldn't dominate the summary, I led with MAE. I always report at least two, an error in real units plus R-squared for context, and I compute them per segment because a good aggregate can hide a bad slice. A bar-raiser listens for whether you pick the metric from the business cost of errors and check segment-level performance, rather than reflexively reporting RMSE alone.
