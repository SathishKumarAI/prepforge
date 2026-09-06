---
qid: ing_fab4ba3a9b__fp__local
question: 'Explain: Bayesian Spam Filtering — An Intuitive (and Short) Explanation
  of Bayes\u2019 Theorem \u2013 BetterExplained'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 189
output_tokens: 526
total_tokens: 715
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:52:46-05:00'
sources: []
---

**Why a mailbox needs probability**

A message is either *spam* (S) or *ham* (H).  
The only observable are its words \(W_1,\dots,W_n\).  
We want the posterior odds  

\[
P(S|W)=\frac{P(W|S)\,P(S)}{P(W)}
\]

but computing \(P(W)\) is hard.  Bayes’ theorem turns the problem around: we compute *likelihoods* of seeing the words under each hypothesis and let the data decide.

**Deriving the rule**

Assume word independence (the naïve assumption).  
Then  

\[
P(W|S)=\prod_{i=1}^n P(W_i|S), \qquad
P(W|H)=\prod_{i=1}^n P(W_i|H).
\]

The log‑odds ratio becomes a sum:

\[
\log\frac{P(S|W)}{P(H|W)}
  =\log\frac{P(S)}{P(H)}+\sum_{i=1}^n
   \log\frac{P(W_i|S)}{P(W_i|H)} .
\]

Each word contributes a *weight*; common spam words (e.g. “free”) have large positive weights, while rare ham words contribute negative ones.

**Why it works**

The rule is the optimal linear classifier in log‑space for multinomial data under the independence assumption—an instance of maximum likelihood estimation.  
It implicitly maximizes the expected information gain: each word updates our belief proportionally to how informative it is about the class.

**Non‑obvious insight**

Because the classifier sums *log* probabilities, very unlikely words (with tiny \(P(W_i|S)\) or \(P(W_i|H)\)) can dominate the decision.  Thus a single rare but highly indicative word can flip a message from ham to spam, even if all other words are neutral—a fact that explains why “unsubscribe” alone often triggers filtering.

In practice, smoothing (e.g., Laplace) prevents zero probabilities, and training on large corpora gives accurate estimates for the \(P(W_i|S)\) and \(P(W_i|H)\).  The resulting system is simple, interpretable, and remarkably effective.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
