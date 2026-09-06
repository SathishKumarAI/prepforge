---
qid: ing_fac387bf3a__fp__local
question: How do sinusoidal positional encodings work, and how do they compare to
  learned positional embeddings?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 178
output_tokens: 615
total_tokens: 793
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:53:02-05:00'
sources: []
---

**Why positional signals are needed**

A transformer processes tokens as a set; it has no inherent notion of *order*.  
To predict the next token we must encode where each token sits in the sequence.  
Mathematically we need a map  

\[
p:\{1,\dots ,L\}\rightarrow \mathbb R^d
\]

such that for any two positions \(i,j\) the relative distance \(j-i\) can be recovered from \(p(i),p(j)\).  
The simplest such map is *additive*:

\[
p(i)_k = f_k(i)=a_k\, i+b_k .
\]

If we could compute \(\mathbf x_i + p(i)\) before feeding it to the self‑attention, the attention mechanism would still see only relative differences because

\[
(\mathbf x_i+p(i))-(\mathbf x_j+p(j))=(\mathbf x_i-\mathbf x_j)+a_k (i-j).
\]

Thus any linear transformation of \(p(i)\) that preserves pairwise differences suffices.

**Sinusoidal encodings**

Set \(a_k = \frac{1}{10000^{2k/d}}\), \(b_k=0\) and alternate sine/cosine:

\[
p(i)_k=
\begin{cases}
\sin(i\,a_{k/2}) & k\text{ even}\\
\cos(i\,a_{(k-1)/2}) & k\text{ odd}
\end{cases}.
\]

These are *analytic* functions of \(i\); the Fourier basis guarantees that for any fixed \(d\) we can reconstruct \(i-j\) from \(\sin,\cos\) pairs, and the frequency spectrum is dense enough to encode long‑range dependencies.  
Because they’re deterministic, no parameters are learned; training never needs to adjust them.

**Learned embeddings**

Here \(p(i)\) is a free vector trained jointly with model weights.  
They can adapt to dataset quirks (e.g., periodicity in time series) and capture higher‑order positional interactions that simple sines/cosines cannot.  
However, they break the *translation invariance* property: the model must learn from scratch how to recover \(i-j\), often requiring more data and risking overfitting.

**Non‑obvious insight**

Sinusoids implicitly embed a *continuous* position space; any new length \(L'\) can be processed without retraining, because \(\sin,\cos\) are defined for all real numbers. Learned embeddings are inherently discrete—adding a new token length forces re‑training or interpolation, which may distort learned relations. Thus the sinusoidal choice trades flexibility for inductive bias that generalizes gracefully to unseen sequence lengths.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
