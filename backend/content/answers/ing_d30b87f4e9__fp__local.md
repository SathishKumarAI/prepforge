---
qid: ing_d30b87f4e9__fp__local
question: 'Explain: Sinusoidal (Original Transformer) — Llm Internals'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 507
total_tokens: 680
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:29:49-05:00'
sources: []
---

**Sinusoidal Positional Encoding – a principled way to give the Transformer a sense of order**

The core problem: self‑attention treats every token as a permutation‑invariant set; we must inject *position* so that the model can learn “token i precedes token j”.  
A naive solution is one‑hot position vectors, but these explode in dimension and preclude extrapolation to longer sequences.  

Instead, the original Transformer uses deterministic sinusoidal functions:

\[
PE_{(t,2k)}   = \sin\!\left(\frac{t}{10000^{\,2k/d}}\right),\qquad
PE_{(t,2k+1)} = \cos\!\left(\frac{t}{10000^{\,2k/d}}\right),
\]

where \(t\) is the token index, \(d\) the embedding size, and \(k\) indexes frequency bands.  
Why this works:

* **Fourier basis** – any periodic function can be expressed as a linear combination of sines/cosines. By providing all frequencies up to \(1/10000^{\,2k/d}\), we give the network a complete set of *basis functions* for position.
* **Linear separability in distance** – the difference between two encodings is itself a sinusoid whose phase depends only on \(|t_i-t_j|\). Thus, relative distances become linearly computable via dot products, enabling the attention mechanism to learn positional biases without explicit recurrence.
* **Scalability and extrapolation** – since the encoding is deterministic, the model can encode unseen positions (longer sequences) by simply evaluating the same formula at new \(t\).

A non‑obvious insight: *the embedding dimension acts as a logarithmic frequency sampler*. Each successive pair of dimensions halves the wavelength, giving the network a multi‑scale view of position—much like wavelets. This multiscale structure lets transformers capture both fine (local) and coarse (global) positional relationships without increasing model size or training data.

In short, sinusoidal encodings provide an infinite, continuous, and differentiable positional signal that respects the Transformer’s permutation invariance while endowing it with a rich, learnable notion of order.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
