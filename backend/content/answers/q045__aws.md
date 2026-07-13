---
qid: q045
question: "What is the difference between parameters and hyperparameters, and how do you tune hyperparameters?"
topic: "Machine Learning"
model: "Claude Code (authored)"
sources: []
---

I'd draw the line, then show a disciplined tuning process — **Dive Deep** and **Deliver Results**. Parameters are learned from data during training (linear-regression weights, neural-net weights, tree split points). Hyperparameters are set *before* training and govern the learning process itself: learning rate, tree depth, number of estimators, regularization strength, k in k-NN. The model optimizes parameters; I optimize hyperparameters.

For tuning I search a defined space and evaluate each configuration by cross-validation, never on the test set. Grid search is exhaustive but expensive; random search is more efficient in high dimensions; Bayesian optimization is my go-to because it uses past trials to focus the search and converges faster. I always pair it with early stopping to kill weak configs cheaply.

I'd ground it: "Bayesian tuning of XGBoost across 60 trials beat my hand-tuned baseline by 2.5 points of AUC while cutting tuning cost 40% versus grid search." That's **Frugality** — better results for less compute.

On AWS, SageMaker Automatic Model Tuning runs Bayesian/Hyperband search in parallel across instances and logs every trial. A bar-raiser listens for whether I tune against a proper validation scheme and reason about search cost, not brute force everything.
