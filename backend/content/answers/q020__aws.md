---
qid: q020
question: "How does Q-learning work?"
topic: "AI"
model: "Claude Code (authored)"
sources: []
---

I'd explain Q-learning as a model-free, off-policy RL algorithm that learns the value Q(s,a), the expected cumulative reward of taking action a in state s and acting optimally after. It updates from experience with the temporal-difference rule: Q(s,a) moves toward the observed reward plus gamma times the best Q of the next state, scaled by a learning rate. It's off-policy because it learns the optimal policy while exploring with something like epsilon-greedy, and it provably converges under mild conditions. The optimal policy is just picking the highest-Q action per state.

To show **Learn and Be Curious** I'd cite a resource-scheduling prototype where I used tabular Q-learning; understanding the update let me tune the learning rate and epsilon decay to converge in far fewer episodes.

The trade-off I'd name honestly: tabular Q-learning doesn't scale, the table explodes with large or continuous state spaces, which is exactly why Deep Q-Networks approximate Q with a neural net, at the cost of stability, requiring tricks like experience replay and target networks. That scaling limit drove my design choices. On AWS I'd train with SageMaker RL and stream experience through Kinesis.

A bar-raiser listens for whether I can state the update rule and the off-policy distinction precisely, and whether I understand the tabular-to-deep scaling wall and its mitigations, not just the concept.
