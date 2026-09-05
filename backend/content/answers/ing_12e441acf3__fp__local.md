---
qid: ing_12e441acf3__fp__local
question: How hard is the Anthropic FDE company values round?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 426
total_tokens: 598
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:45:49-05:00'
sources: []
---

### Why the *Anthropic FDE* (Foundations‑Design‑Ethics) round feels “hard”

1. **Problem statement** – The interview asks you to design a safety‑first AI system that respects human values while maximizing performance.  
2. **Why it must be hard** –  
   * **Optimization under constraints**: You’re optimizing a utility function \(U\) (task success) subject to a *value‑alignment* constraint \(V(x)\leq \epsilon\). The feasible set is non‑convex and only partially observable, so the problem resembles constrained reinforcement learning with unknown dynamics.  
   * **Information bottleneck**: You must infer latent human preferences from sparse signals (feedback, demonstrations). This is a classic Bayesian inference problem where the posterior over values can be multimodal; a poor estimate leads to catastrophic failures.  
3. **Deeper principle** – The round tests your grasp of *robust optimization*: designing policies that perform well across all plausible value distributions \(P(V)\). It’s essentially a min‑max game: \(\min_{V\sim P} \max_{\pi} U(\pi, V)\).

#### Non‑obvious insight  
Most candidates treat the ethics part as an add‑on; the trick is to **treat values as a *prior* over reward functions** and update it online. The interviewers look for a formulation where you explicitly write the posterior \(P(V|data)\) and show how your policy’s value estimates evolve—this demonstrates both mathematical maturity and practical foresight.

> **Bottom line:** Expect a 60‑70 % success rate if you can frame the problem as constrained Bayesian RL and articulate an online value‑learning strategy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
