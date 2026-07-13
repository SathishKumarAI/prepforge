---
qid: q020
question: "How does Q-learning work?"
topic: "AI"
model: "Claude Code (authored)"
sources: []
---

**Clarify** — I'll frame Q-learning as a model-free, off-policy, value-based RL algorithm, and confirm the interviewer wants the update rule, why it's off-policy, and convergence conditions.

**Approach** — Define the Q-function, give the Bellman update, explain exploration, then note limitations and the deep extension.

**Depth** — Q-learning learns an action-value function **Q(s,a)**—the expected cumulative discounted reward of taking action a in state s and acting optimally thereafter—without knowing the environment's transition or reward model. It updates a Q-table from experience via the rule: **Q(s,a) ← Q(s,a) + α[r + γ·maxₐ′ Q(s′,a′) − Q(s,a)]**, where α is the learning rate, γ the discount, r the observed reward, and the bracket is the TD error. It's **off-policy** because the target uses maxₐ′ Q (the greedy/optimal action) regardless of the action actually taken, which is chosen by an exploratory policy like ε-greedy. Given sufficient exploration of all state-action pairs and decaying α, Q converges to Q*, and the optimal policy is argmaxₐ Q(s,a).

**Edge cases** — Tabular Q-learning doesn't scale to large/continuous state spaces (the table explodes). It can overestimate values via the max operator (fixed by Double Q-learning). Insufficient exploration means non-convergence.

**Optimize & communicate** — For large spaces, **Deep Q-Networks (DQN)** approximate Q with a neural net, adding experience replay and a target network for stability. Narrating "bootstrap toward reward plus best next value, off-policy via the max" captures the essence interviewers listen for.
