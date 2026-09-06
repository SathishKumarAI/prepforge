---
qid: ing_a92ed563b2__fp__local
question: 'Explain: AWQ (Activation-aware Weight Quantization)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 392
total_tokens: 562
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:05:09-05:00'
sources: []
---

**AWQ (Activation‑Aware Weight Quantization)**  
The core problem of quantizing a neural net is to compress the weight tensor \(W\in \mathbb{R}^{m\times n}\) into low‑precision integers while keeping the output of every layer
\(y = W x\) close to its full‑precision counterpart.  The naïve approach—minimising \(\|W_{\text{int}}-W\|\)—ignores that the loss in a layer is weighted by the activations \(x\).  

AWQ reformulates quantisation as a *weighted least‑squares* problem:
\[
\min_{q} \sum_{i=1}^{m}\sum_{j=1}^{n} (w_{ij}-\hat w_{ij})^2\,\mathbb{E}[x_j^2],
\]
where \(\hat w_{ij}\) is the quantised weight and the expectation is taken over the distribution of activations that actually flow through neuron \(j\).  
Thus each column of \(W\) receives a *scaling factor* proportional to the variance of its corresponding activation.  This guarantees that large‑variance channels, which contribute most to the output energy, are quantised more faithfully than dormant ones.

The deeper principle is **importance weighting**: we preserve the *information content* of each weight by respecting how much it influences downstream signals.  
A non‑obvious insight: because AWQ uses a per‑column scaling that depends on activations, the same integer code can represent vastly different real values in different layers—this “soft” scaling is what lets AWQ achieve 4‑bit accuracy comparable to 8‑bit floating point without extra fine‑tuning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
