---
qid: q042
question: "How does gradient boosting differ from bagging (random forests)?"
topic: "Machine Learning"
model: "Claude Code (authored)"
sources: []
---

**Situation** During a Kaggle-style pricing competition at work, my random forest plateaued around 0.71 AUC and the residuals showed a clear systematic bias the bagged model just wasn't correcting.

**Task** I wanted to squeeze out the remaining signal and understand why a different ensemble strategy might help.

**Action** I switched to gradient boosting, and explaining the contrast helped me tune it. Bagging, like a random forest, builds many deep trees in parallel on bootstrap samples and averages them to cut variance. Boosting is sequential: each shallow tree fits the residual errors of the ensemble so far, so it drives down bias step by step. I used XGBoost with a low learning rate of 0.05, max_depth of 4, and early stopping on a validation fold to keep it from overfitting.

**Result** AUC jumped to 0.79 and the systematic residual pattern flattened out. My takeaway was the tradeoff: bagging is parallel and forgiving, boosting is sequential and powerful but far more sensitive to learning rate and depth.
