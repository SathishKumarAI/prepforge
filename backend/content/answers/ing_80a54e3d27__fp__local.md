---
qid: ing_80a54e3d27__fp__local
question: 'Explain: Position Encodings — Llm Internals'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 435
total_tokens: 604
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:38:47-05:00'
sources: []
---

**Position encodings in transformer‑based LLMs**

The core problem is *sequence order*.  
A transformer processes tokens as a set of vectors; the self‑attention operator
\( \operatorname{Attention}(Q,K,V)=\mathrm{softmax}\!\bigl(\frac{QK^\top}{\sqrt d}\bigr)V \)
is permutation‑invariant: swapping two token embeddings leaves the output unchanged.  
But language is inherently ordered; “dog bites man” ≠ “man bites dog”.  
Thus we must inject *relative* or *absolute* positional information into each token representation so that attention can discriminate order.

Why sinusoidal?  
1. **Continuity & smoothness**: Adjacent positions should have similar encodings, enabling the model to generalize to unseen lengths.  
2. **Fourier basis**: Any periodic function can be expressed as a sum of sines and cosines; using frequencies \( \omega_k=10000^{-2k/d} \) gives a complete basis over the sequence length.  
3. **Analytic attention**: The dot‑product between two sinusoidal encodings yields a closed‑form expression involving \(\cos\bigl((p-q)\log 10000\bigr)\), so the model can learn to weight relative distances directly.

Non‑obvious insight: *The choice of frequencies is not arbitrary; it aligns with the Nyquist sampling theorem.*  
By spacing frequencies geometrically, we ensure that any shift in position translates into a predictable phase shift across all dimensions. This allows the transformer to infer absolute differences (Δp) from inner products alone—essentially performing a linearized form of distance estimation without explicit relative‑position tokens.

In practice, positional encodings are added element‑wise to token embeddings before the first self‑attention layer; this simple additive scheme suffices because the attention mechanism is linear in its inputs. The resulting system balances expressiveness (order awareness) with efficiency (no extra parameters).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
