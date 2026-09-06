---
qid: ing_4902c53f08__fp__local
question: 'Explain: Position Information — Transformer Architecture'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 166
output_tokens: 550
total_tokens: 716
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:40:53-05:00'
sources: []
---

### Why Transformers Need Position

A transformer’s self‑attention treats its input as a *set* of tokens: the dot‑product
\(QK^{\top}\) is invariant to any permutation of those tokens.  
Yet language (and vision) is fundamentally **sequential**—the meaning of “bank” depends on whether it follows “river” or “money.”  
Thus we must inject a *relative order* signal that the attention mechanism can exploit.

### From Geometry to Encoding

Think of each token as a point in \(\mathbb{R}^{d}\).  We want an embedding \(p_i\) such that
\(p_{i+1}-p_i\) is constant (uniform step along a line), and distances grow smoothly with |i-j|.  
A simple way: place tokens on the unit circle in \(\mathbb{R}^{2}\):
\[ p_i = (\sin( i/\tau ),\, \cos( i/\tau )) ,\]
where \(\tau\) controls frequency.  Extending to higher dimensions, we interleave multiple sine/cosine waves at geometrically increasing wavelengths:
\[
p_{i,2k}   = \sin\!\left(\frac{i}{10000^{\,k/d}}\right),\qquad
p_{i,2k+1} = \cos\!\left(\frac{i}{10000^{\,k/d}}\right).
\]
These *positional encodings* are added to the token embeddings before attention.  
Because sine and cosine are linear in the exponent, a dot product between two positions yields a smooth function of their distance—exactly what attention needs to weight nearby tokens more heavily.

### Non‑Obvious Insight

The choice of a **logarithmic frequency spectrum** (powers of 10 000) ensures that every relative distance can be represented as a linear combination of the encoding components.  
Consequently, a single attention layer can learn a *translation‑invariant* weighting scheme: shifting all positions by one step merely adds a constant vector to each \(p_i\), which is absorbed during training.  
This property lets transformers generalize to longer sequences than seen in training without re‑tuning the positional encodings.

--- 
**Summary:** Transformers lack inherent order; positional encodings give them a continuous, smoothly varying coordinate system that preserves relative distances and enables the attention mechanism to differentiate token positions effectively.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
