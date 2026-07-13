---
qid: q039
question: "What is the ROC curve and AUC?"
topic: "Machine Learning"
model: "Claude Code (authored)"
sources: []
---

**Clarify** — I'll assume a binary classifier that outputs scores/probabilities. ROC and AUC evaluate ranking quality across all thresholds, not at one fixed cutoff.

**Approach** — Define the axes, describe the curve as threshold sweeps, then AUC's value and interpretation, then limits.

**Depth** — The **ROC (Receiver Operating Characteristic) curve** plots **True Positive Rate (recall) = TP/(TP+FN)** on the y-axis against **False Positive Rate = FP/(FP+TN)** on the x-axis, as you sweep the decision **threshold** from 1 to 0. Each threshold gives one point; connecting them traces the curve. A perfect classifier hugs the top-left (TPR=1, FPR=0); the diagonal is random guessing. **AUC (Area Under the Curve)** summarizes the whole curve as a single number in [0,1]: 0.5 = random, 1.0 = perfect. AUC has a clean probabilistic meaning — the probability the model ranks a **random positive above a random negative**. It's **threshold-independent**, so it measures ranking/discrimination regardless of where you set the cutoff.

**Edge cases** — On **heavily imbalanced** data ROC-AUC is **overly optimistic** because FPR has a huge negative denominator — prefer **Precision-Recall AUC**. AUC ignores calibration and the actual operating point.

**Optimize & communicate** — Use ROC-AUC to compare models' ranking power, then pick a threshold from the cost trade-off or PR curve. Signal: I give AUC's probabilistic interpretation and flag the imbalance caveat.
