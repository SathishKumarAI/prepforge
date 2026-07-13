---
qid: q018
question: "What is the exploration-exploitation trade-off in reinforcement learning?"
topic: "AI"
model: "Claude Code (authored)"
sources: []
---

**Clarify** — I'll frame this as the core dilemma an RL agent faces per decision, and confirm the interviewer wants the intuition plus concrete strategies to balance it.

**Approach** — Define both terms, explain the tension, then present standard balancing techniques, using the multi-armed bandit as the canonical example.

**Depth** — **Exploitation** means choosing the action currently believed to give the highest reward—cashing in known value. **Exploration** means trying less-certain actions to gather information that might reveal a better option. The trade-off: exploit too much and you get stuck in a local optimum, never discovering better actions; explore too much and you waste reward on known-inferior choices. The agent must balance immediate reward against long-term learning. Classic framing is the multi-armed bandit: which slot machine to pull when payoffs are unknown. Balancing strategies: **ε-greedy** (exploit the best action with probability 1−ε, pick randomly with probability ε), often with ε decayed over time; **softmax/Boltzmann** sampling by value; **optimism under uncertainty** (initialize high, or UCB—upper confidence bounds that add an exploration bonus for less-tried actions); and Thompson sampling (Bayesian posterior sampling).

**Edge cases** — Non-stationary environments require continual exploration since optimal actions drift. Sparse rewards make naive exploration fail; you may need intrinsic-motivation/curiosity rewards. Costly or irreversible actions make exploration risky.

**Optimize & communicate** — I'd tie strategy choice to the environment: decayed ε-greedy for simplicity, UCB/Thompson for sample efficiency. Narrating the "local optimum vs. wasted reward" tension is the key signal.
