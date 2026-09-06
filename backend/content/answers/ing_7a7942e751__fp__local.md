---
qid: ing_7a7942e751__fp__local
question: 'Explain: Ad Prediction System — Grokking The Machine Learning Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 462
total_tokens: 635
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:25:08-05:00'
sources: []
---

**Ad‑prediction as a supervised learning problem**

The core goal is to estimate the probability that a user will click on an ad (CTR) given features \(x\).  
Formally we want a function \(f_\theta(x)\approx P(y=1|x)\) with parameters \(\theta\). The *loss* is the negative log‑likelihood of a Bernoulli distribution:

\[
L(\theta)= -\sum_{i}\bigl[y_i\log f_\theta(x_i)+(1-y_i)\log(1-f_\theta(x_i))\bigr].
\]

Minimising \(L\) yields the maximum‑likelihood estimator, which is optimal under the assumption that clicks are independent Bernoulli trials.  
Because data arrive in a stream and feature spaces (user ID, ad slot, time of day) are high‑dimensional, we regularise with an \(\ell_2\) penalty or use stochastic gradient descent on mini‑batches.

**Why this works**

1. **Information theory**: The loss is the cross‑entropy between true click distribution and our model; minimising it maximises mutual information between features and clicks.  
2. **Geometry**: Logistic regression maps \(\mathbb{R}^d\) into \([0,1]\) via a sigmoid, ensuring outputs are valid probabilities while preserving convexity of the loss.  
3. **Optimization**: Convexity guarantees a unique global optimum; SGD converges efficiently even with millions of examples.

**Non‑obvious insight**

Most practitioners focus on accuracy, but the *calibration* of predicted CTRs is critical for revenue optimisation. A well‑calibrated model ensures that bidding strategies (e.g., cost per click) are set correctly; a mis‑calibrated predictor may over‑bid on low‑value impressions or under‑bid on high‑value ones, eroding profit even if overall accuracy is high. Thus, after training, one should apply Platt scaling or isotonic regression to align predicted probabilities with empirical frequencies before deployment.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
