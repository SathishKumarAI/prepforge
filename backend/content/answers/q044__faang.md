---
qid: q044
question: "How do you handle an imbalanced classification dataset?"
topic: "Machine Learning"
model: "Claude Code (authored)"
sources: []
---

**Clarify** — I'd first ask the imbalance ratio, the business cost of false positives vs false negatives, and whether we optimize recall (e.g., fraud, disease) or precision. That framing drives every later choice.

**Approach** — I'll structure the answer across three levers: metrics, data-level fixes, and algorithm-level fixes.

**Depth** — First, metrics: accuracy is misleading (predict-all-majority scores high), so I use precision, recall, F1, PR-AUC, and ROC-AUC, choosing based on cost. Data-level: oversample the minority (SMOTE synthesizes interpolated examples) or undersample the majority; SMOTE avoids the overfitting that naive duplication causes. Algorithm-level: class weights (class_weight='balanced') penalize minority errors more in the loss; many models support this natively. I can also adjust the decision threshold using the PR curve rather than defaulting to 0.5. Ensembles like balanced random forests help too.

**Edge cases** — Always resample inside cross-validation folds, never before splitting, or you leak synthetic neighbors into validation. SMOTE can create noise near class boundaries or in high dimensions. Extreme imbalance (1:10000) may suit anomaly-detection framing instead.

**Optimize & communicate** — Combine class weights with threshold tuning and monitor PR-AUC. I'd narrate that the right answer depends on misclassification cost, showing I optimize for the business objective, not just a leaderboard metric.
