---
qid: ing_42174a3cda__fp__local
question: 'Explain: Entropy, Cross-Entropy, and Kullback-Leibler Divergence'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 587
total_tokens: 764
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:25:13-05:00'
sources: []
---

**Why we compare probability distributions in learning**

When a model predicts a distribution \(q\) over outcomes while the data come from an unknown true distribution \(p\), the *learning problem* is: make \(q\) as close to \(p\) as possible.  Closeness must be quantified by a function that penalises systematic deviations in a way that is tractable for optimisation.

---

### Entropy  
The entropy of \(p\)

\[
H(p)= -\sum_{x} p(x)\log p(x)
\]

is the *minimal* expected number of bits needed to encode samples from \(p\).  It measures uncertainty: a more uniform distribution has larger \(H\).  In optimisation, we never minimise \(H(p)\) itself (since \(p\) is fixed), but it appears as a constant term when comparing models.

---

### Cross‑entropy  
The cross‑entropy between the true and model distributions

\[
H(p,q)= -\sum_{x} p(x)\log q(x)
\]

is exactly the expected code length if we encode samples from \(p\) using a code optimised for \(q\).  Minimising \(H(p,q)\) forces \(q\) to place probability mass where \(p\) does, because any mis‑allocation incurs a logarithmic penalty weighted by how often that outcome actually occurs.

---

### Kullback–Leibler (KL) divergence  
The difference between the two entropic quantities is

\[
D_{\mathrm{KL}}(p\|q)=H(p,q)-H(p)
   = \sum_{x} p(x)\log\frac{p(x)}{q(x)}
\]

This is a *non‑negative* measure of dissimilarity, zero iff \(p=q\).  It can be interpreted geometrically as the extra bits per sample needed when using \(q\) instead of the optimal code for \(p\); probabilistically it is the expected log‑likelihood ratio.  

**Non‑obvious insight:**  
KL divergence is *asymmetric*.  Reversing the arguments changes the penalty structure: \(D_{\mathrm{KL}}(q\|p)\) heavily penalises assigning mass to events that never occur in \(p\), whereas \(D_{\mathrm{KL}}(p\|q)\) penalises missing true events more strongly.  This asymmetry is why maximum likelihood (minimising \(H(p,q)\)) differs from minimum‑discrepancy criteria (e.g., variational inference minimising \(D_{\mathrm{KL}}(q\|p)\)).  Recognising which side of the divergence we are optimising clarifies many seemingly paradoxical behaviours in learning algorithms.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
