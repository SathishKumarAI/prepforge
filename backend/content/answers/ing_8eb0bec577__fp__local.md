---
qid: ing_8eb0bec577__fp__local
question: Which distance metric should you use for embedding search - cosine, dot
  product, or Euclidean - and does the choice actually matter?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 185
output_tokens: 489
total_tokens: 674
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:08:29-05:00'
sources: []
---

**Why distance matters in vector search**

Embeddings are points in a high‑dimensional space whose *relative* positions encode semantic similarity.  
If we want two vectors *x*, *y* to be considered close when their inner products are large, the scoring function must reflect that geometry.  

1. **Dot product**  
   \[
   s_{\text{dot}}(x,y)=\langle x,y\rangle
   \]
   is linear in both norms.  If we first normalize every vector to unit length, dot product equals cosine similarity:
   \[
   s_{\text{cos}}(x,y)=\frac{\langle x,y\rangle}{\|x\|\|y\|}
   =s_{\text{dot}}\!\left(\frac{x}{\|x\|},\,\frac{y}{\|y\|}\right).
   \]
   Thus *cosine* is simply the dot product on a unit hypersphere.  It ignores absolute magnitude, focusing purely on direction.

2. **Euclidean distance**  
   \[
   d_{\text{Euc}}(x,y)=\|x-y\|
   \]
   expands to
   \[
   \|x\|^2+\|y\|^2-2\langle x,y\rangle .
   \]
   If all vectors have the same norm, minimizing Euclidean distance is equivalent to maximizing dot product (hence cosine).  In practice, embeddings often have varying norms; Euclidean then rewards both direction and magnitude.

**Does it matter?**  
Yes.  If your downstream task cares about *absolute* activation (e.g., similarity scores used as probabilities), Euclidean or raw dot product will differ from cosine.  For pure ranking, normalizing first and using cosine is usually best because it removes scale bias and aligns with the inner‑product geometry of many learning algorithms.

**Non‑obvious insight**  
When indexing for ANN, *cosine* can be implemented as a dot‑product index on normalized vectors—no extra cost.  Thus you get the benefits of both: efficient search (dot product) + scale invariance (cosine).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
