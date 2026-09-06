---
qid: ing_f0d0a4ee09__fp__local
question: 'Explain: GQA: Grouped Query Attention — Kv Cache And Context Caching'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 510
total_tokens: 685
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:31:11-05:00'
sources: []
---

**Grouped‑Query Attention (GQA)** rewrites the classic self‑attention

\[
QK^{T}V \;\to\; \sum_{g=1}^{G}\frac{(Q_g K)^{T}}{\sqrt{d}}\;V,
\]

where queries are partitioned into \(G\) disjoint groups.  
The motivation is that the cost of a full‑matrix dot product scales as
\(O(N^2)\). By grouping, each group only multiplies a \((N/G\times d)\)
query matrix with the full key/value matrices, reducing the quadratic term to
\(G\cdot (N/G)^2 = N^2/G\).  This is an instance of *block‑sparse* linear algebra: we approximate the dense attention matrix by a block‑diagonal structure that preserves locality.

**Kv Cache** stores the key and value matrices for past tokens once, rather than recomputing them every layer. In causal language models, keys/values are deterministic functions of the token embeddings; caching them yields *amortized* cost: each new token requires only a fresh query computation while reusing the cached K/V, turning an \(O(N^2)\) process into \(O(N)\).

**Context Caching** goes further by memorizing the entire “context‑vector” produced after attention for a given prompt. When the same prompt is reused (e.g., in few‑shot prompting), the model can skip recomputing the context and directly feed it to subsequent layers, effectively turning a dynamic computation into a static lookup.

---

### Non‑obvious insight
The true benefit of GQA arises not from reducing *operations* per se but from **aligning memory access patterns with hardware prefetchers**. By grouping queries, each query–key product accesses contiguous key rows, allowing the GPU to load entire blocks in one fetch. This reduces cache misses far more than the theoretical arithmetic savings would suggest, often yielding a 3× speed‑up on modern accelerators even when \(G\) is small. Thus, GQA’s design exploits both *algorithmic* and *hardware* locality, an insight that many treat as a mere implementation trick but is in fact central to its efficiency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
