---
qid: q037
question: "What is k-fold cross-validation and why use it?"
topic: "Machine Learning"
model: "Claude Code (authored)"
sources: []
---

1. **Clarify first.** State the purpose - a robust, low-variance performance estimate and hyperparameter tuning, especially with limited data. Assume they want the procedure, the benefits, and the important variants.

2. **Mental model.** Rotate the validation role across all data so no single lucky/unlucky split decides your estimate; then average.

3. **Reason step by step.** Split data into k equal folds. Train on k-1 folds, validate on the held-out fold, repeat k times so every fold is validation once, then average the k scores. Benefits: uses all data for both roles, reduces dependence on one split, and gives a variance estimate of performance. Variants: stratified k-fold (preserves class ratios, key for imbalance), leave-one-out (k=n, thorough but costly), and time-series split (respects order, no shuffling). k=5 or 10 balances bias, variance, and compute.

4. **Traps to avoid.** Don't say it trains once on all data or is unsupervised-only. Don't claim it replaces the test set or *guarantees* no overfitting - you still hold out a final test set.

5. **Sanity-check.** Confirm each fold served as validation exactly once, and mention stratification/time-order caveats so the interviewer sees you'd choose the right variant for the data.
