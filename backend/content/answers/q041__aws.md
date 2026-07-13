---
qid: q041
question: "How does a random forest work and why is it better than a single decision tree?"
topic: "Machine Learning"
model: "Claude Code (authored)"
sources: []
---

I'd explain the mechanism, then why it wins — **Dive Deep**. A random forest is an ensemble of many decision trees trained on bootstrap samples of the data (bagging), and crucially each split considers only a random subset of features. Predictions are averaged (regression) or majority-voted (classification). The two sources of randomness decorrelate the trees, so their errors cancel.

Why it beats one tree: a single deep tree is high-variance and overfits; averaging many decorrelated trees slashes variance without much added bias, giving far better generalization and robustness to noise and outliers. It also needs little tuning, handles mixed feature types, and gives feature-importance estimates for free.

I'd ground it: "Replacing a single pruned tree with a 300-tree forest lifted validation AUC from 0.81 to 0.87 and, more importantly, made run-to-run predictions stable enough to trust in production." That stability is real **Ownership** value.

I'd note trade-offs honestly: forests are less interpretable than one tree and heavier to serve, and for peak accuracy on tabular data I often compare against gradient boosting. On AWS, SageMaker Random Cut Forest and XGBoost cover these, trainable in parallel.

A bar-raiser listens for whether I explain *why* decorrelation reduces variance, not just that "more trees = better."
