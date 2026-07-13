---
qid: q027
question: "What is overfitting and how can you prevent it?"
topic: "Machine Learning"
model: "Claude Code (authored)"
sources: []
---

I'd define it precisely, then show a real decision I owned — that's **Dive Deep**. Overfitting is when a model memorizes noise in the training data instead of the underlying signal: training loss keeps dropping while validation loss climbs, so it generalizes poorly to new customers.

I'd list the levers I actually reach for: more/cleaner data, simpler models or fewer features, regularization (L1/L2, dropout), early stopping on a validation set, cross-validation, and ensembling. Then I'd ground it: "On a churn model, my gradient-boosted trees hit 0.94 train AUC but 0.79 validation. I diagnosed overfit via the learning-curve gap, capped tree depth, added L2, and enabled early stopping — validation AUC rose to 0.86 and held on the holdout month." That quantified before/after is what earns the story.

I'd note the **Insist on the Highest Standards** angle: I never trust a single train score; I gate deployment on a temporally-held-out test set to catch leakage-driven optimism. On AWS I'd mention SageMaker Automatic Model Tuning with early stopping and CloudWatch to monitor drift post-launch.

A bar-raiser listens for whether I *detect* overfitting with evidence, not just recite fixes.
