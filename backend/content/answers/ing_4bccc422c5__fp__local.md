---
qid: ing_4bccc422c5__fp__local
question: 'Explain: What they emphasise — Harvey'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 524
total_tokens: 691
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:46:25-05:00'
sources: []
---

### What Harvey Emphasizes About AI  

Harvey’s central thesis is that **AI should be seen not as a collection of clever tricks but as a disciplined exercise in *probabilistic optimization***.  
1. **Fundamental problem** – an intelligent agent must infer the hidden state of the world from noisy observations and then choose actions that maximize expected reward.  
2. **Why it must work this way** – any policy that consistently improves performance can be framed as minimizing a loss function over a probability distribution; the law of large numbers guarantees convergence only when we respect the underlying stochasticity.  
3. **Deeper principle** – this is precisely the framework of *Bayesian decision theory*: we trade off prior beliefs, likelihoods, and utilities to produce optimal decisions. Geometry enters via the manifold hypothesis: high‑dimensional data lie on low‑dimensional manifolds; learning amounts to finding smooth maps that preserve probabilistic structure.  
4. **Non‑obvious insight** – many practitioners focus on *accuracy* alone, ignoring the *shape* of the posterior. Harvey shows that a model’s ability to capture uncertainty (e.g., via variational bounds or ensemble diversity) is often a stronger predictor of real‑world robustness than raw point estimates.  

In short, Harvey argues that AI systems must be built as **probabilistic optimizers over latent geometries**, and only then can we guarantee both theoretical soundness and practical reliability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
