---
qid: q066
question: "What are the main approaches to feature selection?"
topic: "Data Science"
model: "Claude Code (authored)"
sources: []
---

**Situation** I inherited a churn model with 340 features, many auto-generated, and it was slow to train, overfitting, and impossible for the business to interpret.

**Task** My job was to cut the feature set down to something lean and robust without losing predictive power.

**Action** I worked through the three families of feature selection. First filter methods: I dropped near-zero-variance columns and used mutual information and correlation with the target to prune obvious junk, killing about 150 features fast and cheaply. Then a wrapper approach: recursive feature elimination with cross-validation to find a good subset by actually retraining. Finally embedded methods: L1-regularized logistic regression and gradient-boosting feature importances, which do selection during training. I also removed highly collinear pairs to keep it stable.

**Result** I got down to 28 features with AUC holding at 0.86, basically unchanged, while training time dropped 70% and the model became explainable to the retention team. My rule of thumb now: start with cheap filters, confirm with embedded importances, and only reach for expensive wrappers when it's worth it.
