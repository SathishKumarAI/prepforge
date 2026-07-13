---
qid: q019
question: "What is a Markov Decision Process (MDP)?"
topic: "AI"
model: "Claude Code (authored)"
sources: []
---

**Clarify** — I'll frame the MDP as the formal mathematical foundation of reinforcement learning, and confirm the interviewer wants the tuple, the Markov property, and what "solving" it means.

**Approach** — Define the five components, state the Markov assumption, then explain the objective and how it's solved.

**Depth** — An MDP formalizes sequential decision-making under uncertainty as a tuple **(S, A, P, R, γ)**: S is the set of states, A the actions, P(s′|s,a) the transition probabilities (dynamics), R(s,a) the reward function, and γ ∈ [0,1) the discount factor weighting future rewards. The defining **Markov property** is that the next state depends only on the current state and action, not the full history—the present state is a sufficient statistic. The goal is to find a **policy** π(a|s) mapping states to actions that maximizes expected cumulative discounted reward (return). Solving an MDP means computing optimal value functions—V*(s) or Q*(s,a)—via the Bellman equations, using dynamic programming (value/policy iteration) when P and R are known.

**Edge cases** — When dynamics P/R are unknown, we use model-free RL (Q-learning) instead of DP. Partial observability breaks the Markov property—you need a POMDP with belief states. Continuous or huge state spaces require function approximation. γ=1 can make returns diverge in infinite-horizon tasks.

**Optimize & communicate** — I'd emphasize that the MDP is the *language* RL is written in—every RL algorithm assumes this structure. Naming the tuple and the Markov property crisply is the core signal.
