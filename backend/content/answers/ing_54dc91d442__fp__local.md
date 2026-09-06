---
qid: ing_54dc91d442__fp__local
question: Pre-norm vs post-norm - what's the difference and why did everyone move
  to pre-norm? And why RMSNorm?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 185
output_tokens: 655
total_tokens: 840
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:05:17-05:00'
sources: []
---

### Why “pre‑norm” beats “post‑norm”

In a transformer block the core operation is  

\[
y = \operatorname{LayerNorm}(x + \mathcal F(x)),
\]

where \(x\) is the input, \(\mathcal F\) is a self‑attention or MLP sublayer, and the residual adds back the original signal.  
With **post‑norm** the normalization sees only the *sum* \(x+\mathcal F(x)\). Because \(\mathcal F\) learns to output large activations, the norm of this sum can explode, forcing LayerNorm to scale it down aggressively. The scaling factor is then fed back into the next sublayer, causing a **cascading contraction** that limits how much each layer can change its input. Training becomes sluggish and gradients vanish early.

With **pre‑norm** we first normalize the *input*:

\[
z = \operatorname{LayerNorm}(x), \qquad
y = z + \mathcal F(z).
\]

Now the sublayer sees a bounded, zero‑mean signal; its output is unconstrained and can grow freely. The residual addition does not interfere with LayerNorm’s scale, so the network can learn larger step sizes and gradients propagate more cleanly through depth.

Mathematically this is an instance of *preconditioning*: normalizing before applying a nonlinear operator yields a better‑conditioned Jacobian, improving stability in both forward and backward passes. Hence the community gravitated to pre‑norm once it was clear that post‑norm’s implicit damping limited expressivity.

### Why **RMSNorm**?

LayerNorm rescales by \(\sqrt{\operatorname{Var}(x)+\epsilon}\) and adds a learnable bias per channel. RMSNorm replaces variance with the *root mean square* (RMS):

\[
z_i = \frac{x_i}{\sqrt{\tfrac1d\sum_j x_j^2 + \epsilon}}\;\cdot\;g_i,
\]

where \(g_i\) is a learnable scale. RMSNorm has two advantages:

1. **Fewer parameters** – no bias term, which reduces memory and regularization pressure.
2. **Better geometric interpretation** – the RMS is proportional to the Euclidean norm of the vector. Normalizing by it aligns with *conformal* transformations that preserve angles but control magnitude, a property useful for deep networks where relative scaling matters more than absolute centering.

A subtle insight often missed: because RMSNorm removes centering, it can be seen as implicitly applying an *affine‑invariant* normalization. This means the network is less sensitive to mean shifts in the data distribution—a common source of training instability—yet still benefits from learned channel scaling.

In short, pre‑norm fixes a hidden “implicit contraction” bug in post‑norm, and RMSNorm refines that fix by stripping unnecessary bias while preserving the essential scale‑control that makes deep attention models train reliably.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
