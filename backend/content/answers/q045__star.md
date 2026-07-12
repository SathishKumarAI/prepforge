---
qid: q045
question: "What is the difference between parameters and hyperparameters, and how do you tune hyperparameters?"
topic: "Machine Learning"
model: "Claude Code (authored)"
sources: []
---

**Situation** A junior teammate on my recommendation project kept confusing model coefficients with the settings he was hand-editing, and our gradient-boosting model was underperforming because those settings were never tuned.

**Task** I needed to clarify the distinction and set up a principled tuning process so we stopped guessing.

**Action** I explained it plainly: parameters are learned from data during training, like the weights in a regression or the split points in a tree. Hyperparameters are the knobs you set before training, like learning rate, tree depth, or number of estimators, and the model never learns them itself. For tuning I set up RandomizedSearchCV over learning rate, max_depth, and n_estimators with 5-fold cross-validation, then narrowed in with a focused grid search, using a held-out set to confirm.

**Result** The tuned model's validation RMSE dropped about 14%, and the team finally had a repeatable workflow instead of manual trial and error. The lesson: data fits parameters, but you fit hyperparameters, and cross-validated search beats intuition.
