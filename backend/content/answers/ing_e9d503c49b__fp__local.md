---
qid: ing_e9d503c49b__fp__local
question: Why did transformers displace RNNs for language modelling, and what exactly
  does the KV cache buy you at inference time?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 184
output_tokens: 494
total_tokens: 678
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:16:13-05:00'
sources: []
---

**Why Transformers beat RNNs in language modeling**

The core problem is *sequence‑to‑sequence dependency*: we want to predict the next token from an arbitrary context length \(L\).  
A recurrent network processes tokens sequentially, updating a hidden state \(\mathbf{h}_t = f_\theta(\mathbf{x}_{1:t})\). The gradient signal for token \(i\) must propagate through \(O(L)\) time steps—this is the *vanishing/exploding gradient* phenomenon. Even with gating (LSTM/GRU), the effective receptive field grows only logarithmically, so long‑range interactions are poorly captured.

The Transformer replaces recurrence with self‑attention: each token attends to every other in parallel, computing

\[
\mathbf{y}_t = \sum_{j=1}^L \alpha_{tj}\,\mathbf{k}_j\,v_j,
\qquad
\alpha_{tj}= \operatorname{softmax}\!\bigl((q_t k_j^\top)/\sqrt d\bigr).
\]

This is a *global weighted average* whose weights are learned from the data. The computational graph has depth \(O(1)\) regardless of \(L\), so gradients never suffer from long‑range decay, and each token can directly capture dependencies at any distance. Thus Transformers scale to thousands of tokens while retaining expressiveness.

**What the KV cache buys at inference**

During decoding we generate tokens one by one: \(\mathbf{y}_t = \mathrm{SA}(q_t; K_{1:t-1}, V_{1:t-1})\). Recomputing \(K,V\) for each new query is wasteful because the key/value pairs depend only on past context. The *key‑value cache* stores these once and reuses them, reducing each step from \(O(L^2)\) to \(O(L)\).

A non‑obvious insight: the cache also implicitly regularizes inference by preventing recomputation of *softmax weights* that could drift due to floating‑point noise. Keeping a stable set of keys/values ensures consistent attention patterns across steps, which improves perplexity in practice more than the raw speedup alone.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
