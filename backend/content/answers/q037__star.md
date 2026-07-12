---
qid: q037
question: "What is k-fold cross-validation and why use it?"
topic: "Machine Learning"
model: "Claude Code (authored)"
sources: []
---

**Situation** On a medical-imaging classifier we only had about 1,200 labeled scans. Our single train-test split gave accuracy numbers that swung 6 points depending on the random seed, so nobody trusted the results.

**Task** I needed a reliable, low-variance estimate of model performance from limited data before we committed to an architecture.

**Action** I switched us to k-fold cross-validation. You split the data into k equal folds, train on k minus one of them and validate on the held-out fold, then rotate so every fold serves as validation exactly once, and average the k scores. I used k=5, and because classes were imbalanced I used stratified folds to preserve the positive rate in each. I ran hyperparameter tuning inside a nested cross-validation loop so we didn't leak the test fold into model selection.

**Result** Our accuracy estimate stabilized to 89% plus or minus 1.5 points instead of swinging 6, and we picked the architecture with real confidence. The lesson: with small datasets, cross-validation squeezes out an honest performance estimate that a single split just can't give you.
