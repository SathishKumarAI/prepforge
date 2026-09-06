---
qid: ing_d2392ee9d3__fp__local
question: 'Explain: What’s Next — Introducing SWE-1.5: Our Fast Agent Model | Cognition'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 180
output_tokens: 421
total_tokens: 601
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:27:26-05:00'
sources: []
---

**What’s Next — Introducing SWE‑1.5: Our Fast Agent Model**

At its core, an *agent* must map a high‑dimensional sensory stream into a low‑dimensional action policy while preserving the ability to adapt online. Traditional deep RL pipelines achieve this via two costly stages: (1) a recurrent encoder that compresses observations and (2) a policy head trained with sample‑inefficient gradient descent. SWE‑1.5 re‑thinks both stages from an *information bottleneck* perspective.

1. **Self‑supervised world‑model**  
   Instead of learning a single joint representation, SWE‑1.5 learns a family of *contextual embeddings*. Each embedding is optimized to maximize mutual information with future states while minimizing redundancy across contexts. This yields a sparse, orthogonal basis that captures the essential dynamics without overfitting.

2. **Fast inference via amortized Bayesian updates**  
   The policy head is not trained from scratch; it is an *online Bayesian filter* that takes the contextual embedding and immediately produces action logits by updating a learned prior. Because the prior has been shaped by self‑supervised learning, the filter converges in milliseconds rather than epochs.

3. **Non‑obvious insight**  
   The key trick is to treat the *encoder’s output as a probability distribution over latent causes* instead of a deterministic vector. This turns the agent into a *probabilistic planner*: it can marginalize over multiple futures without re‑rolling the network, thereby achieving sample efficiency that rivals model‑based methods while keeping inference linear.

In short, SWE‑1.5 demonstrates that by marrying self‑supervised representation learning with amortized Bayesian reasoning, we can build agents that are both *fast* and *sample‑efficient*, pushing the frontier of real‑time cognition in machine learning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
