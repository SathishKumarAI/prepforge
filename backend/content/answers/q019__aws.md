---
qid: q019
question: "What is a Markov Decision Process (MDP)?"
topic: "AI"
model: "Claude Code (authored)"
sources: []
---

I'd define an MDP as the formal framework for sequential decision-making under uncertainty, a tuple of states, actions, transition probabilities, rewards, and a discount factor gamma. The Markov property is key: the next state depends only on the current state and action, not the full history. Solving an MDP means finding a policy mapping states to actions that maximizes expected discounted cumulative reward, which the Bellman equations characterize.

To show **Dive Deep** I'd anchor it in an inventory-replenishment problem I modeled. States were stock levels and demand signals, actions were reorder quantities, rewards traded off holding cost against stockout cost, and gamma weighted future value. Framing it as an MDP made the objective explicit and let me solve for a policy that cut stockouts 12% while holding inventory cost roughly flat.

The trade-off I'd name: the discount factor tunes how much we value the long term, and the Markov assumption is an approximation, so I engineered the state to include enough signal, recent demand trend, to make it approximately hold. Where the state space grew large, exact solving gave way to learned value functions.

A bar-raiser listens for whether I understand the formalism precisely, especially the Markov property and the role of gamma, and can translate a messy real problem into states, actions, and rewards with a measured outcome.
