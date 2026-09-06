---
qid: ing_7c0264c2ae__fp__local
question: 'Explain: Metrics: when accuracy lies — Ml And Dl Foundations'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 484
total_tokens: 655
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:29:13-05:00'
sources: []
---

### Accuracy in Machine‑Learning Foundations

**Fundamental problem** – a classifier must map an input \(x\) to the correct class label \(y\).  
The *true* error rate is the probability that the prediction \(\hat y(x)\neq y\), i.e.  

\[
\varepsilon=\Pr_{(x,y)\sim P}\!\bigl[\hat y(x)\ne y\bigr].
\]

Because we cannot evaluate this over all samples, we estimate it on a held‑out set of size \(n\).  
If the test labels are independent draws from \(P\), the number of misclassifications \(k\) follows a binomial distribution \(B(n,\varepsilon)\).  

**Why accuracy works as \(\hat\varepsilon=1-k/n\)** – the maximum‑likelihood estimator (MLE) for \(\varepsilon\) in a Bernoulli setting is simply the sample mean of indicator variables.  
It is unbiased, has variance \(\varepsilon(1-\varepsilon)/n\), and converges to \(\varepsilon\) at rate \(O(n^{-1/2})\) by the Central Limit Theorem.

**Connection to deeper principles**

* **Probability & statistics:** accuracy is an empirical estimate of a Bernoulli success probability.  
* **Information theory:** for balanced classes, maximizing accuracy is equivalent to minimizing the 0‑1 loss, which bounds the cross‑entropy (a proper scoring rule).  
* **Geometry:** in high‑dimensional feature space, accuracy reflects how well decision boundaries separate class manifolds.

**Non‑obvious insight** – *accuracy masks class imbalance.* When one class dominates, a trivial classifier can achieve high accuracy yet be useless. The binomial model still holds, but the estimator’s variance shrinks only because of the majority class; thus precision/recall or area‑under‑curve metrics are often preferable for skewed data.

In short, accuracy is the MLE of the true error probability under independent sampling, grounded in elementary probability, yet it must be interpreted carefully within the broader context of data distribution and task objectives.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
