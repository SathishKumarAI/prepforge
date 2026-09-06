---
qid: ing_b906908d97__fp__local
question: 'Explain: Mixture of Experts (MoE) — Llm Internals'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 489
total_tokens: 663
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:37:25-05:00'
sources: []
---

**Mixture‑of‑Experts (MoE)** is a *conditional computation* framework that lets a large language model (LLM) use only a small fraction of its parameters for each token.  
From first principles the problem is:  

- **Scalability vs. capacity.** A vanilla transformer with \(N\) layers and width \(H\) has \(\Theta(NH^2)\) weights; inference cost scales linearly in \(NH^2\). To push \(H\) to 10 B+ parameters is expensive, yet the *effective* number of parameters needed per token is far lower because a sentence rarely requires every latent concept.  

- **Conditional entropy minimisation.** Let \(y_t\) be the target token at position \(t\), and let \(\mathcal{E}=\{e_1,\dots,e_K\}\) be K expert sub‑networks. We want a gating function \(g(x_t)\) that selects experts such that  
  \[
  H(y_t|x_t,g)=\min_{\text{gate}}\,H(y_t|x_t,g)+\lambda\,\mathbb{E}[|g(x_t)|]
  \]
  The first term forces the chosen experts to explain the token well; the second penalises activating many experts, yielding a sparse solution.  

- **Geometry of representation space.** Each expert learns a *local* manifold in hidden‑state space. Tokens that lie on similar manifolds (e.g., “physics” vs. “politics”) are routed together, reducing cross‑expert interference and improving gradient flow.

### Non‑obvious insight
Because experts are trained jointly with the gate under a *load‑balancing loss*, they evolve to be *mutually exclusive* in their support sets. This emergent orthogonality means that, even though the overall network is massively overparameterised, each token’s forward path is effectively a *low‑dimensional subspace trajectory*. Consequently, MoE models can achieve **order‑of‑magnitude speedups** without sacrificing perplexity—an outcome that would be impossible if experts were simply additive or shared weights indiscriminately.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
