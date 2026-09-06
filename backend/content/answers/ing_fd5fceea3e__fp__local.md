---
qid: ing_fd5fceea3e__fp__local
question: 'Explain: Visual Reasoning — Limit of RLVR'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 383
total_tokens: 553
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:58:32-05:00'
sources: []
---

**Why RLVR hits a ceiling in visual reasoning**

At its core, RLVR (Reinforcement‑Learning for Vision‑Language) turns an image into a state and a question into a policy that selects actions (e.g., “look at the red cube”). The agent’s reward is binary: correct answer = 1, else 0. This formulation reduces reasoning to *policy optimization* over a discrete action space.

1. **Sparse rewards** – Correctness is a single‑step event; intermediate reasoning steps receive no signal. Gradient estimates become high‑variance and the policy collapses to memorising frequent patterns rather than forming causal chains.

2. **Deterministic state representation** – The visual encoder produces a fixed embedding. Any ambiguity (occlusion, perspective) is baked into that vector, so the policy cannot recover lost information unless the reward explicitly guides it.

3. **Implicit inductive bias** – RLVR relies on the agent to discover compositional structures (e.g., “if X then Y”) through exploration alone. This is an ill‑posed inverse problem: many policies explain the same sparse reward, leading to overfitting and poor generalisation.

*Non‑obvious insight*: The bottleneck is not the visual encoder but the *reward design*. A dense, structured reward that mirrors intermediate reasoning steps (e.g., partial correctness of sub‑questions) turns the hard combinatorial optimisation into a series of tractable supervised signals. In practice, augmenting RLVR with curriculum‑based shaping or auxiliary tasks unlocks far richer visual reasoning than pure sparse‑reward learning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
