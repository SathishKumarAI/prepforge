---
qid: ing_2bbe25ba21__fp__local
question: 'Explain: KV Cache and Context Caching'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 418
total_tokens: 585
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:37:33-05:00'
sources: []
---

**KV Cache & Context Caching – why the trick works**

When a transformer processes a sequence token by token, each layer stores *key* (K) and *value* (V) matrices for every past position to compute self‑attention:
\[
A_i=\operatorname{softmax}\!\left(\frac{Q_i K_{1:i}^\top}{\sqrt d}\right)V_{1:i}.
\]
At step \(i+1\), the new query \(Q_{i+1}\) must attend to all previous tokens, yet the old keys and values never change. Naïvely recomputing them for every prefix would cost \(\mathcal O(n^2)\) operations per forward pass.

The **KV cache** stores \(K\) and \(V\) from earlier steps in memory and re‑uses them during subsequent passes, appending only the new key/value pair. This reduces the work to \(\mathcal O(n)\) per step – a linear‑time algorithm for incremental decoding or streaming inference.

**Context caching** generalises this idea to *entire* contexts that rarely change (e.g., a prompt). The model precomputes and stores the attention output of the context once, then re‑uses it when generating multiple continuations. It effectively amortises the expensive \(\mathcal O(n^2)\) cost over many generations.

**Non‑obvious insight:**  
The cache doesn’t just save compute; it preserves *attention gradients* across time. When backpropagating through a long prompt, re‑using cached K/V keeps the gradient path short and numerically stable, mitigating vanishing‑gradient effects that would otherwise plague training on very long contexts.

Thus, KV and context caching are principled optimisations rooted in dynamic programming and incremental computation, essential for scalable language models.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
