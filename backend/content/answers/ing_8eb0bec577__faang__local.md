---
qid: ing_8eb0bec577__faang__local
question: Which distance metric should you use for embedding search - cosine, dot
  product, or Euclidean - and does the choice actually matter?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 664
total_tokens: 912
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:16:03-05:00'
sources: []
---

**Clarify**  
You’re building an approximate‑nearest‑neighbors (ANN) engine that ranks vectors by similarity. The question is: should we compare embeddings using cosine, dot product, or Euclidean distance, and does it affect the final ranking? Assumptions to confirm:  
- All vectors are L2‑normalised (or not).  
- You care about retrieval accuracy vs. index size & speed.  
- Query vectors come from the same distribution as indexed ones.

**Approach**  
1. Analyse how each metric transforms similarity scores.  
2. Map the choice to index requirements (e.g., product quantisation needs Euclidean).  
3. Quantify impact on ranking quality through a small benchmark.

**Depth**  

| Metric | Formula | When equivalent | Typical use |
|--------|---------|-----------------|-------------|
| **Cosine** | `cos = (q·x) / (||q||||x||)` | If all vectors are normalised → `cos ∝ dot`. | Retrieval with L2‑normalised embeddings. |
| **Dot product** | `dot = q·x` | Same as cosine when vectors are unit‑norm; otherwise preserves magnitude, useful for scoring raw logits. | Ranking by confidence (e.g., CLIP). |
| **Euclidean** | `||q−x||² = ||q||² + ||x||² − 2q·x` | Equivalent to dot product if `||q||`, `||x||` are constant across candidates. | Indexing with LSH/IVF that assume Euclidean geometry. |

- **Ranking equivalence**:  
  - If you normalise all embeddings, cosine and dot yield identical orderings (just a linear scaling).  
  - Euclidean ranking differs because it adds the `||x||²` term; candidates with larger norms are penalised unless they also have large dot products.  

- **Practical effect**: In most modern NLP/vision models (e.g., CLIP, sentence‑transformers), embeddings are normalised before indexing, so cosine/dot give identical recall. Switching to Euclidean typically hurts recall unless you re‑weight norms.

**Edge cases**  
- Non‑normalised vectors with varying magnitudes → Euclidean can reorder results dramatically.  
- If the index (e.g., HNSW) is built on L2 distances, using cosine requires a normalisation step before querying; forgetting this breaks correctness.  
- Very high dimensionality: dot product may overflow if not scaled.

**Optimize & communicate**  
- **Recommendation**: Normalise all embeddings and use cosine (or equivalently, dot). It keeps the index simple, matches most ANN libraries’ expectations, and guarantees consistent ranking across queries.  
- **If you need raw confidence scores**: keep dot product but normalise only at query time; this preserves magnitude for ranking while still being compatible with Euclidean‑based indexes.  

Explain that the choice matters mainly when norms vary; otherwise, cosine/dot are interchangeable, and Euclidean is preferable only if your indexing algorithm demands it or you purposely want norm‑aware similarity.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
