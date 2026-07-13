---
qid: q037
question: "What is k-fold cross-validation and why use it?"
topic: "Machine Learning"
model: "Claude Code (authored)"
sources: []
---

I'd explain it, then show I use it to make trustworthy decisions — **Insist on the Highest Standards**. k-fold CV splits the data into k equal folds; you train on k−1 and validate on the held-out fold, rotating so every point is validated exactly once, then average the k scores. It gives a lower-variance, more honest estimate of generalization than a single split, and it uses the data efficiently — valuable when data is scarce.

I'd note the nuances that show **Dive Deep**: use *stratified* k-fold to preserve class balance in imbalanced problems, *grouped* folds when rows share an entity (same user shouldn't be in both train and validation), and *time-series* CV (expanding window) so you never validate on the past using the future. Choosing the wrong scheme silently inflates scores.

I'd ground it: "Comparing two churn models, single-split gave contradictory rankings run-to-run; 5-fold stratified CV showed model B was reliably 2 points of AUC better with a tight standard deviation, so I shipped it with confidence." That's **Are Right, A Lot** backed by evidence.

On AWS I'd parallelize folds across SageMaker training jobs. A bar-raiser listens for whether I match the CV scheme to the data's structure.
