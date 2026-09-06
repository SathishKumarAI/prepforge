---
qid: ing_95cd461a49__fp__local
question: 'Explain: Data Parallelism Attention For DeepSeek Models'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 617
total_tokens: 787
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:23:54-05:00'
sources: []
---

### Why Data‑Parallel Attention Works in DeepSeek

DeepSeek’s transformer layers compute self‑attention by
\[
Q,K,V = XW_Q,\;XW_K,\;XW_V, \qquad
A = \text{softmax}\!\left(\frac{QK^\top}{\sqrt d}\right)V .
\]
The *fundamental problem* is that every token attends to **all** others, so the memory and compute cost grow as \(O(n^2)\). In a distributed setting we must keep each GPU’s workload bounded while still exposing all pairwise interactions.

#### 1. Decompose the quadratic term
For a batch split into \(B\) shards (data parallelism), let shard \(b\) hold \(\{X_b\}\). Each shard can compute its local \(Q_b,K_b,V_b\) cheaply, but the dot‑product \(QK^\top\) requires cross‑shard keys. We observe:
\[
Q K^\top = \sum_{b'=1}^{B} Q\, K_{b'}^\top ,
\]
so each shard needs only *broadcast* the keys (and optionally values) from every other shard, not all tokens.

#### 2. Reduce communication with matrix‑multiplication
Broadcasting \(K\) is equivalent to a **tensor‑core friendly** all‑to‑all collective: each GPU sends its \(K_b^\top\) once and receives the rest. Because \(K\) is tall‑and‑skinny, this cost scales as \(O(n/B)\) per GPU rather than \(O(n^2/B)\). The softmax can then be applied locally on the aggregated logits.

#### 3. Optimization principle
The scheme preserves *exact* gradients: each shard’s loss depends on all tokens, so we recover full‑batch training while keeping per‑GPU memory linear in \(n\). This satisfies the **principle of locality** in distributed optimization: compute is local, communication is only what is strictly necessary to maintain consistency.

#### Non‑obvious insight
Most people treat data parallelism as a trivial replication of weights. In attention, however, the *communication pattern* itself becomes a learnable hyperparameter: if we reorder shards (e.g., group tokens by spatial locality), we can reduce the number of large all‑to‑all messages, trading off a small bias for massive speedup without changing model accuracy.

---

**Bottom line:** Data‑parallel attention splits the quadratic kernel into local matrix products plus an all‑to‑all key broadcast, turning an \(O(n^2)\) problem into linear memory with exact gradients—an elegant manifestation of communication–computation trade‑offs in deep learning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
