---
qid: ing_888b3a5a25__fp__local
question: 'Explain: Model Selection Criteria — Embedding Models'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 586
total_tokens: 754
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:55:10-05:00'
sources: []
---

**Model‑selection for embeddings: a first‑principles view**

At its core, an embedding learns a map  
\(\phi:\mathcal{X}\rightarrow \mathbb{R}^d\) that preserves *semantic* structure of data.  
The learning objective is usually a **contrastive loss** \(L(\phi)\), e.g.

\[
L = \sum_{i}\Bigl[\log\bigl(1+e^{-\langle\phi(x_i),\phi(y_i^+)\rangle+\langle\phi(x_i),\phi(y_i^-)\rangle}\bigr)\Bigr].
\]

The *model selection problem* is to choose hyper‑parameters \(\theta\) (embedding dimension, architecture depth, temperature, etc.) that minimise the **generalised risk**

\[
R(\theta)=\mathbb{E}_{(x,y)}[\,\ell_{\text{task}}(\phi_\theta(x),y)\,].
\]

Because we cannot evaluate \(R\) on unseen data directly, we approximate it with a validation loss \(L_{\text{val}}\). However, \(L_{\text{val}}\) is noisy and over‑fits to the validation set if \(\phi_\theta\) has high capacity.  

Hence we regularise via **information‑theoretic penalties** that quantify how much *structure* the embedding captures beyond random noise:

| Criterion | Formulation | Rationale |
|-----------|-------------|-----------|
| **AIC (Akaike)** | \(L_{\text{val}} + 2k\) | Penalises number of free parameters \(k\); derived from Kullback‑Leibler divergence between true and estimated models. |
| **BIC (Bayesian)** | \(L_{\text{val}} + \tfrac{k}{2}\log N\) | Adds a stronger penalty, justified by Bayesian model evidence with uniform priors. |
| **MDL (Minimum Description Length)** | \(L_{\text{val}} + \text{code length}(\theta)\) | Embedding choice is preferred if it yields the shortest overall description of data and parameters. |

**Non‑obvious insight:**  
For embeddings, *parameter count* \(k\) underestimates capacity because two distinct parameterisations can induce identical manifolds (e.g., orthogonal rotations). The penalty should instead be based on **effective degrees of freedom**, estimated via the Hessian trace or Fisher information. This captures how much a perturbation in \(\theta\) actually changes pairwise similarities, providing a tighter bound on generalisation than raw parameter counts.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
