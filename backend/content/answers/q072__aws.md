---
qid: q072
question: "What is Maximum Likelihood Estimation (MLE)?"
topic: "Data Science"
model: "Claude Code (authored)"
sources: []
---

I'd frame this with **Dive Deep**: MLE is the principle behind much of the modeling I do, so I explain it plainly then connect it to practice. MLE finds the parameter values that make the observed data most probable: you write the likelihood, the probability of the data as a function of the parameters, and choose the parameters that maximize it, usually by maximizing the log-likelihood since it turns products into sums and is numerically stable. For a coin, MLE of the heads probability is just the observed proportion; that intuition generalizes.

The judgment I signal is knowing where it lives and its limits. I'd point out that fitting logistic regression, or training a neural net with cross-entropy loss, *is* MLE, and least-squares regression is MLE under Gaussian errors, so it's not abstract, it's what my models already optimize. I'd give a concrete example: recognizing that minimizing cross-entropy was MLE helped me reason about why class imbalance biased the estimate and justify a weighted likelihood. I'd also note MLE can overfit small samples, where I'd add regularization, which is really MAP estimation with a prior. A bar-raiser listens for whether you connect MLE to the loss functions you actually train and can name its overfitting failure mode.
