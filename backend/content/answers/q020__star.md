---
qid: q020
question: "How does Q-learning work?"
topic: "AI"
model: "Claude Code (authored)"
sources: []
---

**Situation** I was prototyping a control agent for a warehouse robot that had to learn efficient pick routes, but we had no accurate model of how the environment's transitions worked, so planning-based methods were off the table.

**Task** I needed an agent that could learn a good policy purely from trial-and-error interaction, without a transition model.

**Action** I chose Q-learning, a model-free reinforcement learning algorithm that learns the value of taking an action in a state, the Q-value. I initialized a Q-table and had the agent update it after each step using the Bellman update: Q(s,a) moves toward the reward plus the discounted maximum Q-value of the next state, scaled by a learning rate. Because it's off-policy, it learns the optimal action-values while still exploring via epsilon-greedy. I tuned the learning rate and discount factor and decayed exploration as it converged.

**Result** In simulation the agent converged to routes about 25% shorter than our hand-coded heuristic after roughly 50k episodes. The insight: Q-learning learns optimal behavior directly from experience, bootstrapping its estimates without ever needing a model of the world.
