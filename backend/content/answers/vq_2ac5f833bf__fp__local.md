---
qid: vq_2ac5f833bf__fp__local
question: when would you use each?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 165
output_tokens: 701
total_tokens: 866
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:28:59-05:00'
sources: []
---

### When to pick a particular AI technique

| Technique | Fundamental problem it solves | Why the solution is inevitable | Non‑obvious insight |
|-----------|------------------------------|--------------------------------|---------------------|
| **Rule‑based / symbolic AI** | *Exact, interpretable reasoning from a fixed knowledge base.* | If the domain has a small, well‑defined set of states and transitions (e.g., expert systems for medical diagnosis), a deterministic mapping from inputs to outputs is guaranteed by logical inference. The algorithm’s correctness follows directly from the truth table of the rules; no statistical uncertainty can derail it. | **Compositionality:** complex decisions can be built from simple, reusable sub‑rules, enabling modular updates without retraining. |
| **Statistical / supervised learning** | *Predict a function \(f(x)\) that maps high‑dimensional inputs to outputs when the mapping is unknown.* | When data are abundant and the relationship between input and output is too intricate for hand‑crafted rules, we approximate \(f\) by minimizing an empirical loss. The universal approximation theorem guarantees that, given enough capacity, a neural net can model virtually any continuous function. | **Implicit regularization:** even without explicit weight decay or sparsity constraints, stochastic gradient descent tends to find “simpler” solutions that generalize well. |
| **Unsupervised / representation learning** | *Discover latent structure in data when labels are missing.* | If the task is exploratory—clustering customers, compressing images—we learn a mapping \(g(x)\) that preserves neighbourhoods or reconstruction error. This reduces dimensionality and exposes features useful for downstream tasks. | **Metric learning:** learned embeddings can be used to define similarity even between unseen categories (zero‑shot). |
| **Reinforcement learning** | *Choose actions in an environment to maximize cumulative reward.* | When the problem is sequential, with delayed consequences (robot navigation, game playing), we model it as a Markov Decision Process and solve for the optimal policy via value iteration or policy gradients. The Bellman equation guarantees convergence under proper exploration. | **Exploration‑exploitation trade‑off:** the optimal balance depends on the *entropy* of the reward signal; sparse rewards require intrinsic motivation signals (e.g., curiosity). |
| **Hybrid / neuro‑symbolic** | *Combine symbolic reasoning with learned perception.* | When a system must interpret raw sensor data but also reason about high‑level concepts, we first embed the input into a latent space and then apply logical inference. This leverages both worlds: robustness to noise from learning, guarantees from symbols. | **Symbol grounding:** the mapping from symbols to embeddings can be learned end‑to‑end, enabling the system to refine its own ontology as it interacts with the environment. |

**Takeaway:**  
Choose a method that matches the *information structure* of your problem: deterministic logic for closed, interpretable domains; statistical learning when patterns are too rich for hand‑crafting; reinforcement learning when decisions accumulate over time; hybrids when you need both perception and reasoning. The deeper principle is that each AI paradigm trades off *model capacity*, *data availability*, and *guaranteed correctness* in a way dictated by the problem’s geometry, probability, and optimization landscape.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
