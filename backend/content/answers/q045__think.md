---
qid: q045
question: "What is the difference between parameters and hyperparameters, and how do you tune hyperparameters?"
topic: "Machine Learning"
model: "Claude Code (authored)"
sources: []
---

1. **Clarify first.** Two-part question: a definition and a method. State the clean distinction up front, *parameters are learned, hyperparameters are chosen*, so you do not blur them later.

2. **Mental model.** Think of a knob-versus-dial metaphor: hyperparameters are the dials you set before the machine runs (learning rate, tree depth, regularization strength, k in k-NN); parameters are what the machine writes down while running (weights, coefficients).

3. **Reason step by step.** Define both with examples, then move to tuning as a search problem: grid search (exhaustive, expensive), random search (often more efficient when few hyperparameters matter), Bayesian optimization (Optuna/Hyperopt, sample-efficient), and successive halving / Hyperband for budget allocation. Emphasize evaluating each config on validation data or cross-validation.

4. **Traps to avoid.** Do not swap the definitions. Do not tune on the test set, that biases the final estimate. Do not present grid search as the only option; interviewers like hearing why random/Bayesian search scales better.

5. **Sanity-check and communicate.** Re-check that every tuning method you named is scored via CV, never test. Deliver as: definition contrast first, then a short menu of search strategies ordered by efficiency, ending on the validation-not-test guardrail.
