---
qid: q030
question: "What is logistic regression and how does it differ from linear regression?"
topic: "Machine Learning"
model: "Claude Code (authored)"
sources: []
---

**Situation** On an email-marketing team, someone had used linear regression to predict click-through, and it was outputting probabilities like 1.4 and negative 0.2. Those obviously can't be probabilities, and the thresholding was a mess.

**Task** I needed to switch us to the right model for a binary outcome and clearly explain why logistic regression fit where linear didn't.

**Action** I replaced it with logistic regression. The core difference: linear regression predicts an unbounded continuous value, while logistic regression passes that linear combination through a sigmoid to squash the output into a 0-to-1 probability, and it optimizes log-loss instead of squared error. I trained it, calibrated the decision threshold on the validation set rather than defaulting to 0.5, and interpreted the coefficients as log-odds so marketing could understand which features drove clicks.

**Result** Predicted probabilities became well-behaved and calibrated, and AUC came in at 0.79. Choosing the threshold deliberately lifted campaign precision by 12%. The lesson: linear regression is for quantities, logistic for probabilities and classification, and the sigmoid plus log-loss is exactly what makes that switch work.
