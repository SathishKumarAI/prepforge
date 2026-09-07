---
qid: ing_c08af17fee__faang__local
question: What are embeddings? Compare cosine similarity, dot product, and Euclidean
  distance - when does the choice matter?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 580
total_tokens: 824
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:09:34-05:00'
sources: []
---

**Clarify**  
Embeddings are dense vector representations of discrete items (words, images, users…) learned so that semantically similar items lie close in the vector space. The question asks: *How do we compare two such vectors and when does the metric choice matter?* I’ll assume we’re working with fixed‑length, L2‑normalized embeddings produced by a neural net or word2vec style model.

**Approach**  
1. Define each similarity/distance measure mathematically.  
2. Discuss how normalization affects them.  
3. Map common use‑cases (retrieval, clustering, ranking) to the appropriate metric.  
4. Highlight pitfalls and computational trade‑offs.

**Depth**  

| Metric | Formula | Properties | Typical Use |
|--------|---------|------------|-------------|
| **Cosine similarity** | `cos(a,b)=a·b/(‖a‖‖b‖)` | Scale‑invariant; bounded in [−1,1]. | Retrieval & ranking where only direction matters (e.g., sentence similarity). |
| **Dot product** | `a·b` | Sensitive to magnitude; unbounded. | Scoring in models that learn a bias term or when larger norms encode higher confidence (e.g., attention scores). |
| **Euclidean distance** | `‖a−b‖₂` | Measures absolute difference; sensitive to scale. | Clustering, nearest‑neighbor search with metric trees, anomaly detection where magnitude matters. |

*Choice matters:*  
- If embeddings are L2‑normalized (common in NLP), cosine ≈ dot product, so either works.  
- When magnitudes encode confidence or importance, use dot product or Euclidean.  
- For distance‑based indexing (KD‑trees), Euclidean is natural; for similarity scoring, cosine often yields better ranking quality.

**Edge cases**  
- Zero vectors → undefined cosine; fall back to a sentinel value.  
- Very high dimensional sparse embeddings can cause numerical instability in dot product; normalizing mitigates this.  
- When norms differ drastically (e.g., user vs item vectors), Euclidean may over‑penalize, so switch to cosine or scale the data.

**Optimize & communicate**  
Precompute and cache normalized embeddings to speed up cosine queries. For large corpora, use approximate nearest neighbor libraries that rely on dot product or Euclidean. Communicate clearly: “We’ll normalize vectors and compute cosine because we only care about semantic direction; if we need confidence scores, we’ll switch to a dot‑product based ranking.” This shows awareness of metric properties, computational trade‑offs, and practical deployment concerns.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
