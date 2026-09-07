---
qid: ing_273397edba__faang__local
question: 'Explain: Distance Metrics — Vector Databases'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 519
total_tokens: 749
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:14:43-05:00'
sources: []
---

**Clarify**  
We’re asked to explain *distance metrics* as used in vector databases—how we measure similarity between high‑dimensional embeddings and why different metrics matter for search performance.

**Approach**  
1. Define the typical embedding space (ℝⁿ).  
2. List common distance functions.  
3. Explain their geometric intuition, computational cost, and impact on ANN indexing.  
4. Tie back to use‑cases (e.g., cosine for semantic similarity vs L₂ for Euclidean proximity).

**Depth**  

| Metric | Formula | Intuition | Typical Use |
|--------|---------|-----------|-------------|
| **Euclidean (L₂)** | √∑(xi−yi)² | Straight‑line distance; sensitive to magnitude. | Image retrieval, clustering where scale matters. |
| **Manhattan (L₁)** | ∑|xi−yi| | Sum of absolute differences; robust to outliers. | Sparse vectors, some ANN schemes. |
| **Cosine** | 1−(x·y)/(‖x‖‖y‖) | Angle between vectors; ignores magnitude. | Text embeddings, recommendation systems. |
| **Dot‑product** | x·y | Direct similarity score; larger when aligned and large in norm. | Some ANN libraries (e.g., FAISS) optimize dot‑product indexing. |

*Complexity*: Computing L₂ or L₁ is O(n). For cosine we add a normalization step, still linear. Index structures (IVF, HNSW) assume a metric; choice affects clustering quality and pruning efficiency.

**Edge Cases**  
- **High dimensionality**: All distances suffer from the “curse of dimensionality”; nearest neighbors become less meaningful.  
- **Sparse vs dense vectors**: Manhattan may be cheaper on sparse data.  
- **Normalization errors**: Dividing by zero if a vector is all zeros (cosine).  

Testing involves synthetic clusters with known ground truth and measuring recall@k for each metric.

**Optimize & Communicate**  
Explain that many production systems pre‑normalize embeddings to use dot‑product indexing, which is computationally cheaper than full cosine. Also note hybrid approaches: first filter by L₂, then re‑rank with cosine. Conclude that the right metric depends on data distribution and downstream task; profiling both recall and latency guides selection.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
