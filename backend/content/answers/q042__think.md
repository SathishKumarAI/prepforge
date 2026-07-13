---
qid: q042
question: "How does gradient boosting differ from bagging (random forests)?"
topic: "Machine Learning"
model: "Claude Code (authored)"
sources: []
---

1. **Clarify first.** This is a *contrast* question, so state that you will compare on three axes: how trees are built, what error they attack, and practical trade-offs. Assume both are tree ensembles on tabular data.

2. **Mental model.** Hold two opposing pictures: bagging = *parallel + independent*, boosting = *sequential + corrective*. Tie each to the bias-variance frame: bagging kills variance, boosting kills bias.

3. **Reason step by step.** Bagging trains trees independently on bootstrap samples and averages them. Boosting adds trees one at a time, each fitting the residual (negative gradient) of the current ensemble, scaled by a learning rate so weak learners accumulate into a strong one. That sequential dependence is the crux of every difference that follows.

4. **Traps to avoid.** Do not flip which reduces bias vs variance. Do not say boosting is parallelizable in the same way as bagging. Do not imply boosting is always better, it overfits if over-trained and needs careful tuning of depth, learning rate, and tree count.

5. **Sanity-check and communicate.** Name-drop XGBoost/LightGBM/CatBoost to ground it, then give the crisp takeaway: random forest is a robust low-tuning baseline; gradient boosting squeezes out top accuracy but demands regularization and tuning.
