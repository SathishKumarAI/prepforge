---
qid: q039
question: "What is the ROC curve and AUC?"
topic: "Machine Learning"
model: "Claude Code (authored)"
sources: []
---

1. **Clarify first.** State that ROC is threshold-*independent* - it sweeps all thresholds - which distinguishes it from single-threshold metrics. Assume they want axes, the AUC interpretation, and the imbalance caveat.

2. **Mental model.** Slide the decision threshold from strict to lenient and trace how catching positives (TPR) trades against false alarms (FPR); AUC compresses that whole curve into one number.

3. **Reason step by step.** ROC plots True Positive Rate (recall) on the y-axis against False Positive Rate, FP/(FP+TN), on the x-axis, across all thresholds. AUC is the area under it in [0,1]: 1.0 is perfect, 0.5 is random (the diagonal), below 0.5 is worse than random. Give the elegant interpretation: AUC is the probability the model ranks a random positive above a random negative. It's threshold-independent and great for comparing models.

4. **Traps to avoid.** Don't confuse ROC (TPR vs FPR) with the precision-recall curve. Don't say AUC below 0.5 is perfect or that it depends on a single fixed threshold.

5. **Sanity-check.** Verify the anchor points (0.5 random, 1.0 perfect), and add the key caveat: under heavy class imbalance, PR-AUC is more informative because ROC-AUC looks optimistic when negatives dominate.
