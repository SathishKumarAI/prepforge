---
qid: ing_28c6484b8b__fp__local
question: 'Explain: What does the temperature parameter actually do? Give the formula.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 422
total_tokens: 595
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:31:56-05:00'
sources: []
---

**Temperature in probabilistic language models**

A language model outputs a vector of logits \(z_i\) for each token \(i\).  
To turn these into probabilities we apply a *softmax* with temperature \(\tau>0\):

\[
p(i)=\frac{\exp(z_i/\tau)}{\sum_j \exp(z_j/\tau)} .
\]

**Why this works**

1. **Scaling as an inverse temperature** – The softmax is the Boltzmann distribution \(p(i)\propto e^{-\beta E_i}\) with energy \(E_i=-z_i\).  
   Setting \(\beta=1/\tau\) means a larger \(\tau\) lowers the effective “inverse temperature,” smoothing the distribution; a smaller \(\tau\) raises it, sharpening peaks.

2. **Entropy control** – The entropy of \(p(i)\) is monotone decreasing in \(\tau\).  
   When \(\tau=1\) we recover the model’s natural uncertainty; \(\tau<1\) reduces entropy (exploitation), \(\tau>1\) increases it (exploration).

3. **Logit rescaling** – Multiplying logits by \(1/\tau\) is equivalent to adding a constant to all energies, so relative order of probabilities remains unchanged—only their spread changes.

**Non‑obvious insight**

Temperature does not *alter* the underlying ranking of tokens; it only rescales their differences.  
Thus a low \(\tau\) essentially “forces” the model to commit to its top choice, while a high \(\tau\) lets the entire probability mass be spread over many options—useful for stochastic generation or ensembling diverse outputs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
