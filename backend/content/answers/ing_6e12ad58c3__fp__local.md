---
qid: ing_6e12ad58c3__fp__local
question: 'Explain: Multi-Head Attention — Llm Internals'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 498
total_tokens: 668
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:58:30-05:00'
sources: []
---

### Why a transformer needs *multi‑head* attention  
At the heart of every language model is the problem of **contextualizing each token**: given a word, we want to know which other words in the sequence are most relevant for predicting its meaning or next occurrence. This is an optimization over all possible linear combinations of the input embeddings—essentially a *soft* lookup that must respect order and capture long‑range dependencies.

A single attention head performs this soft lookup once: it projects queries, keys, and values into a shared space, computes scaled dot products, applies softmax, and aggregates. The result is a **single direction** in which the model looks for context. However, language exhibits *multiple simultaneous phenomena*—syntax, semantics, coreference, style—that lie on different sub‑spaces of the embedding manifold. A single projection cannot simultaneously capture all of them without sacrificing expressiveness.

### Multi‑head: the geometric solution  
By splitting the hidden dimension into *H* heads, each head learns its own projection matrices \(W_Q^h, W_K^h, W_V^h\). Each head thus explores a different subspace, attending to distinct patterns (e.g., one might specialize in detecting subject–verb agreement while another captures topic drift). The outputs of all heads are concatenated and linearly transformed back to the original dimension:
\[
\text{MultiHead}(x) = W_O \big[\,\mathrm{head}_1(x)\,\|\,\dots\,\|\;\mathrm{head}_H(x)\,] .
\]
This is equivalent to a **block‑diagonal** linear transformation that preserves the total capacity while enabling *parallel* exploration of complementary cues.

### Non‑obvious insight  
The real power lies in the **inter‑head interaction after concatenation**. The final projection \(W_O\) can learn arbitrary combinations of head outputs, effectively letting the model decide which heads to trust for each token. Thus, multi‑head attention is not merely a “sum of heads” but a *learned gating* mechanism that lets the network dynamically fuse diverse contextual signals—an elegant way to encode conditional dependence without explicit hard‑wired rules.

--- 

**Word count:** ~190

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
