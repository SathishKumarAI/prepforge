---
qid: q068
question: "What is the difference between Pearson and Spearman correlation?"
topic: "Data Science"
model: "Claude Code (authored)"
sources: []
---

**Situation** In a study linking user engagement to satisfaction survey scores, a colleague reported a weak Pearson correlation of 0.2 and concluded there was basically no relationship. Something felt off because the scatter looked monotonic but curved.

**Task** I had to figure out whether we were measuring the association correctly before we dropped a real signal.

**Action** I explained the difference: Pearson measures the strength of a LINEAR relationship and is sensitive to outliers, while Spearman is Pearson computed on the ranks, so it captures any monotonic relationship, linear or not, and is far more robust to outliers and non-normality. Because our satisfaction scores were ordinal and the relationship curved upward, Pearson was the wrong tool. I recomputed with Spearman and got 0.55, a clearly meaningful monotonic association. I showed both side by side with the scatter to make the point.

**Result** We kept engagement as a driver in the model instead of discarding it, and it became one of the top predictors. My rule: use Spearman for ordinal data, nonlinear-but-monotonic patterns, or when outliers are a concern.
