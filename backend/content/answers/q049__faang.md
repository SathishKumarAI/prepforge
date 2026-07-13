---
qid: q049
question: "How does the Naive Bayes classifier work and what is the 'naive' assumption?"
topic: "Machine Learning"
model: "Claude Code (authored)"
sources: []
---

**Clarify** — I'll assume a classification task (e.g., text/spam) and that the interviewer wants Bayes' theorem, the independence assumption, and why the method still works despite it.

**Approach** — State Bayes' rule, show how the naive assumption simplifies it, then cover practical fixes and when it shines.

**Depth** — Naive Bayes picks the class with the highest posterior probability given the features, using Bayes' theorem: posterior is proportional to prior times likelihood. The likelihood of a full feature vector is hard to estimate jointly, so the "naive" assumption is that features are conditionally independent given the class. That turns the joint likelihood into a simple product of per-feature likelihoods, each cheap to estimate from data. We compute this product times the class prior for each class and pick the max. Variants differ by feature model: Gaussian for continuous features, multinomial or Bernoulli for word counts in text.

**Edge cases** — A feature value unseen for a class gives zero probability, zeroing the whole product; Laplace (add-one) smoothing fixes this. Strongly correlated features violate independence and can skew probabilities, though the argmax class is often still right. Probability estimates can be poorly calibrated.

**Optimize & communicate** — Use log-probabilities to avoid numeric underflow and add smoothing. I'd note that despite the unrealistic assumption, it's a fast, strong baseline for high-dimensional text, showing pragmatic judgment.
