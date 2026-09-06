---
qid: ing_c42061b281__fp__local
question: 'Explain: Applying the Principles — Don\u2019t Build Multi-Agents | Cognition'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 178
output_tokens: 351
total_tokens: 529
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:59:07-05:00'
sources: []
---

**Why we should avoid “multi‑agent” architectures when modelling cognition**

The core problem in cognitive modeling is *predicting a single agent’s behaviour* given its internal state and environment.  
If we split the model into many sub‑agents, each with its own policy, we implicitly assume that the brain can be decomposed into independent modules that learn independently. This contradicts two deep principles:

1. **Information bottleneck** – The optimal representation of a task is the minimal sufficient statistic of the input for predicting the target. A single network naturally compresses irrelevant signals; multiple agents create redundant streams, increasing variance without reducing mutual information.

2. **Gradient flow and credit assignment** – Learning a global objective requires gradients that propagate from the loss to all parameters. In multi‑agent setups each sub‑policy receives only its own local signal, leading to *partial observability* of the true reward gradient. This induces bias (the “credit‑assignment problem”) and slows convergence.

A non‑obvious insight: when agents are coupled through a shared latent variable (e.g., a common hidden layer), they effectively perform **structured variational inference** over a joint distribution, yielding sharper posterior estimates than separate modules that ignore each other’s uncertainty. Thus, the “single‑agent” approach is not just simpler; it is mathematically optimal for inferring the underlying cognitive process.

In short, modelling cognition as one end‑to‑end system aligns with the information bottleneck, ensures proper credit assignment, and yields a principled variational approximation—something multi‑agent designs fail to guarantee.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
