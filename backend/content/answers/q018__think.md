---
qid: q018
question: "What is the exploration-exploitation trade-off in reinforcement learning?"
topic: "AI"
model: "Claude Code (authored)"
sources: []
---

1. **Clarify first.** Assume they want the concept, the tension, *and* concrete strategies. State that you'll define both terms, explain why balancing them matters, then list methods.
2. **Mental model.** Two competing drives: **exploit** = take the action you currently believe is best; **explore** = try uncertain actions to gather information that might reveal something better. The objective that adjudicates them is **cumulative long-term reward**.
3. **Reason step by step.** Define each. Then reason about the failure modes: pure exploitation risks locking into a **local optimum** (you never discover the better arm); pure exploration wastes reward on known-suboptimal actions. Balancing maximizes long-run return. List strategies: **ε-greedy** (random action with prob ε), **decaying ε** (explore early, exploit late), **UCB** (favor high-uncertainty actions), **Thompson sampling** (sample from a posterior over values).
4. **Traps to avoid.** Don't confuse this with hardware choices, network depth, or training-time-vs-data — those are distractors. Don't frame it as a one-time choice; it's ongoing across the agent's life.
5. **Sanity-check + delivery.** Ground it in the **multi-armed bandit**, the canonical setting — if your explanation fits a bandit, it's right. Deliver: "balancing trying new actions against using the best-known one to maximize long-term reward."
