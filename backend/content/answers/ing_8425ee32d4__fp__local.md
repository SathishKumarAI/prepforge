---
qid: ing_8425ee32d4__fp__local
question: What are agents? — Building Effective AI Agents \\ Anthropic
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 408
total_tokens: 579
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:46:15-05:00'
sources: []
---

**Agents in AI: a principled view**

At its core an *agent* is a system that maps observations to actions in order to maximize some objective over time.  
Why must we formalise it this way? Because the world presents stochastic, partially observable dynamics \(p(s',o'|s,a)\). An agent cannot directly solve for optimal future trajectories without a decision rule; otherwise it would need an oracle that knows every possible state‑action sequence—an infeasible assumption.  

Thus we introduce **policy functions** \(\pi(a|o_{1:t})\), which, by the *Markov Decision Process* (MDP) principle, reduce dependence on full history to the current belief over states. The agent’s objective becomes a value function \(V^\pi(s)=\mathbb{E}_\pi[\sum_t \gamma^t r_t|s]\). Optimising this value is a convex functional of \(\pi\), linking agents directly to *convex optimisation* and *information theory*: the policy that maximises expected reward while minimising Kullback‑Leibler divergence from a prior embodies the principle of *maximum entropy reinforcement learning*.  

A non‑obvious insight: **agents are not merely controllers; they are statistical inference engines**. Their actions serve to reduce uncertainty about future rewards, so exploration is a form of *active learning* rather than random noise. This perspective explains why curiosity‑driven agents, which explicitly minimise predictive entropy, outperform purely reward‑maximising counterparts in sparse‑reward settings.  

In short, an AI agent solves the problem of decision making under uncertainty by casting it as an optimisation over policies that balance expected return and information gain—an elegant synthesis of geometry (policy manifolds), probability (belief updates), and optimization (value maximisation).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
