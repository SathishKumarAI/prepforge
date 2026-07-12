---
qid: q038
question: "Explain precision, recall, and F1 score. When would you prioritize each?"
topic: "Machine Learning"
model: "Claude Code (authored)"
sources: []
---

**Situation** I owned a fraud model that leadership praised for 98% accuracy, but the fraud team was furious because it missed most actual fraud. The dataset was 99% legitimate, so accuracy was meaningless.

**Task** I had to reframe evaluation around the metrics that actually mattered for an imbalanced, high-stakes problem and set the right operating point.

**Action** I introduced precision, recall, and F1. Precision is, of the cases we flagged, how many were truly fraud, so it punishes false alarms. Recall is, of all real fraud, how much we caught, so it punishes misses. F1 is their harmonic mean when you need one balanced number. For fraud, missing a case is costly, so I prioritized recall while keeping precision high enough that investigators weren't drowning in false positives. I moved the decision threshold to trade some precision for recall and reported the precision-recall curve instead of accuracy.

**Result** Recall jumped from 41% to 79% while precision stayed above 70%, and caught-fraud value rose sharply. The lesson: pick the metric by the cost of each error type. Recall when misses hurt, precision when false alarms hurt, F1 when you need balance.
