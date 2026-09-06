---
qid: ing_db5cff1e0a__fp__local
question: 'Explain: Our Contribution — Scaling Latent Reasoning via Looped Language
  Models'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 333
total_tokens: 508
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:45:31-05:00'
sources: []
---

**Scaling Latent Reasoning with Looped Language Models**

The core problem is *reasoning under uncertainty*: a model must maintain and update an internal hypothesis (latent state) while processing a stream of observations, yet large‑scale language models (LMs) treat each token independently.  
A looped LM addresses this by embedding the latent state \(z_t\) into the input representation at step \(t\), letting the transformer’s self‑attention jointly update \(z_{t+1}\). Formally,
\[
P(y_{t+1}\mid y_{\le t}, z_t)=\mathrm{LM}(y_{\le t}\|z_t),
\qquad
z_{t+1}=\Phi(z_t, y_{t+1}),
\]
where \(\Phi\) is a lightweight recurrent update.  
This construction satisfies the *Markov property* for latent variables while preserving the LM’s capacity to capture long‑range dependencies—an optimization of the variational free energy over \(z_t\).  

A non‑obvious insight: because \(\Phi\) can be parameterized as a simple linear layer, training remains fully differentiable and benefits from *self‑supervised* objectives (next‑token prediction), yet the model learns to encode global context in \(z_t\). Thus, looped LMs trade minimal extra computation for a principled way to scale reasoning, bridging discrete inference with continuous neural representations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
