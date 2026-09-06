---
qid: ing_dabdf27702__fp__local
question: 'Q: Why do modern LLMs use Pre-LN instead of Post-LN?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 436
total_tokens: 613
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:44:32-05:00'
sources: []
---

**Why Pre‑LN (LayerNorm before the feed‑forward and attention sub‑layers) beats Post‑LN in modern LLMs**

The core problem is *stability of residual training*.  
A transformer block computes  

\[
y = x + \mathcal{F}(\text{norm}(x)),
\]

where \(x\) is the block input, \(\mathcal{F}\) the sub‑layer (self‑attention or MLP), and *norm* a normalization.  
If norm is applied **after** \(\mathcal{F}\) (Post‑LN), the residual addition occurs on two signals of different scales: \(x\) (roughly unit variance) and \(\mathcal{F}(\text{norm}(x))\). The latter tends to grow with depth, causing *gradient explosion* or vanishing as it is back‑propagated through many layers.  
Pre‑LN resolves this by normalizing **before** the nonlinearity:

\[
y = x + \mathcal{F}(\text{norm}(x)).
\]

Now both terms in the addition are comparable; the residual behaves like a *skip connection* that preserves signal magnitude, ensuring the Jacobian remains close to identity. This aligns with the principle of *identity mapping for gradients* (as in ResNets), yielding stable training even for 100+ layers.

**Non‑obvious insight:**  
Pre‑LN implicitly *decouples noise amplification from depth*. The norm suppresses variance introduced by \(\mathcal{F}\) before it can be amplified through successive residual additions, acting as a dynamic “gate” that keeps the effective learning rate per layer constant. This subtle regularization is why large‑scale LLMs (GPT‑3, PaLM, LLaMA) favor Pre‑LN.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
