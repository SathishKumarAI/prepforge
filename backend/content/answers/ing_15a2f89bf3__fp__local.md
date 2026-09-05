---
qid: ing_15a2f89bf3__fp__local
question: 'Explain: Ideally, it should automatically shrink the capacity'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 609
total_tokens: 779
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:51:17-05:00'
sources: []
---

**Why a learning algorithm must “shrink its capacity”**

The training data \( \mathcal{D}=\{(x_i,y_i)\}_{i=1}^{n}\) are a noisy sample from an unknown distribution \(P\).  
A hypothesis class \(\mathcal{H}\) (e.g. neural nets with many parameters) can fit any labeling of \(\mathcal{D}\); its *capacity* is quantified by VC‑dimension or Rademacher complexity.  

**Fundamental problem:**  
We want a predictor \(h\in\mathcal{H}\) that minimises the expected loss
\[
L(h)=\mathbb{E}_{(x,y)\sim P}[ \ell(h(x),y)] .
\]
Empirical risk minimisation (ERM) chooses
\[
\hat h = \arg\min_{h\in\mathcal{H}}\frac1n\sum_{i=1}^n\ell(h(x_i),y_i).
\]
If \(\mathcal{H}\) is too rich, ERM can achieve zero training loss but \(L(\hat h)\) may be large—*over‑fitting*.  
Uniform convergence theory tells us that the gap between empirical and expected risk is bounded by a term proportional to the capacity:
\[
|L(h)-\widehat L_n(h)| \leq O\!\left( \sqrt{\frac{C(\mathcal{H})}{n}}\right).
\]
Hence, **shrinking \(C(\mathcal{H})\)** reduces this gap, making the empirical optimum a good proxy for the true optimum.

**How to shrink automatically**

1. **Implicit regularisation (weight decay):** Adding \(\lambda\|w\|^2\) to the loss forces weights toward zero, effectively limiting the hypothesis space to low‑norm functions.  
2. **Early stopping:** Stop stochastic gradient descent before convergence; the trajectory remains in a “lazy” regime where parameters change only slightly from initialization, yielding a smaller effective capacity (related to the neural tangent kernel).  
3. **Dropout/Noise injection:** Randomly masking units during training forces the network to learn redundant representations, which reduces the model’s ability to memorise idiosyncratic patterns.

**Non‑obvious insight**

All these tricks *do not* simply “reduce the number of parameters”; they constrain the **trajectory** of learning in function space. A deep net with millions of weights can behave like a shallow kernel method if optimisation is halted early or regularised heavily—its effective capacity collapses to that of a low‑dimensional subspace. Thus, *capacity shrinking is an optimisation constraint on the path taken by the optimiser, not merely on the model’s size.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
