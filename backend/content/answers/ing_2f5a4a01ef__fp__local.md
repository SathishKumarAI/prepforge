---
qid: ing_2f5a4a01ef__fp__local
question: 'Explain: Prefill vs Decode — Attention Mechanisms'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 401
total_tokens: 570
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:45:52-05:00'
sources: []
---

**Prefill vs Decode Attention – the Geometry of Autoregressive Generation**

At its core a transformer decoder must evaluate each token’s probability from *all* tokens it has already seen (context). In a *prefill* pass we have a whole sequence available, so every query can attend to all keys: a dense **full‑attention** matrix. The cost is \(O(L^2)\) for length \(L\), but the computation is embarrassingly parallel because no causal dependencies are enforced during evaluation.

During *decode* we generate token \(t\) one step at a time. Once the probability of token \(t-1\) is decided, it becomes part of the context for \(t\). The model must **respect causality**: query \(t\) may only attend to keys \(\le t\). This is enforced by a *causal mask* that zeroes out future positions. Crucially, the attention computation can be **reused** from step \(t-1\): the key‑value pairs for all previous tokens are already cached; we need only compute the new query’s dot products with those keys. Thus each decode step costs \(O(t)\) rather than recomputing the whole matrix.

The non‑obvious insight: *prefill* and *decode* share the same underlying attention formula, but the mask and caching turn a quadratic problem into an incremental one. The causal mask is not merely a safety guard; it turns the transformer into a **dynamic programming** system where past computations are reused, enabling efficient streaming inference while preserving exact likelihoods.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
