---
qid: q050
question: "What is data leakage in machine learning and how do you prevent it?"
topic: "Machine Learning"
model: "Claude Code (authored)"
sources: []
---

**Situation** On a loan-default model, my validation AUC was a suspicious 0.97, far too good, and I'd seen enough projects blow up in production to distrust it immediately.

**Task** I had to find out why the model looked perfect offline and make sure the reported performance was actually real.

**Action** I hunted for data leakage, where information the model won't have at prediction time sneaks into training. I found two sources: a "days_since_default" column that was a direct proxy for the target, and, worse, I'd fit my StandardScaler on the full dataset before splitting, so test statistics leaked in. I dropped the target-derived feature and rebuilt everything inside a scikit-learn Pipeline so scaling and imputation fit only on the training fold within cross-validation.

**Result** AUC fell to a believable 0.83, and critically the model held that number in production instead of collapsing. The lesson I now preach: an implausibly high score is a red flag, and pipelines plus a strict train-first discipline are how you keep leakage out.
