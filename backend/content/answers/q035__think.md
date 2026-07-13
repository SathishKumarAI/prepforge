---
qid: q035
question: "Explain the bias-variance trade-off."
topic: "Machine Learning"
model: "Claude Code (authored)"
sources: []
---

1. **Clarify first.** Define both terms crisply before relating them, and map each to its overfitting/underfitting symptom. Assume they want the decomposition and the levers to manage it.

2. **Mental model.** Total generalization error splits into three pieces; complexity trades bias against variance, and you seek the minimum of their sum, not either extreme.

3. **Reason step by step.** Bias is error from oversimplified assumptions (a line on curved data) causing underfitting. Variance is sensitivity to training-data fluctuations (a deep tree memorizing points) causing overfitting. Write Error = Bias^2 + Variance + Irreducible Error. Then the trade-off: raising complexity lowers bias but raises variance, and vice versa, so the target is the sweet spot. Name management tools - regularization, cross-validation, ensembling (bagging cuts variance, boosting cuts bias).

4. **Traps to avoid.** Don't swap them (high bias is under-, high variance is over-fitting). Don't say both go to zero simultaneously. Don't claim complexity is irrelevant.

5. **Sanity-check.** Test the mapping with an example model at each extreme, and add nuance for credibility: modern over-parameterized nets show "double descent," complicating the classic U-curve. Communicate it as a dial you tune, not a bug to eliminate.
