---
qid: q028
question: "Why do we split data into training, validation, and test sets?"
topic: "Machine Learning"
model: "Claude Code (authored)"
sources: []
---

1. **Clarify first.** State the core purpose up front - an *unbiased* estimate of generalization and prevention of leakage. Assume they want the role of each split plus the leakage nuance, not just the ratios.

2. **Mental model.** Think of a strict information firewall: each split touches the model at a different decision stage, and the test set must stay untouched until the very end to remain a fair proxy for the real world.

3. **Reason step by step.** Training set fits parameters. Validation set tunes hyperparameters and drives model selection and early stopping. Test set is used once, at the end, for the final performance estimate. If you tuned on the test set you'd indirectly fit it, giving an optimistically biased number. Mention typical splits (70/15/15) and that with scarce data you swap the fixed validation set for k-fold cross-validation.

4. **Traps to avoid.** Never update weights on the test set. Don't fit scalers/encoders on the full data - fit on train only, then apply, or you leak. More splits don't automatically raise accuracy.

5. **Sanity-check.** Ask yourself "did the test set influence any decision?" If yes, the estimate is compromised. Communicate the firewall intuition clearly.
