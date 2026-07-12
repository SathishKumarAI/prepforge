---
qid: q039
question: "What is the ROC curve and AUC?"
topic: "Machine Learning"
model: "Claude Code (authored)"
sources: []
---

**Situation** Two teams each pitched a churn model, one tuned at a 0.3 threshold and one at 0.6, and everyone argued over accuracy at those single points. We couldn't fairly compare them.

**Task** I needed a threshold-independent way to compare the models' ranking quality and then choose an operating point deliberately.

**Action** I brought in the ROC curve and AUC. The ROC curve plots true positive rate against false positive rate as you sweep the decision threshold across all values, so it shows the whole trade-off, not one point. AUC, the area under that curve, summarizes it as a single number: the probability the model ranks a random positive above a random negative, where 0.5 is random guessing and 1.0 is perfect. I plotted both models' ROC curves, compared AUC, and only then picked each one's threshold from the curve based on our tolerance for false positives. Because churn was somewhat imbalanced, I also cross-checked with a precision-recall curve.

**Result** AUC cleanly showed model A at 0.86 versus B at 0.78, ending the debate, and we chose an operating point matching our retention budget. The lesson: AUC measures ranking ability independent of any threshold.
