---
qid: ing_3506a3c83b__fp__local
question: 'Explain: When to Use a Subagent — Tools vs. Subagents: Building Effective
  AI Agents Without Over-Engineering'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 182
output_tokens: 387
total_tokens: 569
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:57:19-05:00'
sources: []
---

**When to Use a Subagent – Tools vs. Subagents**

At the core of any autonomous system is *decision‑making under uncertainty*. A **tool** is a stateless function: given input \(x\), it returns output \(f(x)\). It solves a narrow subproblem but offers no memory or policy. A **subagent**, by contrast, embodies its own Markov decision process (MDP) with internal state \(\mathbf{s}\), reward \(r\), and transition dynamics. The fundamental question is: *does the subproblem require history‑dependent behavior?*  

1. **Stateless, deterministic tasks** (e.g., parsing a sentence or retrieving a fact) → tool.  
2. **Sequential, stochastic tasks** (e.g., negotiating, multi‑step planning) → subagent.

Why this dichotomy? Because a subagent’s policy \(\pi(a|\mathbf{s})\) can learn to trade off immediate versus long‑term reward—something a pure function cannot. In probabilistic terms, the tool collapses the joint distribution \(P(y|x)\) into a point estimate; the subagent models a full posterior over future states.

**Non‑obvious insight:** *Modularity is not only about separation of concerns but also about **information bottlenecks***. A well‑designed subagent should expose only the minimal sufficient statistics needed by its parent agent. Excessive state leakage forces the top‑level policy to re‑learn what the subagent already knows, leading to over‑engineering. Thus, a subagent is justified when it encapsulates *non‑trivial internal dynamics* and can be treated as an information‑theoretic black box that reduces dimensionality for the overall system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
