---
qid: ing_7a03bcb36d__fp__local
question: 'Explain: Autonomy — AI Agents Explained - by Sairam Sundaresan and Neo
  Kim'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 178
output_tokens: 371
total_tokens: 549
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:23:51-05:00'
sources: []
---

**Autonomy in AI Agents – a principled view**

At its core, an autonomous agent is a *policy* π that maps observations oₜ to actions aₜ without external commands. The fundamental problem it solves is *decision‑making under uncertainty*: the agent must anticipate future states s_{t+1} while only observing noisy oₜ. Autonomy therefore requires two intertwined properties:

1. **Self‑generated goals** – Instead of a fixed reward r(s,a) supplied by a human, the agent constructs an internal utility function U(·) from its own experience (e.g., intrinsic curiosity or Bayesian surprise). This aligns with *information‑theoretic* optimization: maximizing expected information gain about the environment yields behaviour that is both exploratory and goal‑directed.

2. **Policy adaptation** – The agent continually updates π via reinforcement learning or online planning, treating the world as a partially observable Markov decision process (POMDP). This dynamic update ensures *self‑correcting* behaviour: if an external cue changes, the agent re‑optimises without human intervention.

A non‑obvious insight is that autonomy emerges *not* from hard‑coding complex behaviours but from enforcing **separability of perception and action**. By decoupling sensory inference (generative models) from policy optimisation (value functions), an agent can reuse learned representations across tasks, dramatically reducing the sample complexity required for new goals.

In short, autonomous AI agents solve the problem of *self‑oriented, adaptive decision‑making* by treating goal formation and policy learning as two coupled optimisation problems grounded in probability and information theory.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
