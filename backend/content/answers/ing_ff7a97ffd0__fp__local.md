---
qid: ing_ff7a97ffd0__fp__local
question: 'Explain: Prefix Caching — Short Term Context'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 370
total_tokens: 538
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T01:03:05-05:00'
sources: []
---

**Prefix Caching – a principled shortcut for short‑term context**

When a transformer processes a long document, the self‑attention layers must recompute all pairwise interactions at every step. The *prefix* (the first \(k\) tokens that already appeared) is unchanged while new tokens arrive; its internal activations are therefore **reusable**. Prefix caching stores these activations once and re‑uses them for every subsequent decoding step, avoiding a full recomputation.

Why must this work?  
The transformer’s forward pass is *linear* in the number of tokens: each layer computes \(QK^\top\) once per token. If we keep the cached prefix’s key/value matrices, adding a new token only requires forming its query and attending to the stored keys/values—an \(\mathcal{O}(k)\) operation instead of \(\mathcal{O}(n)\). This is an application of *memoisation* in dynamic programming: we exploit that the prefix’s contribution is invariant.

From an optimization view, caching reduces the computational graph size and improves cache locality, thereby lowering memory bandwidth pressure. Probabilistically, it preserves the exact same conditional distribution \(P(x_t|x_{<t})\) because the cached activations are unchanged; only the runtime cost changes.

**Non‑obvious insight:** Prefix caching is *not* a form of model compression or knowledge distillation; it is a *runtime optimisation* that leaves the learned weights untouched. It enables real‑time inference on long documents without retraining or architectural change, simply by reusing intermediate tensor states across time steps.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
