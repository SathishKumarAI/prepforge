---
qid: q041
question: "How does a random forest work and why is it better than a single decision tree?"
topic: "Machine Learning"
model: "Claude Code (authored)"
sources: []
---

1. **Clarify first.** Confirm the framing: they want the *mechanism* and the *why-better* comparison. State your assumption that a single deep tree is the baseline and that we care about generalization, not training accuracy.

2. **Mental model.** Anchor on one phrase: *bagging + feature randomness to decorrelate trees*. A random forest is a variance-reduction machine. Recall the bias-variance decomposition so you can explain *what* it fixes.

3. **Reason step by step.** Walk the pipeline: bootstrap samples (rows sampled with replacement) into a deep tree on each, but at every split consider only a random feature subset, then aggregate by majority vote or averaging. Then connect: averaging many *decorrelated* estimators cuts variance without inflating bias, which is exactly a lone deep tree's weakness.

4. **Traps to avoid.** Do not confuse it with boosting (that is sequential residual-fitting). Do not claim it eliminates bias. Do not forget the feature-subsampling step, which is what distinguishes a forest from plain bagged trees.

5. **Sanity-check and communicate.** Mention concrete perks that prove you have used it: OOB error estimate, feature importances, low tuning. Close by naming the trade-off out loud, less interpretable and heavier, so the answer sounds balanced.
