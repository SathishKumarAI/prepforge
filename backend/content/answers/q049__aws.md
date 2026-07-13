---
qid: q049
question: "How does the Naive Bayes classifier work and what is the 'naive' assumption?"
topic: "Machine Learning"
model: "Claude Code (authored)"
sources: []
---

I'd explain the probability model, then why it works despite a false assumption — **Dive Deep**. Naive Bayes applies Bayes' theorem: it computes the posterior probability of each class given the features, P(class | features) ∝ P(class) × P(features | class), and predicts the class with the highest posterior. The "naive" assumption is conditional independence: it assumes every feature is independent of the others *given the class*, so the joint likelihood factors into a simple product of per-feature probabilities.

That assumption is almost always false in reality — words in an email aren't independent — yet the classifier often works surprisingly well because it only needs the *ranking* of class probabilities to be right, not the exact values. Its strengths: extremely fast, trains on little data, and scales to huge feature spaces, which is why it's a classic spam/text baseline. Variants: Multinomial for counts, Gaussian for continuous features, Bernoulli for binary.

I'd ground it: "As a same-day baseline for a text-tagging problem, Multinomial NB hit 0.88 F1 in minutes, which set the bar my heavier models had to beat" — that's **Bias for Action**, ship a cheap baseline fast.

I'd add I use Laplace smoothing to avoid zero probabilities. A bar-raiser listens for *why* a wrong independence assumption still yields good decisions.
