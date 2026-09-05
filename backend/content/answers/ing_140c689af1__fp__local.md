---
qid: ing_140c689af1__fp__local
question: 'Explain: An enterprise wants semantic search over ~100M documents but is
  balking at vector-index infrastructure cost. Walk me through embedding compression
  options and the math.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 191
output_tokens: 638
total_tokens: 829
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:47:50-05:00'
sources: []
---

**Why compression matters**

A 768‑dimensional float vector costs ~3 kB.  
For *N* = 10⁸ documents that is 300 GB—well beyond the “cheap” RAM of a single node and far more expensive than disk‑based ANN (≈ 5×).  
We therefore compress each embedding to a **fixed‑size, low‑entropy code** while preserving pairwise similarities.

| Method | Core idea | Size | Error | Insight |
|--------|-----------|------|-------|---------|
| **Product Quantization (PQ)** | Split vector into *m* subspaces; quantize each with *k* centroids. | 8 bytes (e.g., *m*=16, *k*=256). | Reconstruction error ≈ σ²(1–∑‖cᵢ‖²/‖v‖²) | *Subspace independence* lets us pre‑compute distance tables once per query. |
| **Residual Quantization (RQ)** | PQ the vector, then quantize the residual recursively. | 12 bytes (*m*=4, *k*=256). | Lower error than PQ at same size. | Residuals capture fine structure; they are sparser, so later levels encode less variance. |
| **Product Quantization with PCA (PQ‑PCA)** | Rotate vectors to decorrelate dimensions before PQ. | 8 bytes | Slightly better than plain PQ for the same *m*. | Geometry: PCA aligns axes with principal variance, making subspaces more orthogonal and quantization errors lower. |
| **Hashing (e.g., Spectral Hash)** | Map to binary codes preserving similarity locally. | 32‑bit (4 bytes). | High error; good for quick pre‑filtering. | The *Hamming ball* property lets us prune candidates in O(1) time, then re‑rank with PQ on the survivors. |

**Math sketch**

For a query vector *q*, distance to compressed code *c* is approximated by

\[
d_{\text{PQ}}^2(q,c)=\sum_{j=1}^{m}\|\,q_j-\hat c_j\,\|^2,
\]

where \(q_j\) and \(\hat c_j\) are the sub‑vectors.  
Pre‑computing tables \(T_j[i]=\|q_j-c_{ji}\|^2\) yields *O(m)* lookup per candidate.

**Non‑obvious insight**

*The bottleneck is not storage but **search time**.*  
By first filtering with a cheap hash (4 bytes), we reduce the PQ search space by ~95 %.  
The remaining candidates are few enough that the O(m) distance table lookups dominate, making the whole pipeline fit comfortably on commodity SSD‑backed RAM while keeping query latency < 50 ms.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
