---
qid: q003
question: "Explain the difference between supervised, unsupervised, and reinforcement learning."
topic: "AI"
model: "Claude Code (authored)"
sources: []
---

I'd frame the three by what signal drives learning. Supervised learning uses labeled examples to map inputs to known outputs, for classification or regression. Unsupervised learning finds structure in unlabeled data, like clustering or dimensionality reduction. Reinforcement learning learns a policy by trial and error, maximizing cumulative reward from an environment's feedback.

To show **Dive Deep** I'd tie each to a real choice. On a churn model I used supervised XGBoost because we had two years of labeled outcomes. For customer segmentation with no labels, I used k-means and PCA to surface five actionable cohorts, which the growth team turned into targeted campaigns lifting retention 6%. For a dynamic-pricing prototype I scoped RL but deliberately deferred it, because the exploration cost of bad prices on live traffic was too high, a **Customer Obsession** call to protect real users.

I'd name AWS mapping: SageMaker built-in algorithms for supervised and unsupervised training, S3 for the data lake, and SageMaker RL for reinforcement setups.

The trade-off I'd emphasize: labels are expensive, so I always ask whether we truly have supervision or are inventing it. A bar-raiser wants to hear that I match the paradigm to the data reality and the cost of being wrong, not to trend.
