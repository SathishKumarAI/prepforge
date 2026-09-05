---
qid: ing_12d5adff6c__fp__local
question: 'Explain: Cross-Encoder Architecture — Embeddings And Vector Spaces'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 502
total_tokens: 673
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:45:43-05:00'
sources: []
---

**Cross‑Encoder: A Geometry‑Driven View**

The core problem of a cross‑encoder is *jointly scoring* two sequences (e.g., query + document) without any intermediate “pre‑computed” embeddings.  
If we let \(x\) and \(y\) be tokenised inputs, the model learns a mapping
\[
f_\theta : \mathcal{V}^m\times\mathcal{V}^n \rightarrow \mathbb{R}
\]
directly to a relevance score.  This is equivalent to embedding the *pair* into a single vector space:
\[
z = g_\phi(x,y) \in \mathbb{R}^d,\qquad s=f(z)=w^\top z + b.
\]

**Why this works:**  
1. **Joint geometry:** By feeding \(x\) and \(y\) together, the transformer learns a *joint* latent space where proximity directly encodes relevance.  The attention layers mix tokens from both sides, creating cross‑attention patterns that capture fine‑grained interactions (e.g., word overlap, paraphrase).  
2. **Optimization principle:** Training with a contrastive or pairwise loss forces the model to align relevant pairs close to each other and push irrelevant ones apart in this space—exactly what margin‑based objectives like triplet loss formalise.  The embedding is *task‑specific*, not generic as in pre‑trained sentence encoders.  
3. **Information bottleneck:** Unlike dual‑encoders that compress each input independently, the cross‑encoder’s shared representation preserves all mutual information between \(x\) and \(y\), enabling higher precision at the cost of inference speed.

**Non‑obvious insight:**  
Because the pair is embedded as a whole, *symmetry* in the scoring function is not guaranteed.  The model can learn that “A → B” differs from “B → A” by assigning asymmetric attention weights—something dual encoders cannot capture.  This subtle asymmetry explains why cross‑encoders excel on tasks where directionality matters (e.g., question answering vs. retrieval).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
