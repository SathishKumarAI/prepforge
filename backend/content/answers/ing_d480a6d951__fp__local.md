---
qid: ing_d480a6d951__fp__local
question: 'Explain: Context rot — Agentic Engineering - by Neo Kim and Paul Hoekstra'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 368
total_tokens: 545
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:32:33-05:00'
sources: []
---

**Context Rot – the “Agentic Engineering” paradox**

When a machine‑learning agent learns to *solve* a task, it implicitly learns a *policy that is conditioned on the environment’s context*. In practice, that policy is usually encoded in a neural network whose weights are tuned to a narrow distribution of training contexts.  

1. **Fundamental problem** – The agent must act correctly *for every* context it may encounter at test time, but its learning objective (e.g., cross‑entropy or RL reward) only penalises mistakes on the sampled training set.  
2. **Why it breaks** – Contexts that differ even slightly from the training distribution cause a *drift* in the internal representation: hidden activations shift, the decision boundary rotates, and the policy’s output no longer matches the true optimal action. This phenomenon is *context rot*.  
3. **Deeper principle** – It is an instance of *distribution shift* under non‑identical conditional distributions \(P_\text{train}(y|x)\neq P_\text{test}(y|x)\). The agent’s parameters effectively overfit to the training context manifold, violating the assumption that the learned mapping generalizes.  
4. **Non‑obvious insight** – Most practitioners view regularization or data augmentation as fixes; however, *agentic engineering* shows that we must also enforce *context invariance* at the architecture level—e.g., by learning a latent “context vector” and conditioning the policy on it, or by using meta‑learning to adapt quickly to new contexts. Only then does the agent’s decision surface rotate with the true context rather than its training surrogate.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
