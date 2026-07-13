---
qid: q044
question: "How do you handle an imbalanced classification dataset?"
topic: "Machine Learning"
model: "Claude Code (authored)"
sources: []
---

1. **Clarify first.** Ask the key question: *what is the class ratio and which error is costlier, false positives or false negatives?* State that the business cost drives the whole strategy, and that accuracy is misleading here.

2. **Mental model.** Organize your answer into three levers: data-level, algorithm-level, and evaluation. This structure keeps you from rattling off a random list.

3. **Reason step by step.** Data-level: oversample the minority (SMOTE synthesizes examples), undersample the majority, or both. Algorithm-level: class weights / cost-sensitive learning to penalize minority mistakes. Evaluation: swap accuracy for precision, recall, F1, PR-AUC, ROC-AUC, and tune the decision threshold to the FP/FN cost.

4. **Traps to avoid.** Two big ones: reporting accuracy (99% by predicting all-negative), and resampling *before* the split, which leaks synthetic neighbors into validation. Apply resampling inside CV folds, on training data only. Never just delete the minority class.

5. **Sanity-check and communicate.** Tie the final choice back to the cost you clarified in step 1, for fraud/cancer, recall dominates. Say the resampling-inside-CV point explicitly; it is the detail that separates a textbook answer from a practitioner's.
