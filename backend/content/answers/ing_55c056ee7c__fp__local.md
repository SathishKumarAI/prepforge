---
qid: ing_55c056ee7c__fp__local
question: 'Explain: Contextual Compression (RAD-L) — Context Engineering'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 466
total_tokens: 637
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:07:07-05:00'
sources: []
---

**Contextual Compression (RAD‑L) – a principled form of “context engineering”**

The core problem is *efficiently encoding* a long input \(x\) so that a downstream model can recover the most salient parts without re‑processing the whole sequence.  
Let \(p(x)\) be the data distribution and let \(f_\theta\) be a task network (e.g., classification).  
We wish to replace \(x\) by a compressed token \(\tilde{x}\) such that  

\[
\mathbb{E}_{x\sim p}[\ell(f_\theta(\tilde{x}), y)] \approx
\mathbb{E}_{x\sim p}[\ell(f_\theta(x), y)],
\]

while reducing the entropy \(H(\tilde{x})\).  
RAD‑L (Recurrent Attention‑Driven Latent) does this by learning a *context encoder* \(q(z|x)\) that predicts a latent context vector \(z\) and an *attention policy* \(\pi(a_t|z_{t-1},x)\) that selects the most informative tokens to keep.  

The objective is a constrained variational bound:

\[
\min_{\theta,q,\pi}\; \mathbb{E}_{x}[\ell(f_\theta(g_\pi(x)),y)] 
+ \beta\, I(z;x),
\]

where \(g_\pi\) reconstructs a short sequence from the selected tokens, and \(I(z;x)\) penalises information retained.  
This is an instance of *rate‑distortion* optimization: we trade compression (low rate) against task loss (distortion).  

**Non‑obvious insight:** The attention policy need not be deterministic; stochasticity in \(\pi\) allows the model to explore diverse contexts during training, yielding a richer latent space that captures *higher‑order dependencies* (e.g., discourse structure) rather than just local syntax. This implicit exploration is what gives RAD‑L its robustness across domains.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
