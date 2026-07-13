---
qid: q072
question: "What is Maximum Likelihood Estimation (MLE)?"
topic: "Data Science"
model: "Claude Code (authored)"
sources: []
---

1. **Clarify first.** Frame MLE as a *parameter estimation principle*, and note it presupposes a chosen distributional model (e.g. "assume the data is Gaussian"). Say that assumption out loud — MLE only makes sense given a likelihood.
2. **Mental model.** One-line intuition: pick the parameters θ that make the observed data most probable. You are turning "which θ best explains what I saw?" into an optimization.
3. **Reason step by step.** Write the likelihood L(θ) = P(data|θ); with independent samples it's a product, so take the log to get a sum that's easier and numerically stabler to maximize. Then maximize the log-likelihood by setting its derivative to zero or via gradient ascent. Cite anchors: MLE of a normal mean is the sample mean; logistic regression minimizes negative log-likelihood.
4. **Traps to dodge.** Do not say MLE needs no distributional assumption — it does. Do not describe it as *minimizing* likelihood. Note it can be biased in small samples and is sensitive to model misspecification.
5. **Sanity-check and communicate.** Verify the log trick preserves the argmax (log is monotonic, so it does). Round out maturity by contrasting with Bayesian MAP, which adds a prior. Lead with the intuition, then the log-likelihood machinery.
