---
qid: q030
question: "What is logistic regression and how does it differ from linear regression?"
topic: "Machine Learning"
model: "Claude Code (authored)"
sources: []
---

I'd draw the sharp line, then anchor to a decision I owned — **Dive Deep**. Logistic regression predicts the *probability* of a class by passing a linear combination through a sigmoid, squashing output to [0,1], and it's trained by minimizing log-loss (cross-entropy), not squared error. Linear regression predicts an unbounded continuous value with MSE. So logistic is a classifier; linear is a regressor — despite the shared "regression" name and linear decision boundary.

I'd make it concrete: "For a fraud screen I used logistic regression because I needed calibrated probabilities to set a business-tunable threshold, not just a hard label — that let ops trade recall for precision as fraud patterns shifted." That shows **Customer Obsession**: the *probability* is what powers a good customer/ops trade-off.

I'd add the practical why: logistic coefficients are interpretable as log-odds, so I can explain to risk/compliance why a decision was made — valuable when **Ownership** means defending the model downstream. On AWS, SageMaker Linear Learner does binary logistic at scale, and I'd monitor calibration drift via CloudWatch.

A bar-raiser listens for whether I understand *why* the loss and output differ, and that I value calibration, not just accuracy.
