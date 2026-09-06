---
qid: ing_639df7baa5__fp__local
question: 'Explain: Product Quantization (PQ) — Vector Databases'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 459
total_tokens: 630
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:36:53-05:00'
sources: []
---

**Product Quantization for vector databases**

Suppose we have a massive set of *d*-dimensional vectors and we want fast approximate nearest‑neighbour search. The brute force distance between two vectors costs \(O(d)\), which is prohibitive when the database has millions or billions of entries.  

PQ starts from the observation that Euclidean space can be partitioned into a Cartesian product of lower‑dimensional subspaces:
\[
\mathbb{R}^d \;\cong\; \bigl(\mathbb{R}^{s}\bigr)^{M}, \qquad d = M\,s.
\]
If we quantize each subspace separately with its own codebook of size \(K\), every vector is represented by a *code* \((c_1,\dots,c_M)\) where \(c_m \in \{0,\dots,K-1\}\). The reconstruction error in each subspace is independent, so the total distortion is additive.  

The key insight is that the squared Euclidean distance between two vectors factorizes over subspaces:
\[
\|x-y\|^2 = \sum_{m=1}^{M} \|x^{(m)}-y^{(m)}\|^2.
\]
Thus, we can pre‑compute a *distance table* for each query subvector against all \(K\) centroids in that subspace. The approximate distance to any database vector is just the sum of \(M\) lookups, an \(O(M)\) operation independent of the original dimensionality.  

Why does this work? It’s a form of *structured compression* that preserves pairwise distances up to a controllable quantization error—an instance of the Johnson–Lindenstrauss lemma with added sparsity. The non‑obvious benefit is that PQ simultaneously reduces storage (by storing only \(M\) indices per vector) and speeds retrieval, enabling sub‑millisecond search on terabyte‑scale corpora without sacrificing much accuracy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
