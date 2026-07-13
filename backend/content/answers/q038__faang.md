---
qid: q038
question: "Explain precision, recall, and F1 score. When would you prioritize each?"
topic: "Machine Learning"
model: "Claude Code (authored)"
sources: []
---

**Clarify** — I'll define these from the confusion matrix for binary classification and tie each to a business cost. Confirm we care about when accuracy misleads — typically imbalanced data.

**Approach** — Define each metric, give the intuition (of the flagged / of the actual), then map to scenarios by cost of error type.

**Depth** — From TP, FP, FN: **Precision = TP/(TP+FP)** — of everything predicted positive, how much was correct; punishes **false positives**. **Recall (sensitivity) = TP/(TP+FN)** — of all actual positives, how much we caught; punishes **false negatives**. There's a **trade-off**: lowering the decision threshold raises recall but lowers precision. **F1 = 2·(P·R)/(P+R)** — the harmonic mean, high only when both are high, useful as a single number on imbalanced data where accuracy is deceptive. **When to prioritize:** favor **recall** when missing a positive is costly — cancer screening, fraud, security (better a false alarm than a miss). Favor **precision** when false positives are costly — spam filtering, recommending content, legal e-discovery (a flagged item must be right). Use **F1** when both matter and classes are imbalanced.

**Edge cases** — Extreme imbalance can still fool F1; consider PR-AUC. Multiclass needs macro/micro averaging.

**Optimize & communicate** — I'd tune the threshold to the cost ratio, or use Fβ to weight recall over precision. Signal: I anchor metric choice to the real cost of each error type.
