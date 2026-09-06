---
qid: ing_e77ed157c0__fp__local
question: 'Explain: 1.1.3.2.2. Information-criteria based model selection'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 179
output_tokens: 793
total_tokens: 972
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:11:42-05:00'
sources: []
---

**Why an information criterion exists**

A supervised learner chooses a parametric family \( \mathcal{M}=\{\!p_\theta\!\}\) and fits \(\hat\theta\) by maximizing the likelihood
\(L(\theta)=\prod_{i=1}^{n} p_\theta(x_i)\).
If we only looked at the maximised log‑likelihood,
\(\ell_{\max}= \log L(\hat\theta)\), every model would be rewarded for fitting the training data better—even if it overfits.  
The fundamental problem is that the *expected* Kullback–Leibler (KL) loss to the true distribution
\(p^\*\) is

\[
E_{x\sim p^\*}\bigl[\log p^\*(x)-\log p_{\hat\theta}(x)\bigr]
= -\,H(p^\*) + \underbrace{D_{\mathrm{KL}}\!\bigl(p^\*\|p_{\hat\theta}\bigr)}_{\text{expected log‑loss}} .
\]

The first term is constant; the second depends on how well \(p_{\hat\theta}\) approximates \(p^\*\).  
Using Jensen’s inequality and a Taylor expansion around \(\theta^\*=\arg\max_\theta E_{x}[\,\log p_\theta(x)\,]\), one shows

\[
E[-\ell_{\max}]\;\approx\; -\sum_{i=1}^{n}\!\log p_{\hat\theta}(x_i)
+ \frac{k}{2}\log n ,
\]

where \(k=\dim(\theta)\).  
The extra term, \( (k/2)\log n\), is the **penalty**: it reflects the *model’s capacity* to fit random noise.  

**Deriving AIC and BIC**

- **Akaike Information Criterion (AIC)** stems from an asymptotic expansion of the expected KL loss:
  \[
  \text{AIC}= -2\ell_{\max} + 2k .
  \]
  It is a *frequentist* correction that estimates the bias in log‑likelihood due to finite samples.

- **Bayesian Information Criterion (BIC)** comes from an asymptotic Laplace approximation of the marginal likelihood
  \[
  p(x_{1:n}\mid\mathcal{M}) \approx L(\hat\theta)\, (2\pi)^{k/2}|\mathbf{I}(\hat\theta)|^{-1/2}\, n^{-k/2},
  \]
  yielding
  \[
  \text{BIC}= -2\ell_{\max} + k\log n .
  \]
  Here the penalty grows with \(n\), reflecting the Bayesian view that larger samples justify more complex models.

**Non‑obvious insight**

Both AIC and BIC penalise *parameter count* only as a proxy for model complexity.  
In modern machine learning, many models (e.g., deep nets) have parameters far exceeding training points yet generalise well because their effective dimensionality is much smaller—captured by concepts like *effective degrees of freedom*, *Rademacher complexity*, or *information bottleneck*. Thus, an information criterion that truly accounts for a model’s **expressive capacity** must look beyond raw parameter counts to the geometry of the likelihood surface and the distribution of data.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
