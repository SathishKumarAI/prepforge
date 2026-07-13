---
qid: q035
question: "Explain the bias-variance trade-off."
topic: "Machine Learning"
model: "Claude Code (authored)"
sources: []
---

I'd give the decomposition, then show I navigate it with data — a strong **Dive Deep** and **Are Right, A Lot** signal. Total generalization error splits into bias (error from overly simple assumptions — underfitting), variance (sensitivity to the particular training sample — overfitting), and irreducible noise. High-bias models miss real structure; high-variance models memorize noise. You can rarely drop both at once, so the job is finding the sweet spot for the problem.

I'd make it operational: I diagnose which side I'm on using learning curves. If train and validation error are both high and close, it's bias — I add features or model capacity. If train is low but validation is far higher, it's variance — I add regularization, more data, or simplify.

I'd ground it: "A demand model underfit with high bias as linear regression; moving to gradient boosting cut bias but variance spiked, so I tuned tree depth and subsampling to land validation RMSE 15% below either extreme." Ensembling (bagging cuts variance, boosting cuts bias) is my go-to lever.

On AWS, SageMaker Automatic Model Tuning searches this trade-off efficiently.

A bar-raiser listens for whether I *diagnose* which regime I'm in with evidence, not just recite the definition.
