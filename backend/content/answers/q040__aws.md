---
qid: q040
question: "How does a decision tree decide where to split?"
topic: "Machine Learning"
model: "Claude Code (authored)"
sources: []
---

I'd explain the greedy criterion, then show I control its failure mode — **Dive Deep**. At each node a decision tree evaluates candidate feature-threshold splits and picks the one that most reduces impurity in the resulting children. For classification, impurity is Gini or entropy (information gain); for regression it's variance/MSE reduction. It's greedy and recursive — it optimizes the best split locally at each node, not globally — and it keeps splitting until a stopping rule fires.

I'd stress the key weakness I've owned: unconstrained trees overfit badly, memorizing training noise. So I control depth, minimum samples per leaf, and minimum impurity decrease, and I prune. "A single tree on a churn problem hit 0.99 train AUC but 0.72 validation; capping depth at 6 and setting min-leaf sizes brought validation to 0.81 and made the tree explainable to the business." Interpretability — a readable if/then path — is a real reason I sometimes choose trees over black boxes (**Invent and Simplify**).

I'd note trees underpin XGBoost/random forests, which is where I usually go for accuracy. On AWS, SageMaker XGBoost handles this at scale.

A bar-raiser listens for whether I understand impurity math *and* how I prevent overfitting in practice.
