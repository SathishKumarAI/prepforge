---
qid: q031
question: "How does the k-Nearest Neighbors (k-NN) algorithm work?"
topic: "Machine Learning"
model: "Claude Code (authored)"
sources: []
---

1. **Clarify first.** Note it works for both classification and regression, and flag that it's a *lazy, non-parametric* method - no real training phase. Assume they want the procedure plus the practical gotchas.

2. **Mental model.** "You are the average of your neighbors." Prediction is purely local: find the closest stored points and let them vote or average.

3. **Reason step by step.** At query time: compute distance (e.g. Euclidean) to all training points, pick the k closest, then majority-vote their labels for classification or average their values for regression. Discuss k as a bias-variance dial - small k is noisy/high-variance, large k is smooth and may underfit. Stress that feature scaling is essential since distances dominate, and note the curse of dimensionality plus slow, memory-heavy inference.

4. **Traps to avoid.** Don't say it fits a global equation or builds a tree. Don't invert the cost profile - training is trivial, *prediction* is expensive. Don't forget scaling.

5. **Sanity-check.** Confirm your k intuition matches the bias-variance framing, and mention it's a strong low-dimensional baseline. Communicate the two headline caveats (scaling, inference cost) since interviewers probe them.
