---
qid: ing_df56d0eb16__fp__local
question: 'Explain: 8.5.2.1. Fully Connected Layers ¶ — 8.5. Batch Normalization \u2014
  Dive into Deep Learning 1.0.3 documentation'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 198
output_tokens: 571
total_tokens: 769
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:54:43-05:00'
sources: []
---

**Fully‑Connected (Dense) Layers**

A dense layer maps an input vector \(x\in\mathbb{R}^{d_{\text{in}}}\) to an output
\(y\in\mathbb{R}^{d_{\text{out}}}\) via a linear transform followed by a nonlinearity:
\[
y = \sigma(Wx + b), \quad W\in\mathbb{R}^{d_{\text{out}}\times d_{\text{in}}}.
\]
The core problem it solves is *representation learning*: given data, we want
a transformation that captures salient features. The linear part projects the
input into a space where subsequent nonlinearities can carve out decision
boundaries; mathematically this is a parameterized family of affine maps,
the most general first‑order model. By stacking such layers we obtain a deep
composition \(f(x)=\sigma_{L-1}\!\bigl(W_{L-1}\dots\sigma_1(W_1x+b_1)+b_{L-1}\bigr)\),
which is universal approximators of continuous functions (Cybenko theorem).

**Batch Normalization**

Training deep nets suffers from *internal covariate shift*: the distribution
of each layer’s inputs changes as earlier layers update. BatchNorm tackles this by
standardizing activations per mini‑batch:
\[
\hat{x}_i = \frac{x_i-\mu_{\text{B}}}{\sqrt{\sigma^2_{\text{B}}+\epsilon}},\quad
y_i=\gamma\,\hat{x}_i + \beta,
\]
where \(\mu_{\text{B}}\) and \(\sigma^2_{\text{B}}\) are the batch mean and variance.
This enforces a stable, zero‑mean, unit‑variance distribution for every
layer’s inputs, which:

1. **Accelerates optimization** – gradients flow more uniformly,
   allowing larger learning rates (link to stochastic gradient descent theory).
2. **Regularizes** – the stochasticity of batch statistics adds noise akin to dropout.
3. **Acts as a learnable affine rescaling** – \(\gamma,\beta\) let the network recover any
   necessary scale after normalization.

*Non‑obvious insight*: BatchNorm is not merely “normalize”; it *injects an implicit
prior on the activation distribution*. By constraining each layer’s activations to
a standard normal (modulo learned scaling), we effectively impose a smoothness prior
on the function class, which explains why BN often improves generalization beyond mere speedup.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
