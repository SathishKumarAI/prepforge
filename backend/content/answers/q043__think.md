---
qid: q043
question: "What is feature scaling and which algorithms need it?"
topic: "Machine Learning"
model: "Claude Code (authored)"
sources: []
---

1. **Clarify first.** Note the two-part ask: *what* scaling is and *which* algorithms need it. State the assumption that features have different units/magnitudes, which is the whole reason scaling matters.

2. **Mental model.** Ask one diagnostic question of any algorithm: *does it use distances or gradients?* If yes, magnitude imbalance distorts it, so it needs scaling. If it only compares thresholds, it does not.

3. **Reason step by step.** Define the two workhorses: standardization (z-score, mean 0 / unit variance) and min-max (to [0,1], outlier-sensitive). Then apply the diagnostic: k-NN, k-means, SVM, PCA, and any gradient-descent model (neural nets, regularized linear) need scaling; tree-based models (trees, random forests, boosting) are scale-invariant because splits are threshold-based.

4. **Traps to avoid.** The classic error is leakage: fitting the scaler on the *whole* dataset. Fit on training only, then transform validation/test. Also do not claim trees benefit, and remember regularized linear models need it so the penalty is applied fairly.

5. **Sanity-check and communicate.** Verify your list by re-running the distance/gradient test on each named algorithm. Deliver it as a rule of thumb plus the leakage caveat, which signals real practitioner experience.
