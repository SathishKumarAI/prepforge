---
qid: ing_094ebfd404__fp__local
question: 'Explain: 1 Introduction — Scaling Latent Reasoning via Looped Language
  Models'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 524
total_tokens: 700
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:25:37-05:00'
sources: []
---

## Scaling Latent Reasoning with Looped Language Models

**Problem**: A language model (LM) can predict tokens well but struggles to *reason* about hidden variables that are not directly observable in the input—e.g., inferring a user’s intent or a world state from text alone. Traditional fine‑tuning injects supervision, yet it is expensive and brittle.

### Why loops help

1. **Latent Variable as a Self‑Generated Input**  
   Treat the hidden variable \(z\) (the “reason”) as an intermediate token sequence that the LM can generate. The model first produces a provisional \(z^\ast\), then conditions its next generation on both the original prompt and \(z^\ast\). This creates a *closed loop*: output ↔ input.

2. **Implicit Variational Inference**  
   By sampling \(z^\ast\) from the LM’s own distribution \(p_\theta(z|x)\) and re‑feeding it, we approximate maximizing the evidence lower bound (ELBO):
   \[
   \log p(x) \ge \mathbb{E}_{q(z)}[\log p_\theta(x,z)] - D_{\text{KL}}(q(z)||p_\theta(z))
   \]
   Here \(q\) is implicitly defined by the LM’s sampling. The loop enforces consistency between \(x\) and its inferred \(z\), akin to message passing in graphical models.

3. **Optimization as Energy Minimization**  
   Each iteration reduces an *energy* function
   \[
   E(z)= -\log p_\theta(x|z)-\log p_\theta(z),
   \]
   driving the LM toward a joint configuration where both prior and likelihood are high. This mirrors simulated annealing but uses autoregressive sampling instead of explicit gradients.

### Non‑obvious insight

The loop does **not** merely *re‑train* the LM; it transforms a deterministic decoder into a *probabilistic inference engine*. Because each pass refines \(z\) based on the model’s own predictions, errors are self‑corrected over iterations—much like how humans revise hypotheses when new evidence arrives. Thus scaling latent reasoning boils down to iteratively letting the model bootstrap its own explanatory variables until convergence.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
