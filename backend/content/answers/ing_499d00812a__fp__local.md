---
qid: ing_499d00812a__fp__local
question: 'Explain: LLM & Transformer Fundamentals - Interview Questions'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 552
total_tokens: 721
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:41:53-05:00'
sources: []
---

**Why a transformer matters for language**

The core problem of an LLM is *sequence modeling*: given tokens \(x_{1:t}\) predict the next token \(x_{t+1}\).  
Traditional RNNs solve this by maintaining a hidden state that must compress all past context into one vector.  As sequences grow, gradients vanish or explode—information gets lost.  

A transformer sidesteps this by letting every position attend to *all* others via self‑attention.  The attention weight
\[
\alpha_{ij} = \frac{\exp(q_i^\top k_j/\sqrt{d})}{\sum_{l}\exp(q_i^\top k_l/\sqrt{d})}
\]
is a softmax over pairwise dot products, which is precisely the *maximum‑entropy* estimate of a conditional distribution when we only know that larger inner products indicate higher compatibility.  Thus attention implements an information‑theoretic message passing: each token broadcasts its representation and receives weighted aggregates, preserving long‑range dependencies without recurrent compression.

**Why layers stack**

Each transformer layer is a *residual MLP* applied to the attended output plus a position‑wise feed‑forward block:
\[
h^{(l+1)} = h^{(l)} + \text{LayerNorm}\big(\text{Attn}(h^{(l)})\big), \quad
h^{(l+2)} = h^{(l+1)} + \text{LayerNorm}\big(\text{FFN}(h^{(l+1)})\big).
\]
The residual connection ensures that gradients can flow directly from loss to earlier layers, solving the vanishing‑gradient problem and allowing each block to learn a *small* perturbation of identity.  This mirrors the idea of *incremental refinement* in optimization: we start with a crude estimate (the raw embedding) and iteratively correct it.

**Non‑obvious insight**

Most people overlook that the softmax temperature \(\sqrt{d}\) is not arbitrary; it normalizes dot products so that they remain in a regime where the exponential behaves linearly.  If \(d\) is too large, attention collapses to a single token (over‑confident), destroying diversity.  Conversely, if \(d\) is too small, all tokens become indistinguishable.  Thus transformer width directly controls *information capacity* via this scaling—an elegant link between geometry and probability that often gets ignored in interviews.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
