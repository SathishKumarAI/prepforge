---
qid: q040
question: "How does a decision tree decide where to split?"
topic: "Machine Learning"
model: "Claude Code (authored)"
sources: []
---

**Situation** On a loan-underwriting project, stakeholders wanted a model they could actually read and defend to regulators, so we chose a decision tree, but the first version was a tangled 20-level monster that overfit.

**Task** I had to explain how the tree chose its splits and tune that process so the model stayed both accurate and interpretable.

**Action** I walked through the splitting logic. At each node the tree evaluates candidate feature-threshold splits and picks the one that most reduces impurity, measured by Gini impurity or entropy for classification, choosing the split with the highest information gain. For regression it minimizes variance or squared error instead. It repeats greedily down the tree. The overfitting came from letting it split until leaves were pure, so I constrained it: max depth of 5, a minimum samples-per-leaf, and cost-complexity pruning tuned by cross-validation to cut splits that didn't earn their keep.

**Result** The pruned tree hit 84% accuracy, close to the unpruned one, but was shallow enough that underwriters could follow every decision path. The lesson: a tree greedily maximizes impurity reduction, and controlling that growth is what keeps it from memorizing noise.
