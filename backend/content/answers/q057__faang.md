---
qid: q057
question: "What do variance and standard deviation measure?"
topic: "Data Science"
model: "Claude Code (authored)"
sources: []
---

**Clarify** — I'll assume the interviewer wants the definitions, the relationship between the two, and why we often prefer one over the other in practice.

**Approach** — Define both as measures of spread, show the math relationship, then explain the interpretability difference and the sample-vs-population nuance.

**Depth** — Both quantify dispersion, how spread out data is around its mean. Variance is the average of the squared deviations from the mean: for each point subtract the mean, square it, and average. Squaring ensures deviations don't cancel and penalizes large deviations more. Standard deviation is simply the square root of the variance. The key practical difference is units: variance is in squared units (e.g., dollars-squared), which is hard to interpret, while standard deviation is back in the original units (dollars), so it's directly comparable to the data and the mean. A larger value means more spread. For a normal distribution, about 68% of data lies within one standard deviation of the mean.

**Edge cases** — Both are sensitive to outliers because of squaring; a single extreme point inflates them. Sample variance divides by n minus 1 (Bessel's correction) to be an unbiased estimator of the population variance, not by n.

**Optimize & communicate** — I'd report standard deviation for interpretability but note variance is the additive, differentiable quantity used in the math (e.g., PCA, bias-variance). Explaining why we square, then root, shows I understand the design, not just the formula.
