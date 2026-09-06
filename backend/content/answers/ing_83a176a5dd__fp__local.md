---
qid: ing_83a176a5dd__fp__local
question: 'Explain: Selection Criteria — Embeddings And Vector Spaces'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 412
total_tokens: 581
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:45:11-05:00'
sources: []
---

### Why embeddings must live in a *vector space*

At its core, an embedding is a function  
\[
f:\mathcal{X}\rightarrow \mathbb{R}^d
\]
that maps discrete or structured objects \(x\in\mathcal{X}\) to points that can be compared by linear operations. The **selection criteria** for such a space stem from three intertwined principles:

| Principle | Why it matters | How it shapes the choice |
|-----------|----------------|--------------------------|
| **Optimization** | Gradient‑based learning requires differentiable geometry. | The space must support smooth, convex loss landscapes; Euclidean or cosine distances are analytically tractable. |
| **Information Preservation** | We want \(f\) to retain all relevant relational information in \(\mathcal{X}\). | The embedding should be *injective* on the equivalence classes defined by the task (e.g., synonyms mapped close together), so that no discriminative signal is lost. |
| **Probabilistic Interpretability** | Many models view similarity as a likelihood or posterior. | A vector space with an inner product naturally yields a Gaussian kernel, enabling Bayesian interpretations of distances and uncertainty. |

These criteria converge on the idea that *linear structure*—the ability to add vectors and scale them—is indispensable: it lets us interpolate between concepts (e.g., “king” − “man” + “woman” ≈ “queen”), compute gradients efficiently, and interpret similarity as a dot product.  

**Non‑obvious insight:** The *norm* of the embedding vector is not merely a scaling artifact; it encodes **confidence**. In probabilistic terms, a longer vector corresponds to higher certainty about its class assignment, while shorter vectors reflect ambiguity. This subtlety is often overlooked when embeddings are treated as mere feature maps.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
