---
qid: q030
question: "What is logistic regression and how does it differ from linear regression?"
topic: "Machine Learning"
model: "Claude Code (authored)"
sources: []
---

1. **Clarify first.** Lead with the headline correction: despite the name, it's a *classification* algorithm. Assume the interviewer wants the mechanism plus a point-by-point contrast with linear regression.

2. **Mental model.** Think "linear regression passed through a squashing function." A linear score feeds a sigmoid that maps to a probability in [0,1], which you threshold into a class.

3. **Reason step by step.** Write P(y=1|x) = 1/(1 + e^-(b0 + b^T x)). The sigmoid bounds the output; you threshold (often 0.5) to decide the class. Training minimizes log-loss / cross-entropy via gradient descent - not least squares. Then contrast: outputs probabilities not continuous values, uses a sigmoid link and log-loss not linear output and squared error, and yields a linear decision boundary in feature space. Coefficients read as changes in log-odds. It extends to multiclass via softmax.

4. **Traps to avoid.** Don't say it predicts continuous values with squared error, don't call it unsupervised clustering, and don't claim it outputs hard 0/1 with no probability.

5. **Sanity-check.** Verify your contrast is symmetric (output type, link, loss) and restate the interpretability angle - log-odds - so the difference lands clearly.
