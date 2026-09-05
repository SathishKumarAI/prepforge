---
qid: ing_273397edba__fp__local
question: 'Explain: Distance Metrics — Vector Databases'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 515
total_tokens: 682
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:28:53-05:00'
sources: []
---

**Distance metrics in vector databases: a principled view**

A vector database stores high‑dimensional embeddings \(\mathbf{x}\in\mathbb{R}^d\). The core problem is to answer “which vectors are most similar to query \(\mathbf{q}\)?”  
Similarity is formalized as a *distance* \(D(\mathbf{x},\mathbf{q})\); the smaller, the closer.  

1. **Why a distance?**  
   We need an ordering that satisfies reflexivity, symmetry and the triangle inequality (metric). These properties guarantee that “nearest” in Euclidean sense is also “closest” under any monotonic transform, enabling efficient indexing (e.g., KD‑trees, ball trees).

2. **From geometry to information theory**  
   The squared Euclidean distance equals twice the negative log‑likelihood of a Gaussian with isotropic covariance:
   \[
   D_2(\mathbf{x},\mathbf{q}) = 2\sigma^2\,\log\frac{p(\mathbf{x}\mid\mathbf{q})}{p_{\max}}
   \]
   Thus, minimizing distance is equivalent to maximizing likelihood under a simple probabilistic model. This connects the metric to *information* (KL divergence) and *optimization* (maximum‑likelihood).

3. **Common metrics**  
   - **Euclidean (\(L_2\))**: respects orthogonal axes; optimal for Gaussian assumptions.  
   - **Cosine**: normalizes magnitude, capturing angular similarity—essential when embeddings are unit‑normed (e.g., sentence transformers).  
   - **Manhattan (\(L_1\))**: more robust to outliers in sparse spaces.

4. **Non‑obvious insight**  
   For high dimensions, *most* vectors become equidistant under Euclidean distance (concentration of measure). Therefore, exact nearest‑neighbor search is NP‑hard; approximate schemes (e.g., locality‑sensitive hashing) exploit that the probability of collision decays exponentially with distance. The choice of metric directly shapes the hash family’s sensitivity.

In summary, distance metrics are not arbitrary knobs but arise from modeling assumptions about data distribution and geometric constraints, enabling tractable similarity search while preserving statistical meaning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
