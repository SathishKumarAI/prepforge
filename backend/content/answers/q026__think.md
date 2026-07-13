---
qid: q026
question: "What is the difference between classification and regression?"
topic: "Machine Learning"
model: "Claude Code (authored)"
sources: []
---

1. **Clarify first.** State the shared frame: both are supervised tasks; the difference is the *target type*. Assume the interviewer wants the distinction plus the metric/loss consequences, and flag that you'll mention a classic gotcha.

2. **Mental model.** Anchor everything on "what does y look like?" Discrete/categorical to classification; continuous/numeric to regression. Loss functions and metrics follow directly from that choice.

3. **Reason step by step.** Classification predicts a class label (spam vs not, digit 0-9), typically outputs probabilities, uses cross-entropy loss, and is judged by accuracy, precision, recall, F1, AUC. Regression predicts a real number (house price, temperature), uses squared-error loss, and is judged by MSE/RMSE/MAE/R-squared. Note that one algorithm family (trees, neural nets) can do both by swapping the output layer and loss.

4. **Traps to avoid.** The big one: logistic regression is *classification* despite its name. Don't say they share identical loss functions. Don't imply regression is only for images or some narrow domain.

5. **Sanity-check.** Test with an example - "predicting exact revenue is regression; predicting will-they-churn is classification" - and confirm the metric you'd cite matches the target type you claimed.
