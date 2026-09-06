---
qid: ing_a4ff3d44ac__fp__local
question: 'Q: What is the KV cache and why is it critical for serving?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 368
total_tokens: 542
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:57:04-05:00'
sources: []
---

In a transformer, each token is encoded by multiplying an *attention query* \(q_t\) with a set of stored *key–value* pairs \((k_i,v_i)\). During inference the model must compute these products for every new token while re‑using all previously computed keys and values. The **KV cache** stores exactly those \((k_i,v_i)\) from past positions, so each forward pass only adds a single row to the cache rather than recomputing the entire sequence.

From an optimization standpoint, the cache turns an \(O(n^2)\) attention cost (with \(n\) tokens seen so far) into \(O(n)\): the new query attends to \(n-1\) cached keys and one fresh key. This is critical for *latency* because a single pass over the whole history would otherwise dominate CPU/GPU time, especially in long‑context models.

Probabilistically, caching preserves the Markov property of autoregressive generation: once the hidden state has been encoded into \((k,v)\) pairs, future predictions depend only on the cache, not on raw tokens. Geometrically, each new key is a point added to an evolving attention manifold; storing it avoids recomputation of its projection onto all past queries.

**Non‑obvious insight:** The KV cache also acts as a *learnable memory bank*. Its dimensionality and sparsity can be tuned (e.g., via low‑rank factorization or locality‑sensitive hashing) to trade off expressivity for speed, enabling efficient serving of gigantic contexts without changing the underlying model weights.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
