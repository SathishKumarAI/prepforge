---
qid: q039
question: "What is the ROC curve and AUC?"
topic: "Machine Learning"
model: "Claude Code (authored)"
sources: []
---

I'd define them, then show I know their limits — that nuance is the **Dive Deep** signal. The ROC curve plots true-positive rate against false-positive rate as you sweep the classification threshold from 0 to 1. AUC is the area under it: the probability that the model ranks a random positive above a random negative. AUC of 0.5 is random, 1.0 is perfect. Its strength is that it's threshold-independent and measures ranking quality.

I'd surface the important caveat: on heavily imbalanced data, ROC-AUC can look flattering because the false-positive rate has a huge negative denominator. "On a fraud dataset that was 0.5% positive, ROC-AUC was 0.95 but the precision-recall AUC was 0.40 — the PR curve told the honest story, so I optimized and reported on PR-AUC instead." That's **Are Right, A Lot** by choosing the metric that reflects reality.

I'd add that AUC helps *compare* models, but for deployment I still pick a concrete threshold from the business cost trade-off. On AWS, SageMaker and Clarify report these curves automatically during evaluation.

A bar-raiser listens for whether I know when ROC-AUC misleads and reach for PR-AUC — that separates practitioners from reciters.
