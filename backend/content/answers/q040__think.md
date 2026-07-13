---
qid: q040
question: "How does a decision tree decide where to split?"
topic: "Machine Learning"
model: "Claude Code (authored)"
sources: []
---

1. **Clarify first.** Frame it as a greedy, recursive search for the split that best *purifies* child nodes, and note criteria differ for classification vs regression. Assume they want the criteria and the overfitting story.

2. **Mental model.** At each node the tree tries every feature/threshold candidate and keeps the one that most reduces impurity - a locally optimal, top-down partition of feature space.

3. **Reason step by step.** For classification, score splits by Gini impurity (1 - sum p_i^2) or entropy/information gain (reduction in entropy). For regression, use reduction in variance/MSE. Recurse until a stopping rule - max depth, min samples per leaf, or pure nodes. Highlight strengths: interpretable, handles nonlinearity and mixed feature types, needs no scaling. Then the weakness: deep trees overfit (high variance), remedied by pruning, depth limits, and min-leaf constraints, or by ensembles (random forests, gradient boosting).

4. **Traps to avoid.** Don't say splits are random or that scaling is required (trees are scale-invariant). Don't confuse Gini with entropy - both measure impurity but aren't identical.

5. **Sanity-check.** Confirm each criterion actually rewards purer children, and connect the overfitting weakness to why ensembles exist - showing you see the bigger modeling picture.
