---
qid: q038
question: "Explain precision, recall, and F1 score. When would you prioritize each?"
topic: "Machine Learning"
model: "Claude Code (authored)"
sources: []
---

1. **Clarify first.** Ground everything in the confusion matrix (TP, FP, TN, FN) and note that accuracy misleads on imbalanced data - which is why these exist. Assume they want formulas *and* prioritization judgment.

2. **Mental model.** Precision answers "when I say positive, am I right?" (guards against false positives); recall answers "did I catch all the positives?" (guards against false negatives). F1 balances the two.

3. **Reason step by step.** Precision = TP/(TP+FP), recall = TP/(TP+FN), F1 = 2PR/(P+R), the harmonic mean. Then map costs to metrics: prioritize precision when false positives are costly (spam filter killing real email, expensive interventions); prioritize recall when false negatives are dangerous (cancer screening, fraud detection); use F1 when you need one balanced number on imbalanced classes. Note the threshold governs a precision-recall trade-off.

4. **Traps to avoid.** Don't swap the definitions (recall handles false negatives, not positives). Don't call F1 the arithmetic mean - it's harmonic, which punishes imbalance between P and R. Don't assume P=R on balanced data.

5. **Sanity-check.** Recompute one formula in your head, and pressure-test your prioritization: "which error hurts more here?" Communicate the trade-off knob (threshold) explicitly.
