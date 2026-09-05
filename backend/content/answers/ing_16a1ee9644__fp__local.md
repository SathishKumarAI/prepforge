---
qid: ing_16a1ee9644__fp__local
question: 'Explain: 8.5.2.2. Convolutional Layers ¶ — 8.5. Batch Normalization \u2014
  Dive into Deep Learning 1.0.3 documentation'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 199
output_tokens: 434
total_tokens: 633
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:53:45-05:00'
sources: []
---

**Why batch‑normalise a convolutional layer?**

A convolutional network learns feature maps \(x_{c}^{(i)}\) for channel \(c\) at spatial location \(i\).  
During training the distribution of these activations drifts as earlier layers change their weights.  
If we denote by \(\mu_c,\sigma_c^2\) the mean and variance over a minibatch, batch‑normalisation (BN) replaces each activation with

\[
\hat{x}_{c}^{(i)}=\frac{x_{c}^{(i)}-\mu_c}{\sqrt{\sigma_c^2+\varepsilon}}\;,
\quad y_{c}^{(i)}=\gamma_c\,\hat{x}_{c}^{(i)}+\beta_c .
\]

The key insight is that the *shape* of a feature map (its mean/variance) matters more than its absolute scale for subsequent convolutions. Normalising forces every channel to live in a narrow, centered interval, which stabilises the gradients:  
- **Gradient flow** – the Jacobian of \(\hat{x}\) with respect to \(x\) is bounded by 1, preventing exploding/vanishing gradients.  
- **Learning rate independence** – because each layer sees inputs with similar statistics, a single global learning‑rate schedule suffices.

Why *batch*? Averaging over many examples approximates the population moments, giving an unbiased estimate that adapts as weights change. The learned scale \(\gamma\) and shift \(\beta\) let the network recover any necessary distribution; thus BN is strictly more expressive than plain normalisation.

**Non‑obvious insight:**  
BN implicitly *regularises* by injecting noise through the random minibatch statistics. When a batch is small, the estimated mean/variance fluctuate, acting like a form of dropout that encourages robustness to input perturbations—an effect often overlooked when treating BN as a mere optimisation trick.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
