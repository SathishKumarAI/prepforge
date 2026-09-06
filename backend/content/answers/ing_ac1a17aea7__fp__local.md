---
qid: ing_ac1a17aea7__fp__local
question: 'Explain: Reinforcement Learning From Human Feedback - DeepLearning.AI'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 362
total_tokens: 534
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:11:01-05:00'
sources: []
---

**Reinforcement Learning From Human Feedback (RLHF)**

At its core, RLHF solves the *inverse preference learning* problem: we want a policy that maximises an objective we cannot write down analytically but can observe through human judgments. In standard reinforcement learning, rewards are hand‑crafted; here they are *implicitly* defined by humans evaluating partial outputs (e.g., language model generations).  

The method unfolds in three steps:

1. **Collect demonstrations** – humans rank or rate many candidate behaviours.
2. **Train a reward model** – treat the ranking data as noisy labels and fit a neural network that predicts human preference scores. This step turns subjective feedback into a differentiable surrogate reward function, effectively embedding a *human utility* landscape in parameter space.
3. **Optimize the policy** – use any off‑policy RL algorithm (e.g., PPO) to maximise expected reward under the learned model. The policy is updated until its outputs receive higher predicted human scores.

Why this works: the reward model acts as an *information bottleneck*, compressing high‑dimensional human preference into a scalar that respects the geometry of the task space. By iteratively refining both model and policy, we perform gradient descent on a proxy objective that converges to the true (unknown) human utility, provided the reward model is sufficiently expressive.

**Non‑obvious insight:** The *error* in the reward model can be leveraged as an exploration signal. If the model assigns low confidence to a state–action pair, the RL agent can deliberately visit it, reducing uncertainty and accelerating convergence—an elegant synergy between learning a utility function and exploring its domain.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
