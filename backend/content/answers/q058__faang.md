---
qid: q058
question: "What is the normal distribution and why is it important?"
topic: "Data Science"
model: "Claude Code (authored)"
sources: []
---

**Clarify** — I'll assume the interviewer wants the defining properties, the reason it appears so often (the CLT), and its practical role in statistics and ML.

**Approach** — Describe the shape and parameters, explain why it's ubiquitous via the Central Limit Theorem, then list where it's assumed.

**Depth** — The normal (Gaussian) distribution is a continuous, symmetric, bell-shaped distribution fully described by two parameters: the mean (center) and standard deviation (spread). It follows the empirical rule, roughly 68%, 95%, and 99.7% of values fall within one, two, and three standard deviations of the mean. Its importance comes largely from the Central Limit Theorem: the sum or average of many independent random variables tends toward a normal distribution regardless of the original distribution. This is why sample means are approximately normal, which underpins confidence intervals and hypothesis tests. Many natural phenomena (heights, measurement errors) are approximately normal, and many models (linear regression residuals, Gaussian Naive Bayes, LDA) assume normality.

**Edge cases** — Real data is often skewed or heavy-tailed, so assuming normality can mislead; financial returns have fatter tails than the normal predicts. The CLT needs enough samples and finite variance.

**Optimize & communicate** — I'd check normality with Q-Q plots or tests before relying on it, and apply transforms (log, Box-Cox) when skewed. I'd emphasize the CLT as the deeper reason for its centrality, which is the insight interviewers reward.
