---
qid: ing_7e9a0a850d__fp__local
question: 'Explain: Planning patterns — Agents And Tool Use'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 371
total_tokens: 539
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:34:50-05:00'
sources: []
---

**Planning Patterns – Agents & Tool Use**

At its core, an agent must *choose actions that maximize expected utility* given partial observability. This is a stochastic sequential decision problem:  
\[
\max_{\pi} \mathbb{E}\!\left[\sum_{t=0}^{T}\gamma^{t} R(s_t,a_t)\right]
\]  
where \(\pi\) maps observations to actions. Solving this directly is intractable, so *planning patterns* arise as structured approximations that decompose the problem.

1. **Hierarchical decomposition**: Split a task into sub‑tasks (macro‑actions). Each macro becomes an independent planning problem whose solution is reused—akin to dynamic programming’s principle of optimality but applied at different granularity levels.

2. **Tool abstraction**: Treat complex, domain‑specific operations as *black‑box primitives* with known pre/post conditions. The planner reasons about their effects without modeling internal mechanics, reducing state space dimensionality. This is a manifestation of the *information bottleneck*: we discard irrelevant details to focus on task‑relevant features.

3. **Predictive simulation**: Agents simulate future states using learned models; this turns planning into an optimization over simulated trajectories—essentially a Monte Carlo tree search guided by value estimates, grounded in probability theory.

A non‑obvious insight: *tool use can be seen as implicit curriculum learning*. By reusing tools, the agent automatically constructs a hierarchy of abstractions that progressively reduces variance in reward estimation, thereby accelerating convergence. This emergent curriculum is not engineered but arises from the planning pattern itself.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
