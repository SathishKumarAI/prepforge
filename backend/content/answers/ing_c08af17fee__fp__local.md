---
qid: ing_c08af17fee__fp__local
question: What are embeddings? Compare cosine similarity, dot product, and Euclidean
  distance - when does the choice matter?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 181
output_tokens: 624
total_tokens: 805
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:52:15-05:00'
sources: []
---

### From “what is it?” to “why it works”

An **embedding** is a deterministic map  
\[
f:\mathcal{X}\rightarrow \mathbb{R}^d,\qquad d\ll |\mathcal{X}|
\]
that preserves *semantically relevant* structure of the original space.  
The fundamental problem is to compress an object (word, image, graph node) into a vector so that
similar objects lie close together while dissimilar ones are far apart.  
This compression is achieved by training a neural network or factorising a similarity matrix; mathematically it solves a *low‑rank approximation* of the high‑dimensional relational data, which is an instance of **optimization under constraints** (e.g., minimizing reconstruction loss with orthogonality or norm regularisation).

### Measuring proximity

| Measure | Formula | Geometric intuition | Typical use |
|---------|---------|---------------------|-------------|
| **Cosine similarity** | \(\frac{x\!\cdot\!y}{\|x\|\|y\|}\) | Angle between vectors; ignores magnitude. | NLP, where frequency‑based embeddings are L2‑normalised. |
| **Dot product** | \(x\!\cdot\!y\) | Magnitude and direction both count; larger norms amplify similarity. | Attention mechanisms, contrastive losses that rely on *energy* scaling. |
| **Euclidean distance** | \(\|x-y\|\) | Straight‑line distance in space; sensitive to scale. | K‑means clustering, nearest‑neighbour search after L2‑normalisation. |

### When the choice matters

1. **Scale invariance** – if you normalise embeddings (e.g., word vectors), cosine and dot product become proportional; Euclidean becomes a monotone function of the angle, so all three rank pairs identically.  
2. **Magnitude semantics** – in models where norm encodes “confidence” or “importance” (e.g., attention logits), dot product is essential because it preserves that scaling.  
3. **Metric properties** – Euclidean distance satisfies triangle inequality and is convenient for metric‑indexing structures; cosine does not, which can hurt retrieval speed if you rely on tree indexes.

### Non‑obvious insight

The *choice of similarity* implicitly defines the *loss surface* during training. For instance, contrastive loss with dot product pushes vectors apart in magnitude as well as direction, leading to a “soft” cluster boundary that adapts to data density. Conversely, cosine‑based losses enforce hard angular separation regardless of norm, often yielding tighter clusters but potentially collapsing semantically distinct groups if their norms differ significantly. Recognising this subtle shift helps tune models for tasks like few‑shot learning or domain adaptation where the relative importance of magnitude versus direction changes dramatically.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
