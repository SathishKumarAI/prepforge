---
qid: ing_81cc0315c0__fp__local
question: 'Explain: RAD-O: Retrieval Augmented Decoding — Kv Cache And Context Caching'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 429
total_tokens: 605
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:41:09-05:00'
sources: []
---

**Retrieval‑Augmented Decoding (RAD‑O)**

At its core, a transformer predicts the next token \(t_{i+1}\) by attending to all past tokens \(\{t_1,\dots ,t_i\}\). In long‑context tasks this becomes infeasible because self‑attention scales as \(O(i^2)\). RAD‑O sidesteps the quadratic cost by *retrieving* a small, highly relevant set of “memory” vectors from an external index and feeding them into the decoder as if they were part of the original sequence.

1. **KV Cache** – The transformer stores key–value pairs \((K,V)\) for each token it has already generated. Instead of recomputing these representations at every step, RAD‑O re‑uses them (“cache”) and appends retrieved keys/values to the cache before computing attention. This turns a quadratic operation into linear plus a tiny fixed overhead.

2. **Context Caching** – When the model needs additional context (e.g., a long document), it queries an embedding index for the top‑\(k\) most similar passages. The embeddings of those passages are projected to the same dimensionality as \(K,V\). Because these vectors are pre‑computed, they can be inserted into the KV cache *once* and reused across multiple decoding steps.

The underlying principle is **information reuse**: we trade storage for computation by keeping a compressed summary (keys/values) of both past outputs and retrieved content. This aligns with optimal transport—moving only the minimal amount of information needed to preserve predictive power.

*A non‑obvious insight*: The retrieved keys are not merely additional context; they act as *soft prompts* that steer attention weights, effectively reshaping the model’s internal belief state without retraining. Thus RAD‑O leverages retrieval not for content injection but for dynamic re‑weighting of self‑attention.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
