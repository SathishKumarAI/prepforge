---
qid: q019
question: "What is a Markov Decision Process (MDP)?"
topic: "AI"
model: "Claude Code (authored)"
sources: []
---

**Situation** I was designing an auto-scaling controller for a cloud service that had to decide when to add or remove servers under changing traffic, and the team's initial rule-based thresholds were oscillating and wasting money.

**Task** I needed a principled framework to model these sequential scaling decisions under uncertainty.

**Action** I formalized it as a Markov Decision Process, which I described by its five components: states (current load and server count), actions (scale up, down, or hold), transition probabilities (how load evolves after an action), rewards (negative cost for latency violations and overspend), and a discount factor weighting future rewards. The key property I leaned on was the Markov assumption: the next state depends only on the current state and action, not the full history, which made the problem tractable. I solved the MDP with value iteration to derive an optimal scaling policy.

**Result** The learned policy cut SLA violations by 30% while trimming compute spend about 20% versus the static thresholds. The takeaway: framing a sequential decision problem as an MDP gives you the structure to actually compute an optimal policy.
