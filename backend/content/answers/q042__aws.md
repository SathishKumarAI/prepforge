---
qid: q042
question: "How does gradient boosting differ from bagging (random forests)?"
topic: "Machine Learning"
model: "Claude Code (authored)"
sources: []
---

I'd contrast how the trees are built, then why I choose one — **Dive Deep** and **Are Right, A Lot**. Bagging (random forests) trains many *independent* deep trees in parallel on bootstrap samples and averages them; it reduces variance. Gradient boosting builds trees *sequentially*, each new shallow tree fitting the residual errors of the ensemble so far, stepping down the loss gradient; it primarily reduces bias and usually reaches higher accuracy on tabular data.

The trade-off drives the decision. "Random forest was my robust, low-tuning baseline. When I needed to squeeze out accuracy for a ranking model, I moved to XGBoost — validation AUC rose 3 points — but I had to tune learning rate, tree depth, and add early stopping and subsampling, because boosting overfits if you let it run too long or too fast." That honesty about boosting's fragility shows real experience.

Practically: forests parallelize and are more forgiving; boosting is more accurate but needs careful regularization and is sequential. On AWS, SageMaker XGBoost with Automatic Model Tuning handles the search, and I gate on a temporal holdout.

A bar-raiser listens for whether I understand the sequential-residual mechanism and can justify the pick by problem constraints, not hype.
