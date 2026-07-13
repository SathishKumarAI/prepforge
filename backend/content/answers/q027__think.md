---
qid: q027
question: "What is overfitting and how can you prevent it?"
topic: "Machine Learning"
model: "Claude Code (authored)"
sources: []
---

1. **Clarify first.** Define the symptom precisely before prescribing cures: a large gap between strong training performance and weak validation/test performance. State the assumption that we care about generalization, and contrast it with underfitting.

2. **Mental model.** Frame overfitting as *high variance* - the model memorized noise and idiosyncrasies. Prevention is anything that constrains capacity or exposes the model to more signal relative to noise.

3. **Reason step by step.** First diagnose via the train-vs-validation gap. Then group remedies by lever: more/augmented data (more signal), regularization (L1/L2, dropout) and simpler models (less capacity), cross-validation and early stopping (monitoring), feature selection (less noise), and ensembling/bagging or tree pruning (variance reduction). Each attacks the same variance problem from a different angle.

4. **Traps to avoid.** Don't confuse it with underfitting (poor on *both* sets) or slow training. Don't claim any single trick guarantees a fix, or that a bigger model always helps.

5. **Sanity-check.** Restate the goal as the bias-variance sweet spot, and verify each remedy you named genuinely reduces variance rather than just speeding training. Communicate it as: watch the gap, then add constraints or data.
