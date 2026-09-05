---
qid: ing_263dd656e0__fp__local
question: 'Explain: Glean Users — Glean Documentation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 514
total_tokens: 683
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:26:28-05:00'
sources: []
---

**Why “Glean Users” matters for ML**

At its core, any recommendation or search system must *infer intent* from sparse signals—clicks, dwell time, and occasional explicit feedback. The Glean framework turns this inference problem into a principled *user‑embedding* task: each user is mapped to a point in a latent space that captures all observable interactions.  

1. **Problem formulation**  
   Let \(u\) be a user, \(i\) an item, and \(r_{ui}\) the observed relevance (binary or graded). We seek a function \(\phi(u)\in\mathbb{R}^d\) such that the probability of relevance can be expressed as  
   \[
   P(r_{ui}=1|\phi(u),\psi(i)) = \sigma(\langle\phi(u),\psi(i)\rangle)
   \]
   where \(\psi(i)\) is an item embedding and \(\sigma\) the sigmoid. The loss over all observed pairs becomes a convex surrogate (e.g., logistic or BPR).  

2. **Why embeddings?**  
   Embeddings compress high‑dimensional interaction histories into a low‑dimensional manifold where Euclidean distance reflects similarity in preference space. This aligns with *metric learning*: we learn a transformation that preserves neighborhood structure induced by co‑clicks or co‑purchase patterns.

3. **Optimization insight**  
   Training \(\phi(u)\) is equivalent to minimizing a *pairwise ranking loss* over a bipartite graph of users and items. The solution converges to the principal components of the user–item interaction matrix—essentially a truncated SVD—but learned online via stochastic gradient descent, allowing real‑time updates.

4. **Non‑obvious takeaway**  
   Users are not static points; their embeddings drift as new interactions arrive. Glean’s *incremental update rule* treats each new click as a small perturbation that moves \(\phi(u)\) toward the item vector \(\psi(i)\). This continual refinement is akin to Bayesian updating of a posterior over latent preferences, ensuring that the model remains responsive without full retraining.

In short, Glean Users formalizes user modeling as an online metric learning problem, leveraging embeddings and stochastic optimization to capture intent in real time.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
