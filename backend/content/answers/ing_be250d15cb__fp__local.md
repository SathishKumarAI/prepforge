---
qid: ing_be250d15cb__fp__local
question: When would you choose Q-learning over policy gradients, and vice versa?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 491
total_tokens: 664
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:47:48-05:00'
sources: []
---

### Why the choice matters

Q‑learning estimates *state–action values* \(Q(s,a)\) by bootstrapping from future rewards; policy gradients directly parameterise a stochastic policy \(\pi_\theta(a|s)\) and optimise expected return via gradient ascent.  
The fundamental problem each solves is different:

1. **Discrete, low‑dimensional action spaces**  
   * Q‑learning* can tabulate or approximate \(Q\) with small networks because the optimal policy is a simple argmax over a few actions.  
2. **Continuous or very large action spaces**  
   * Policy gradients* avoid enumerating actions; they sample from \(\pi_\theta\), making them tractable where Q‑learning would need an intractable maximisation step.

### When to pick each

| Scenario | Preferred method | Why |
|----------|------------------|-----|
| **Sparse, deterministic rewards** | Q‑learning | The Bellman backup propagates the reward signal efficiently; no variance from stochastic policy sampling. |
| **High‑variance or delayed rewards** | Policy gradients (REINFORCE/Actor–Critic) | They can incorporate baseline critics to reduce variance and handle long horizons better. |
| **Highly continuous control** | Policy gradients | Q‑learning would require solving a maximisation over a continuum, which is infeasible. |
| **Discrete combinatorial tasks** | Q‑learning (or DQN variants) | The discrete argmax is cheap; tabular or small‑network Q‑learning converges fast. |

### A non‑obvious insight

Both families can be viewed through the lens of *optimisation over a functional space*.  
Q‑learning implicitly optimises the Bellman operator, which is a contraction mapping guaranteeing convergence to the optimal \(Q^\*\).  
Policy gradients optimise the expected return directly; their updates are unbiased but not guaranteed to converge unless the policy class contains an optimal policy.  

**Therefore, if your action space is discrete and small, Q‑learning’s contraction property gives it a *theoretical safety net* that policy gradients lack. Conversely, in continuous domains where the contraction mapping would require solving a hard maximisation, policy gradients become the only practical choice.**

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
