---
qid: ing_7ff026c631__fp__local
question: Training a trillion-parameter model, attention logits can blow up and destabilise
  the run. What is going on, and how does something like MuonClip address it?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 193
output_tokens: 689
total_tokens: 882
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:37:32-05:00'
sources: []
---

### Why logits blow up in a trillion‑parameter transformer

The attention mechanism computes  

\[
\alpha_{ij}=\frac{\exp \!\bigl((Q_iK_j^\top)/\sqrt{d}\bigr)}{\sum_k\exp \!\bigl((Q_iK_k^\top)/\sqrt{d}\bigr)} .
\]

When the model grows, the weight tensors that produce **query** and **key** vectors become huge.  
Each element of \(Q\) or \(K\) is a sum of many independent terms (the dot product with a large parameter matrix).  
By the central‑limit theorem these sums have variance proportional to the number of contributing parameters.  

Consequently, the inner products \(Q_iK_j^\top\) acquire **variance that scales linearly with model size**.  
After division by \(\sqrt{d}\), the logits still have a standard deviation that grows roughly as \(\sqrt{\text{params}}\).  
When this variance exceeds a few units, the exponential in softmax produces values that are effectively \(0\) or \(\infty\).  

The result is twofold:

1. **Numerical overflow** – the largest exponent overflows the floating‑point range, making the softmax output NaNs.
2. **Gradient explosion** – because a few logits dominate, the gradients become extremely large for the corresponding weights, destabilising training.

Thus, the problem is not a bug in the algorithm but an unavoidable consequence of high‑dimensional random projections: the *concentration* phenomenon pushes the dot products toward extremes.

### How MuonClip fixes it

MuonClip treats the logit distribution as a Gaussian with running mean \(\mu\) and standard deviation \(\sigma\).  
It **clips** each logit \(l\) to the interval  

\[
[\;\mu - k\sigma,\; \mu + k\sigma\;]
\]

where \(k\) is a small constant (e.g., 4).  
This dynamic threshold adapts to the actual scale of the logits at every training step, unlike static temperature scaling.

The key insight that many overlook: *clipping in logit space is equivalent to adding a strongly convex penalty on the attention distribution.*  
By bounding the logits we implicitly regularise the categorical entropy of \(\alpha_{ij}\), preventing any single head from collapsing into a delta function.  
This stabilises both forward probabilities and backward gradients, allowing training to proceed even when the parameter count explodes.

In short, MuonClip turns an unavoidable variance blow‑up into a controlled, data‑driven regulariser that keeps softmax well‑behaved in trillion‑parameter regimes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
